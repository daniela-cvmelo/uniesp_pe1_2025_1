// Início do menu de navegação e botões

function funcaoMenu() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }


   var a = document.getElementById("loginBtn");
   var b = document.getElementById("registerBtn");
   var x = document.getElementById("login");
   var y = document.getElementById("register");

   function login() {
   var loginForm = document.getElementById("login");
   var registerForm = document.getElementById("register");
   var rememberForm = document.getElementById("remember");

   loginForm.style.left = "4px";
   registerForm.style.left = "-510px";
   rememberForm.style.left = "-510px";

   loginForm.style.opacity = "1";
   registerForm.style.opacity = "0";
   rememberForm.style.opacity = "0";
}

function register() {
   var loginForm = document.getElementById("login");
   var registerForm = document.getElementById("register");
   var rememberForm = document.getElementById("remember");

   loginForm.style.left = "-510px";
   registerForm.style.left = "4px";
   rememberForm.style.left = "-510px";

   loginForm.style.opacity = "0";
   registerForm.style.opacity = "1";
   rememberForm.style.opacity = "0";
}

window.onload = function () {
   const params = new URLSearchParams(window.location.search);
   const form = params.get("form");

   const loginForm = document.getElementById("login");
   const registerForm = document.getElementById("register");
  
   loginForm.style.transition = "none";
   registerForm.style.transition = "none";
   

   if (form === "register") {
       loginForm.style.left = "-510px";
       loginForm.style.opacity = "0";

       registerForm.style.left = "4px";
       registerForm.style.opacity = "1";
   } else if (form === "remember") {
       loginForm.style.left = "-510px";
       loginForm.style.opacity = "0";

   }

};

// Fim do menu de navegação e botões

// Início do calendário

const monthYear = document.getElementById("month-year");
const daysContainer = document.getElementById("calendar-days");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

const months = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

function renderCalendar(month, year) {
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = `${months[month]} ${year}`;
    daysContainer.innerHTML = "";

    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("li");
        daysContainer.appendChild(empty);
    }

    for (let day = 1; day <= lastDate; day++) {
        const li = document.createElement("li");
        li.textContent = day;

        if (
            day === date.getDate() &&
            month === date.getMonth() &&
            year === date.getFullYear()
        ) {
            li.classList.add("today");
        }

        daysContainer.appendChild(li);
    }
}

prevMonthBtn.onclick = () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
};

nextMonthBtn.onclick = () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
};

renderCalendar(currentMonth, currentYear);

// Final do calendário

