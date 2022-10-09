(()=>{"use strict";var e=document.querySelector(".root"),t=document.querySelector(".profile__name"),n=document.querySelector(".profile__description"),o=document.querySelector(".profile__avatar-image"),r=document.forms.editForm,a=r.elements.inputName,c=r.elements.inputDescription,i=document.forms.addForm,u=i.elements.inputPlace,l=i.elements.inputLink,s=i.elements.popupSave,d=popupImage.querySelector(".popup__image"),p=popupImage.querySelector(".popup__image-text"),m=document.querySelector("#elementTemplate").content,f=document.querySelector(".elements__list"),v=document.querySelector("#popupDeleteImage"),_=document.querySelector("#popupAdd"),h=document.querySelector("#popupEdit"),y=(h.querySelector(".popup__close"),h.querySelector(".popup__save")),S=document.forms.avatarEditForm,g=S.elements.popupSave,E=document.querySelector("#popupAvatarEdit"),q=(E.querySelector(".popup__close"),{formSelector:".popup__form",inputSelector:".popup__input",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active",inactiveButtonClass:"popup__save_inactive"}),C={},L=function(e){return document.querySelector(".".concat(e.id,"-error"))},k=function(e,t,n){b(e)?(t.disabled=!0,t.classList.add(n)):(t.disabled=!1,t.classList.remove(n))},b=function(e){return e.some((function(e){return!e.validity.valid}))},A=function(e,t,n,o,r,a){var c=Array.from(e.querySelectorAll(o));c.forEach((function(e){!function(e,t,n,o,r,a){e.classList.remove(o),t.textContent="",t.classList.remove(r),n.disabled=!1,n.classList.remove(a)}(e,L(e),t,r,a,n)})),k(c,t,n)},x=function(e){e.reset()},w="https://mesto.nomoreparties.co/v1/plus-cohort-15",P="901b5f54-a3c1-49a6-b698-d1aa30508c91",T="application/json",O=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},z=function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()},D=function(e,t,n){e.setAttribute(t,n)},I=function(e){e.classList.add("popup_opened"),document.addEventListener("keydown",B)},j=function(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",B)},B=function(e){"Escape"===e.key&&j(document.querySelector("#".concat(document.querySelector('[data-type-popup="'.concat(e.target.dataset.typePopup,'"')).dataset.typePopup)))},N=function(e,t){t?(e.textContent="Сохранение...",e.classList.add("popup__save_saving")):(e.textContent="Сохранить",e.classList.remove("popup__save_saving"))},F=function(t,n){var o=m.querySelector(".element").cloneNode(!0),r=o.querySelector(".element__image");return t._id&&D(o,"data-id","".concat(t._id)),o.querySelector(".element__name").textContent=t.name,r.src=t.link,r.alt="".concat(t.name,"."),r.addEventListener("click",(function(){D(e,"data-type-popup","popupImage"),I(popupImage),d.src=t.link,d.alt="".concat(t.name,"."),p.textContent=t.name})),t.hasOwnProperty("owner")&&t.owner.hasOwnProperty("_id")?t.owner._id!==n._id?o.querySelector(".element__remove").classList.add("element__remove_inactive"):t.owner._id===n._id&&o.querySelector(".element__remove").addEventListener("click",M):o.querySelector(".element__remove").addEventListener("click",M),t._id&&D(o.querySelector(".element__like"),"data-id","".concat(t._id)),o.querySelector(".element__like").addEventListener("click",J),t.hasOwnProperty("likes")?o.querySelector(".element__like-amount").textContent=t.likes.length:o.querySelector(".element__like-amount").textContent=0,o},M=function(e){D(v,"data-id","".concat(e.target.offsetParent.dataset.id)),I(v)},J=function(e){var t;e.target.classList.contains("element__like_active")?function(e){return fetch("".concat(w,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:P}}).then(O)}(e.target.dataset.id).then((function(t){G(t),U(e.target)})).catch((function(e){console.log(e)})):(t=e.target.dataset.id,fetch("".concat(w,"/cards/likes/").concat(t),{method:"PUT",headers:{authorization:P}}).then(O)).then((function(t){G(t),U(e.target)})).catch((function(e){console.log(e)}))},U=function(e){e.classList.toggle("element__like_active")},G=function(e){f.querySelectorAll(".element").forEach((function(t){t.dataset.id===e._id&&(t.querySelector(".element__like-amount").textContent=e.likes.length)}))};function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var $=document.querySelector(".profile__edit"),K=document.querySelector(".profile__add"),Q=document.querySelector("#popupAdd"),R=document.querySelectorAll(".popup"),V=document.forms.deleteForm,W=document.querySelector(".profile__avatar");Promise.all([fetch("".concat(w,"/users/me"),{method:"GET",headers:{authorization:P}}).then(O),fetch("".concat(w,"/cards"),{method:"GET",headers:{authorization:P}}).then(O)]).then((function(e){var r,a,c=(a=2,function(e){if(Array.isArray(e))return e}(r=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw r}}return a}}(r,a)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(r,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=c[0],u=c[1];!function(e,t){var n;for(n in e)t[n]=e[n]}(i,C),function(e,t,n,o){t.textContent=e.name,n.textContent=e.about,o.src=e.avatar}(C,t,n,o),u.forEach((function(e){var t;f.append(F(e,C)),(t=e).likes.forEach((function(e){e._id===C._id&&f.querySelectorAll(".element").forEach((function(e){e.dataset.id===t._id&&e.querySelector(".element__like").classList.add("element__like_active")}))}))}))})).catch((function(e){console.log(e)})),$.addEventListener("click",(function(){var e,o,i;e=t,o=n,i=c,a.value=e.textContent,i.value=o.textContent,A(r,y,q.inactiveButtonClass,q.inputSelector,q.inputErrorClass,q.errorClass),I(h)})),R.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup__close")&&j(e)}))})),r.addEventListener("submit",(function(e){var o,r;e.preventDefault(),(o=a.value,r=c.value,fetch("".concat(w,"/users/me"),{method:"PATCH",headers:{authorization:P,"Content-Type":T},body:JSON.stringify({name:"".concat(o),about:"".concat(r)})}).then(O)).then((function(){t.textContent=a.value,n.textContent=c.value,j(h)})).catch((function(e){console.log(e)})).finally((function(){N(y,!1)})),N(y,!0)})),K.addEventListener("click",(function(){x(i),A(i,s,q.inactiveButtonClass,q.inputSelector,q.inputErrorClass,q.errorClass),I(Q)})),i.addEventListener("submit",(function(e){var t,n;e.preventDefault(),(t=z(u.value),n=l.value,fetch("".concat(w,"/cards"),{method:"POST",headers:{authorization:P,"Content-Type":T},body:JSON.stringify({name:"".concat(t),link:"".concat(n)})}).then(O)).then((function(e){var t,n,o,r;n=u.value,o=l.value,(r={}).name=z(n),r.link=o,t=r,f.prepend(F(t,C)),D(f.firstElementChild,"data-id","".concat(e._id)),D(f.firstElementChild.querySelector(".element__like"),"data-id","".concat(e._id)),j(_)})).catch((function(e){console.log(e)})).finally((function(){N(s,!1)})),N(s,!0)})),R.forEach((function(e){return function(e){e.addEventListener("click",(function(e){e.target.classList.contains("popup")&&j(window[e.target.id])}))}(e)})),V.addEventListener("submit",(function(e){var t;e.preventDefault(),(t=e.path[2].dataset.id,fetch("".concat(w,"/cards/").concat(t),{method:"DELETE",headers:{authorization:P}}).then(O)).then((function(){var t,n;t=f,n=e.path[2].dataset.id,t.querySelectorAll(".element").forEach((function(e){e.dataset.id===n&&e.remove()})),j(v)})).catch((function(e){console.log(e)}))})),W.addEventListener("click",(function(){x(S),A(S,g,q.inactiveButtonClass,q.inputSelector,q.inputErrorClass,q.errorClass),D(e,"data-type-popup","popupAvatarEdit"),I(E)})),S.addEventListener("submit",(function(e){var t;e.preventDefault(),(t=e.target[0].value,fetch("".concat(w,"/users/me/avatar"),{method:"PATCH",headers:{authorization:P,"Content-Type":T},body:JSON.stringify({avatar:t})}).then(O)).then((function(e){o.src=e.avatar,j(E)})).catch((function(e){console.log(e)})).finally((function(){N(g,!1)})),N(g,!0)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){var n,o,r,a,c,i,u;n=t,o=t.elements.popupSave,r=e.inputSelector,a=e.inputErrorClass,c=e.errorClass,i=e.inactiveButtonClass,(u=Array.from(n.querySelectorAll(r))).forEach((function(e){e.addEventListener("input",(function(e){var t,n=L(e.target),r=0===(t=e.target).value.length?"Вы пропустили это поле.":t.value.length>=1&&t.value.length<t.getAttribute("minlength")?"Минимальное количество символов: ".concat(t.getAttribute("minlength"),". Длина текста сейчас: ").concat(t.value.length," символ."):t.validity.patternMismatch?t.dataset.errorMessage:"url"===t.type?t.validationMessage:void 0;!function(e,t,n,o,r){e.validity.valid?function(e,t,n,o){e.classList.remove(n),t.textContent="",t.classList.remove(o)}(e,t,o,r):function(e,t,n,o,r){e.classList.add(o),t.textContent=n,t.classList.add(r)}(e,t,n,o,r)}(e.target,n,r,a,c),k(u,o,i)}))}))}))}(q)})();