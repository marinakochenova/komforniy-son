// табы

let tabsBtn = document.querySelectorAll('.tab');
let tabsItem = document.querySelectorAll('.tab-content');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    tabsBtn.forEach(function(btn){ btn.classList.remove('tab--active')});
    e.currentTarget.classList.add('tab--active');
 
    tabsItem.forEach(function(element){ element.classList.remove('tab-content--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content--active');
  });
});

// swiper

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,
  effect: 'coverflow',
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  clickable: true,
  autoHeight: true,

});

// popup

let btnPopup = document.querySelector('.close');
let popup = document.querySelector('#popup');
let btnCard = document.querySelectorAll('.item__btn');


btnCard.forEach(element => {
  element.addEventListener('click', function() {
    popup.classList.toggle('popup--active');
    document.body.classList.toggle('stop-scroll');
})}),

btnPopup.addEventListener('click', 

function() {
    popup.classList.remove('popup--active');
    document.body.classList.remove('stop-scroll');

})

$(document).ready(function() {
  $('div.item__button').click( function(event){
      $('.pop-name').text($(this).siblings('.item__name').text());
      $('.pop-img').text($(this).siblings('.item__img').text());
      $('.oldprice').text($(this).siblings('.item__prices').find('.item__price-old').text())
      $('.newprice').text($(this).siblings('.item__prices').find('.item__price-new').text())
      $('.pop-sp').text($(this).siblings('.tabs__text').text())
      $('.pop-img').attr('src', $('.item__img').attr('src'));
    


  });
});





  

