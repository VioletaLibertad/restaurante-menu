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
    alert("Disponible");
    menu.push("Hamburguesa");
}

function choice() {
    document.getElementById("selection").innerHTML = "menu"
}
