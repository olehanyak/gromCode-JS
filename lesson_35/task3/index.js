import { fetchUserData, fetchRepositories } from './gateways';
import { renderUserData } from './user';
import { renderRepos, cleanReposList } from './repos';
import { showSpinner, hideSpinner } from './spinner';

const defaultUser = {
    avatar_url: 'https:avatars3.githubusercontent.com/u10001',
    name: '',
    location: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
    showSpinner();
    cleanReposList();
    const userName = userNameInputElem.value;
    console.log(userName);
    fetchUserData(userName)
        .then(userData => {
            renderUserData(userData)
            return userData.repos_url;
        })
        .then(url => fetchRepositories(url))
        .then(reposList => {
            renderRepos(reposList);
        })
        .catch(err => {
            alert(err.massage);
        })
        .finally(() => {
            hideSpinner();
        });
};

showUserBtnElem.addEventListener('click', onSearchUser);