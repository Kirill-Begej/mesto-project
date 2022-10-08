const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getUserInformation = () => {
  return fetch('https://mesto.nomoreparties.co/v1/plus-cohort-15/users/me', {
    method: 'GET',
    headers: {
      authorization: '901b5f54-a3c1-49a6-b698-d1aa30508c91'
    }
  })
  .then(checkResponse);
};

export const getInitialCards = () => {
  return fetch('https://mesto.nomoreparties.co/v1/plus-cohort-15/cards', {
    method: 'GET',
    headers: {
      authorization: '901b5f54-a3c1-49a6-b698-d1aa30508c91'
    }
  })
  .then(checkResponse);
};

export const changeUserData = (nameUser, aboutUser) => {
  return fetch('https://mesto.nomoreparties.co/v1/plus-cohort-15/users/me', {
    method: 'PATCH',
    headers: {
      authorization: '901b5f54-a3c1-49a6-b698-d1aa30508c91',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: `${nameUser}`,
      about: `${aboutUser}`
    })
  })
  .then(checkResponse);
};

export const addNewCard = (nameImage, linkImage) => {
  return fetch('https://mesto.nomoreparties.co/v1/plus-cohort-15/cards', {
    method: 'POST',
    headers: {
      authorization: '901b5f54-a3c1-49a6-b698-d1aa30508c91',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: `${nameImage}`,
      link: `${linkImage}`
    })
  })
  .then(checkResponse);
};

export const deleteCard = (cardId) => {
  return fetch(`https://mesto.nomoreparties.co/v1/plus-cohort-15/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: '901b5f54-a3c1-49a6-b698-d1aa30508c91'
    }
  })
  .then(checkResponse);
};

export const addLikeCard = (cardId) => {
  return fetch(`https://mesto.nomoreparties.co/v1/plus-cohort-15/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: '901b5f54-a3c1-49a6-b698-d1aa30508c91'
    }
  })
  .then(checkResponse);
};

export const deleteLikeCard = (cardId) => {
  return fetch(`https://mesto.nomoreparties.co/v1/plus-cohort-15/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: '901b5f54-a3c1-49a6-b698-d1aa30508c91'
    }
  })
  .then(checkResponse);
};

export const updateAvatar = (avatarLink) => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-15/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: '901b5f54-a3c1-49a6-b698-d1aa30508c91',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: avatarLink
    })
  })
  .then(checkResponse);
};
