(()=>{"use strict";var e=document.querySelector(".root"),t=document.querySelector(".profile__name"),n=document.querySelector(".profile__description"),o=document.querySelector(".profile__avatar-image"),r=document.forms.editForm,a=r.elements.inputName,c=r.elements.inputDescription,i=document.forms.addForm,u=i.elements.inputPlace,s=i.elements.inputLink,l=i.elements.popupSave,d=popupImage.querySelector(".popup__image"),p=popupImage.querySelector(".popup__image-text"),m=document.querySelector("#elementTemplate").content,f=document.querySelector(".elements__list"),v=document.querySelector("#popupDeleteImage"),_=document.querySelector("#popupAdd"),h=document.querySelector("#popupEdit"),y=h.querySelector(".popup__close"),S=h.querySelector(".popup__save"),g=document.forms.avatarEditForm,E=g.elements.popupSave,k=document.querySelector("#popupAvatarEdit"),q=k.querySelector(".popup__close"),L={formSelector:".popup__form",inputSelector:".popup__input",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active",inactiveButtonClass:"popup__save_inactive"},C={},b=function(e){return document.querySelector(".".concat(e.id,"-error"))},j=function(e,t,n){A(e)?(t.disabled=!0,t.classList.add(n)):(t.disabled=!1,t.classList.remove(n))},A=function(e){return e.some((function(e){return!e.validity.valid}))},P=function(e,t,n,o,r,a){var c=Array.from(e.querySelectorAll(o));c.forEach((function(e){!function(e,t,n,o,r,a){e.classList.remove(o),t.textContent="",t.classList.remove(r),n.disabled=!1,n.classList.remove(a)}(e,b(e),t,r,a,n)})),j(c,t,n)},x=function(e){e.reset()},w=function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()},T=function(e,t,n){e.setAttribute(t,n)},z=function(e){e.classList.add("popup_opened"),document.addEventListener("keydown",I)},D=function(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",I)},I=function(e){"Escape"===e.key&&D(document.getElementById("".concat(e.target.dataset.typePopup)))},O=function(e,t){t?(e.textContent="Сохранение...",e.classList.add("popup__save_saving")):(e.textContent="Сохранить",e.classList.remove("popup__save_saving"))},B=function(t,n){var o,r;return o=m.querySelector(".element").cloneNode(!0),t._id&&T(o,"data-id","".concat(t._id)),o.querySelector(".element__name").textContent=t.name,(r=o.querySelector(".element__image")).src=t.link,r.alt="".concat(t.name,"."),r.addEventListener("click",(function(){T(e,"data-type-popup","popupImage"),z(popupImage),d.src=t.link,d.alt="".concat(t.name,"."),p.textContent=t.name})),t.hasOwnProperty("owner")&&t.owner.hasOwnProperty("_id")?t.owner._id!==n._id?o.querySelector(".element__remove").classList.add("element__remove_inactive"):t.owner._id===n._id&&o.querySelector(".element__remove").addEventListener("click",N):o.querySelector(".element__remove").addEventListener("click",N),t._id&&T(o.querySelector(".element__like"),"data-id","".concat(t._id)),o.querySelector(".element__like").addEventListener("click",F),t.hasOwnProperty("likes")?o.querySelector(".element__like-amount").textContent=t.likes.length:o.querySelector(".element__like-amount").textContent=0,o},N=function(e){T(v,"data-id","".concat(e.target.offsetParent.dataset.id)),z(v)},F=function(e){var t;e.target.classList.contains("element__like_active")?(function(e){return fetch("https://mesto.nomoreparties.co/v1/plus-cohort-15/cards/likes/".concat(e),{method:"DELETE",headers:{authorization:"901b5f54-a3c1-49a6-b698-d1aa30508c91"}})}(e.target.dataset.id).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){M(e)})).catch((function(e){console.log(e)})),J(e.target)):((t=e.target.dataset.id,fetch("https://mesto.nomoreparties.co/v1/plus-cohort-15/cards/likes/".concat(t),{method:"PUT",headers:{authorization:"901b5f54-a3c1-49a6-b698-d1aa30508c91"}})).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){M(e)})).catch((function(e){console.log(e)})),J(e.target))},J=function(e){e.classList.toggle("element__like_active")},M=function(e){f.querySelectorAll(".element").forEach((function(t){t.dataset.id===e._id&&(t.querySelector(".element__like-amount").textContent=e.likes.length)}))},G=document.querySelector(".profile__edit"),H=document.querySelector(".profile__add"),U=document.querySelector("#popupAdd"),K=U.querySelector(".popup__close"),Q=document.querySelector("#popupImage"),R=Q.querySelector(".popup__close"),V=document.querySelectorAll(".popup"),W=v.querySelector(".popup__close"),X=document.forms.deleteForm,Y=document.querySelector(".profile__avatar");fetch("https://mesto.nomoreparties.co/v1/plus-cohort-15/users/me",{method:"GET",headers:{authorization:"901b5f54-a3c1-49a6-b698-d1aa30508c91"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){!function(e,t){var n;for(n in e)t[n]=e[n]}(e,C),function(e,t,n,o){t.textContent=e.name,n.textContent=e.about,o.src=e.avatar}(C,t,n,o)})).catch((function(e){console.log(e)})),fetch("https://mesto.nomoreparties.co/v1/plus-cohort-15/cards",{method:"GET",headers:{authorization:"901b5f54-a3c1-49a6-b698-d1aa30508c91"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){console.log(e),e.forEach((function(e){var t;f.append(B(e,C)),(t=e).likes.forEach((function(e){e._id===C._id&&f.querySelectorAll(".element").forEach((function(e){e.dataset.id===t._id&&e.querySelector(".element__like").classList.add("element__like_active")}))}))}))})).catch((function(e){console.log(e)})),G.addEventListener("click",(function(){var e,o,i;e=t,o=n,i=c,a.value=e.textContent,i.value=o.textContent,P(r,S,L.inactiveButtonClass,L.inputSelector,L.inputErrorClass,L.errorClass),z(h)})),y.addEventListener("click",(function(){D(h)})),r.addEventListener("submit",(function(e){var o,r;e.preventDefault(),t.textContent=a.value,n.textContent=c.value,(o=a.value,r=c.value,fetch("https://mesto.nomoreparties.co/v1/plus-cohort-15/users/me",{method:"PATCH",headers:{authorization:"901b5f54-a3c1-49a6-b698-d1aa30508c91","Content-Type":"application/json"},body:JSON.stringify({name:"".concat(o),about:"".concat(r)})})).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)})).finally((function(){O(S,!1),D(h)})),O(S,!0)})),H.addEventListener("click",(function(){x(i),P(i,l,L.inactiveButtonClass,L.inputSelector,L.inputErrorClass,L.errorClass),z(U)})),K.addEventListener("click",(function(){D(U)})),i.addEventListener("submit",(function(e){var t,n,o,r,a,c;e.preventDefault(),(t=w(u.value),n=s.value,fetch("https://mesto.nomoreparties.co/v1/plus-cohort-15/cards",{method:"POST",headers:{authorization:"901b5f54-a3c1-49a6-b698-d1aa30508c91","Content-Type":"application/json"},body:JSON.stringify({name:"".concat(t),link:"".concat(n)})})).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){T(f.firstElementChild,"data-id","".concat(e._id)),T(f.firstElementChild.querySelector(".element__like"),"data-id","".concat(e._id))})).catch((function(e){console.log(e)})).finally((function(){O(l,!1),D(_)})),r=u.value,a=s.value,(c={}).name=w(r),c.link=a,o=c,f.prepend(B(o,C)),O(l,!0)})),R.addEventListener("click",(function(){D(Q),d.src=""})),W.addEventListener("click",(function(){D(v)})),V.forEach((function(e){return function(e){e.addEventListener("click",(function(e){e.target.classList.contains("popup")&&D(window[e.target.id])}))}(e)})),X.addEventListener("submit",(function(e){var t,n,o;e.preventDefault(),(t=e.path[2].dataset.id,fetch("https://mesto.nomoreparties.co/v1/plus-cohort-15/cards/".concat(t),{method:"DELETE",headers:{authorization:"901b5f54-a3c1-49a6-b698-d1aa30508c91"}})).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)})),n=f,o=e.path[2].dataset.id,n.querySelectorAll(".element").forEach((function(e){e.dataset.id===o&&e.remove()})),D(v)})),Y.addEventListener("click",(function(){x(g),P(g,E,L.inactiveButtonClass,L.inputSelector,L.inputErrorClass,L.errorClass),T(e,"data-type-popup","popupAvatarEdit"),z(k)})),q.addEventListener("click",(function(){D(k)})),g.addEventListener("submit",(function(e){var t;e.preventDefault(),(t=e.target[0].value,fetch("https://nomoreparties.co/v1/plus-cohort-15/users/me/avatar",{method:"PATCH",headers:{authorization:"901b5f54-a3c1-49a6-b698-d1aa30508c91","Content-Type":"application/json"},body:JSON.stringify({avatar:t})})).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){o.src=e.avatar})).catch((function(e){console.log(e)})).finally((function(){O(E,!1),D(k)})),O(E,!0)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){var n,o,r,a,c,i,u;n=t,o=t.elements.popupSave,r=e.inputSelector,a=e.inputErrorClass,c=e.errorClass,i=e.inactiveButtonClass,(u=Array.from(n.querySelectorAll(r))).forEach((function(e){e.addEventListener("input",(function(e){var t,n=b(e.target),r=0===(t=e.target).value.length?"Вы пропустили это поле.":t.value.length>=1&&t.value.length<t.getAttribute("minlength")?"Минимальное количество символов: ".concat(t.getAttribute("minlength"),". Длина текста сейчас: ").concat(t.value.length," символ."):t.validity.patternMismatch?t.dataset.errorMessage:"url"===t.type?t.validationMessage:void 0;!function(e,t,n,o,r){e.validity.valid?function(e,t,n,o){e.classList.remove(n),t.textContent="",t.classList.remove(o)}(e,t,o,r):function(e,t,n,o,r){e.classList.add(o),t.textContent=n,t.classList.add(r)}(e,t,n,o,r)}(e.target,n,r,a,c),j(u,o,i)}))}))}))}(L)})();