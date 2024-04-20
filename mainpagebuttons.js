
  function getSquare() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("displayapp").innerHTML = xhr.responseText;
      }
    };
    xhr.open("GET", "Square.html", true);
    xhr.send();
  }



function getFlat() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("displayapp").innerHTML = xhr.responseText;
      }
    };
    xhr.open("GET", "flat.html", true);
    xhr.send();
  }


  
  function getSpherical() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("displayapp").innerHTML = xhr.responseText;
      }
    };
    xhr.open("GET", "Spherical.html", true);
    xhr.send();
  }
    

  
  function getTruncated() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("displayapp").innerHTML = xhr.responseText;
      }
    };
    xhr.open("GET", "truncated.html", true);
    xhr.send();
  }
