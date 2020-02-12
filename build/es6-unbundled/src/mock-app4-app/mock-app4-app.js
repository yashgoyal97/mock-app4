define(["require","../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/polymer/lib/utils/settings.js","../../node_modules/@polymer/app-route/app-location.js","../../node_modules/@polymer/app-route/app-route.js","../../node_modules/@polymer/iron-pages/iron-pages.js","./dashboard-page.js"],function(_require,_polymerElement,_settings,_appLocation,_appRoute,_ironPages,_dashboardPage){"use strict";_require=babelHelpers.interopRequireWildcard(_require);(0,_settings.setPassiveTouchGestures)(!0/* ignoreName */ /* skipSlots */);(0,_settings.setRootPath)(MyAppGlobals.rootPath);/**
 * @customElement
 * @polymer
 */class MockApp4App extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]" use-hash-as-path></app-location>
    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>     
    <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
      <login-page name="login"></login-page>
      <dashboard-page name="dashboard" id="dashboard"></dashboard-page>
      <view404-page name='view404'></view404-page>
    </iron-pages>
    `}static get properties(){return{page:{type:String,reflectToAttribute:!0,observer:"_pageChanged"},routeData:Object,subroute:Object,userData:Object,accountData:{type:Array}}}static get observers(){return["_routePageChanged(routeData.page)"]}ready(){super.ready();this.addEventListener("refresh-dashboard",function(event){console.log(sessionStorage.getItem("doctorId"),"main");console.log(sessionStorage.getItem("doctorName"),"main");this.$.dashboard._handleUserLogIn()})}/**
   * 
   * @param {String} page 
   */_routePageChanged(page){if(!page){this.page="login"}else if(-1!==["login","dashboard"].indexOf(page)){this.page=page}else{this.page="view404"}}/**
   * 
   * @param {String} page 
   */_pageChanged(page){switch(page){case"login":new Promise((res,rej)=>_require.default(["./login-page.js"],res,rej));break;case"dashboard":new Promise((res,rej)=>_require.default(["./dashboard-page.js"],res,rej));break;case"view404":new Promise((res,rej)=>_require.default(["./view404-page.js"],res,rej));break;}}}window.customElements.define("mock-app4-app",MockApp4App)});