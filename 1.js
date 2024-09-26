let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

const windowH = document.documentElement.clientHeight;

openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
  });
});

closePopupButton.addEventListener('click', () => {
  popupBg.classList.remove('active');
  popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  }
});

popup.addEventListener('submit', formSend);

async function formSend(event) {
  event.preventDefault();

  const TOKEN = '7154747216:AAEKilsnrwz6juhDDZRGOuKON4hfc1WkbHI';
  const CHAT_ID = '-1002186497091';
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  let message = `
  <b>Отправленно с сайта:</b>
  <b>Имя:${this.name.value}</b>
  <b>Телефон:${this.tel.value}</b>
  <b>Сообщение:${this.message.value}</b>
  `;

  const response = await fetch(URI_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'html',
    }),
  });

  const result = await response.json();
  if (result.ok) {
    showMessage(true);
    popup.reset();
  } else {
    showMessage(false);
    console.log(result);
  }
}

function showMessage(isSuccess) {
  popup.classList.remove('active');

  if (isSuccess) {
    oke.classList.add('active');
    document.addEventListener('click', (e) => oke.classList.remove('active'));
  } else {
    noe.classList.add('active');
    document.addEventListener('click', (e) => noe.classList.remove('active'));
  }
}

let phoneMask = document.getElementById('exampleFormControlInput2');
IMask(phoneMask, { mask: '+7(000) 000-00-00', lazy: false });
