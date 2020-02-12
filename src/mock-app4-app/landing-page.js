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
        background-color:rgba(100,100,255,0.3);
        grid-template-rows:60px auto;
        grid-template-columns:auto;
        grid-template-areas:"h"td";
    }
    .header{
        grid-area:h;
        background-color:rgba(0,0,0,0.8);
        color:white;
    }
    .myDetails{
        grid-area:md;
        padding:10px;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        border-radius:5px;
        height:100px;
        width:1100px;
        margin:20px;
        background-color:rgba(255,255,255,0.7);
        position:relative;
        left:80px;
        z-index:1;
    }
    .bookedSlots{
        padding:10px;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        border-radius:5px;
        height:140px;
        width:900px;
        margin:20px;
        background-color:rgba(50,255,50,0.5);
        position:relative;
        left:80px;
        z-index:1;
    }
    .availableSlots{
        height:100px;
        padding:10px;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        border-radius:5px;
        width:900px;
        margin:20px;
        background-color:rgba(50,50,50,0.2);
        position:relative;
        left:80px;
        z-index:1;
    }
    .transferDetails{
        grid-area:td;
        padding:20px;
        border-radius:5px;
        width:1080px;
        margin:20px;
        background-color:rgba(255,255,255,0.7);
        position:relative;
        left:80px;
        z-index:1;
    }
    #headerAction{
        position:relative;
        bottom:71px;
        left:1070px;
        width:250px;
    }
    iron-collapse{
        width:250px;
    }
    #logoutDropdown{
        display:flex;
        flex-direction:column;
        background-color:rgba(0,0,0,0.9);
        color:white;
        width:255px;
        position:relative;
        bottom:51px;
        border-radius:2px;
        z-index:2;
    }
    #expandTrigger{
        background-color:rgba(255,255,255,0.8);
        color:black;
        border-radius:2px;
        height:60px;
        width:45px;
        position:relative;
        bottom:51px;
        left:210px;
    }
    #headerLogo{
        margin:0px;
        position:relative;
        bottom:12px;
        left:50px
        width:300px;
    }
    .accountDetails{
        margin:0px 200px 0px 10px
    }
    .values{
        color:green;
    }
    #ad1{
        position:relative;
        right:80px;
    }
    #welcome{
        position:relative;
        bottom:50px;
        left:1000px;                    
    }
    #logo{
        margin-left:50px;
    }
    #addSlot{
        background-color:rgba(10,10,255,0.8);
        color:white;
        position:relative;
        left:360px;
        bottom:50px;
    }
    #slotHeader{
        background-color:rgba(10,10,255,0.5);
        border-radius:5px;
        color:white;
        padding: 10px;
        width:600px;
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
        flex-wrap:no-wrap;
      }   
      paper-card{
        width:100%;
        margin:10px 0px 10px 0px;
        padding:10px;
      }
   
    #view{
        width:100%;
        color:white;
        background-color:rgb(48, 133, 48);
        border-radius: 10px;

    }
    #doctor{
        display:none;
    }
    #category{
        display:none;
    }
      </style>
      <app-location route="{{route}}"></app-location>
            <div class="container">
                <div class="header">
                    <div id='headerLogo'>
                        <h1 id='logo'>Lifeline Health Care <iron-icon icon='add'></iron-icon></h1>
                        <h3 id='welcome'>Welcome, <span class='values'>{{doctorName}}</span></h3>
                    </div>
                    <div id='headerAction'>
                        <iron-icon icon='expand-more' on-click='_handleCollapse' id='expandTrigger'></iron-icon>
                        <iron-collapse id='collapsibleLogout'>
                            <div id='logoutDropdown'>
                                <paper-button on-click='_handleLogout'>LOGOUT<iron-icon icon="settings-power"></iron-icon></paper-button>
                            </div>
                        </iron-collapse>
                    </div>
                </div>

                <div class="transferDetails">
                <paper-radio-group id="radio" on-selected-item-changed ="_change" >
                Search By:-
                 <paper-radio-button name="doctor">Doctor Name</paper-radio-button>
                 <paper-radio-button name="category">Category</paper-radio-button>
                 <paper-radio-button name="both">Both</paper-radio-button>
           
               </paper-radio-group>
                  
           <paper-input type="search" id="doctor" placeholder="Search By Doctor" on-input="_handleSearchByDoctor"><iron-icon icon='search' slot='suffix'></iron-icon></paper-input>
           <paper-input type="search" id="category" placeholder="Search By Category" on-input="_handleSearchByCategory"><iron-icon icon='search' slot='suffix'></iron-icon></paper-input>
           
           <h1><u><i>Doctors<i></u></h1>
           <template is="dom-repeat" items={{doctorList}}>
           <paper-card  alt="">
             <div id="drDetails">
             <div>
               <h3>Doctor Name:{{item.userName}}</h3>
               <h3>Education:{{item.educationQualification}}</h3>
               <h3>Category:{{item.categorySpecialist}}</h3>
               </div>
               <div>
               <h3>Years of Experience:{{item.yearsOfExperience}}</h3>
               <h3>Ratings:{{item.rating}}</h3>
               <paper-button id="view" raised>View</paper-button>
             </div>
             </div>
           </paper-card>
           </template>
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
        this._makeAjaxCall('http://10.117.189.201:9090/lifelinehealthcare/users', 'post', searchDoctorObj);

    }
    _handleSearchByCategory() {
        console.log(this.$.category.value)
        let searchCategoryObj = { category: this.$.category.value, doctorName: this.$.doctor.value };
        console.log(searchCategoryObj)
        this.action = 'byCategory'
        this._makeAjaxCall('http://10.117.189.201:9090/lifelinehealthcare/users', 'post', searchCategoryObj);
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