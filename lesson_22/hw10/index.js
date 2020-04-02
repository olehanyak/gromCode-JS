const tasks = [{
        text: 'Buy milk',
        done: false
    },
    {
        text: 'Pick up Tom from airport',
        done: false
    },
    {
        text: 'Visit party',
        done: false
    },
    {
        text: 'Visit doctor',
        done: true
    },
    {
        text: 'Buy meat',
        done: true
    },
];

const renderListItem = listItems => {
    const listElement = document.querySelector('.list');
    listElement.innerHTML = '';

    const listItemsElements = listItems
        .sort((a, b) => a.done - b.done)
        .map(({
            text,
            done
        }) => {
            const listItemElement = document.createElement('li');
            listItemElement.classList.add('list__item');
            if (done) {
                listItemElement.classList.add('list__item_done');
            }
            const checkboxElement = document.createElement('input');
            checkboxElement.setAttribute('type', 'checkbox');
            checkboxElement.checked = done;
            checkboxElement.classList.add('list__item-checkbox');
            listItemElement.append(checkboxElement, text);

            return listItemElement;
        })
    listElement.append(...listItemsElements);
};


const getValueInput = document.querySelector('.task-input');
// console.log(getValueInput.value)

const btn = document.querySelector('.create-task-btn');

function create() {
    tasks.push({
        text: getValueInput.value,
        done: false,
    });
    // const newList = document.createElement('li');
    // newList.classList.add('list__item');

    if (getValueInput.value === '') return false;
    getValueInput.value = '';

    return renderListItem(tasks);
};

btn.addEventListener('click', create);

renderListItem(tasks);