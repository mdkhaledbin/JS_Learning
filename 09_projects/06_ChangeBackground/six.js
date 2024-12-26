// generate random colo

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
      let ran = Math.floor(Math.random()*16)
      color += hex[ran]
    }
    return color
  };
  
  let intervalId;
  
  const startChangeColor = function(){
    if(!intervalId){
      intervalId = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
      }, 1000)
    }
  };
  const stopChangeColor = function(){
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangeColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangeColor)