document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in-left, .fade-in-right');
    
    function checkIfInView() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight - 100) { 
                element.classList.add('in-view');
            }
        });
    }
    
    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); 
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.news-pop-up-bottom');
    
    function checkIfInView() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight - 100) { // Trigger slightly before it comes fully into view
                element.classList.add('news-in-view');
            }
        });
    }
    
    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Check on page load
});

document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelectorAll('.hero-content-right-to-left');
    
    function checkIfInView() {
        heroContent.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight - 100) { // Adjust this value as needed
                element.classList.add('hero-content-in-view');
            }
        });
    }
    
    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Initial check on page load
});
