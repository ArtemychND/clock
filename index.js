let output = document.querySelector('.conteiner');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

function clock() {
  let date = new Date();

  let hour = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
  let minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
  let second = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();;
  
  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.innerHTML = second;
}

setInterval(clock, 1000)



