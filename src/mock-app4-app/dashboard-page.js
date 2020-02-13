import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-collapse/iron-collapse.js';
import '@polymer/app-route/app-location.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/paper-card/paper-card.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@vaadin/vaadin-time-picker/vaadin-time-picker.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-toast/paper-toast.js';

class DashboardPage extends PolymerElement {
    static get template() {
        return html`
            <style>
                .container{
                    display:grid;
                    grid-template-rows:70px auto auto;
                    grid-template-columns:auto;
                    grid-template-areas:"h""md""td";
                }
                .header{
                    grid-area:h;
                    background-color:rgb(0,85,130);
                    color:white;
                    padding:10px;
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
                    background-color:rgba(0,0,0,0.1);
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
                    margin:20px;
                    background-color:rgba(255,255,255,0.7);
                }
                #headerAction{
                    position:relative;
                    bottom:115px;
                    left:1150px;
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
                    left:900px;                   
                }
                #logo{
                    margin-left:50px;
                }
                #addSlot{
                    color:white;
                    background-color:rgb(48, 133, 48);
                    border-radius: 5px;
                    height:40px;
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
                .expandSlot{
                    color:white;
                    position:relative;
                    left:1200px;
                    bottom:55px;
                }
                .slotHeaderDiv{
                    height:40px;
                }
                #addNewSlotDialog{
                    padding:20px;
                }
            </style>
            <app-location route="{{route}}"></app-location>
            <div class="container">
                <div class="header">
                    <div id='headerLogo'>
                        <h1 id='logo'>Lifeline Health Care</h1>
                        <h3 id='welcome'>Welcome, {{doctorName}}</h3>
                    </div>
                    <div id='headerAction'>
                         <paper-button on-click='_handleLogout'>LOGOUT<iron-icon icon="settings-power"></iron-icon></paper-button>
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
                    <div on-click="_handleCollapseBookedSlots"  class='slotHeaderDiv'>
                        <h2 id='slotHeader'>Booked Slots</h2><iron-icon icon='expand-more' class='expandSlot' id='expandBookedSlots'></iron-icon>
                    </div>
                    <iron-collapse id='bookedSlotsCollapsible'>
                        <template is='dom-repeat' items='{{bookedSlots}}'>
                            <div class="bookedSlots">
                                <div class='slotDetails' id="ad1">
                                    <h5>Date: <span class='values'>{{item.slotDate}}</span></h5>
                                    <h5>From: <span class='values'>{{item.slotTimeFrom}}</span></h5>
                                    <h5>To: <span class='values'>{{item.slotTimeTo}}</span></h5>
                                    <h5>Hospital: <span class='values'>{{item.hospitalDetail}}</span></h5>
                                </div> 
                                <div class='slotDetails' id="ad2">
                                    <h5>Patient Name: <span class='values'>{{item.patientName}}</span></h5>
                                    <h5>Patient Mobile Number: <span class='values'>{{item.patientPhoneNumber}}</span></h5>
                                    <h5>Disease: <span class='values'>{{item.diseaseDetail}}</span></h5>
                                </div>
                            </div>
                        </template>
                        
                    </iron-collapse>
                    



                    <div on-click="_handleCollapseAvailableSlots" class='slotHeaderDiv'>
                        <h2 id='slotHeader'>Available Slots</h2><iron-icon icon='expand-more' class='expandSlot' id='expandAvailableSlots'></iron-icon>
                    </div>
                    <iron-collapse id='availableSlotsCollapsible'>
                        <template is='dom-repeat' items='{{availableSlots}}'>
                            <div class="availableSlots">
                                <div class='slotDetails' id="ad1">
                                    <h5>Date: <span class='values'>{{item.slotDate}}</span></h5>
                                    <h5>Hospital: <span class='values'>{{item.hospitalDetail}}</span></h5>
                                </div> 
                                <div class='slotDetails' id="ad2">
                                    <h5>From: <span class='values'>{{item.slotTimeFrom}}</span></h5>
                                    <h5>To: <span class='values'>{{item.slotTimeTo}}</span></h5>
                                </div>
                            </div>
                        </template>
            
                    </iron-collapse>                    
                </div>
            </div>
            
            <paper-dialog id='addNewSlotDialog'>
                <iron-form id="slotForm">
                <h2 style="margin:0px">Add New Slot</h2>
                <hr>
                <vaadin-date-picker id="date" label="Date" placeholder="Choose Date" required>
                </vaadin-date-picker>
                <vaadin-time-picker id="fromTime" label="From" placeholder="Choose Time"></vaadin-time-picker>
                <vaadin-time-picker id="toTime" label="To" placeholder="Choose Time"></vaadin-time-picker>
                <vaadin-select id="location" placeholder="Select" label="Location" >
                <template>
                <vaadin-list-box >
                <template is="dom-repeat" placeholder="Select" items={{locationList}}>
                    <vaadin-item value="{{item.locationId}}" >{{item.locationName}}</vaadin-item>
                </template>        
                </vaadin-list-box>
                </template>
                </vaadin-select>
                <paper-input id="hospitalDetails" label="Hospital Details"></paper-input>
                <paper-button id="confirmSlotBtn" label="Add Slot" on-click="_onClick" raised>Add Slot</paper-button>
                </iron-form>
                
                <paper-toast id="toast0" text="Invalid Slot Timings!!"></paper-toast>
                <paper-toast id="success" text="Added Successfully!!"></paper-toast>            
            </paper-dialog>

            <iron-ajax id='ajax' handle-as='json' on-response='_handleResponse' on-error='_handleError' content-type='application/json'></iron-ajax>
        `;
    }

