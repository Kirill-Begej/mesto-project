import '../pages/index.css';
import * as constants from './constants.js';
import Api from './Api.js';
import Card from './Card.js';

let idUser;

const api = new Api(constants.config);

Promise.all([api.getUserInformation(), api.getInitialCards()])
  .then(([userData, cards]) => {
    idUser = userData._id;

    cards.forEach(el => {
      const cardElement = new Card({
          data: el,
          idUser: idUser,
          putLike: (el) => {
            api.addLikeCard(el)
              .then((res) => {
                cardElement.like(res.likes);
              })
          },
          deleteLike: (el) => {
            api.deleteLikeCard(el)
              .then((res) => {
                cardElement.like(res.likes);
              })
          },
          deleteCard: (el, cardId) => {
            api.deleteCard(cardId)
              .then(() => {
                el.remove();
              })
          }
        },'element');
      const card = cardElement.renderer();
      document.querySelector('.elements__list').append(card);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// api.addNewCard('forest', 'https://img.desktopwallpapers.ru/rocks/pics/wide/1920x1200/27640f370156a0e0ae3ee9608fc8480a.jpg')
//   .then((res) => {
//     console.log(res);
//   })
