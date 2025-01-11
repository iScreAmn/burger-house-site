// COVER
document.getElementById("main-action-button").onclick = function () {
  document.getElementById("menu").scrollIntoView({behavior: "smooth"});
}

document.getElementById("order-up").onclick = function () {
  document.getElementById("header").scrollIntoView({behavior: "smooth"});
}

// NAVIGATION
let links = document.querySelectorAll(".nav__links > a");
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
  }
}

// MENU
let buttons = document.getElementsByClassName("menu__button ");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById("order").scrollIntoView({behavior: "smooth"});
  }
}

// ORDER
let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function() {
  let hasError = false;

  [burger, name, phone].forEach(item => {
    if (!item.value) {
      item.parentElement.style.background = "red";
      hasError = true;
    } else {
      item.parentElement.style.background = ""
    }
  });

  if (!hasError) {
    [burger, name, phone].forEach(item => {
      item.value = ""; 
    });
    alert("Спасибо за заказ! Мы скоро свяжемся с вами");
  }
}