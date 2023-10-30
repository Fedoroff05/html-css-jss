function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var bttn = document.getElementById("bttn");
    
    if(dots.style.display === "none") {
      dots.style.display = "inline";
      bttn.innerHTML="Подробнее"
      more.style.display="none";
    } else {
      dots.style.display="none";
      bttn.innerHTML="Скрыть"
      more.style.display="inline";
    }
  }
