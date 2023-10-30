function readMoree() {
    var dotss = document.getElementById("dotss");
    var moree = document.getElementById("moree");
    var btnn = document.getElementById("btnn");
    
    if(dotss.style.display === "none") {
      dotss.style.display = "inline";
      btnn.innerHTML="Подробнее"
      moree.style.display="none";
    } else {
      dotss.style.display="none";
      btnn.innerHTML="Скрыть"
      moree.style.display="inline";
    }
  }