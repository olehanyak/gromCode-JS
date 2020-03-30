export function getTitle() {
    const getContent = document.querySelector('.title');
    console.log(getContent.textContent);
    return getContent.textContent;
};

getTitle();

export function getDescription() {
    const getContent = document.querySelector('.about');
    console.log(getContent.innerText);
    return getContent.innerText;
};

getDescription();

export function getPlans() {
    const getContent = document.querySelector('.plans');
    console.log(getContent.innerHTML);
    return getContent.innerHTML;
};

getPlans();

export function getGoal() {
    const getContent = document.querySelector('.goal');
    console.log(getContent.outerHTML);
    return getContent.outerHTML;
};

getGoal();