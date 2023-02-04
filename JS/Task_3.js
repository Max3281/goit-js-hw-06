console.log('Task_3')
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Method_1

// const generalGalleryEl = document.querySelector('.gallery')
// images.forEach(value => {
//     const localLiEL = document.createElement('li');
//     console.log(value)
//     let localImgEl = document.createElement('img');
//     localImgEl.classList.add('task-img')
//     localImgEl.src = value.url;
//     localImgEl.alt = value.alt;
//     localLiEL.appendChild(localImgEl)
//     generalGalleryEl.appendChild(localLiEL)
// })

// Method_2

const generalGalleryEl = document.querySelector('.gallery')
images.forEach(value => {
    const imgCheck = `<li><img class="task-img" src=${value.url} alt=${value.alt}></li>`
    generalGalleryEl.insertAdjacentHTML("beforeend", imgCheck);
})

console.log('____________________________')