    static get properties() {
        return {
            doctorId: Number,
            doctorName: String,
            bookedSlots: {
                type: Array,
                value: []
            },
            availableSlots: {
                type: Array,
                value: []
            },
            booked: {
                type: String,
                value: "BOOKED"
            },
            available: {
                type: String,
                value: "AVAILABLE"
            },
            locationList: {
                type: Array,
                value: []
            },
            successMeassage: {
                type: Array,
                value: []
            }
        };
    }

    _handleCollapseBookedSlots() {
        if (this.$.bookedSlotsCollapsible.opened) {
            this.$.bookedSlotsCollapsible.opened = false;
        }
        else {
            this.$.bookedSlotsCollapsible.opened = true;
        }
    }

    _handleCollapseAvailableSlots() {
        if (this.$.availableSlotsCollapsible.opened) {
            this.$.availableSlotsCollapsible.opened = false;
        }
        else {
            this.$.availableSlotsCollapsible.opened = true;
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this.doctorId = sessionStorage.getItem('doctorId');
        this.doctorName = sessionStorage.getItem('doctorName');
        this.locationList = sessionStorage.getItem('locationList');
        this.bookedSlots=sessionStorage.getItem('bookedSlots');
        this.availableSlots=sessionStorage.getItem('availableSlots');
    }


    _onClick() {
        this.doctorId = sessionStorage.getItem('doctorId');
        this.doctorName = sessionStorage.getItem('doctorName');
        let date = this.$.date.value;
        let from = this.$.fromTime.value;
        let to = this.$.toTime.value;
        let fromTime = from.slice(0, 2);
        let toTime = to.slice(0, 2);

        let location = this.$.location.value;
        let hospital = this.$.hospitalDetails.value;
        if (fromTime < toTime) {
            let slotObj = { slotDate: date, slotTimeFrom: fromTime, slotTimeTo: toTime, locationId: location, hospitalDetail: hospital };
            let addSlotReq = (this._postAjaxConfig(`http://10.117.189.181:9090/lifelinehealthcare/users/${this.doctorId}/slots`, 'post', slotObj)).generateRequest();
            let thisContext = this;
            Promise.all([addSlotReq.completes]).then(function (requests) {
                if (requests[0].response.statusCode == 200) {
                    thisContext.successMessage = requests[0].response.message;
                    thisContext._handleUserLogIn();
                    thisContext.$.success.open();
                }
            });
            this._handleUserLogIn();
            this.$.addNewSlotDialog.close();
        }
        else {
            this.$.toast0.open();
        }
    }

    _handleUserLogIn() {
        this.doctorId = sessionStorage.getItem('doctorId');
        this.doctorName = sessionStorage.getItem('doctorName');
        let locationReq = (this._getAjaxConfig(`http://10.117.189.181:9090/lifelinehealthcare/locations`, 'get')).generateRequest();
        let bookedSlotReq = (this._getAjaxConfig(`http://10.117.189.181:9090/lifelinehealthcare/users/${this.doctorId}/slots?statusType=${this.booked}`, 'get')).generateRequest();
        let availableSlotReq = (this._getAjaxConfig(`http://10.117.189.181:9090/lifelinehealthcare/users/${this.doctorId}/slots?statusType=${this.available}`, 'get')).generateRequest();

        let thisContext = this;

        Promise.all([bookedSlotReq.completes, availableSlotReq.completes, locationReq.completes]).then(function (requests) {
            thisContext.bookedSlots = requests[0].response.slots;
            thisContext.availableSlots = requests[1].response.slots;
            thisContext.locationList = requests[2].response.locationDto;
            console.log(thisContext.locationList)
            sessionStorage.setItem('bookedSlots', requests[0].response.slots);
            sessionStorage.setItem('availableSlots', requests[1].response.slots);
            sessionStorage.setItem('locationList', requests[2].response.locationDto);
        });

    }

    _handleAddSlot() {
        this.$.addNewSlotDialog.open();
        // this.set('route.path','/slot');
    }

    _handleLogout() {
        sessionStorage.clear();
        // this.set('route.path', '/login');
        window.history.pushState({}, null, '#/login');
        window.dispatchEvent(new CustomEvent('location-changed'));
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
window.customElements.define('dashboard-page', DashboardPage);