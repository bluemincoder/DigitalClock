const clock = document.getElementById("clock");
setInterval(()=>{
      let date = new Date();
      let ans = date.toLocaleTimeString();
      clock.innerHTML = `<span>${ans}</span>`;
},1000);