var overlay = document.getElementById("menuOverlay");
var btn = document.getElementById("toggleButton");
var specifiedElement = document.getElementById('overlay')
var count=0;

document.addEventListener('click', event => {
    
    const isClickInside = specifiedElement.contains(event.target)
  
    if (!isClickInside && overlay.style.height == "100%" && count>0) {
      
        overlay.style.height = "0%";
        btn.innerHTML = '<i class="fa-solid fa-bars fa-xl"></i>';
      
    }
    count++;
  })


function toggleNav() {
    
    if (overlay.style.height == "100%") {
        overlay.style.height = "0%";
        btn.innerHTML = '<i class="fa-solid fa-bars fa-xl"></i>';
    } else {
        overlay.style.height = "100%";
        btn.innerHTML = '<i class="fa-solid fa-x fa-xl"></i>';
        count = 0;
        btn.style.backgroundColor = "#00000000";

    }
}


