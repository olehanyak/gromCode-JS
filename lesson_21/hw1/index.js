export const getTitleElement = () => {
    let titleElem = document.querySelector('.title');
    console.dir(titleElem);
    return titleElem;
};

// getTitleElement();


export const getInputElement = () => {
    const inputElem = document.querySelector('input').getAttribute('type');
    console.dir(inputElem);
    return inputElem;
};

// getInputElement();

// export { getTitleElement, getInputElement };
