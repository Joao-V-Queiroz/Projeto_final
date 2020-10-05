document.querySelector(".hamburguer").addEventListener("click", () =>
document.querySelector(".container").classList.toggle("show-menu")
);
document.getElementById("tunnel").animate([
    { transform: 'translate3D(0, 0, 0)' }, 
    { transform: 'translate3D(0, -300px, 0)' }
  ], {
    duration: 1000,
    iterations: Infinity
  })
  
  var aliceTumbling = [
    { transform: 'rotate(0) translate3D(-50%, -50%, 0', color: '#000' }, 
    { color: '#431236', offset: 0.3},
    { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
  ];
  
  var aliceTiming = {
    duration: 3000,
    iterations: Infinity
  }
  
  document.getElementById("alice").animate(
    aliceTumbling, 
    aliceTiming
  )

  function lojas(){
    var nome = document.getElementById("nome").value;
    var modelo = document.getElementById("modelo").value;
    if(nome != "" && modelo == "uniforme 1"){
     alert("seja bem vindo " +nome); 
     window.location.href = "uniforme1.html";
    }else if(nome != "" && modelo == "uniforme 2"){
      alert("seja bem vindo "+nome);
      window.location.href = "uniforme2.html"
    }else if(nome === "" && modelo === ""){
    alert("Campos vazios");
    }else if(nome == "" && modelo !== ""){
   alert("Por favor, digite seu nome !!");
    }else if(nome !== "" && modelo === ""){
      alert("Olá "+nome+" você precisa digitar o seu modelo de uniforme");

    }
  }
  
  window.onload = lojas();
