import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-collapse/iron-collapse.js';
import '@polymer/app-route/app-location.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-dialog/paper-dialog.js';

class DoctorPage extends PolymerElement {
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
                .myDetails{
                    grid-area:md;
                    padding:15px;
                    display:flex;
                    flex-direction:row;
                    justify-content:space-around;
                    align-items:center;
                    border-radius:5px;
                    height:150px;
                    width:1100px;
                    margin:20px;
                    position:relative;
                    left:80px;
                    background-color:rgba(0,0,0,0.1);
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
                    margin:20px;
                    background-color:rgba(255,255,255,0.7);
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
                    bottom:20px;
                    left:50px;
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
                .accountDetails{
                    margin:0px 100px 0px 100px
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
                .slotDetails:{
                    margin:0px 50px 0px 50px;
                }
                #addSlot{
                    background-color:rgba(10,10,255,0.8);
                    color:white;
                    position:relative;
                    left:360px;
                    bottom:50px;
                }
                #slotHeader{
                    background-color:rgba(0,85,130,0.7);
                    border-radius:5px;
                    color:white;
                    padding: 10px 10px 10px 30px;
                }
                #bookThisSlotBtn{
                    color:white;
                    background-color:rgb(48, 133, 48);
                    border-radius: 5px;
                    position:relative;
                    left:120px;
                    height:100px;
                    width:30px;
                }
                confirmSlotDialog{
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
                    <div class="myDetails">
                        <div>
                            <img src='../../images/doctor.jfif'>
                        </div>
                        <div class='accountDetails' id="ad1">
                            <h4>ID: <span class='values'>{{doctorDetails.userId}}</span></h4>
                            <h4>NAME: <span class='values'>{{doctorDetails.name}}</span></h4>
                            <h4> QUALIFICATION: <span class='values'>{{doctorDetails.educationalQualification}}</span></h4>
                        </div> 
                        <div class='accountDetails' id="ad2">
                            <h4> EXPERIENCE: <span class='values'>{{doctorDetails.yearsOfExperience}}</span></h4>
                            <h4> CATEGORY: <span class='values'>{{doctorDetails.category}}</span></h4>
                            <h4> FEEDBACK: <span class='values'>{{doctorDetails.feedback}}</span></h4>
                        </div>
                    </div>

                    <div class="transferDetails">                 
                        <div>
                            <h2 id='slotHeader'>Available Slots</h2>
                        </div>
                        <template is='dom-repeat' items='{{availableSlots}}'>
                            <div class="availableSlots">
                                <div class='slotDetails' id="ad1">
                                    <h5>Date: <span class='values'>{{item.slotDate}}</span></h5>
                                    <h5>From: <span class='slotValues'>{{item.slotTimeFrom}}</span></h5>
                                    <h5>To: <span class='slotValues'>{{item.slotTimeTo}}</span></h5>
                                </div> 
                                <div class='slotDetails' id="ad2">
                                    <h5>Hospital: <span class='values'>{{item.hospitalDetail}}</span></h5>
                                    <h5>Disease: <span class='slotValues'>{{item.diseaseDetail}}</span></h5>
                                </div>
                            </div>
                        </template>
                        <div class="availableSlots">
                            <div class='slotDetails' id="ad1">
                                <h5>Date: <span class='values'>{{item.slotDate}}</span></h5>
                                <h5>From: <span class='slotValues'>{{item.slotTimeFrom}}</span></h5>
                                <h5>To: <span class='slotValues'>{{item.slotTimeTo}}</span></h5>
                            </div> 
                            <div class='slotDetails' id="ad2">
                                <h5>Hospital: <span class='values'>{{item.hospitalDetail}}</span></h5>
                                <h5>Disease: <span class='slotValues'>{{item.diseaseDetail}}</span></h5>
                            </div>
                            <div>
                                <paper-button id='bookThisSlotBtn' on-click='_handleAddThisSlot'><iron-icon icon='add-circle'></iron-icon></paper-button>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
            <paper-dialog id='confirmSlotDialog'>
                
            </paper-dialog>
            <iron-ajax id='ajax' handle-as='json' on-response='_handleResponse' on-error='_handleError' content-type='application/json'></iron-ajax>
        `;
    }

    static get properties() {
        return {
            doctorId: Number,
            doctorName: String,
            doctorDetails:{
                type:Array,
                value:[]
            },
            availableSlots:{
                type:Array,
                value:[]
            },
            available:{
                type:String,
                value:"AVAILABLE"
            }
        };
    }

    connectedCallback() {
        super.connectedCallback();
        this.doctorId = sessionStorage.getItem('doctorId');
        this.doctorName = sessionStorage.getItem('doctorName');
    }

    _handleGoToLogin(){
        this.set('route.path','/login');
    }

    _handleDoctor() {
        this.doctorId = sessionStorage.getItem('doctorId');
        let doctorDataReq = (this._getAjaxConfig(`http://10.117.189.201:9090/lifelinehealthcare/users/${this.doctorId}`, 'get')).generateRequest();
        let availableSlotReq = (this._getAjaxConfig(`http://10.117.189.201:9090/lifelinehealthcare/users/${this.doctorId}/slots?statusType=${this.available}`, 'get')).generateRequest();
        let thisContext = this;
        Promise.all([doctorDataReq.completes,availableSlotReq.completes]).then(function (requests) {
            thisContext.doctorDetails = requests[0].response;
            thisContext.availableSlots = requests[1].response.slots;
            console.log(thisContext.doctorDetails,"doctor");
            console.log(thisContext.availableSlots,"doctor");
        });
    }

    _handleAddThisSlot(event){
        console.log(event.detail.response);
        this.$.confirmSlotDialog.open();
    }

    _handleCollapse() {
        if (this.$.collapsibleLogout.opened) {
            this.$.collapsibleLogout.opened = false;
        }
        else {
            this.$.collapsibleLogout.opened = true;
        }
    }

    _getAjaxConfig(url, method) {
        let ajax = this.$.ajax;
        ajax.url = url;
        ajax.method = method;
        return ajax;
    }

    _postAjaxConfig(url, method, postObj) {
        let ajax = this.$.ajax;
        ajax.url = url;
        ajax.method = method;
        ajax.body = postObj ? JSON.stringify(postObj) : undefined;
        return ajax;
    }
}
window.customElements.define('doctor-page', DoctorPage);