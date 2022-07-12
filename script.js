document.addEventListener("DOMContentLoaded", function(event) { 
    document.body.addEventListener("laod click", event => {
        if (event.target.nodeName == "BUTTON") {
          console.log("Clicked", event.target.textContent);
        }
      });
  });

