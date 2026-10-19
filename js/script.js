const categoryCatalog = {
  ofertas: [
    { name: "Abbey Road - The Beatles - Vinilo", image: "../img/ofertas/abbey road.jpg", price: "$35.000 - 30%Off" },
    { name: "Bocanada - Gustavo Cerati - Vinilo", image: "../img/ofertas/bocanada.jpg", price: "$32.000 - 20%Off" },
    { name: "My Generation - The Who - Cassette", image: "../img/ofertas/my generation.jpg", price: "$28.000 - 10%Off" },
    { name: "Nada Personal - Soda Stereo - CD", image: "../img/ofertas/nada personal.jpg", price: "$15.000 - 10%Off" },
    { name: "Taza Beatles", image: "../img/ofertas/taza1.jpg", price: "$22.500 - 25%Off" },
    { name: "Poster Led Zeppelin", image: "../img/ofertas/poster1.jpg", price: "$7.900 - 15%Off" },
    { name: "Armonica", image: "../img/ofertas/armonica.webp", price: "$22.000 - 20%Off" },
    { name: "Remera Patricio Rey Y Sus Rednonditos De Ricota", image: "../img/ofertas/remera1.webp", price: "$23.500 - 25%Off" },
    { name: "Remera David Bowie", image: "../img/ofertas/remera2.jpg", price: "$23.500 - 25%Off" }
  ],
  vinilos: [
    { name: "(What's The Story) Morning Glory - Oasis - Vinilo", image: "../img/vinilos/morning glory.avif", price: "$40.000" },
    { name: "The Rise And Fall Of Ziggy Stardust And The Spiders From Mars - David Bowie - Vinilo", image: "../img/vinilos/ziggy stardust.avif", price: "$49.800" },
    { name: "Jazz - Queen", image: "../img/vinilos/jazz.jpeg", price: "$37.500" },
    { name: "Abbey Road - The Beatles - Vinilo", image: "../img/vinilos/abbey road.jpg", price: "$35.000 - 30%Off" },
    { name: "Bocanada - Gustavo Cerati - Vinilo", image: "../img/vinilos/bocanada.jpg", price: "$32.000 - 20%Off" },
    { name: "Sgt. Pepper's Lonely Hearts Club Band - The Beatles - Vinilo", image: "../img/vinilos/sgt pepper.jpg", price: "$42.000" },
    { name: "Definitely Maybe - Oasis - Vinilo", image: "../img/vinilos/definitely maybe.jpg", price: "$38.000" },
    { name: "Combat Rock - The Clash - Vinilo", image: "../img/vinilos/combat rock.png", price: "$38.100" },
    { name: "The Works - Queen - Vinilo", image: "../img/vinilos/the works.webp", price: "$37.700" }
  ],
  cds: [
    { name: "Nada Personal - Soda Stereo - CD", image: "../img/cds/nada personal.jpg", price: "$15.000 - 10%Off" },
    { name: "OK Computer - Radiohead - CD", image: "../img/cds/ok computer.png", price: "$19.000" },
    { name: "Powerslave - Iron Maiden - CD", image: "../img/cds/powerslave.jpg", price: "$16.000" },
    { name: "Revolver - The Beatles - CD", image: "../img/cds/revolver.jpg", price: "$15.500" },
    { name: "Slippery When Wet - Bon Jovi - CD", image: "../img/cds/slippery when wet.jpg", price: "$13.500" },
    { name: "The Colour And The Shape - Foo Fighters - CD", image: "../img/cds/the colour and the shape.jpg", price: "$17.500" },
    { name: "The Game - Queen - CD", image: "../img/cds/the game.webp", price: "$12.000" },
    { name: "Mellon Collie And The Infinite Sadness - The Smashing Pumpkins - CD", image: "../img/cds/mellon collie and the infinite sadness.jpg", price: "$14.000" },
    { name: "In Rainbows - Radiohead", image: "../img/cds/in rainbows.png", price: "$14.500" }
  ],
  cassettes: [
    { name: "My Generation - The Who - Cassette", image: "../img/cassettes/my generation.jpg", price: "$28.000 - 10%Off" },
    { name: "Band on the Run - Wings - Cassette", image: "../img/cassettes/band on the run.jpg", price: "$25.500" },
    { name: "All Things Must Pass - George Harrison - Cassette", image: "../img/cassettes/all things must pass.jpg", price: "$29.000" },
    { name: "Imagine - John Lennon - Cassette", image: "../img/cassettes/imagine.jpg", price: "$25.900" },
    { name: "Ram - Paul McCartney - Cassette", image: "../img/cassettes/ram.avif", price: "$27.800" },
    { name: "The Wall - Pink Floyd - Cassette", image: "../img/cassettes/the wall.jpg", price: "$28.000" },
    { name: "Aftermath - The Rolling Stones - Cassette", image: "../img/cassettes/aftermath.jpg", price: "$28.900" },
    { name: "Out of the Blue - Electric Light Orchestra - Cassette", image: "../img/cassettes/out of the blue.jpg", price: "$27.000" },
    { name: "Clics Modernos - Charly García - Cassette", image: "../img/cassettes/clics modernos.jpg", price: "$26.500" }
  ],
  mercaderia: [
    { name: "Armonica", image: "../img/mercaderia/armonica.webp", price: "$22.000 - 20%Off" },
    { name: "Taza Beatles", image: "../img/mercaderia/taza1.jpg", price: "$22.500 - 25%Off" },
    { name: "Poster Led Zeppelin", image: "../img/mercaderia/poster1.jpg", price: "$7.900 - 15%Off" },
    { name: "Remera Patricio Rey Y Sus Redonditos De Ricota", image: "../img/mercaderia/remera1.webp", price: "$23.500 - 25%Off" },
    { name: "Remera David Bowie", image: "../img/mercaderia/remera2.jpg", price: "$23.500 - 25%Off" },
    { name: "Poster Metallica", image: "../img/mercaderia/poster2.jpg", price: "$11.500" },
    { name: "Remera Chuck Berry", image: "../img/mercaderia/remera3.webp", price: "$29.500" },
    { name: "Taza Gustavo Cerati", image: "../img/mercaderia/taza2.webp", price: "$18.000" },
    { name: "Poster Billy Joel", image: "../img/mercaderia/poster3.jpg", price: "$13.500" }
  ]
};

