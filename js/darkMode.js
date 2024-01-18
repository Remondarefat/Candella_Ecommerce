document.addEventListener("DOMContentLoaded", function () {
        let dark_Icon = document.getElementById('dark_Icon');
    
        // Check if user has a preference stored in local storage
        let isDarkMode = localStorage.getItem('dark_Icon') === 'true';
    
        // Set initial mode based on user's preference or default to light mode
        if (isDarkMode) {
            enableDarkMode();
        } else {
            enableLightMode();
        }
    
        // Toggle mode on button click
        dark_Icon.onclick = function () {
            if (document.body.classList.contains('dark-theme')) {
                enableLightMode();
            } else {
                enableDarkMode();
            }
        };
    
        function enableDarkMode() {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            dark_Icon.src = 'images/sun.png';
            localStorage.setItem('dark_Icon', 'true');
        }
    
        function enableLightMode() {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            dark_Icon.src = 'images/moon.png';
            localStorage.setItem('dark_Icon', 'false');
        }
    });