const sliderWrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

const handleSlider = () => {
  menuItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      sliderWrapper.style.transform = `translateX(${-100 * idx}vw)`;
    });
  });
};

const main = () => {
  handleSlider();
};

main();
