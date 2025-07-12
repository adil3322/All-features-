
const products = ['Phone', 'Laptop', 'Charger'];
const list = document.getElementById('product-list');
products.forEach(p => {
  const item = document.createElement('div');
  item.textContent = p;
  list.appendChild(item);
});
