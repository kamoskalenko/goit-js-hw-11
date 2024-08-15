import{i as c,S as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(s){const r=`https://pixabay.com/api/?${new URLSearchParams({key:"",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(r).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}const d=document.querySelector(".gallery");function p(s){const o=s.hits.map(r=>`
          <div class="image-card">
              <a href="${r.largeImageURL}" class="link">
                  <img src="${r.webformatURL}" alt="${r.tags}" width=640 height=360>
              </a>
              <div class="info">
                  <p><span>Likes</span> ${r.likes}</p>
                  <p><span>Views</span> ${r.views}</p>
                  <p><span>Comments</span> ${r.comments}</p>
                  <p><span>Downloads</span> ${r.downloads}</p>
              </div>
          </div>
      `).join("");d.innerHTML=o}c.settings({maxWidth:500,timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",onOpening:function(){console.log("callback abriu!")},onClosing:function(){console.log("callback fechou!")}});const h=document.querySelector(".gallery"),m=document.querySelector(".search-form"),l=document.querySelector(".loader");let a=null;function y(){l.classList.add("is-active")}function g(){l.classList.remove("is-active")}m.addEventListener("submit",L);function L(s){y(),s.preventDefault();const o=s.currentTarget,r=o.elements.query.value.trim().toLowerCase();f(r).then(n=>{if(r===""||n.hits.length===0)throw new Error;p(n),a?a.refresh():a=new u(".gallery a")}).catch(w).finally(()=>{o.reset(),g()})}function w(s){h.innerHTML="",c.error({message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
