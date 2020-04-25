var app=function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t),o.d(t,"toogleVisibility",(function(){return v})),o.d(t,"checkPattern",(function(){return w})),o.d(t,"closeModal",(function(){return k}));o(0),o(1);var n=window.CustomEvent;function i(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function a(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function r(e,t){for(var o=0;o<e.length;++o)if(e[o]===t)return!0;return!1}function l(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function s(e){return e.isConnected||document.body.contains(e)}function d(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,o=!1,n=function(){o?this.downgradeModal():this.maybeHideModal(),o=!1}.bind(this),i=function(i){if(i.target===e){var a="DOMNodeRemoved";o|=i.type.substr(0,a.length)===a,window.clearTimeout(t),t=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,i)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}n&&"object"!=typeof n||((n=function(e,t){t=t||{};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),o}).prototype=window.Event.prototype),d.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&s(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),c.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var o=document.createEvent("MouseEvents");o.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(o),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=function e(t){var o=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));o.push('[tabindex]:not([disabled]):not([tabindex=""])');var n=t.querySelector(o.join(", "));if(!n&&"attachShadow"in Element.prototype)for(var i=t.querySelectorAll("*"),a=0;a<i.length&&!(i[a].tagName&&i[a].shadowRoot&&(n=e(i[a].shadowRoot)));a++);return n}(this.dialog_)),a(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!s(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!c.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),o=function(e,o){return!(void 0===t[e]||t[e]===o)};if(t.opacity<1||o("zIndex","auto")||o("transform","none")||o("mixBlendMode","normal")||o("filter","none")||o("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,c.needsCentering(this.dialog_)?(c.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var t=new n("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(t)}};var c={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,o=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,o)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var o=document.styleSheets[t],n=null;try{n=o.cssRules}catch(e){}if(n)for(var i=0;i<n.length;++i){var a=n[i],l=null;try{l=document.querySelectorAll(a.selectorText)}catch(e){}if(l&&r(l,e)){var s=a.style.getPropertyValue("top"),d=a.style.getPropertyValue("bottom");if(s&&"auto"!==s||d&&"auto"!==d)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!c.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new d(e)},registerDialog:function(e){e.showModal||c.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var o=[];t.forEach((function(e){for(var t,n=0;t=e.removedNodes[n];++n)t instanceof Element&&("dialog"===t.localName&&o.push(t),o=o.concat(t.querySelectorAll("dialog")))})),o.length&&e(o)})))}};if(c.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},c.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},c.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,o=0;e=this.pendingDialogStack[o];++o)e.updateZIndex(--t,--t),0===o&&(this.overlay.style.zIndex=--t);var n=this.pendingDialogStack[0];n?(n.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},c.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=i(e);){for(var t,o=0;t=this.pendingDialogStack[o];++o)if(t.dialog===e)return 0===o;e=e.parentElement}return!1},c.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),a(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():e.target!==document.documentElement&&document.documentElement.focus()),!1}},c.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var t=new n("cancel",{bubbles:!1,cancelable:!0}),o=this.pendingDialogStack[0];o&&o.dialog.dispatchEvent(t)&&o.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},c.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},c.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},c.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},c.dm=new c.DialogManager,c.formSubmitter=null,c.useValue=null,void 0===window.HTMLDialogElement){var u=document.createElement("form");if(u.setAttribute("method","dialog"),"dialog"!==u.method){var h=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(h){var g=h.get;h.get=function(){return l(this)?"dialog":g.call(this)};var m=h.set;h.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):m.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",h)}}document.addEventListener("click",(function(e){if(c.formSubmitter=null,c.useValue=null,!e.defaultPrevented){var t=e.target;if(t&&l(t.form)){if(!("submit"===t.type&&["button","input"].indexOf(t.localName)>-1)){if("input"!==t.localName||"image"!==t.type)return;c.useValue=e.offsetX+","+e.offsetY}i(t)&&(c.formSubmitter=t)}}}),!1);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!l(this))return f.call(this);var e=i(this);e&&e.close()},document.addEventListener("submit",(function(e){if(!e.defaultPrevented){var t=e.target;if(l(t)){e.preventDefault();var o=i(t);if(o){var n=c.formSubmitter;n&&n.form===t?o.close(c.useValue||n.value):o.close(),c.formSubmitter=null}}}}),!1)}var p=c;function v(e,t){e.checked?document.getElementById(t).style.visibility="visible":document.getElementById(t).style.visibility="hidden"}function b(e){return e.toLowerCase()!=e.toUpperCase()}function y(e){return!isNaN(parseInt(e))}function _(e){return e.split("").reverse().join("")}function w(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=e.value;if(!(o.trim().length<1)){var n=e.dataset.pattern;if(o.length>n.length)e.value=o.substring(0,n.length);else{t&&(o=_(o)),t&&(n=_(n));for(var i=0;i<o.length;i+=1){var a=n.charAt(i),r=o.charAt(i);"D"===a?y(r)||(o=o.substring(0,i)+o.substring(i+1,o.length)):"W"===a?b(r)||(o=o.substring(0,i)+o.substring(i+1,o.length)):" "===a&&" "!==r&&(o=o.substring(0,i)+" "+o.substring(i,o.length))}e.value=t?_(o):o}}}function E(){if(document.getElementById("checkbox-savedata").checked){var e=this.dataset.savestate;e&&localStorage.setItem(e,this.value)}}function k(e){e.parentElement.parentElement.close()}document.getElementById("btn-settings").addEventListener("click",(function(){document.getElementById("dialog-settings").showModal()})),document.getElementById("btn-info").addEventListener("click",(function(){document.getElementById("dialog-about").showModal()})),document.getElementById("btn-clearstorage").addEventListener("click",(function(){document.querySelectorAll("[data-savestate]").forEach((function(e){e.value="",localStorage.removeItem(e.dataset.savestate)})),alert("Os dados foram removidos com sucesso!")})),document.getElementById("x-adjust").onchange=function(){document.documentElement.style.setProperty("--offset-x","".concat(this.value,"mm")),localStorage.setItem("x",this.value)},document.getElementById("y-adjust").onchange=function(){document.documentElement.style.setProperty("--offset-y","".concat(this.value,"mm")),localStorage.setItem("y",this.value)},document.getElementById("checkbox-savedata-settings").addEventListener("change",(function(e){document.getElementById("checkbox-savedata").checked=e.target.checked})),document.getElementById("checkbox-savedata").addEventListener("change",(function(e){document.getElementById("checkbox-savedata-settings").checked=e.target.checked})),function(){-1===navigator.userAgent.indexOf("AppleWebKit")&&(document.getElementById("warning-chrome").style.display="block"),document.querySelectorAll("[data-savestate]").forEach((function(e){e.value=localStorage.getItem(e.dataset.savestate),e.addEventListener("change",E)})),document.getElementById("x-adjust").value=null===localStorage.getItem("x")?0:localStorage.getItem("x"),document.getElementById("y-adjust").value=null===localStorage.getItem("y")?0:localStorage.getItem("y");var e=document.querySelector("dialog");p.registerDialog(e),document.getElementById("dialog-about").showModal()}()}]);
//# sourceMappingURL=app.494cd4cf.js.map