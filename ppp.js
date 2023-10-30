function readMoreee() {
    var dotsss = document.getElementById("dotsss");
    var moreee = document.getElementById("moreee");
    var btnnn = document.getElementById("btnnn");
    
    if(dotsss.style.display === "none") {
      dotsss.style.display = "inline";
      btnnn.innerHTML="Подробнее"
      moreee.style.display="none";
    } else {
      dotsss.style.display="none";
      btnnn.innerHTML="Скрыть"
      moreee.style.display="inline";
    }
  }