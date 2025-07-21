// Toggle navigation menu visibility in mobile view
document.getElementById('menu-icon').addEventListener('click', function() {
    const menuItems = document.getElementById('menu-items');
    if (menuItems.classList.contains('hidden')) {
        menuItems.classList.remove('hidden');
    } else {
        menuItems.classList.add('hidden');
    }
});
