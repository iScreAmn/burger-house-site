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
    // alert("Спасибо за заказ! Мы скоро свяжемся с вами");
  }
}

// ORDER ALERT

const button = document.querySelector(".order__button");
const toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");

let timer1, timer2;

button.addEventListener("click", () => {
  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 5000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});

// ORDER FORM

// Получаем все кнопки "Заказать" на странице с классом .menu__button
const orderButtons = document.querySelectorAll('.menu__button');

// Для каждой кнопки добавляем обработчик события "click"
orderButtons.forEach(button => {
  button.addEventListener('click', function() {
    
    // Находим ближайший элемент с классом .menu__item (родительский элемент кнопки)
    const menuItem = this.closest('.menu__item');
    
    // Находим элемент с классом .menu__title внутри .menu__item (название бургера)
    const titleElement = menuItem.querySelector('.menu__title');
    
    // Если название найдено, сохраняем его, иначе ставим значение по умолчанию
    const title = titleElement ? titleElement.textContent : 'Название не указано';
    
    // Находим элемент с классом .price внутри .menu__item (цена бургера)
    const priceElement = menuItem.querySelector('.price');
    
    // Если цена найдена, сохраняем её, иначе ставим значение по умолчанию
    const price = priceElement ? priceElement.textContent : 'Цена не указана';
    
    // Находим поле ввода с id "burger" (где будет отображаться информация о заказе)
    const orderInput = document.getElementById('burger');
    
    // Устанавливаем в поле ввода строку с названием и ценой бургера
    orderInput.value = `${title} - ${price}`;
  });
});

// CURRENCY
let prices = document.getElementsByClassName("price");
document.getElementById("change-currency").onclick = function(e) {
  let currentCurrency = e.target.innerText;

  let newCurrency = "$";
  let coefficient = 1;

  if (currentCurrency === "$") {
    newCurrency = "₽";
    coefficient = "90";
  } else if (currentCurrency === "₽") {
    newCurrency = "₾";
    coefficient = "2.6";
  } else if (currentCurrency === '₾') {
    newCurrency = '€';
    coefficient = 1.12;
} else if (currentCurrency === '€') {
    newCurrency = '¥';
    coefficient = 7.14;
}
  e.target.innerText = newCurrency;

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
  }

}