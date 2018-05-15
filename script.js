function setDate(){
  const now = new Date();

  //Seconds Hand
  const seconds = now.getSeconds();
  const secDeg = ((seconds / 60) * 360 + 90);
  const secHand = document.querySelector('.sec-hand');
  secHand.style.transform = `rotate(${secDeg}deg)`;

  //Mins Hand
  const mins = now.getMinutes();
  const minsDeg = ((mins / 60) * 360 + 90);
  const minsHand = document.querySelector('.min-hand');
  minsHand.style.transform = `rotate(${minsDeg}deg)`;

  //Hour Hand
  const hour = now.getHours();
  const hourDeg = ((hour / 12) * 360 + 90);
  const hourHand = document.querySelector('.hour-hand');
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  //Greeting msg
  if(hour > 12){
    const greet = document.getElementById('greeting');
    greet.innerHTML = 'Good Afternoon!';
  } else{
    document.getElementById('greeting').innerHTML = 'Good Morning!';
  }

  // Prevents clock hands from jerking on reset
  if(secDeg !== 448){
  } else{
    secDeg + 448;
  }

  if(minsDeg !== 448){
  } else{
    minsDeg + 448;
  }

  if(hourDeg !== 448){
  } else{
    hourDeg + 448;
  }
}

setInterval(setDate, 1000);
