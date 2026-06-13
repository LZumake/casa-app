// ============================================
// CATEGORÍAS DINÁMICAS DE LA LISTA DE COMPRA
// ============================================
const CATEGORIAS_DEFAULT = [
    { id: 'fruteria', nombre: 'Frutería', color: 'fruteria', icono: '🍎' },
    { id: 'lacteos', nombre: 'Lácteos', color: 'lacteos', icono: '🥛' },
    { id: 'limpieza', nombre: 'Limpieza', color: 'limpieza', icono: '🧼' },
    { id: 'carniceria', nombre: 'Carnicería', color: 'carniceria', icono: '🥩' },
    { id: 'panaderia', nombre: 'Panadería', color: 'panaderia', icono: '🥖' },
    { id: 'bebidas', nombre: 'Bebidas', color: 'bebidas', icono: '🥤' },
    { id: 'congelados', nombre: 'Congelados', color: 'congelados', icono: '🧊' },
    { id: 'snacks', nombre: 'Snacks', color: 'snacks', icono: '🍿' }
];

// Cargar categorías desde localStorage o usar las por defecto
function cargarCategorias() {
    const guardadas = localStorage.getItem('ksap_categorias');
    if (guardadas) {
        try {
            return JSON.parse(guardadas);
        } catch (e) {
            console.error('Error al cargar categorías:', e);
        }
    }
    return [...CATEGORIAS_DEFAULT];
}

function guardarCategorias(categorias) {
    localStorage.setItem('ksap_categorias', JSON.stringify(categorias));
}

// Variable global de categorías
let categorias = cargarCategorias();

