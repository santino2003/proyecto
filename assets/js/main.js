


const items = document.getElementById('contenedorItems');
const template = document.getElementById('templateCard').content
const fragment = document.createDocumentFragment();

const btnCarrito = document.querySelector('.carritoContenedorItems');
const containerCartProductos = document.querySelector(
	'.contendorCarritoProductos'
);


document.addEventListener('DOMContentLoaded', () => {
	fetchData()
})


const fetchData = async() => {
	try {
		const respuesta = await fetch('api.json')
		const datos = await respuesta.json()
		console.log(datos)
		copiarEnHtml(datos)
	} catch (error) {
		console.log(error)
	}
}

const copiarEnHtml = datos => {
	datos.forEach(producto => {
		
		template.querySelector('h6').textContent = producto.title
		template.querySelector('p').textContent = producto.precio
		template.querySelector('img').setAttribute("src",producto.url)
		template.querySelector('input').setAttribute("value",producto.cantidad)
		
		const clone = template.cloneNode(true)
		
		fragment.appendChild(clone)
		
	})
	items.appendChild(fragment)
}

/*--------------------------*/
btnCarrito.addEventListener('click', () => {
	containerCartProductos.classList.toggle('carritoOcultar');
});

/* ========================= */
const carritoInfo = document.querySelector('.cart-product');
const filaProducto = document.querySelector('.filaProducto');


const listaProducto = document.querySelector('.contenedorItems');

let todosLosProductos = [];

const valorTotal = document.querySelector('.total-pagar');

const contadorProductos = document.querySelector('#contador-productos');

const carritoVacio = document.querySelector('.carritoVacio');
const carritoTotal = document.querySelector('.totalCarrito');

listaProducto.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const producto = e.target.parentElement;
		
		const infoProducto = {
			quantity: 1,
			title: producto.querySelector('h6').textContent,
			price: producto.querySelector('p').textContent,
			cantidad: producto.querySelector('input').value
		};

		const exits = todosLosProductos.some(
			producto => producto.title === infoProducto.title
		);

		if (exits) {
			const productos = todosLosProductos.map(product => {
				
				if (product.title === infoProducto.title) {
					if (product.cantidad > 0){
						product.cantidad --;
						console.log(product.cantidad)
						product.quantity++;
						
					}
					else{
						Swal.fire('¡Lo sentimos!', 'En este momento no contamos con stock disponible', 'error');
					}
					return product;
					
				} else {
					return product;
				}
			});
			todosLosProductos = [...productos];
		} else {
			todosLosProductos = [...todosLosProductos, infoProducto];
		}

		mostrarHTML();
	}
});

filaProducto.addEventListener('click', e => {
	if (e.target.classList.contains('cerrarIcono')) {
		Swal.fire({
			title: 'Estas seguro?',
			text: "Vas a eliminar todos los productos seleccionados!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si,borrar',
			cancelButtonText: 'Cancelar'
		  }).then((result) => {
			if (result.isConfirmed) {
				const producto = e.target.parentElement;
				const title = producto.querySelector('p').textContent;
				todosLosProductos = todosLosProductos.filter(
					producto => producto.title !== title
				);
				console.log(todosLosProductos);
				Swal.fire(
					'Borrado!',
					'Los productos han sido eliminados',
					'success'
				)
				
				mostrarHTML();
				
			}
		  })

	}
});

// Funcion para mostrar  HTML
const mostrarHTML = () => {
	if (!todosLosProductos.length) {
		carritoVacio.classList.remove('hidden');
		filaProducto.classList.add('hidden');
		carritoTotal.classList.add('hidden');
	} else {
		carritoVacio.classList.add('hidden');
		filaProducto.classList.remove('hidden');
		carritoTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	filaProducto.innerHTML = '';

	let total = 0;
	let totalDeProductos = 0;

	todosLosProductos.forEach(producto => {
		const contenedorProductos = document.createElement('div');
		contenedorProductos.classList.add('cart-product');

		contenedorProductos.innerHTML = `
            <div class="infoCarritoProducto">
                <span class="cantidad-producto-carrito">${producto.quantity}</span>
                <p class="titulo-producto-carrito">${producto.title}</p>
                <span class="precio-producto-carrito">${producto.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="cerrarIcono"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		filaProducto.append(contenedorProductos);

		total =
			total + parseInt(producto.quantity * producto.price.slice(1));
		totalDeProductos = totalDeProductos + producto.quantity;
	});

	valorTotal.innerText = `$${total}`;
	contadorProductos.innerText = totalDeProductos;
};
