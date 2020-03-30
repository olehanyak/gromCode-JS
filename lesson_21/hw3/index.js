function getTitle() {
    const getContent = document.querySelector('.title');
    // console.log(getContent.textContent);
    return getContent.textContent;
};

getTitle();

function getDescription() {
    const getContent = document.querySelector('.about');
    // console.log(getContent.innerText);
    return getContent.innerText;
};

getDescription();

function getPlans() {
    const getContent = document.querySelector('.plans');
    // console.log(getContent.innerHTML);
    return getContent.innerHTML;
};

getPlans();

function getGoal() {
    const getContent = document.querySelector('.goal');
    // console.log(getContent.outerHTML);
    return getContent.outerHTML;
};

getGoal();

export { getTitle, getDescription, getPlans, getGoal };