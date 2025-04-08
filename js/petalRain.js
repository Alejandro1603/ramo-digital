const colors = ['#e8d4f7', '#d2f2ff', '#f4d160'];

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.animationDuration = `${4 + Math.random() * 5}s`;
  petal.style.background = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById('petal-container').appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

setInterval(createPetal, 300);
