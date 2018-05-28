const menu = [ ];

function submit1(btnCeviche) {
    alert("No disponible");
    // menu.push("Ceviche");
}

function submit2(btnTaco) {
    alert("No disponible");
  //  menu.push("Tacos");
}

function submit3(btnEmpa) {
    alert("No disponible");
  //  menu.push("Empanada");
}

function submit4(btnBurger) {
    alert("Disponible. Ingresado al pedido.");
    menu.push("Hamburguesa");
}

function selectedDish(btnSelect) {
    alert("Has elegido " + menu + " en tu pedido")
    document.getElementById("selection").innerHTML = "Tu pedido de " + menu + " ha sido ingresado en nuestro sistema y se está preparando. Gracias por comprar con nosotros."
}