const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.getElementsByClassName("gallery");

const imagesList = images.map(image => `<li><img src="${image.url}" alt="${image.alt}" width="400" height="300"></li>`);


document.styleSheets[0].insertRule(".gallery {display: flex; flex-direction: column; align-items: center; justify-content: center;}", 0);
document.styleSheets[0].insertRule(".gallery li {list-style: none;}", 1);
document.styleSheets[0].insertRule(".gallery img {border: 1px solid black;}", 2);
document.styleSheets[0].insertRule(".gallery img:hover {transform: scale(1.1); transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);}", 3);
document.styleSheets[0].insertRule(".gallery img:focus {outline: 3px solid #FFD54F;}", 4);
document.styleSheets[0].insertRule(".gallery img:focus:hover {transform: scale(1.1); transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);}", 5);
document.styleSheets[0].insertRule(".gallery img:focus:hover {outline: 3px solid #FFD54F;}", 6);
document.styleSheets[0].insertRule(".gallery img:focus:hover {transform: scale(1.1); transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);}", 7);
  document.styleSheets[0].insertRule(".gallery img:focus:hover {outline: 3px solid #FFD54F;}", 8);

galleryRef[0].insertAdjacentHTML("afterbegin", imagesList.join(""));