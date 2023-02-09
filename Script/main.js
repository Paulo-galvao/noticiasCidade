const navMob =  document.getElementById("nav-mob");
const year = document.getElementById("year");

const showMenu = () => {
    navMob.classList.toggle("nav-mob-show");
}

year.innerHTML = new Date().getFullYear();