fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {

  const countriesDropdown = document.getElementById('countries-dropdown');


  data.forEach(country => {
    const option = document.createElement('option');
    option.value = country.name.common; 
    option.textContent = country.name.common;
    countriesDropdown.appendChild(option);
  });
})
.catch(error => console.error('حدث خطأ في الاتصال بالخادم', error));


const fadingElement = document.getElementById('fading-element');
fadingElement.style.opacity = '1';


const cardData = [
  { title: 'TRIPLE CAMERA 1', content: 'Duis at tellus at urna condimentum mattis pellentesque id nibh. Elit scelerisque mauris pellentesque pulvinar. Nunc aliquet bibendum enim facilisis gravida.' },
  { title: 'ULTRA GAME MODE 2', content: 'Urna et pharetra pharetra massa massa ultricies mi. Scelerisque varius morbi enim nunc faucibus a pellentesque. Purus sit amet volutpat consequat mauris.' },
  { title: 'SUPER AMOLED DISPLAY 3', content: 'Urna neque viverra justo nec ultrices dui sapien eget mi. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Neque sodales ut etiam.' },
];
const buttonElement = document.createElement('button');
buttonElement.classList.add('card');
buttonElement.textContent = 'view more';

const cardsContainer = document.getElementById('cards-container');


cardData.forEach(data => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');

  const titleElement = document.createElement('h2');
  titleElement.textContent = data.title;

  const contentElement = document.createElement('p');
  contentElement.textContent = data.content;

  cardElement.appendChild(titleElement);
  cardElement.appendChild(contentElement);

  
  cardsContainer.appendChild(cardElement);
});
