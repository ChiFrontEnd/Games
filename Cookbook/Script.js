let currentIndex = 0;

// 1. Show the selected category and reset the index
function showCategory(catId) {
  // Hide all categories
  document.querySelectorAll('.category').forEach(c => c.style.display = 'none');
  
  // Show target category
  const targetCategory = document.getElementById(catId);
  targetCategory.style.display = 'block';
  
  // Reset index to start at the first card of the new category
  currentIndex = 0;
  
  // Update visibility of cards within this category
  updateCategoryCards(targetCategory);
}

// 2. Helper to manage card visibility within a category
function updateCategoryCards(categoryDiv) {
  const cards = categoryDiv.querySelectorAll('.recipe-card');
  cards.forEach((card, index) => {
    card.classList.toggle('active', index === currentIndex);
  });
}

// 3. Navigation logic
window.nextCard = function () {
  const activeCat = document.querySelector('.category[style*="display: block"]');
  const cards = activeCat.querySelectorAll('.recipe-card');
  
  currentIndex = (currentIndex + 1) % cards.length;
  updateCategoryCards(activeCat);
};

window.prevCard = function () {
  const activeCat = document.querySelector('.category[style*="display: block"]');
  const cards = activeCat.querySelectorAll('.recipe-card');
  
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCategoryCards(activeCat);
};