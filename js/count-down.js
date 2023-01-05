const numBoxes = document.querySelectorAll(".number-box");

setInterval(() => {
  const toArr = num => num.toString().padStart(2, '0');

  const now = new Date();
  const hrs = toArr(now.getHours());
  const min = toArr(now.getMinutes());
  const sec = toArr(now.getSeconds());
  const timeArr = (hrs + min + sec).split("");


  for(let i = 0; i < numBoxes.length; i ++) {
    const el = numBoxes[i].querySelector('.numb');
    const bf = el.innerHTML;
    const af = timeArr[i];
  
    if(bf !== af) {
      numBoxes[i].classList.toggle('reverse');
      setTimeout(() => {
        el.innerHTML = af;
      }, 300);
    }
  }
}, 1000)

