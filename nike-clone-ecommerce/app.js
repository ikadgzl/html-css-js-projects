const sliderWrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

const products = [
  {
    id: 1,
    title: 'Air Force',
    price: 119,
    colors: [
      {
        code: 'black',
        img: './img/air.png'
      },
      {
        code: 'darkblue',
        img: './img/air2.png'
      }
    ]
  },
  {
    id: 2,
    title: 'Air Jordan',
    price: 149,
    colors: [
      {
        code: 'lightgray',
        img: './img/jordan.png'
      },
      {
        code: 'green',
        img: './img/jordan2.png'
      }
    ]
  },
  {
    id: 3,
    title: 'Blazer',
    price: 109,
    colors: [
      {
        code: 'lightgray',
        img: './img/blazer.png'
      },
      {
        code: 'green',
        img: './img/blazer2.png'
      }
    ]
  },
  {
    id: 4,
    title: 'Crater',
    price: 129,
    colors: [
      {
        code: 'black',
        img: './img/crater.png'
      },
      {
        code: 'lightgray',
        img: './img/crater2.png'
      }
    ]
  },
  {
    id: 5,
    title: 'Hippie',
    price: 99,
    colors: [
      {
        code: 'gray',
        img: './img/hippie.png'
      },
      {
        code: 'black',
        img: './img/hippie2.png'
      }
    ]
  }
];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');

let chosenProduct = products[0];

// event bubbling can be done here but it's only 5 elemets.
menuItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    sliderWrapper.style.transform = `translateX(${-100 * idx}vw)`;

    chosenProduct = products[idx];

    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = `$${chosenProduct.price}`;
    currentProductImg.src = chosenProduct.colors[0].img;

    currentProductColors.forEach((color, idx) => {
      color.style.backgroundColor = chosenProduct.colors[idx].code;
    });
  });
});

currentProductColors.forEach((color, idx) => {
  color.addEventListener('click', () => {
    currentProductImg.src = chosenProduct.colors[idx].img;
  });
});

let isChecked = false;
currentProductSizes.forEach((size, idx) => {
  size.addEventListener('click', () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = 'white';
      size.style.color = 'black';
    });

    size.style.backgroundColor = 'black';
    size.style.color = 'white';
  });
});
