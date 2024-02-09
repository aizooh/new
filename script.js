function togglemenu(){
    const menu = document.querySelector(".menu_links")
        const icon = document.querySelector(".icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")

}
  // Add an event listener to check the scroll position
  window.addEventListener('scroll', function() {
    var button = document.getElementById('glowButton');
    var scrollPosition = window.scrollY;

    // Adjust the scroll position value based on your needs
    if (scrollPosition >50) {
      button.classList.add('glow');
    } else {
      button.classList.remove('glow');
    }
  });