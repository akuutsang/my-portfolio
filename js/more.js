const newButton = document.querySelector('.grid-btn');
const projects = document.querySelector('.projects');

function cardDisplay() {
  projects.classList.toggle('open');
  if (newButton.innerHTML === 'view more') {
    newButton.innerHTML = 'view less';
  } else {
    newButton.innerHTML = 'view more';
  }
}
export { cardDisplay, newButton };