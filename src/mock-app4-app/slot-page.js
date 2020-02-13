import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@vaadin/vaadin-time-picker/vaadin-time-picker.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/iron-ajax/iron-ajax.js';

/**
 * @customElement
 * @polymer
 */
class SlotPage extends PolymerElement {
    static get template() {
        return html`
      <style>
      #slotForm{
          display:flex;
          flex-direction:column;
            border:2px solid black;
            border-radius:5px;
            padding:20px;
        margin: 10px auto;
            width:500px
        }
     
        #addSlot{
            background-color:green;
            border-radius:5px;
            color:white;
        }
   
        h1{
            color:green;
            text-align:center;
        }
        #toast0 {
          --paper-toast-background-color: red;
          --paper-toast-color: white;
        }
        
      </style>
      <main>
      <iron-form id="slotForm">
      <h1>Add Slot</h1>
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
    <paper-button id="addSlot" label="Add Slot" on-click="_onClick" raised>Add Slot</paper-button>
    </iron-form>
   
   <paper-toast id="toast0" text="Invalid Slot Timings!"></paper-toast>
   <paper-toast id="success" text="Added Successfully!!!"></paper-toast>

    </main>
    <iron-ajax id="ajax" on-response="_handleResponse" on-error="_handleError" handle-as="json" content-type="application/json" ></iron-ajax>

      `;
    }

    static get properties() {
        return {
            locationList: {
                type: Array,
                value: []
            },
            action: {
                type: String,
                value: 'Location'
            },
            successMeassage: {
                type: Array,
                value: []
            },
            doctorId: Number,
            doctorName: String
        }
    };
    connectedCallback() {
        super.connectedCallback();
        this.action = 'Location';
        this._makeAjaxCall('http://10.117.189.181:9090/lifelinehealthcare/locations', 'get', null);
    }

    _handleResponse(event) {

        switch (this.action) {
            case 'Location': {
                this.locationList = event.detail.response.locationDto;
                break;
            }
            case 'Add': {
                if (event.detail.response.statusCode == 200) {
                    this.successMeassage = event.detail.response.meassage;
                    this.$.success.open();
                }

                break;
            }
            default: break;

        }
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
            console.log(slotObj);
            this.action = 'Add'
            this._makeAjaxCall(`http://10.117.189.181:9090/lifelinehealthcare/users/${this.doctorId}/slots`, 'post', slotObj);
            this.dispatchEvent(new CustomEvent('new-slot', { detail: {}, bubbles: true, composed: true }));
            // this.set('route.path', '/dashboard');
            window.history.pushState({}, null, '#/dashboard');
            window.dispatchEvent(new CustomEvent('location-changed'));
        }
        else {
            this.$.toast0.open();
        }
    }

    _makeAjaxCall(url, method, postObj, action) {
        const ajax = this.$.ajax;
        ajax.method = method;
        ajax.url = url;
        ajax.body = postObj ? JSON.stringify(postObj) : undefined;
        ajax.generateRequest();
    }
}

window.customElements.define('slot-page', SlotPage);