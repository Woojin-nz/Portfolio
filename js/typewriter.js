const speed = 200; // time in milliseconds between each character

function typeWriter(element, text, i) {
  if (i < text.length) {
    if (text.charAt(i) === '\n') {
      element.innerHTML += '<br>';
    } else {
      element.innerHTML += text.charAt(i);
    }
    i++;
    setTimeout(() => typeWriter(element, text, i), speed);
  }
}

const h1 = document.querySelector('h1.typewriter');
const h2 = document.querySelector('h2.typewriter');

const text1 = 'WOOJIN\nJEON';
h1.innerHTML = '';
typeWriter(h1, text1, 0);

const text2 = 'AKL,NZ';
h2.textContent = '';
setTimeout(() => typeWriter(h2, text2, 0), speed * text1.length);