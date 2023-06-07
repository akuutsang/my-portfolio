const icon = document.querySelector('#icon');

function newIcon() {
  icon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      icon.src = '/my-portfolio/resources/assets/theme-icons/sun.png';
    } else {
      icon.src = '/my-portfolio/resources/assets/theme-icons/moon.png';
    }
  });
  return icon;
}

export default newIcon;
