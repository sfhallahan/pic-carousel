const slider = document.querySelector('.slider')
const nextButton = document.querySelector('#next')
const backButton = document.querySelector('#back')
const carouselItems = document.querySelectorAll('.carousel__item')
const thumbnails = document.querySelectorAll('.thumbnail__item')

let currentIndex = 0;


function slide() {
    let nextIndex = currentIndex;
    if(this.id === "next") {
        nextIndex = currentIndex + 1;
    } else if(this.id === "back") {
        nextIndex = currentIndex - 1;
    } else {
        nextIndex = parseInt(this.dataset.index)
    }

    slider.style.transform = `translate3d(${(nextIndex)* (-720)}px, 0px, 0px)`;
    currentIndex = nextIndex;
    checkFirstOrLast();
    highlightThumbnail();
}

function checkFirstOrLast() {
    if(currentIndex === 0) {
        backButton.style.display = 'none';
        nextButton.style.display = 'block';
    } else if (currentIndex === carouselItems.length - 1) {
        nextButton.style.display = 'none';
        backButton.style.display = 'block';
    } else {
        nextButton.style.display = 'block';
        backButton.style.display = 'block';
    }
}

function highlightThumbnail() {
    thumbnails.forEach(thumbnail => {
        console.log(thumbnail.dataset.index)
        currentIndex === parseInt(thumbnail.dataset.index) 
            ? thumbnail.classList.add('thumbnail__item--active') 
            : thumbnail.classList.remove('thumbnail__item--active') 
    })
}

nextButton.addEventListener('click', slide);
backButton.addEventListener('click', slide);
thumbnails.forEach(thumbnail => thumbnail.addEventListener('click', slide))



checkFirstOrLast()
highlightThumbnail()