const productsByImage = new Map();
Object.values(categoryCatalog).flat().forEach((product) => {
  const imageName = product.image.split('/').pop().toLowerCase();
  const existingProduct = productsByImage.get(imageName);

  if (existingProduct) {
    existingProduct.searchNames.push(product.name);
    return;
  }

  productsByImage.set(imageName, { ...product, searchNames: [product.name] });
});
const productCatalog = Array.from(productsByImage.values());

function matchesSearch(product, query) {
  const text = query.trim();
  if (!text) return true;

  const tokens = text.toLowerCase().split(/\s+/).filter(Boolean);
  const names = product.searchNames.map((name) => name.toLowerCase());

  return tokens.some((token) => names.some((name) => name.includes(token)));
}

function buildProductCard(product) {
  const article = document.createElement('article');
  article.className = 'product-card';
  const link = document.createElement('a');
  const productUrl = new URL('producto.html', window.location.href);
  productUrl.search = new URLSearchParams({
    nombre: product.name,
    imagen: product.image,
    precio: product.price
  }).toString();
  link.className = 'product-card-link';
  link.href = productUrl.href;
  link.setAttribute('aria-label', `Ver ${product.name}`);
  link.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <strong>${product.name}</strong>
    <small>${product.price}</small>
  `;
  article.appendChild(link);
  return article;
}

function linkStaticProductCards() {
  document.querySelectorAll('.product-card').forEach((article) => {
    if (article.querySelector('.product-card-link')) return;

    const image = article.querySelector('img');
    const name = article.querySelector('strong');
    const price = article.querySelector('small');
    if (!image || !name || !price) return;

    const productUrl = new URL('producto.html', window.location.href);
    productUrl.search = new URLSearchParams({
      nombre: name.textContent.trim(),
      imagen: image.getAttribute('src'),
      precio: price.textContent.trim()
    }).toString();
    const link = document.createElement('a');
    link.className = 'product-card-link';
    link.href = productUrl.href;
    link.setAttribute('aria-label', `Ver ${name.textContent.trim()}`);

    while (article.firstChild) {
      link.appendChild(article.firstChild);
    }
    article.appendChild(link);
  });
}

function getProductCategory(name, image) {
  const normalizedName = name.toLowerCase();
  const normalizedImage = image.toLowerCase();
  const format = normalizedName.match(/\b(vinilo|cassette|cd)\b/i);
  if (format) return `Formato: ${format[0][0].toUpperCase()}${format[0].slice(1).toLowerCase()}`;
  const merchandiseType = normalizedName.match(/\b(taza|remera|poster|póster|armónica|armonica|instrumento)\b/i);
  if (merchandiseType) {
    const itemType = merchandiseType[0].toLowerCase();
    if (itemType === 'armónica' || itemType === 'armonica' || itemType === 'instrumento') {
      return 'Mercadería: Instrumento musical';
    }
    if (itemType === 'poster' || itemType === 'póster') return 'Mercadería: Póster';
    return `Mercadería: ${itemType[0].toUpperCase()}${itemType.slice(1)}`;
  }
  if (normalizedImage.includes('/vinilos/')) return 'Formato: Vinilo';
  if (normalizedImage.includes('/cassettes/')) return 'Formato: Cassette';
  if (normalizedImage.includes('/cds/')) return 'Formato: CD';
  if (normalizedImage.includes('/mercaderia/')) return 'Mercadería: Artículo musical';
  return 'Artículo musical';
}

function readStoredCart() {
  const savedCart = localStorage.getItem('woodstock-cart');
  if (savedCart === null) return [];

  const cart = JSON.parse(savedCart);
  if (!Array.isArray(cart) || cart.some((item) => (
    !item
    || typeof item.name !== 'string'
    || typeof item.image !== 'string'
    || typeof item.price !== 'string'
    || !Number.isInteger(item.quantity)
    || item.quantity < 1
  ))) {
    throw new Error('El carrito guardado no tiene un formato válido.');
  }
  return cart;
}

function saveStoredCart(cart) {
  localStorage.setItem('woodstock-cart', JSON.stringify(cart));
}

function readStoredFavorites() {
  const savedFavorites = localStorage.getItem('woodstock-favorites');
  if (savedFavorites === null) return [];

  const favorites = JSON.parse(savedFavorites);
  if (!Array.isArray(favorites) || favorites.some((item) => (
    !item
    || typeof item.name !== 'string'
    || typeof item.image !== 'string'
    || typeof item.price !== 'string'
  ))) {
    throw new Error('La lista de favoritos guardada no tiene un formato válido.');
  }
  return favorites;
}

function saveStoredFavorites(favorites) {
  localStorage.setItem('woodstock-favorites', JSON.stringify(favorites));
}

function getPriceValue(price) {
  const match = price.match(/\d[\d.]*(?:,\d{1,2})?/);
  if (!match) return 0;
  return Number(match[0].replace(/\./g, '').replace(',', '.'));
}

function formatCurrency(amount) {
  return `$${Math.round(amount).toLocaleString('es-AR')}`;
}

function renderCartPage() {
  const itemsContainer = document.getElementById('cart-items');
  if (!itemsContainer) return;

  const emptyState = document.getElementById('cart-empty');
  const summary = document.getElementById('cart-summary');
  const confirmation = document.getElementById('purchase-confirmation');
  const heading = document.getElementById('cart-heading');
  const error = document.getElementById('cart-error');
  const count = document.getElementById('cart-item-count');
  confirmation.hidden = true;
  heading.hidden = false;
  itemsContainer.hidden = false;

  try {
    const cart = readStoredCart();
    error.hidden = true;
    itemsContainer.replaceChildren();
    emptyState.hidden = cart.length > 0;
    summary.hidden = cart.length === 0;

    if (!cart.length) {
      count.textContent = '0 productos';
      return;
    }

    const units = cart.reduce((total, item) => total + item.quantity, 0);
    count.textContent = `${units} ${units === 1 ? 'producto' : 'productos'}`;
    let total = 0;

    cart.forEach((item, index) => {
      total += getPriceValue(item.price) * item.quantity;
      const row = document.createElement('article');
      row.className = 'cart-item';

      const image = document.createElement('img');
      image.className = 'cart-item-image';
      image.src = item.image;
      image.alt = item.name;

      const details = document.createElement('div');
      details.className = 'cart-item-details';
      const name = document.createElement('h3');
      name.textContent = item.name;
      const category = document.createElement('p');
      category.textContent = item.category || getProductCategory(item.name, item.image);
      const price = document.createElement('strong');
      price.textContent = item.price;
      details.append(name, category, price);

      const controls = document.createElement('div');
      controls.className = 'cart-item-controls';
      const decrease = document.createElement('button');
      decrease.className = 'cart-quantity-button';
      decrease.type = 'button';
      decrease.dataset.index = String(index);
      decrease.dataset.change = '-1';
      decrease.setAttribute('aria-label', `Reducir cantidad de ${item.name}`);
      decrease.textContent = '−';
      const quantity = document.createElement('span');
      quantity.className = 'cart-quantity';
      quantity.textContent = String(item.quantity);
      const increase = document.createElement('button');
      increase.className = 'cart-quantity-button';
      increase.type = 'button';
      increase.dataset.index = String(index);
      increase.dataset.change = '1';
      increase.setAttribute('aria-label', `Aumentar cantidad de ${item.name}`);
      increase.textContent = '+';
      controls.append(decrease, quantity, increase);

      const remove = document.createElement('button');
      remove.className = 'cart-remove-button';
      remove.type = 'button';
      remove.dataset.remove = String(index);
      remove.textContent = 'Quitar';
      row.append(image, details, controls, remove);
      itemsContainer.appendChild(row);
    });

    document.getElementById('cart-subtotal').textContent = formatCurrency(total);
    document.getElementById('cart-total').textContent = formatCurrency(total + 3500);
  } catch (cartError) {
    error.textContent = 'No se pudo cargar el carrito. Revisá el almacenamiento de este navegador.';
    error.hidden = false;
    emptyState.hidden = true;
    summary.hidden = true;
    console.error('No se pudo leer el carrito de Woodstock:', cartError);
  }

  itemsContainer.onclick = (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const quantityButton = target.closest('.cart-quantity-button');
    const removeButton = target.closest('.cart-remove-button');
    if (!quantityButton && !removeButton) return;

    try {
      const cart = readStoredCart();
      const index = Number((quantityButton || removeButton).dataset.index ?? (removeButton && removeButton.dataset.remove));
      if (!Number.isInteger(index) || index < 0 || index >= cart.length) {
        throw new Error('No se encontró el producto seleccionado en el carrito.');
      }

      if (removeButton) {
        cart.splice(index, 1);
      } else {
        cart[index].quantity += Number(quantityButton.dataset.change);
        if (cart[index].quantity <= 0) cart.splice(index, 1);
      }

      saveStoredCart(cart);
      renderCartPage();
    } catch (cartError) {
      error.textContent = 'No se pudo actualizar el carrito. Revisá el almacenamiento de este navegador.';
      error.hidden = false;
      console.error('No se pudo actualizar el carrito de Woodstock:', cartError);
    }
  };

  const checkoutButton = document.getElementById('checkout-button');
  checkoutButton.onclick = () => {
    try {
      const cart = readStoredCart();
      if (!cart.length) {
        throw new Error('No hay productos en el carrito para confirmar la compra.');
      }

      saveStoredCart([]);
      heading.hidden = true;
      itemsContainer.hidden = true;
      summary.hidden = true;
      emptyState.hidden = true;
      confirmation.hidden = false;
    } catch (cartError) {
      error.textContent = 'No se pudo confirmar la compra. Revisá el almacenamiento de este navegador.';
      error.hidden = false;
      console.error('No se pudo completar la compra de Woodstock:', cartError);
    }
  };
}

function renderFavoritesPage() {
  const itemsContainer = document.getElementById('favorite-items');
  if (!itemsContainer) return;

  const emptyState = document.getElementById('favorite-empty');
  const error = document.getElementById('favorite-error');
  const count = document.getElementById('favorite-item-count');

  try {
    const favorites = readStoredFavorites();
    error.hidden = true;
    itemsContainer.replaceChildren();
    emptyState.hidden = favorites.length > 0;
    count.textContent = `${favorites.length} ${favorites.length === 1 ? 'producto' : 'productos'}`;

    favorites.forEach((item, index) => {
      const row = document.createElement('article');
      row.className = 'cart-item';
      const productUrl = new URL('producto.html', window.location.href);
      productUrl.search = new URLSearchParams({
        nombre: item.name,
        imagen: item.image,
        precio: item.price
      }).toString();

      const link = document.createElement('a');
      link.className = 'favorite-item-link';
      link.href = productUrl.href;
      const image = document.createElement('img');
      image.className = 'cart-item-image';
      image.src = item.image;
      image.alt = item.name;

      const details = document.createElement('div');
      details.className = 'cart-item-details';
      const name = document.createElement('h3');
      name.textContent = item.name;
      const category = document.createElement('p');
      category.textContent = item.category || getProductCategory(item.name, item.image);
      const price = document.createElement('strong');
      price.textContent = item.price;
      details.append(name, category, price);
      link.append(image, details);

      const remove = document.createElement('button');
      remove.className = 'favorite-remove-button';
      remove.type = 'button';
      remove.dataset.index = String(index);
      remove.setAttribute('aria-label', `Quitar ${item.name} de favoritos`);
      remove.textContent = '♥ Quitar';
      row.append(link, remove);
      itemsContainer.appendChild(row);
    });
  } catch (favoritesError) {
    error.textContent = 'No se pudieron cargar tus favoritos. Revisá el almacenamiento de este navegador.';
    error.hidden = false;
    emptyState.hidden = true;
    console.error('No se pudieron leer los favoritos de Woodstock:', favoritesError);
  }

  itemsContainer.onclick = (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const removeButton = target.closest('.favorite-remove-button');
    if (!removeButton) return;

    try {
      const favorites = readStoredFavorites();
      const index = Number(removeButton.dataset.index);
      if (!Number.isInteger(index) || index < 0 || index >= favorites.length) {
        throw new Error('No se encontró el producto seleccionado en favoritos.');
      }

      favorites.splice(index, 1);
      saveStoredFavorites(favorites);
      renderFavoritesPage();
    } catch (favoritesError) {
      error.textContent = 'No se pudo actualizar favoritos. Revisá el almacenamiento de este navegador.';
      error.hidden = false;
      console.error('No se pudieron actualizar los favoritos de Woodstock:', favoritesError);
    }
  };
}

function renderProductDetails() {
  const productName = document.getElementById('product-name');
  if (!productName) return;

  const params = new URLSearchParams(window.location.search);
  const name = params.get('nombre') || productName.textContent;
  const image = params.get('imagen') || '../img/vinilos/abbey road.jpg';
  const price = params.get('precio') || '$35.000';
  const category = getProductCategory(name, image);
  const productImage = document.getElementById('product-image');
  const quantity = document.getElementById('product-quantity');

  productName.textContent = name;
  document.title = `${name} - Woodstock`;
  document.getElementById('product-category').textContent = category;
  document.getElementById('product-price').textContent = price;
  productImage.src = image;
  productImage.alt = name;
  const favoriteButton = document.getElementById('toggle-favorite');
  const updateFavoriteButton = (isFavorite) => {
    favoriteButton.setAttribute('aria-pressed', String(isFavorite));
    favoriteButton.classList.toggle('is-favorite', isFavorite);
    favoriteButton.textContent = isFavorite ? '♥ Quitar de favoritos' : '♡ Agregar a favoritos';
  };

  try {
    const favorites = readStoredFavorites();
    updateFavoriteButton(favorites.some((item) => item.name === name && item.image === image));
  } catch (favoritesError) {
    const favoriteMessage = document.getElementById('favorite-message');
    favoriteMessage.textContent = 'No se pudo cargar el estado de favoritos.';
    favoriteMessage.classList.add('is-error');
    console.error('No se pudo comprobar si el producto está en favoritos:', favoritesError);
  }

  favoriteButton.addEventListener('click', () => {
    const favoriteMessage = document.getElementById('favorite-message');
    try {
      const favorites = readStoredFavorites();
      const favoriteIndex = favorites.findIndex((item) => item.name === name && item.image === image);
      if (favoriteIndex >= 0) {
        favorites.splice(favoriteIndex, 1);
        saveStoredFavorites(favorites);
        updateFavoriteButton(false);
        favoriteMessage.textContent = 'Producto quitado de favoritos.';
      } else {
        favorites.push({ name, image, price, category });
        saveStoredFavorites(favorites);
        updateFavoriteButton(true);
        favoriteMessage.textContent = 'Producto agregado a favoritos.';
      }
      favoriteMessage.classList.remove('is-error');
    } catch (favoritesError) {
      favoriteMessage.textContent = 'No se pudo actualizar favoritos. Revisá el almacenamiento de este navegador.';
      favoriteMessage.classList.add('is-error');
      console.error('No se pudieron actualizar los favoritos de Woodstock:', favoritesError);
    }
  });

  document.getElementById('add-to-cart').addEventListener('click', () => {
    const requestedQuantity = Number(quantity.value);
    const message = document.getElementById('cart-message');
    if (!Number.isInteger(requestedQuantity) || requestedQuantity < 1) {
      message.textContent = 'Elegí una cantidad de al menos 1 unidad.';
      message.classList.add('is-error');
      return;
    }

    const cartItem = { name, image, price, category, quantity: requestedQuantity };
    try {
      const currentCart = readStoredCart();
      const existingItem = currentCart.find((item) => item.name === name && item.image === image);
      if (existingItem) {
        existingItem.quantity += requestedQuantity;
      } else {
        currentCart.push(cartItem);
      }
      saveStoredCart(currentCart);
      message.textContent = `${requestedQuantity} ${requestedQuantity === 1 ? 'unidad agregada' : 'unidades agregadas'} al carrito.`;
      message.classList.remove('is-error');
    } catch (error) {
      message.textContent = 'No se pudo guardar el producto en el carrito. Revisá la configuración de almacenamiento del navegador.';
      message.classList.add('is-error');
      console.error('No se pudo actualizar el carrito de Woodstock:', error);
    }
  });
}

function renderSearchResults() {
  const resultsContainer = document.getElementById('search-results');
  if (!resultsContainer) return;

  const params = new URLSearchParams(window.location.search);
  const query = params.get('q') || '';
  const results = productCatalog.filter((product) => matchesSearch(product, query));

  resultsContainer.innerHTML = '';

  if (!results.length) {
    resultsContainer.innerHTML = `<p class="search-empty">No se encontraron productos para "${query}".</p>`;
    return;
  }

  results.forEach((product) => {
    resultsContainer.appendChild(buildProductCard(product));
  });
}

function renderCategoryCarousels() {
  document.querySelectorAll('.category[data-category]').forEach((category) => {
    const products = categoryCatalog[category.dataset.category];
    const row = category.querySelector('.product-row');
    const previousButton = category.querySelector('.carousel-prev');
    const nextButton = category.querySelector('.carousel-next');

    if (!products || !row || !previousButton || !nextButton) return;

    row.after(nextButton);

    let offset = 0;
    let isAnimating = false;

    const render = () => {
      const visibleProducts = Array.from({ length: 3 }, (_, index) => products[(offset + index) % products.length]);
      row.replaceChildren(...visibleProducts.map(buildProductCard));
    };

    render();

    const moveCarousel = (direction) => {
      if (isAnimating) return;

      isAnimating = true;
      offset = (offset + direction + products.length) % products.length;
      row.style.transition = 'transform 0.18s ease, opacity 0.18s ease';
      row.style.transform = `translateX(${direction > 0 ? '-24px' : '24px'})`;
      row.style.opacity = '0.35';

      window.setTimeout(() => {
        render();
        row.style.transition = 'none';
        row.style.transform = `translateX(${direction > 0 ? '24px' : '-24px'})`;

        requestAnimationFrame(() => {
          row.style.transition = 'transform 0.28s ease, opacity 0.28s ease';
          row.style.transform = 'translateX(0)';
          row.style.opacity = '1';

          window.setTimeout(() => {
            row.style.transition = '';
            row.style.transform = '';
            row.style.opacity = '';
            isAnimating = false;
          }, 280);
        });
      }, 180);
    };

    previousButton.addEventListener('click', () => moveCarousel(-1));
    nextButton.addEventListener('click', () => moveCarousel(1));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.bottom-nav a').forEach((link) => {
    if (link.textContent.trim() === 'Carrito') link.href = 'carrito.html';
    if (link.textContent.trim() === 'Favoritos') link.href = 'favoritos.html';
    if (link.textContent.trim() === 'Vender') link.remove();
  });

  const searchForm = document.querySelector('.search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
      const input = searchForm.querySelector('input[name="q"]');
      const value = input ? input.value.trim() : '';

      if (!value) {
        event.preventDefault();
        return;
      }
    });
  }

  renderSearchResults();
  renderCategoryCarousels();
  linkStaticProductCards();
  renderProductDetails();
  renderCartPage();
  renderFavoritesPage();

});
