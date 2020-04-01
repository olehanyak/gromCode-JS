const myClickHandler = () => {
    console.log('clicked')
};

document.querySelector('.single-use-btn').addEventListener('click', myClickHandler, {
    once: true,
});