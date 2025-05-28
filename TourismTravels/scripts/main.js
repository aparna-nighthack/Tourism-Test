
document.addEventListener('DOMContentLoaded', function() {
    // Search bar interactivity
    const searchBar = document.querySelector('#search-bar');
    searchBar.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch(searchBar.value);
        }
    });

    // Function to perform the search
    function performSearch(query) {
        console.log(`Searching for: ${query}`);
        // Here you would add AJAX calls to fetch and display search results
    }

    // Quick links interactivity
    const quickLinks = document.querySelectorAll('.quick-link');
    quickLinks.forEach(link => {
        link.addEventListener('click', function() {
            navigateToCategory(link.dataset.category);
        });
    });

    // Function to navigate to category
    function navigateToCategory(category) {
        console.log(`Navigating to: ${category}`);
        // Here you would navigate to specific category pages
    }

    // Image gallery interactivity on destination pages
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            openImageModal(index);
        });
    });

    // Function to open the image in a modal
    function openImageModal(index) {
        console.log(`Opening image in modal, index: ${index}`);
        // Here you might add code to open the image modal with full view
    }

    // Interactive map (for demonstration purposes only)
    const mapSection = document.querySelector('#map-section');
    if (mapSection) {
        initializeMap();
    }

    function initializeMap() {
        console.log('Initializing map...');
        // Here you would integrate Google Maps or any other map service
    }
    
    // Additional interactivity such as map zoom, tooltips, etc.
    // More interactivity can be added here...
});