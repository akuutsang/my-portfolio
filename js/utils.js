const data = [

  {
    name: 'project paper, rock, scissors',
    description: 'A very popular game placed all across the world',
    image: '/my-portfolio/resources/assets/projects/Paper-Rock-Scissors.JPG',
    link: 'https://github.com/Phildeoner/Team-Project-PRS',
  },

  {
    name: 'project calculator',
    description: 'A replica of the famous iphone calculator',
    image: '/my-portfolio/resources/assets/projects/Calculator.JPG',
    link: 'https://github.com/akuutsang/Calculator',
  },

  {
    name: 'project Etch-a-sketch',
    description: 'A sketch pad',
    image: '/my-portfolio/resources/assets/projects/Etch-A-Sketch.JPG',
    link: 'https://github.com/akuutsang/Etch-A-Sketch',
  },

  {
    name: 'Capstone project',
    description: 'A collaborative work',
    image: '/my-portfolio/resources/assets/projects/capstone.JPG',
    link: 'https://phildeoner.github.io/Capstone-Project/index.html',
  },

  {
    name: ' Landing page',
    description: 'A simple landing page',
    image: '/my-portfolio/resources/assets/projects/Landing-Page.jpg',
    link: 'https://github.com/akuutsang/landingPage-portfolio',
  },

];

function externalCards() {
  data.forEach((element, i) => {
    const projects = document.querySelector('.projects');
    const box = document.createElement('div');
    box.classList = 'boxes';
    const boxItem = `
        
        <div class="box-item">  
             <img class= "img" src="${data[i].image}" alt="">
              <h5>${data[i].name}</h5>
              <div class="info">
                <a class="click" href="${data[i].link}">click here</a>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                <p class="lang"> Html, Css, JavaScript</p>
              </div>
              <h6>${data[i].description}</h6>
        </div>
                `;

    box.innerHTML += boxItem;
    projects.appendChild(box);
  });
}

export default externalCards;
