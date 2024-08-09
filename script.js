let currentFilter = 'Ilustración';
const categories = ['Ilustración', 'Animación 3D', 'Manuales'];

function filterBy() {
  const button = document.querySelector('.filter-button');
  currentFilter = categories[(categories.indexOf(currentFilter) + 1) % categories.length];
  button.textContent = `Filtrar por: ${currentFilter}`;
  console.log(`Filtrar por: ${currentFilter}`);
}
