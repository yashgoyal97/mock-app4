define(["./mock-app4-app.js"],function(_mockApp4App){"use strict";(0,_mockApp4App.Polymer)({_template:_mockApp4App.html`
    <style>
      :host {
        display: block;
        transition-duration: var(--iron-collapse-transition-duration, 300ms);
        /* Safari 10 needs this property prefixed to correctly apply the custom property */
        -webkit-transition-duration: var(--iron-collapse-transition-duration, 300ms);
        overflow: visible;
      }

      :host(.iron-collapse-closed) {
        display: none;
      }

      :host(:not(.iron-collapse-opened)) {
        overflow: hidden;
      }
    </style>

    <slot></slot>
`,is:"iron-collapse",behaviors:[_mockApp4App.IronResizableBehavior],properties:{/**
     * If true, the orientation is horizontal; otherwise is vertical.
     *
     * @attribute horizontal
     */horizontal:{type:Boolean,value:/* ignoreName */ /* ignoreName */ /* ignoreName */ /* ignoreName */!1/* skipSlots */ /* skipSlots */ /* skipSlots */ /* skipSlots */,observer:"_horizontalChanged"},/**
     * Set opened to true to show the collapse element and to false to hide it.
     *
     * @attribute opened
     */opened:{type:Boolean,value:!1,notify:!0/* skipSlots */ /* skipSlots */,observer:"_openedChanged"},/**
     * When true, the element is transitioning its opened state. When false,
     * the element has finished opening/closing.
     *
     * @attribute transitioning
     */transitioning:{type:Boolean,notify:!0,readOnly:!0},/**
     * Set noAnimation to true to disable animations.
     *
     * @attribute noAnimation
     */noAnimation:{type:Boolean},/**
     * Stores the desired size of the collapse body.
     * @private
     */_desiredSize:{type:String,value:""}},get dimension(){return this.horizontal?"width":"height"},/**
   * `maxWidth` or `maxHeight`.
   * @private
   */get _dimensionMax(){return this.horizontal?"maxWidth":"maxHeight"},/**
   * `max-width` or `max-height`.
   * @private
   */get _dimensionMaxCss(){return this.horizontal?"max-width":"max-height"},hostAttributes:{role:"group","aria-hidden":"true"},listeners:{transitionend:"_onTransitionEnd"},/**
   * Toggle the opened state.
   *
   * @method toggle
   */toggle:function(){this.opened=!this.opened},show:function(){this.opened=!0},hide:function(){this.opened=!1},/**
   * Updates the size of the element.
   * @param {string} size The new value for `maxWidth`/`maxHeight` as css property value, usually `auto` or `0px`.
   * @param {boolean=} animated if `true` updates the size with an animation, otherwise without.
   */updateSize:function(size,animated){// Consider 'auto' as '', to take full size.
size="auto"===size?"":size;var willAnimate=animated&&!this.noAnimation&&this.isAttached&&this._desiredSize!==size;this._desiredSize=size;this._updateTransition(!1);// If we can animate, must do some prep work.
if(willAnimate){// Animation will start at the current size.
var startSize=this._calcSize();// For `auto` we must calculate what is the final size for the animation.
// After the transition is done, _transitionEnd will set the size back to
// `auto`.
if(""===size){this.style[this._dimensionMax]="";size=this._calcSize()}// Go to startSize without animation.
this.style[this._dimensionMax]=startSize;// Force layout to ensure transition will go. Set scrollTop to itself
// so that compilers won't remove it.
this.scrollTop=this.scrollTop;// Enable animation.
this._updateTransition(!0);// If final size is the same as startSize it will not animate.
willAnimate=size!==startSize}// Set the final size.
this.style[this._dimensionMax]=size;// If it won't animate, call transitionEnd to set correct classes.
if(!willAnimate){this._transitionEnd()}},/**
   * enableTransition() is deprecated, but left over so it doesn't break
   * existing code. Please use `noAnimation` property instead.
   *
   * @method enableTransition
   * @deprecated since version 1.0.4
   */enableTransition:function(enabled){_mockApp4App.Base._warn("`enableTransition()` is deprecated, use `noAnimation` instead.");this.noAnimation=!enabled},_updateTransition:function(enabled){this.style.transitionDuration=enabled&&!this.noAnimation?"":"0s"},_horizontalChanged:function(){this.style.transitionProperty=this._dimensionMaxCss;var otherDimension="maxWidth"===this._dimensionMax?"maxHeight":"maxWidth";this.style[otherDimension]="";this.updateSize(this.opened?"auto":"0px",!1)},_openedChanged:function(){this.setAttribute("aria-hidden",!this.opened);this._setTransitioning(!0);this.toggleClass("iron-collapse-closed",!1);this.toggleClass("iron-collapse-opened",!1);this.updateSize(this.opened?"auto":"0px",!0);// Focus the current collapse.
if(this.opened){this.focus()}},_transitionEnd:function(){this.style[this._dimensionMax]=this._desiredSize;this.toggleClass("iron-collapse-closed",!this.opened);this.toggleClass("iron-collapse-opened",this.opened);this._updateTransition(!1);this.notifyResize();this._setTransitioning(!1)},_onTransitionEnd:function(event){if((0,_mockApp4App.dom)(event).rootTarget===this){this._transitionEnd()}},_calcSize:function(){return this.getBoundingClientRect()[this.dimension]+"px"}});(0,_mockApp4App.Polymer)({_template:_mockApp4App.html`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{/**
     * The URL of an image.
     */src:{type:String,value:""},/**
     * A short text alternative for the image.
     */alt:{type:String,value:null},/**
     * CORS enabled images support:
     * https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
     */crossorigin:{type:String,value:null},/**
     * When true, the image is prevented from loading and any placeholder is
     * shown.  This may be useful when a binding to the src property is known to
     * be invalid, to prevent 404 requests.
     */preventLoad:{type:Boolean,value:!1},/**
     * Sets a sizing option for the image.  Valid values are `contain` (full
     * aspect ratio of the image is contained within the element and
     * letterboxed) or `cover` (image is cropped in order to fully cover the
     * bounds of the element), or `null` (default: image takes natural size).
     */sizing:{type:String,value:null,reflectToAttribute:!0},/**
     * When a sizing option is used (`cover` or `contain`), this determines
     * how the image is aligned within the element bounds.
     */position:{type:String,value:"center"},/**
     * When `true`, any change to the `src` property will cause the
     * `placeholder` image to be shown until the new image has loaded.
     */preload:{type:Boolean,value:!1},/**
     * This image will be used as a background/placeholder until the src image
     * has loaded.  Use of a data-URI for placeholder is encouraged for instant
     * rendering.
     */placeholder:{type:String,value:null,observer:"_placeholderChanged"},/**
     * When `preload` is true, setting `fade` to true will cause the image to
     * fade into place.
     */fade:{type:Boolean,value:!1},/**
     * Read-only value that is true when the image is loaded.
     */loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},/**
     * Read-only value that tracks the loading state of the image when the
     * `preload` option is used.
     */loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},/**
     * Read-only value that indicates that the last set `src` failed to load.
     */error:{notify:!0,readOnly:!0,type:Boolean,value:!1},/**
     * Can be used to set the width of image (e.g. via binding); size may also
     * be set via CSS.
     */width:{observer:"_widthChanged",type:Number,value:null},/**
     * Can be used to set the height of image (e.g. via binding); size may also
     * be set via CSS.
     *
     * @attribute height
     * @type number
     * @default null
     */height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){if(this.$.img.src!==this._resolveSrc(this.src)){return}this._setLoading(!1);this._setLoaded(!0);this._setError(!1)},_imgOnError:function(){if(this.$.img.src!==this._resolveSrc(this.src)){return}this.$.img.removeAttribute("src");this.$.sizedImgDiv.style.backgroundImage="";this._setLoading(!1);this._setLoaded(!1);this._setError(!0)},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){if(null!==this.alt){return this.alt}// Polymer.ResolveUrl.resolveUrl will resolve '' relative to a URL x to
// that URL x, but '' is the default for src.
if(""===this.src){return""}// NOTE: Use of `URL` was removed here because IE11 doesn't support
// constructing it. If this ends up being problematic, we should
// consider reverting and adding the URL polyfill as a dev dependency.
var resolved=this._resolveSrc(this.src);// Remove query parts, get file name.
return resolved.replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(src,preventLoad){var newResolvedSrc=this._resolveSrc(src);if(newResolvedSrc===this._resolvedSrc){return}this._resolvedSrc="";this.$.img.removeAttribute("src");this.$.sizedImgDiv.style.backgroundImage="";if(""===src||preventLoad){this._setLoading(!1);this._setLoaded(!1);this._setError(!1)}else{this._resolvedSrc=newResolvedSrc;this.$.img.src=this._resolvedSrc;this.$.sizedImgDiv.style.backgroundImage="url(\""+this._resolvedSrc+"\")";this._setLoading(!0);this._setLoaded(!1);this._setError(!1)}},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?"url(\""+this.placeholder+"\")":""},_transformChanged:function(){var sizedImgDivStyle=this.$.sizedImgDiv.style,placeholderStyle=this.$.placeholder.style;sizedImgDivStyle.backgroundSize=placeholderStyle.backgroundSize=this.sizing;sizedImgDivStyle.backgroundPosition=placeholderStyle.backgroundPosition=this.sizing?this.position:"";sizedImgDivStyle.backgroundRepeat=placeholderStyle.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(testSrc){var resolved=(0,_mockApp4App.resolveUrl)(testSrc,this.$.baseURIAnchor.href);// NOTE: Use of `URL` was removed here because IE11 doesn't support
// constructing it. If this ends up being problematic, we should
// consider reverting and adding the URL polyfill as a dev dependency.
if(2<=resolved.length&&"/"===resolved[0]&&"/"!==resolved[1]){// In IE location.origin might not work
// https://connect.microsoft.com/IE/feedback/details/1763802/location-origin-is-undefined-in-ie-11-on-windows-10-but-works-on-windows-7
resolved=(location.origin||location.protocol+"//"+location.host)+resolved}return resolved}});(0,_mockApp4App.Polymer)({_template:_mockApp4App.html`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`,is:"paper-card",properties:{/**
     * The title of the card.
     */heading:{type:String,value:"",observer:"_headingChanged"},/**
     * The url of the title image of the card.
     */image:{type:String,value:""},/**
     * The text alternative of the card's title image.
     */alt:{type:String},/**
     * When `true`, any change to the image url property will cause the
     * `placeholder` image to be shown until the image is fully rendered.
     */preloadImage:{type:Boolean,value:!1},/**
     * When `preloadImage` is true, setting `fadeImage` to true will cause the
     * image to fade into place.
     */fadeImage:{type:Boolean,value:!1},/**
     * This image will be used as a background/placeholder until the src image
     * has loaded. Use of a data-URI for placeholder is encouraged for instant
     * rendering.
     */placeholderImage:{type:String,value:null},/**
     * The z-depth of the card, from 0-5.
     */elevation:{type:Number,value:1,reflectToAttribute:!0},/**
     * Set this to true to animate the card shadow when setting a new
     * `z` value.
     */animatedShadow:{type:Boolean,value:!1},/**
     * Read-only property used to pass down the `animatedShadow` value to
     * the underlying paper-material style (since they have different names).
     */animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},/**
   * Format function for aria-hidden. Use the ! operator results in the
   * empty string when given a falsy value.
   */_isHidden:function(image){return image?"false":"true"},_headingChanged:function(heading){var currentHeading=this.getAttribute("heading"),currentLabel=this.getAttribute("aria-label");if("string"!==typeof currentLabel||currentLabel===currentHeading){this.setAttribute("aria-label",heading)}},_computeHeadingClass:function(image){return image?" over-image":""},_computeAnimated:function(animatedShadow){return animatedShadow}});class DashboardPage extends _mockApp4App.PolymerElement{static get template(){return _mockApp4App.html$1`
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
                        <h2 id='slotHeader'>Booked Slots</h2>
                    </div>
                    <template is='dom-repeat' items='{{bookedSlots}}'>
                        <div class="bookedSlots">
                            <div class='slotDetails' id="ad1">
                                <h5>Date: <span class='values'>{{item.slotDate}}</span></h5>
                                <h5>From: <span class='slotValues'>{{item.slotTimeFrom}}</span></h5>
                                <h5>To: <span class='slotValues'>{{item.slotTimeTo}}</span></h5>
                                <h5>Hospital: <span class='values'>{{item.hospitalDetail}}</span></h5>
                            </div> 
                            <div class='slotDetails' id="ad2">
                                <h5>Patient Name: <span class='slotValues'>{{item.patientName}}</span></h5>
                                <h5>Patient Mobile Number: <span class='values'>{{item.patientPhoneNumber}}</span></h5>
                                <h5>Disease: <span class='slotValues'>{{item.diseaseDetail}}</span></h5>
                            </div>
                        </div>
                    </template>
                    
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
        `}static get properties(){return{doctorId:Number,doctorName:String,bookedSlots:{type:Array,value:[]},availableSlots:{type:Array,value:[]},booked:{type:String,value:"BOOKED"},available:{type:String,value:"AVAILABLE"}}}connectedCallback(){super.connectedCallback();this.doctorId=sessionStorage.getItem("doctorId");this.doctorName=sessionStorage.getItem("doctorName")}_handleUserLogIn(){this.doctorId=sessionStorage.getItem("doctorId");this.doctorName=sessionStorage.getItem("doctorName");console.log(sessionStorage.getItem("doctorId"),"dashboard");console.log(sessionStorage.getItem("doctorName"),"dashboard");let bookedSlotReq=this._getAjaxConfig(`http://10.117.189.201:9090/lifelinehealthcare/users/${this.doctorId}/slots?statusType=${this.booked}`,"get").generateRequest(),availableSlotReq=this._getAjaxConfig(`http://10.117.189.201:9090/lifelinehealthcare/users/${this.doctorId}/slots?statusType=${this.available}`,"get").generateRequest(),thisContext=this;Promise.all([bookedSlotReq.completes,availableSlotReq.completes]).then(function(requests){thisContext.bookedSlots=requests[0].response.slots;thisContext.availableSlots=requests[1].response.slots;sessionStorage.setItem("bookedSlots",requests[0].response.slots);sessionStorage.setItem("availableSlots",requests[1].response.slots);console.log(sessionStorage.getItem("bookedSlots"),"abc");console.log(sessionStorage.getItem("bookedSlots"),"abc")})}_handleAddSlot(){}_handleLogout(){sessionStorage.clear();this.set("route.path","/login")}_handleCollapse(){if(this.$.collapsibleLogout.opened){this.$.collapsibleLogout.opened=!1}else{this.$.collapsibleLogout.opened=!0}}_getAjaxConfig(url,method){let ajax=this.$.ajax;ajax.url=url;ajax.method=method;return ajax}_postAjaxConfig(url,method,postObj){let ajax=this.$.ajax;ajax.url=url;ajax.method=method;ajax.body=postObj?JSON.stringify(postObj):void 0;return ajax}}window.customElements.define("dashboard-page",DashboardPage)});