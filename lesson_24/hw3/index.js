const tasks = [
    {
        text: "Buy milk",
        done: false,
        startEvent: new Date(),
        endEvent: new Date(),
    },
    {
        text: "Pick up Tom from airport",
        done: false,
        startEvent: new Date(),
        endEvent: new Date(),
    },
    {
        text: "Visit party",
        done: false,
        startEvent: new Date(),
        endEvent: new Date(),
    },
    {
        text: "Visit doctor",
        done: true,
        startEvent: new Date(),
        endEvent: new Date(),
    },
    {
        text: "Buy meat",
        done: true,
        startEvent: new Date(),
        endEvent: new Date(),
    }
];

const renderListItem = listItems => {
    const listElement = document.querySelector(".list");
    listElement.innerHTML = "";

    const listItemsElements = listItems
        .sort((a, b) => {
            if (a.done - b.done !== 0) {
                return a.done - b.done;
            };
            if (a.done) {
                return new Date(b.endEvent) - new Date(a.endEvent);
            };
            return new Date(b.startEvent) - new Date(a.startEvent);
        })
        
        .map(({ text, done }) => {
            const listItemElement = document.createElement("li");
            listItemElement.classList.add("list__item");
            if (done) {
                listItemElement.classList.add("list__item_done");
            }
            const checkboxElement = document.createElement("input");
            checkboxElement.setAttribute("type", "checkbox");
            checkboxElement.checked = done;
            checkboxElement.classList.add("list__item-checkbox");
            listItemElement.append(checkboxElement, text);

            return listItemElement;
        });
listElement.append(...listItemsElements);
};

// --------------------------------------------------------------------------

const getValueInput = document.querySelector(".task-input");
// console.log(getValueInput.value)

const btn = document.querySelector(".create-task-btn");

function createNewTask() {
    tasks.unshift({
        text: getValueInput.value,
        done: false,
        startEvent: new Date(),
        endEvent: new Date(),
    });

    if (getValueInput.value === "") return false;
    getValueInput.value = "";

    return renderListItem(tasks);
};

btn.addEventListener("click", createNewTask);

const choiceList = document.querySelector(".list");

function check(e) {
    const similar = tasks.find(item => item.text === e.target.parentNode.textContent);
    console.log(e.target.parentNode.textContent);
    similar.done = e.target.checked;

    console.log(e.target.checked);
    console.log(similar.done);

    similar.endEvent = similar.done ? new Date() : undefined;

    renderListItem(tasks);
};

choiceList.addEventListener("click", check);

renderListItem(tasks);
// ===============================================




