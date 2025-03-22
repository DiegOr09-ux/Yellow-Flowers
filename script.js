function showMessage(){
    let message = "Feliz 21 de Marzo 💛. No puedo estar contigo hoy, pero quiero que sepas que eres una persona muy especial. Espero que este detalle te haga sonreir. 🌼";
    let messageElemento = document.getElementById('message');
    let i=0;
    messageElemento.innerHTML="";
    messageElemento.style.display = "block";

    function write() {
        if (i < message.length) {
            messageElemento.innerHTML += message.charAt(i);
            i++;
            setTimeout(write, 50);
        }
    }
    write();

    document.getElementById("music").play();
}

//To create animated flowers in the screen
function createFlower(){
    let flor = document.createElement("img");
    flor.src = "flor.png";
    flor.className="flor";
    flor.style.left = Math.random() * window.innerWidth + "px";
    flor.style.top = Math.random() * window.innerHeight + "px";
    flor.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(flor);

    setTimeout(() =>{
        flor.remove();
    }, 5000);
}
setInterval(createFlower, 1000);