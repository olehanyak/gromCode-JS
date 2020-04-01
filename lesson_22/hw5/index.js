const myClickHandler = () => {
    console.log('clicked')
};

const onceClick = document.querySelector('.single-use-btn');

onceClick.addEventListener('click', myClickHandler, {once: true});