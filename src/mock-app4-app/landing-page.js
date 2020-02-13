import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-collapse/iron-collapse.js';
import '@polymer/iron-icons/iron-icons.js';

/**
 * @customElement
 * @polymer
 */
class LandingPage extends PolymerElement {
    static get template() {
        return html`
      <style>

      .container{
        display:grid;
        grid-template-rows:60px auto;
        grid-template-columns:auto;
        grid-template-areas:"h""b";
       
      }
      .header{
          grid-area:h;
          background-color:rgb(0,85,130);
          color:white;
          padding:10px;
      }
      .body{
        grid-area:b;
        padding:10px;
    }
      #searchBar{
          display:flex;
          flex-direction:row;
          justify-content: center;
      }
      #searchBtn{
          height: 30px;
          top: 22px;
      }
      #drDetails{
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        flex-wrap:wrap;
        width:550px;
      }   
      paper-card{
        padding:20px;
        border-radius:5px;
        margin:10px 20px 10px 20px;
        background-color:rgba(0,85,130,0.1);
      }
   
    #view{
        color:white;
        background-color:rgb(48, 133, 48);
        border-radius: 5px;
        height:40px;
    }
    #doctor{
        display:none;
    }
    #category{
        display:none;
    }
    #headerLogo{
        margin:0px;
        position:relative;
        bottom:20px;
        left:50px;
        width:300px;
    }
    #headerAction{
        position:relative;
        bottom:80px;
        left:1100px;
        width:250px;
    }
    #loginButton{
        background-color:white;
        color:black;
        height:58px;
        position:relative;
        bottom:8px;
    }
    paper-input{
        padding:10px 20px 10px 20px;
        border-radius:5px;
        margin:10px 0px 10px 0px;
        background-color:rgba(255,255,255,1);
    }
    #searchBox{
        background-color:rgba(0,0,0,0.1);
        border-radius:2px;
        padding:20px;
    }
    #cardHeader{
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
    }
    #doctorsSearched{
        padding:20px;
    }
      </style>
      <app-location route="{{route}}"></app-location>
           <div class="container">
                <div class='header'>
                    <div id='headerLogo'>
                        <h1 id='logo'>Lifeline Health Care</h1>
                    </div>
                    <div id='headerAction'>
                        <paper-button id='loginButton' on-click='_handleGoToLogin'>DOCTOR PORTAL<iron-icon icon='open-in-new'></iron-icon></paper-button>
                    </div>
                </div>
                
                <div class='body'>
                    <div id='searchBox'>
                        <h3>Search By:</h3>
                        <paper-radio-group id="radio" on-selected-item-changed ="_change" >
                            <paper-radio-button name="doctor">Doctor Name</paper-radio-button>
                            <paper-radio-button name="category">Category</paper-radio-button>
                            <paper-radio-button name="both">Both</paper-radio-button>
                        </paper-radio-group>
                        <paper-input type="search" id="doctor" placeholder="Search By Doctor Name" on-input="_handleSearchByDoctor"><iron-icon icon='search' slot='suffix'></iron-icon></paper-input>
                        <paper-input type="search" id="category" placeholder="Search By Category" on-input="_handleSearchByCategory"><iron-icon icon='search' slot='suffix'></iron-icon></paper-input>
                    </div>

                    <div id='doctorsSearched'>
                        <h1>Doctors</h1>
                        <template is="dom-repeat" items={{doctorList}}>
                            <paper-card>
                                <div id='cardHeader'>
                                    <h2>{{item.userName}}</h2><paper-button id="view" raised on-click="_handleViewDoctor">View Slots</paper-button>
                                </div>
                                <hr>
                                <div id="drDetails">
                                    <div>
                                        <h3>Education:{{item.educationQualification}}</h3>
                                        <h3>Category:{{item.categorySpecialist}}</h3>
                                    </div>
                                    <div>
                                        <h3>Years of Experience:{{item.yearsOfExperience}}</h3>
                                        <h3>Ratings:{{item.rating}}</h3>
                                    </div>
                                </div>
                            </paper-card>
                        </template>
                    </div>
                </div>
            </div>
               
            

            <iron-ajax id='ajax' handle-as='json' on-response='_handleResponse' on-error='_handleError' content-type='application/json'></iron-ajax>

      `;
    }

    static get properties() {
        return {
            doctorList: {
                type: Array,
                value: []
            },
            action: {
                type: String,
                value: 'List'
            }
        }
    };

    _handleViewDoctor(event) {
        sessionStorage.setItem('doctorId', event.model.item.userId);
        console.log(event.model.item.userId, "landing")
        this.dispatchEvent(new CustomEvent('refresh-doctor', { detail: {}, bubbles: true, composed: true }));
        // this.set('route.path','#/doctor');
        window.history.pushState({}, null, '#/doctor');
        window.dispatchEvent(new CustomEvent('location-changed'));
    }

    _handleGoToLogin() {
        //this.set('route.path','#/login');
        window.history.pushState({}, null, '#/login');
        window.dispatchEvent(new CustomEvent('location-changed'));
    }

    _change() {
        let radioValue = this.$.radio.selected;
        if (radioValue === 'doctor') {
            this.$.doctor.style.display = 'block';
            this.$.category.style.display = 'none';
        }
        else if (radioValue === 'category') {
            this.$.category.style.display = 'block';
            this.$.doctor.style.display = 'none';
        }
        else if (radioValue === 'both') {
            this.$.category.style.display = 'block';
            this.$.doctor.style.display = 'block';


        }
    }

    _handleCollapse() {
        if (this.$.collapsibleLogout.opened) {
            this.$.collapsibleLogout.opened = false;
        }
        else {
            this.$.collapsibleLogout.opened = true;
        }
    }

    _handleResponse(event) {
        switch (this.action) {
            case 'byDoctor':
                if (event.detail.response.statusCode === 200) {
                    console.log(event.detail.response);
                    this.doctorList = event.detail.response.users;
                }
                else {
                    console.log("handling error");
                }
                break;

            case 'byCategory':
                if (event.detail.response.statusCode === 200) {
                    console.log(event.detail.response);
                    this.doctorList = event.detail.response.users;
                }
                else {
                    console.log("handling error");
                }
                break;
        }
    }


    _handleSearchByDoctor() {
        console.log(this.$.doctor.value)
        let searchDoctorObj = { doctorName: this.$.doctor.value, category: this.$.category.value };
        console.log(searchDoctorObj)
        this.action = 'byDoctor'
        this._makeAjaxCall('http://10.117.189.181:9090/lifelinehealthcare/users', 'post', searchDoctorObj);

    }
    _handleSearchByCategory() {
        console.log(this.$.category.value)
        let searchCategoryObj = { category: this.$.category.value, doctorName: this.$.doctor.value };
        console.log(searchCategoryObj)
        this.action = 'byCategory'
        this._makeAjaxCall('http://10.117.189.181:9090/lifelinehealthcare/users', 'post', searchCategoryObj);
    }

    _makeAjaxCall(url, method, postObj) {
        const ajax = this.$.ajax;
        ajax.method = method;
        ajax.url = url;
        ajax.body = postObj ? JSON.stringify(postObj) : undefined;
        ajax.generateRequest();
    }



}

window.customElements.define('landing-page', LandingPage);