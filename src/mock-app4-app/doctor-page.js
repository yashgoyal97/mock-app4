import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-collapse/iron-collapse.js';
import '@polymer/app-route/app-location.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/paper-card/paper-card.js';

class DoctorPage extends PolymerElement {
    static get template() {
        return html`
            <style>
                .container{
                    display:grid;
                    background-color:rgba(100,100,255,0.3);
                    grid-template-rows:60px auto auto;
                    grid-template-columns:auto;
                    grid-template-areas:"h""md""td";
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

                <div class="myDetails">
                    <div class='accountDetails' id="ad1">
                        <h3>ID: <span class='values'>{{doctorId}}</span></h3>
                        <h3>NAME: <span class='values'>{{doctorName}}</span></h3>
                    </div> 
                    <div class='accountDetails' id="ad2">
                        <h3> QUALIFICATION: <span class='values'>MBBS</span></h3>
                        <paper-button on-click='_handleAddSlot' id='addSlot'>Add Slot<iron-icon icon='query-builder'></iron-icon></paper-button>
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
                </div>
            </div>

            <iron-ajax id='ajax' handle-as='json' on-response='_handleResponse' on-error='_handleError' content-type='application/json'></iron-ajax>
        `;
    }

    static get properties() {
        return {
            doctorId: Number,
            doctorName: String,
            bookedSlots:{
                type:Array,
                value:[]
            },
            availableSlots:{
                type:Array,
                value:[]
            },
            booked:{
                type:String,
                value:"BOOKED"
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

    _handleUserLogIn() {
        this.doctorId = sessionStorage.getItem('doctorId');
        this.doctorName = sessionStorage.getItem('doctorName');
        console.log(sessionStorage.getItem('doctorId'),'Doctor');
        console.log(sessionStorage.getItem('doctorName'),'Doctor');
        let bookedSlotReq = (this._getAjaxConfig(`http://10.117.189.201:9090/lifelinehealthcare/users/${this.doctorId}/slots?statusType=${this.booked}`, 'get')).generateRequest();
        let availableSlotReq = (this._getAjaxConfig(`http://10.117.189.201:9090/lifelinehealthcare/users/${this.doctorId}/slots?statusType=${this.available}`, 'get')).generateRequest();

        let thisContext = this;

        Promise.all([bookedSlotReq.completes,availableSlotReq.completes]).then(function (requests) {
            thisContext.bookedSlots = requests[0].response.slots;
            thisContext.availableSlots = requests[1].response.slots;
            sessionStorage.setItem('bookedSlots',requests[0].response.slots);
            sessionStorage.setItem('availableSlots',requests[1].response.slots);
            console.log(sessionStorage.getItem('bookedSlots'),"abc");
            console.log(sessionStorage.getItem('bookedSlots'),"abc");
        });
    }

    _handleAddSlot() {

    }

    _handleLogout() {
        sessionStorage.clear();
        this.set('route.path', '/login');
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