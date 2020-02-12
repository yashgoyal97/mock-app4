import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import './dashboard-page.js';

setPassiveTouchGestures(true);
setRootPath(MyAppGlobals.rootPath);


/**
 * @customElement
 * @polymer
 */
class MockApp4App extends PolymerElement {
  static get template() {
    return html`
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>     
    <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
      <login-page name="login"></login-page>
      <dashboard-page name="dashboard" id="dashboard"></dashboard-page>
      <doctor-page name="doctor"></doctor-page>
      <landing-page name="landing"></landing-page>
      <slot-page name="slot"></slot-page>
      <view404-page name='view404'></view404-page>
    </iron-pages>
    `;
  }
  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object,
      userData: Object,
      accountData: {
        type: Array
      }
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  ready() {
    super.ready()
    this.addEventListener('refresh-dashboard', function (event) {
      this.$.dashboard._handleUserLogIn();
    });
    this.addEventListener('new-slot', function (event) {
      this.$.dashboard._handleUserLogIn();
    });
  }

  /**
   * 
   * @param {String} page 
   */
  _routePageChanged(page) {
    console.log(page)
    if (!page) {
      this.page = 'login';
    } else if (['login', 'dashboard', 'doctor', 'slot', 'landing'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }
  }

  /**
   * 
   * @param {String} page 
   */
  _pageChanged(page) {
    console.log(page)
    switch (page) {
      case 'login':
        import('./login-page.js');
        break;
      case 'dashboard':
        import('./dashboard-page.js');
        break;
      case 'doctor':
        import('./doctor-page.js');
        break;
      case 'slot':
        import('./slot-page.js');
        break;
      case 'landing':
        import('./landing-page.js');
        break;
      case 'view404':
        import('./view404-page.js');
        break;
    }
  }
}

window.customElements.define('mock-app4-app', MockApp4App);
