const eyeball = document.querySelector(".ball");

document.onmousemove = () => {
  const x = event.clientX * 100 / window.innerWidth + "%";
  const y = event.clientY * 100 / window.innerHeight + "%";
  
  eyeball.style.left = x;
  eyeball.style.top = y;
  eye.style.transform = "translate(-"+x+", -"+y+")";
}



const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  // change background color
  document.body.style.backgroundColor = 'black';

  // change text color
  document.body.style.color = 'white';
});







