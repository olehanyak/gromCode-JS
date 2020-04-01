
const onceClick = document.querySelector('.single-use-btn');

const myClickHandler = () => {
    console.log('clicked')
};

onceClick.addEventListener('click', myClickHandler, {
    once: true,
});