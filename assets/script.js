document.addEventListener('DOMContentLoaded', function() {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM
  
    // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', myFunctionForSticky);
  
    // Get the navbar
    var navbar = document.getElementById("nav_bar");

    var aboutMe = document.getElementById("secondSection")
  
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
  
    // Add the sticky class to the navbar when you reach its scroll position. 
    // Remove "sticky" when you leave the scroll position
  
    function myFunctionForSticky() {
        console.log(window.pageYOffset)
      if (window.pageYOffset <= 630) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }

      if (window.pageYOffset >= 750) {
        aboutMe.classList.add("tree");
      } else {
        aboutMe.classList.remove("tree");
      }

    }
  
    /*Toggle between adding and removing the "responsive" class to topnav
    when the user clicks on the icon*/
  
    function myFunctionForResponsive() {
      navbar.classList.toggle('responsive');
    }
  })