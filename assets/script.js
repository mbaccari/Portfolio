// view height finder

function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}


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
      if (window.pageYOffset >= vh(100)) {
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