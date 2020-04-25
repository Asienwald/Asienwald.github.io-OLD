/* Set the width of the side navigation to 250px */
function openNav() {
    if(window.innerWidth > 1280) document.getElementById("mySidenav").style.width = "20vw";
    else document.getElementById("mySidenav").style.width = "100vw";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }