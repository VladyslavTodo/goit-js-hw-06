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

const ulGallery = document.querySelector(".gallery");

function createImageEl(img) {
    img.forEach((element) => {
        ulGallery.insertAdjacentHTML(
            "beforeend",
            `<li class = 'just'><img src = '${element.url}' alt = '${element.alt}' width = 640 ></img></li>`
        );
    });
    // console.log(img);
    return ulGallery;
    // const createLiEL = document.createElement('li');
}

console.log(createImageEl(images));


// const emptyGallery = document.querySelector("ul.gallery");
// console.log(emptyGallery);

// images.forEach(element => {
//     console.log(element);
//     emptyGallery.insertAdjacentHTML(
//         "beforeend",
//         `<li class = 'just'><img src = '${element.url}' alt = '${element.alt}' width = 640 ></img></li>`
//     );
// });