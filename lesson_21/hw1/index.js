const getTitleElement = () => {
    let titleElem = document.querySelector('.title');
    console.dir(titleElem);
};

getTitleElement();


const getInputElement = () => {
    const inputElem = document.querySelector('input').getAttribute('type');
    console.dir(inputElem);
};

getInputElement();

export { getTitleElement, getInputElement };