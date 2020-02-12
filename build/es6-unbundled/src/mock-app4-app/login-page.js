define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/paper-input/paper-input.js","../../node_modules/@polymer/iron-form/iron-form.js","../../node_modules/@polymer/paper-button/paper-button.js","../../node_modules/@polymer/iron-ajax/iron-ajax.js","../../node_modules/@polymer/iron-icons/iron-icons.js","../../node_modules/@polymer/app-route/app-location.js","../../node_modules/@polymer/paper-toast/paper-toast.js"],function(_polymerElement,_paperInput,_ironForm,_paperButton,_ironAjax,_ironIcons,_appLocation,_paperToast){"use strict";class LoginPage extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`

            <style>
            .container{
                background-image:url("images/background.jpg");
                height:640px;
            }
            #loginForm{
                padding:5px 25px 20px 25px;;
                width:400px;
                border-radius:5px;
                display:flex;
                flex-direction:column;
                justify-content:space-evenly;
                align-items:center;
                background-color:rgba(255,255,255,0.7);
                position:relative;
                left:430px;
                top:180px;
            }
            form{
                width:400px;
            }
            #loginButton{
                width:350px;
                background-color:rgba(0,0,0,0.9);
                color:white;
                position:relative;
                left:20px;
            }
            #loginButton:hover{
                width:350px;
                background-color:rgba(100,100,255,0.8);
                position:relative;
                left:20px;
            }
            #loginAction{
                margin-top:20px;
            }
            paper-input{
                padding:10px;
                margin:5px;
            }
            #toast0{
                background-color:rgba(255,0,0,0.5);
            }
            </style>
            <app-location route="{{route}}"></app-location>
            <div class='container'>
                <iron-form id='loginForm'>
                    <form>
                        <div id='loginFields'>
                            <paper-input id='username' name='username' label='Enter Phone No' allowed-pattern="[0-9]" maxlength="10" minlength="10" required always-float-label><iron-icon icon='perm-identity' slot='suffix'></iron-icon></paper-input>
                            <paper-input id='password' name='password' label='Enter Password' type='password' required always-float-label><iron-icon icon='lock' slot='suffix'></iron-icon></paper-input>
                        </div>
                        <div id='loginAction'>
                            <paper-button name='loginButton' id='loginButton' on-click='_handleLogin' raised>Login</paper-button>                
                        </div>
                    </form>
                </iron-form>
            </div>
            <paper-toast id='toast0' text='Invalid Credentials'></paper-toast>
            <paper-toast id='toast1' text='Connection Error'></paper-toast>
            <iron-ajax id='ajax' handle-as='json' on-response='_handleResponse' on-error='_handleError' content-type='application/json'></iron-ajax>
        `}static get properties(){return{loggedInUser:{type:Array,value:[]},action:{type:String,value:"list"}}}//validates if the user exist and logs in to the user portal
_handleLogin(){if(this.$.loginForm.validate()){let loginPostObj={phoneNumber:parseInt(this.$.username.value),password:this.$.password.value};this.$.loginForm.reset();this.action="list";this._makeAjax(`${baseUrl}/lifelinehealthcare/login`,"post",loginPostObj)}}//handling the response for the ajax request made
_handleResponse(event){switch(this.action){case"list":this.loggedInUser=event.detail.response;//if the successful response is returned
if(200===this.loggedInUser.statusCode){sessionStorage.setItem("doctorId",this.loggedInUser.userId);sessionStorage.setItem("doctorName",this.loggedInUser.name);this.set("route.path","./dashboard");this.dispatchEvent(new CustomEvent("refresh-dashboard",{detail:{},bubbles:!0/* ignoreName */ /* skipSlots */,composed:!0}))}//handling the exception
else{this.$.toast0.open()}break;default:break;}}//handling error 
_handleError(){this.$.toast1.open()}/**
     * 
     * @param {String} url 
     * @param {String} method 
     * @param {Object} postObj 
     */_makeAjax(url,method,postObj){let ajax=this.$.ajax;ajax.url=url;ajax.method=method;ajax.body=postObj?JSON.stringify(postObj):void 0;ajax.generateRequest()}}window.customElements.define("login-page",LoginPage)});