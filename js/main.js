 var a = +prompt("Kabisa yilini kiriting")
 var elHeading = document.querySelector("h2")

 if (a % 4 == 0) {
     document.querySelector('h2').textContent = a + "kabisa yili";
} else {
     document.querySelector('h2').textContent = a + "kabisa yili emas";
}
