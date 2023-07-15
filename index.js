const width = 432;
const widthCustomers = 270;
const count = 4;
const countCustomers = 6;
const list = document.querySelector('.js-list-img');
const listCustomers = document.querySelector('.customers-list');
const listItems = list.querySelectorAll('li');
const listItemsCuctomers = listCustomers.querySelectorAll('li');
let position = 0;
let positionCustomers = 0;
const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');
const secondLeftBtn = document.querySelector('.left-btn');
const secondRightBtn = document.querySelector('.right-btn');

leftBtn.addEventListener('click', onLeftBtnClick);
rightBtn.addEventListener('click', onRightBtnClick);
secondLeftBtn.addEventListener('click', onLeftButtonClick);
secondRightBtn.addEventListener('click', onRightButtonClick);

function onLeftBtnClick() {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
  console.log('left click');
}

function onRightBtnClick() {
  position -= width * count;
  position = Math.max(position, -width * (listItems.length - count));
  list.style.marginLeft = position + 'px';
  console.log('right click');
}

function onLeftButtonClick() {
  positionCustomers += widthCustomers * countCustomers;
  positionCustomers = Math.min(positionCustomers, 0);
  listCustomers.style.marginLeft = positionCustomers + 'px';
  console.log('left click');
}

function onRightButtonClick() {
  positionCustomers -= widthCustomers * countCustomers;
  positionCustomers = Math.max(
    positionCustomers,
    -widthCustomers * (listItemsCuctomers.length - countCustomers)
  );
  listCustomers.style.marginLeft = positionCustomers + 'px';
  console.log('right click');
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const circle = entry.target.querySelector('.circle');

    if (entry.isIntersecting) {
      circle.classList.add('circle-animation');
      return;
    }

    circle.classList.remove('circle-animation');
  });
});

observer.observe(document.querySelector('.circle-wrapper'));