// ============================================
// BUSCADOR CON AUTOCOMPLETADO - OPEN FOOD FACTS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('product-search');
    const suggestionsBox = document.getElementById('search-suggestions');
    let debounceTimer;

    // ============================================
    // LÓGICA DEL MODAL
    // ============================================
    const modalOverlay = document.getElementById('modal-add-product');
    const modalClose = document.getElementById('modal-close');
    const modalCancel = document.getElementById('modal-cancel');
    const modalConfirm = document.getElementById('modal-confirm');
    const modalProductName = document.getElementById('modal-product-name');
    const modalQuantity = document.getElementById('modal-quantity');
    const modalUnit = document.getElementById('modal-unit');
    const modalBuyer = document.getElementById('modal-buyer');

    let productoTemporal = null;

    function abrirModal(nombre, categoria) {
        productoTemporal = { nombre, categoria };
        modalProductName.textContent = nombre;
        modalQuantity.value = 1;
        modalUnit.value = 'ud';
        modalBuyer.value = 'Tú';
        modalOverlay.classList.add('active');
    }

    function cerrarModal() {
        modalOverlay.classList.remove('active');
        productoTemporal = null;
    }

    if (modalClose) modalClose.addEventListener('click', cerrarModal);
    if (modalCancel) modalCancel.addEventListener('click', cerrarModal);
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) cerrarModal();
        });
    }

    if (modalConfirm) {
        modalConfirm.addEventListener('click', function() {
            if (productoTemporal) {
                añadirProductoAlaLista(
                    productoTemporal.nombre, 
                    productoTemporal.categoria,
                    modalQuantity.value,
                    modalUnit.value,
                    modalBuyer.value
                );
                cerrarModal();
            }
        });
    }

    // ============================================
    // RENDERIZAR CATEGORÍAS DINÁMICAMENTE
    // ============================================
    function renderizarCategorias() {
        const shoppingSection = document.querySelector('.shopping-section');
        if (!shoppingSection) return;
        
        shoppingSection.innerHTML = '';
        
        categorias.forEach(cat => {
            const categoriaDiv = document.createElement('div');
            categoriaDiv.className = 'shopping-category';
            categoriaDiv.dataset.categoriaId = cat.id;
            
            categoriaDiv.innerHTML = `
                <div class="category-header ${cat.color}">
                    <span class="category-icon">${cat.icono}</span> ${cat.nombre}
                </div>
                <div class="category-items" data-categoria="${cat.id}">
                </div>
            `;
            
            shoppingSection.appendChild(categoriaDiv);
        });
        
        console.log(`✅ Renderizadas ${categorias.length} categorías`);
    }

    // Renderizar categorías al cargar
    renderizarCategorias();

    // ============================================
    // AÑADIR NUEVA CATEGORÍA
    // ============================================
    function añadirNuevaCategoria(nombre, icono = '') {
        const id = nombre.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]/g, '_')
            .replace(/_+/g, '_')
            .trim();
        
        if (categorias.find(c => c.id === id)) {
            alert(`La categoría "${nombre}" ya existe`);
            return null;
        }
        
        const nuevaCategoria = {
            id: id,
            nombre: nombre,
            color: id,
            icono: icono
        };
        
        categorias.push(nuevaCategoria);
        guardarCategorias(categorias);
        renderizarCategorias();
        
        console.log(`✅ Nueva categoría añadida: ${nombre} (${id})`);
        return nuevaCategoria;
    }

    // ============================================
    // EVENT LISTENERS DEL BUSCADOR
    // ============================================
    if (searchInput && suggestionsBox) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.trim();
            clearTimeout(debounceTimer);
            
            if (query.length < 2) {
                suggestionsBox.classList.remove('active');
                return;
            }
            
            debounceTimer = setTimeout(() => {
                buscarProductos(query);
            }, 300);
        });

        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
                suggestionsBox.classList.remove('active');
            }
        });
    }

    // ============================================
    // FUNCIÓN PRINCIPAL: BUSCAR PRODUCTOS (API REAL)
    // ============================================
    async function buscarProductos(query) {
        try {
            suggestionsBox.innerHTML = '<div class="search-loading">Buscando productos...</div>';
            suggestionsBox.classList.add('active');

            const response = await fetch(
                `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=10&lc=es`
            );
            
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const data = await response.json();
            mostrarSugerencias(data.products);

        } catch (error) {
            console.error('❌ Error al buscar productos:', error);
            suggestionsBox.innerHTML = `
                <div class="search-no-results">
                    ⚠️ Error al buscar. Verifica tu conexión e intenta de nuevo.
                </div>
            `;
        }
    }

    // ============================================
    // MOSTRAR SUGERENCIAS
    // ============================================
    function mostrarSugerencias(productos) {
        if (!productos || productos.length === 0) {
            suggestionsBox.innerHTML = '<div class="search-no-results">No se encontraron productos</div>';
            return;
        }

        suggestionsBox.innerHTML = '';

        productos.forEach(producto => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            
            const nombre = producto.product_name || 'Producto sin nombre';
            const marca = producto.brands || '';
            const categoria = producto.categories_tags?.[0]?.replace('en:', '') || 'general';

            item.innerHTML = `
                <span class="product-name">${highlightText(nombre, searchInput.value)}</span>
                ${marca ? `<span class="product-brand">${marca}</span>` : ''}
                <span class="product-category">${categoria}</span>
            `;

            item.addEventListener('click', function() {
                console.log('✅ Producto seleccionado:', nombre, 'Categoría:', categoria);
                abrirModal(nombre, categoria);
                suggestionsBox.classList.remove('active');
                searchInput.value = '';
            });

            suggestionsBox.appendChild(item);
        });
    }

    // ============================================
    // RESALTAR TEXTO BUSCADO
    // ============================================
    function highlightText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    }

    // ============================================
    // AÑADIR PRODUCTO A LA LISTA
    // ============================================
    function añadirProductoAlaLista(nombre, categoria, cantidad = 1, unidad = 'ud', comprador = 'Tú') {
        const seccion = mapearCategoria(categoria);
        const seccionElement = document.querySelector(`.category-header.${seccion}`);
        
        if (!seccionElement) {
            console.error('❌ No se encontró la sección:', seccion);
            alert(`No se encontró la sección "${seccion}". El producto se añadirá a Frutería.`);
            const fallback = document.querySelector('.category-header.fruteria').parentElement;
            crearItemHTML(nombre, cantidad, unidad, comprador, fallback);
            return;
        }

        const contenedorSeccion = seccionElement.parentElement;
        crearItemHTML(nombre, cantidad, unidad, comprador, contenedorSeccion);
        
        console.log(`✅ Producto "${nombre}" (${cantidad} ${unidad}) añadido a ${seccion} para ${comprador}`);
    }

    function crearItemHTML(nombre, cantidad, unidad, comprador, contenedor) {
        const nuevoItem = document.createElement('div');
        nuevoItem.className = 'shopping-item';
        nuevoItem.innerHTML = `
            <div class="item-left">
                <input type="checkbox" class="item-checkbox">
                <span class="item-name">${nombre}</span>
            </div>
            <div class="item-right">
                <span class="item-quantity">${cantidad} ${unidad}</span>
                <span class="item-buyer">${comprador}</span>
            </div>
        `;
        
        contenedor.appendChild(nuevoItem);
        
        const checkbox = nuevoItem.querySelector('.item-checkbox');
        checkbox.addEventListener('change', function() {
            const tarjeta = this.closest('.shopping-item');
            tarjeta.classList.toggle('comprado', this.checked);
        });
    }

    // ============================================
    // MAPEAR CATEGORÍAS DE LA API A CATEGORÍAS LOCALES
    // ============================================
    function mapearCategoria(categoriaApi) {
        if (!categoriaApi) return categorias[0]?.id || 'fruteria';
        
        const categoria = categoriaApi.toLowerCase();
        
        // Buscar coincidencia en categorías existentes
        for (const cat of categorias) {
            const catId = cat.id.toLowerCase();
            const catNombre = cat.nombre.toLowerCase();
            
            if (categoria.includes(catId) || categoria.includes(catNombre)) {
                return cat.id;
            }
        }
        
        // Mapeos específicos de la API
        if (categoria.includes('dairies') || categoria.includes('milk') || categoria.includes('yogurt') || categoria.includes('cheese')) {
            return 'lacteos';
        } else if (categoria.includes('fruit') || categoria.includes('vegetable') || categoria.includes('apple') || categoria.includes('banana')) {
            return 'fruteria';
        } else if (categoria.includes('meat') || categoria.includes('fish') || categoria.includes('poultry')) {
            return 'carniceria';
        } else if (categoria.includes('clean') || categoria.includes('hygiene') || categoria.includes('detergent')) {
            return 'limpieza';
        } else if (categoria.includes('bread') || categoria.includes('bakery')) {
            return 'panaderia';
        } else if (categoria.includes('beverage') || categoria.includes('drink')) {
            return 'bebidas';
        } else if (categoria.includes('frozen')) {
            return 'congelados';
        } else if (categoria.includes('snack') || categoria.includes('chip')) {
            return 'snacks';
        }
        
        return categorias[0]?.id || 'fruteria';
    }

}); // ← Cierre del DOMContentLoaded