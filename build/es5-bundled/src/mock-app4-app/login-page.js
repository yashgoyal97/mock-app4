define(["exports","./mock-app4-app.js"],function(_exports,_mockApp4App){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0/* ignoreName */ /* skipSlots */ /* ignoreName */ /* skipSlots */});_exports._composedTreeContains=_composedTreeContains;_exports._getScrollInfo=_getScrollInfo;_exports._getScrollableNodes=_getScrollableNodes;_exports._getScrollingNode=_getScrollingNode;_exports._hasCachedLockedElement=_hasCachedLockedElement;_exports._hasCachedUnlockedElement=_hasCachedUnlockedElement;_exports._lockScrollInteractions=_lockScrollInteractions;_exports._scrollInteractionHandler=_scrollInteractionHandler;_exports._shouldPreventScrolling=_shouldPreventScrolling;_exports._unlockScrollInteractions=_unlockScrollInteractions;_exports.elementIsScrollLocked=elementIsScrollLocked;_exports.pushScrollLock=pushScrollLock;_exports.removeScrollLock=removeScrollLock;_exports.currentLockingElement=_exports._unlockedElementCache=_exports._lockingElements=_exports._lockedElementCache=_exports._boundScrollHandler=_exports.PaperInputHelper=_exports.PaperInputBehaviorImpl=_exports.PaperInputBehavior=_exports.PaperInputAddonBehavior=_exports.IronValidatableBehaviorMeta=_exports.IronValidatableBehavior=_exports.IronOverlayManagerClass=_exports.IronOverlayManager=_exports.IronOverlayBehaviorImpl=_exports.IronOverlayBehavior=_exports.IronFormElementBehavior=_exports.IronFocusablesHelper=_exports.IronFitBehavior=_exports.IronA11yAnnouncer=_exports.$paperInputBehavior=_exports.$paperInputAddonBehavior=_exports.$ironValidatableBehavior=_exports.$ironScrollManager=_exports.$ironOverlayManager=_exports.$ironOverlayBehavior=_exports.$ironFormElementBehavior=_exports.$ironFocusablesHelper=_exports.$ironFitBehavior=_exports.$ironA11yAnnouncer=void 0;function _templateObject12_1dafad604da011ea8faf35a9b7563db5(){var data=babelHelpers.taggedTemplateLiteral(["\n\n            <style>\n            .container{\n                background-image:url(\"images/background.jpg\");\n                height:640px;\n            }\n            #loginForm{\n                padding:5px 25px 20px 25px;;\n                width:400px;\n                border-radius:5px;\n                display:flex;\n                flex-direction:column;\n                justify-content:space-evenly;\n                align-items:center;\n                background-color:rgba(255,255,255,0.7);\n                position:relative;\n                left:430px;\n                top:180px;\n            }\n            form{\n                width:400px;\n            }\n            #loginButton{\n                width:350px;\n                background-color:rgba(0,0,0,0.9);\n                color:white;\n                position:relative;\n                left:20px;\n            }\n            #loginButton:hover{\n                width:350px;\n                background-color:rgba(100,100,255,0.8);\n                position:relative;\n                left:20px;\n            }\n            #loginAction{\n                margin-top:20px;\n            }\n            paper-input{\n                padding:10px;\n                margin:5px;\n            }\n            #toast0{\n                background-color:rgba(255,0,0,0.5);\n            }\n            </style>\n            <app-location route=\"{{route}}\"></app-location>\n            <div class='container'>\n                <iron-form id='loginForm'>\n                    <form>\n                        <div id='loginFields'>\n                            <paper-input id='username' name='username' label='Enter Phone No' allowed-pattern=\"[0-9]\" maxlength=\"10\" minlength=\"10\" required always-float-label><iron-icon icon='perm-identity' slot='suffix'></iron-icon></paper-input>\n                            <paper-input id='password' name='password' label='Enter Password' type='password' required always-float-label><iron-icon icon='lock' slot='suffix'></iron-icon></paper-input>\n                        </div>\n                        <div id='loginAction'>\n                            <paper-button name='loginButton' id='loginButton' on-click='_handleLogin' raised>Login</paper-button>                \n                        </div>\n                    </form>\n                </iron-form>\n            </div>\n            <paper-toast id='toast0' text='Invalid Credentials'></paper-toast>\n            <paper-toast id='toast1' text='Connection Error'></paper-toast>\n            <iron-ajax id='ajax' handle-as='json' on-response='_handleResponse' on-error='_handleError' content-type='application/json'></iron-ajax>\n        "]);_templateObject12_1dafad604da011ea8faf35a9b7563db5=function _templateObject12_1dafad604da011ea8faf35a9b7563db5(){return data};return data}function _templateObject11_1dafad604da011ea8faf35a9b7563db5(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        position: fixed;\n        background-color: var(--paper-toast-background-color, #323232);\n        color: var(--paper-toast-color, #f1f1f1);\n        min-height: 48px;\n        min-width: 288px;\n        padding: 16px 24px;\n        box-sizing: border-box;\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n        border-radius: 2px;\n        margin: 12px;\n        font-size: 14px;\n        cursor: default;\n        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;\n        transition: transform 0.3s, opacity 0.3s;\n        opacity: 0;\n        -webkit-transform: translateY(100px);\n        transform: translateY(100px);\n        @apply --paper-font-common-base;\n      }\n\n      :host(.capsule) {\n        border-radius: 24px;\n      }\n\n      :host(.fit-bottom) {\n        width: 100%;\n        min-width: 0;\n        border-radius: 0;\n        margin: 0;\n      }\n\n      :host(.paper-toast-open) {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n        transform: translateY(0px);\n      }\n    </style>\n\n    <span id=\"label\">{{text}}</span>\n    <slot></slot>\n"]);_templateObject11_1dafad604da011ea8faf35a9b7563db5=function _templateObject11_1dafad604da011ea8faf35a9b7563db5(){return data};return data}function _templateObject10_1dafad604da011ea8faf35a9b7563db5(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([focused]) {\n        outline: none;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      input {\n        /* Firefox sets a min-width on the input, which can cause layout issues */\n        min-width: 0;\n      }\n\n      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.\n      In 2.x the <iron-input> is distributed to paper-input-container, which styles\n      it, but in order for this to work correctly, we need to reset some\n      of the native input's properties to inherit (from the iron-input) */\n      iron-input > input {\n        @apply --paper-input-container-shared-input-style;\n        font-family: inherit;\n        font-weight: inherit;\n        font-size: inherit;\n        letter-spacing: inherit;\n        word-spacing: inherit;\n        line-height: inherit;\n        text-shadow: inherit;\n        color: inherit;\n        cursor: inherit;\n      }\n\n      input:disabled {\n        @apply --paper-input-container-input-disabled;\n      }\n\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      input::-webkit-clear-button {\n        @apply --paper-input-container-input-webkit-clear;\n      }\n\n      input::-webkit-calendar-picker-indicator {\n        @apply --paper-input-container-input-webkit-calendar-picker-indicator;\n      }\n\n      input::-webkit-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input:-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-ms-clear {\n        @apply --paper-input-container-ms-clear;\n      }\n\n      input::-ms-reveal {\n        @apply --paper-input-container-ms-reveal;\n      }\n\n      input:-ms-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      label {\n        pointer-events: none;\n      }\n    </style>\n\n    <paper-input-container id=\"container\" no-label-float=\"[[noLabelFloat]]\" always-float-label=\"[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]\" auto-validate$=\"[[autoValidate]]\" disabled$=\"[[disabled]]\" invalid=\"[[invalid]]\">\n\n      <slot name=\"prefix\" slot=\"prefix\"></slot>\n\n      <label hidden$=\"[[!label]]\" aria-hidden=\"true\" for$=\"[[_inputId]]\" slot=\"label\">[[label]]</label>\n\n      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->\n      <iron-input bind-value=\"{{value}}\" slot=\"input\" class=\"input-element\" id$=\"[[_inputId]]\" maxlength$=\"[[maxlength]]\" allowed-pattern=\"[[allowedPattern]]\" invalid=\"{{invalid}}\" validator=\"[[validator]]\">\n        <input aria-labelledby$=\"[[_ariaLabelledBy]]\" aria-describedby$=\"[[_ariaDescribedBy]]\" disabled$=\"[[disabled]]\" title$=\"[[title]]\" type$=\"[[type]]\" pattern$=\"[[pattern]]\" required$=\"[[required]]\" autocomplete$=\"[[autocomplete]]\" autofocus$=\"[[autofocus]]\" inputmode$=\"[[inputmode]]\" minlength$=\"[[minlength]]\" maxlength$=\"[[maxlength]]\" min$=\"[[min]]\" max$=\"[[max]]\" step$=\"[[step]]\" name$=\"[[name]]\" placeholder$=\"[[placeholder]]\" readonly$=\"[[readonly]]\" list$=\"[[list]]\" size$=\"[[size]]\" autocapitalize$=\"[[autocapitalize]]\" autocorrect$=\"[[autocorrect]]\" on-change=\"_onChange\" tabindex$=\"[[tabIndex]]\" autosave$=\"[[autosave]]\" results$=\"[[results]]\" accept$=\"[[accept]]\" multiple$=\"[[multiple]]\" role$=\"[[inputRole]]\" aria-haspopup$=\"[[inputAriaHaspopup]]\">\n      </iron-input>\n\n      <slot name=\"suffix\" slot=\"suffix\"></slot>\n\n      <template is=\"dom-if\" if=\"[[errorMessage]]\">\n        <paper-input-error aria-live=\"assertive\" slot=\"add-on\">[[errorMessage]]</paper-input-error>\n      </template>\n\n      <template is=\"dom-if\" if=\"[[charCounter]]\">\n        <paper-input-char-counter slot=\"add-on\"></paper-input-char-counter>\n      </template>\n\n    </paper-input-container>\n  "]);_templateObject10_1dafad604da011ea8faf35a9b7563db5=function _templateObject10_1dafad604da011ea8faf35a9b7563db5(){return data};return data}function _templateObject9_1dafad604da011ea8faf35a9b7563db5(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        visibility: hidden;\n\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n\n        @apply --paper-font-caption;\n        @apply --paper-input-error;\n        position: absolute;\n        left:0;\n        right:0;\n      }\n\n      :host([invalid]) {\n        visibility: visible;\n      }\n\n      #a11yWrapper {\n        visibility: hidden;\n      }\n\n      :host([invalid]) #a11yWrapper {\n        visibility: visible;\n      }\n    </style>\n\n    <!--\n    If the paper-input-error element is directly referenced by an\n    `aria-describedby` attribute, such as when used as a paper-input add-on,\n    then applying `visibility: hidden;` to the paper-input-error element itself\n    does not hide the error.\n\n    For more information, see:\n    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description\n    -->\n    <div id=\"a11yWrapper\">\n      <slot></slot>\n    </div>\n"],["\n    <style>\n      :host {\n        display: inline-block;\n        visibility: hidden;\n\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n\n        @apply --paper-font-caption;\n        @apply --paper-input-error;\n        position: absolute;\n        left:0;\n        right:0;\n      }\n\n      :host([invalid]) {\n        visibility: visible;\n      }\n\n      #a11yWrapper {\n        visibility: hidden;\n      }\n\n      :host([invalid]) #a11yWrapper {\n        visibility: visible;\n      }\n    </style>\n\n    <!--\n    If the paper-input-error element is directly referenced by an\n    \\`aria-describedby\\` attribute, such as when used as a paper-input add-on,\n    then applying \\`visibility: hidden;\\` to the paper-input-error element itself\n    does not hide the error.\n\n    For more information, see:\n    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description\n    -->\n    <div id=\"a11yWrapper\">\n      <slot></slot>\n    </div>\n"]);_templateObject9_1dafad604da011ea8faf35a9b7563db5=function _templateObject9_1dafad604da011ea8faf35a9b7563db5(){return data};return data}function _templateObject8_1dafad604da011ea8faf35a9b7563db5(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n        @apply --paper-input-container;\n      }\n\n      :host([inline]) {\n        display: inline-block;\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n        opacity: 0.33;\n\n        @apply --paper-input-container-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      .floated-label-placeholder {\n        @apply --paper-font-caption;\n      }\n\n      .underline {\n        height: 2px;\n        position: relative;\n      }\n\n      .focused-line {\n        @apply --layout-fit;\n        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));\n\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n        -webkit-transform: scale3d(0,1,1);\n        transform: scale3d(0,1,1);\n\n        @apply --paper-input-container-underline-focus;\n      }\n\n      .underline.is-highlighted .focused-line {\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .underline.is-invalid .focused-line {\n        border-color: var(--paper-input-container-invalid-color, var(--error-color));\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .unfocused-line {\n        @apply --layout-fit;\n        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline;\n      }\n\n      :host([disabled]) .unfocused-line {\n        border-bottom: 1px dashed;\n        border-color: var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline-disabled;\n      }\n\n      .input-wrapper {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        position: relative;\n      }\n\n      .input-content {\n        @apply --layout-flex-auto;\n        @apply --layout-relative;\n        max-width: 100%;\n      }\n\n      .input-content ::slotted(label),\n      .input-content ::slotted(.paper-input-label) {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        font: inherit;\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n        -webkit-transition: -webkit-transform 0.25s, width 0.25s;\n        transition: transform 0.25s, width 0.25s;\n        -webkit-transform-origin: left top;\n        transform-origin: left top;\n        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */\n        min-height: 1px;\n\n        @apply --paper-font-common-nowrap;\n        @apply --paper-font-subhead;\n        @apply --paper-input-container-label;\n        @apply --paper-transition-easing;\n      }\n\n\n      .input-content ::slotted(label):before,\n      .input-content ::slotted(.paper-input-label):before {\n        @apply --paper-input-container-label-before;\n      }\n\n      .input-content ::slotted(label):after,\n      .input-content ::slotted(.paper-input-label):after {\n        @apply --paper-input-container-label-after;\n      }\n\n      .input-content.label-is-floating ::slotted(label),\n      .input-content.label-is-floating ::slotted(.paper-input-label) {\n        -webkit-transform: translateY(-75%) scale(0.75);\n        transform: translateY(-75%) scale(0.75);\n\n        /* Since we scale to 75/100 of the size, we actually have 100/75 of the\n        original space now available */\n        width: 133%;\n\n        @apply --paper-input-container-label-floating;\n      }\n\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {\n        right: 0;\n        left: auto;\n        -webkit-transform-origin: right top;\n        transform-origin: right top;\n      }\n\n      .input-content.label-is-highlighted ::slotted(label),\n      .input-content.label-is-highlighted ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n\n        @apply --paper-input-container-label-focus;\n      }\n\n      .input-content.is-invalid ::slotted(label),\n      .input-content.is-invalid ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .input-content.label-is-hidden ::slotted(label),\n      .input-content.label-is-hidden ::slotted(.paper-input-label) {\n        visibility: hidden;\n      }\n\n      .input-content ::slotted(input),\n      .input-content ::slotted(iron-input),\n      .input-content ::slotted(textarea),\n      .input-content ::slotted(iron-autogrow-textarea),\n      .input-content ::slotted(.paper-input-input) {\n        @apply --paper-input-container-shared-input-style;\n        /* The apply shim doesn't apply the nested color custom property,\n          so we have to re-apply it here. */\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        @apply --paper-input-container-input;\n      }\n\n      .input-content ::slotted(input)::-webkit-outer-spin-button,\n      .input-content ::slotted(input)::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      .input-content.focused ::slotted(input),\n      .input-content.focused ::slotted(iron-input),\n      .input-content.focused ::slotted(textarea),\n      .input-content.focused ::slotted(iron-autogrow-textarea),\n      .input-content.focused ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-focus;\n      }\n\n      .input-content.is-invalid ::slotted(input),\n      .input-content.is-invalid ::slotted(iron-input),\n      .input-content.is-invalid ::slotted(textarea),\n      .input-content.is-invalid ::slotted(iron-autogrow-textarea),\n      .input-content.is-invalid ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-invalid;\n      }\n\n      .prefix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n        @apply --paper-input-prefix;\n      }\n\n      .suffix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n\n        @apply --paper-input-suffix;\n      }\n\n      /* Firefox sets a min-width on the input, which can cause layout issues */\n      .input-content ::slotted(input) {\n        min-width: 0;\n      }\n\n      .input-content ::slotted(textarea) {\n        resize: none;\n      }\n\n      .add-on-content {\n        position: relative;\n      }\n\n      .add-on-content.is-invalid ::slotted(*) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .add-on-content.is-highlighted ::slotted(*) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n      }\n    </style>\n\n    <div class=\"floated-label-placeholder\" aria-hidden=\"true\" hidden=\"[[noLabelFloat]]\">&nbsp;</div>\n\n    <div class=\"input-wrapper\">\n      <span class=\"prefix\"><slot name=\"prefix\"></slot></span>\n\n      <div class$=\"[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]\" id=\"labelAndInputContainer\">\n        <slot name=\"label\"></slot>\n        <slot name=\"input\"></slot>\n      </div>\n\n      <span class=\"suffix\"><slot name=\"suffix\"></slot></span>\n    </div>\n\n    <div class$=\"[[_computeUnderlineClass(focused,invalid)]]\">\n      <div class=\"unfocused-line\"></div>\n      <div class=\"focused-line\"></div>\n    </div>\n\n    <div class$=\"[[_computeAddOnContentClass(focused,invalid)]]\">\n      <slot name=\"add-on\"></slot>\n    </div>\n"]);_templateObject8_1dafad604da011ea8faf35a9b7563db5=function _templateObject8_1dafad604da011ea8faf35a9b7563db5(){return data};return data}function _templateObject7_1dafad604da011ea8faf35a9b7563db5(){var data=babelHelpers.taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n      --paper-input-container-shared-input-style: {\n        position: relative; /* to make a stacking context */\n        outline: none;\n        box-shadow: none;\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        max-width: 100%;\n        background: transparent;\n        border: none;\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        -webkit-appearance: none;\n        text-align: inherit;\n        vertical-align: var(--paper-input-container-input-align, bottom);\n\n        @apply --paper-font-subhead;\n      };\n    }\n  </style>\n</custom-style>\n"]);_templateObject7_1dafad604da011ea8faf35a9b7563db5=function _templateObject7_1dafad604da011ea8faf35a9b7563db5(){return data};return data}function _templateObject6_1dafad604da011ea8faf35a9b7563db5(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        float: right;\n\n        @apply --paper-font-caption;\n        @apply --paper-input-char-counter;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:dir(rtl)) {\n        float: left;\n      }\n    </style>\n\n    <span>[[_charCounterStr]]</span>\n"]);_templateObject6_1dafad604da011ea8faf35a9b7563db5=function _templateObject6_1dafad604da011ea8faf35a9b7563db5(){return data};return data}function _templateObject5_1dafad604da011ea8faf35a9b7563db5(){var data=babelHelpers.taggedTemplateLiteral(["<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      /* Shared Styles */\n      --paper-font-common-base: {\n        font-family: 'Roboto', 'Noto', sans-serif;\n        -webkit-font-smoothing: antialiased;\n      };\n\n      --paper-font-common-code: {\n        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;\n        -webkit-font-smoothing: antialiased;\n      };\n\n      --paper-font-common-expensive-kerning: {\n        text-rendering: optimizeLegibility;\n      };\n\n      --paper-font-common-nowrap: {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      };\n\n      /* Material Font Styles */\n\n      --paper-font-display4: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 112px;\n        font-weight: 300;\n        letter-spacing: -.044em;\n        line-height: 120px;\n      };\n\n      --paper-font-display3: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 56px;\n        font-weight: 400;\n        letter-spacing: -.026em;\n        line-height: 60px;\n      };\n\n      --paper-font-display2: {\n        @apply --paper-font-common-base;\n\n        font-size: 45px;\n        font-weight: 400;\n        letter-spacing: -.018em;\n        line-height: 48px;\n      };\n\n      --paper-font-display1: {\n        @apply --paper-font-common-base;\n\n        font-size: 34px;\n        font-weight: 400;\n        letter-spacing: -.01em;\n        line-height: 40px;\n      };\n\n      --paper-font-headline: {\n        @apply --paper-font-common-base;\n\n        font-size: 24px;\n        font-weight: 400;\n        letter-spacing: -.012em;\n        line-height: 32px;\n      };\n\n      --paper-font-title: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 20px;\n        font-weight: 500;\n        line-height: 28px;\n      };\n\n      --paper-font-subhead: {\n        @apply --paper-font-common-base;\n\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n      };\n\n      --paper-font-body2: {\n        @apply --paper-font-common-base;\n\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 24px;\n      };\n\n      --paper-font-body1: {\n        @apply --paper-font-common-base;\n\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 20px;\n      };\n\n      --paper-font-caption: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 12px;\n        font-weight: 400;\n        letter-spacing: 0.011em;\n        line-height: 20px;\n      };\n\n      --paper-font-menu: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 13px;\n        font-weight: 500;\n        line-height: 24px;\n      };\n\n      --paper-font-button: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 14px;\n        font-weight: 500;\n        letter-spacing: 0.018em;\n        line-height: 24px;\n        text-transform: uppercase;\n      };\n\n      --paper-font-code2: {\n        @apply --paper-font-common-code;\n\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 20px;\n      };\n\n      --paper-font-code1: {\n        @apply --paper-font-common-code;\n\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 20px;\n      };\n\n    }\n\n  </style>\n</custom-style>"]);_templateObject5_1dafad604da011ea8faf35a9b7563db5=function _templateObject5_1dafad604da011ea8faf35a9b7563db5(){return data};return data}function _templateObject4_1dafad604da011ea8faf35a9b7563db5(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: var(--iron-overlay-backdrop-background-color, #000);\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n        @apply --iron-overlay-backdrop;\n      }\n\n      :host(.opened) {\n        opacity: var(--iron-overlay-backdrop-opacity, 0.6);\n        pointer-events: auto;\n        @apply --iron-overlay-backdrop-opened;\n      }\n    </style>\n\n    <slot></slot>\n"]);_templateObject4_1dafad604da011ea8faf35a9b7563db5=function _templateObject4_1dafad604da011ea8faf35a9b7563db5(){return data};return data}function _templateObject3_1dafad604da011ea8faf35a9b7563db5(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n    </style>\n    <slot id=\"content\"></slot>\n"]);_templateObject3_1dafad604da011ea8faf35a9b7563db5=function _templateObject3_1dafad604da011ea8faf35a9b7563db5(){return data};return data}function _templateObject2_1dafad604da011ea8faf35a9b7563db5(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n\n    <!-- This form is used to collect the elements that should be submitted -->\n    <slot></slot>\n\n    <!-- This form is used for submission -->\n    <form id=\"helper\" action$=\"[[action]]\" method$=\"[[method]]\" enctype$=\"[[enctype]]\"></form>\n"],["\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n\n    <!-- This form is used to collect the elements that should be submitted -->\n    <slot></slot>\n\n    <!-- This form is used for submission -->\n    <form id=\"helper\" action\\$=\"[[action]]\" method\\$=\"[[method]]\" enctype\\$=\"[[enctype]]\"></form>\n"]);_templateObject2_1dafad604da011ea8faf35a9b7563db5=function _templateObject2_1dafad604da011ea8faf35a9b7563db5(){return data};return data}function _templateObject_1dafad604da011ea8faf35a9b7563db5(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0px,0px,0px,0px);\n      }\n    </style>\n    <div aria-live$=\"[[mode]]\">[[_text]]</div>\n"]);_templateObject_1dafad604da011ea8faf35a9b7563db5=function _templateObject_1dafad604da011ea8faf35a9b7563db5(){return data};return data}// Give the user the choice to opt out of font loading.
if(!window.polymerSkipLoadingFontRoboto){var link=document.createElement("link");link.rel="stylesheet";link.type="text/css";link.crossOrigin="anonymous";link.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic";document.head.appendChild(link)}var IronA11yAnnouncer=(0,_mockApp4App.Polymer)({_template:(0,_mockApp4App.html)(_templateObject_1dafad604da011ea8faf35a9b7563db5()),is:"iron-a11y-announcer",properties:{/**
     * The value of mode is used to set the `aria-live` attribute
     * for the element that will be announced. Valid values are: `off`,
     * `polite` and `assertive`.
     */mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function created(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=this}document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},/**
   * Cause a text string to be announced by screen readers.
   *
   * @param {string} text The text that should be announced.
   */announce:function announce(text){this._text="";this.async(function(){this._text=text},100)},_onIronAnnounce:function _onIronAnnounce(event){if(event.detail&&event.detail.text){this.announce(event.detail.text)}}});_exports.IronA11yAnnouncer=IronA11yAnnouncer;IronA11yAnnouncer.instance=null;IronA11yAnnouncer.requestAvailability=function(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=document.createElement("iron-a11y-announcer")}document.body.appendChild(IronA11yAnnouncer.instance)};var ironA11yAnnouncer={IronA11yAnnouncer:IronA11yAnnouncer};_exports.$ironA11yAnnouncer=ironA11yAnnouncer;(0,_mockApp4App.Polymer)({is:"iron-request",hostAttributes:{hidden:!0},properties:{/**
     * A reference to the XMLHttpRequest instance used to generate the
     * network request.
     *
     * @type {XMLHttpRequest}
     */xhr:{type:Object,notify:!0,readOnly:!0,value:function value(){return new XMLHttpRequest}},/**
     * A reference to the parsed response body, if the `xhr` has completely
     * resolved.
     *
     * @type {*}
     * @default null
     */response:{type:Object,notify:!0,readOnly:!0,value:function value(){return null}},/**
     * A reference to the status code, if the `xhr` has completely resolved.
     */status:{type:Number,notify:!0,readOnly:!0,value:0},/**
     * A reference to the status text, if the `xhr` has completely resolved.
     */statusText:{type:String,notify:!0,readOnly:!0,value:""},/**
     * A promise that resolves when the `xhr` response comes back, or rejects
     * if there is an error before the `xhr` completes.
     * The resolve callback is called with the original request as an argument.
     * By default, the reject callback is called with an `Error` as an argument.
     * If `rejectWithRequest` is true, the reject callback is called with an
     * object with two keys: `request`, the original request, and `error`, the
     * error object.
     *
     * @type {Promise}
     */completes:{type:Object,readOnly:!0,notify:!0,value:function value(){return new Promise(function(resolve,reject){this.resolveCompletes=resolve;this.rejectCompletes=reject}.bind(this))}},/**
     * An object that contains progress information emitted by the XHR if
     * available.
     *
     * @default {}
     */progress:{type:Object,notify:!0,readOnly:!0,value:function value(){return{}}},/**
     * Aborted will be true if an abort of the request is attempted.
     */aborted:{type:Boolean,notify:!0,readOnly:!0,value:/* ignoreName */ /* ignoreName */!1/* skipSlots */ /* skipSlots */ /* skipSlots */ /* skipSlots */},/**
     * Errored will be true if the browser fired an error event from the
     * XHR object (mainly network errors).
     */errored:{type:Boolean,notify:!0,readOnly:!0,value:!1},/**
     * TimedOut will be true if the XHR threw a timeout event.
     */timedOut:{type:Boolean,notify:!0,readOnly:!0,value:!1}},/**
   * Succeeded is true if the request succeeded. The request succeeded if it
   * loaded without error, wasn't aborted, and the status code is ≥ 200, and
   * < 300, or if the status code is 0.
   *
   * The status code 0 is accepted as a success because some schemes - e.g.
   * file:// - don't provide status codes.
   *
   * @return {boolean}
   */get succeeded(){if(this.errored||this.aborted||this.timedOut){return!1}var status=this.xhr.status||0;// Note: if we are using the file:// protocol, the status code will be 0
// for all outcomes (successful or otherwise).
return 0===status||200<=status&&300>status},/**
   * Sends an HTTP request to the server and returns a promise (see the
   * `completes` property for details).
   *
   * The handling of the `body` parameter will vary based on the Content-Type
   * header. See the docs for iron-ajax's `body` property for details.
   *
   * @param {{
   *   url: string,
   *   method: (string|undefined),
   *   async: (boolean|undefined),
   *   body:
   * (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object),
   *   headers: (Object|undefined),
   *   handleAs: (string|undefined),
   *   jsonPrefix: (string|undefined),
   *   withCredentials: (boolean|undefined),
   *   timeout: (number|undefined),
   *   rejectWithRequest: (boolean|undefined)}} options -
   *   - url The url to which the request is sent.
   *   - method The HTTP method to use, default is GET.
   *   - async By default, all requests are sent asynchronously. To send
   * synchronous requests, set to false.
   *   -  body The content for the request body for POST method.
   *   -  headers HTTP request headers.
   *   -  handleAs The response type. Default is 'text'.
   *   -  withCredentials Whether or not to send credentials on the request.
   * Default is false.
   *   -  timeout - Timeout for request, in milliseconds.
   *   -  rejectWithRequest Set to true to include the request object with
   * promise rejections.
   * @return {Promise}
   */send:function send(options){var xhr=this.xhr;if(0<xhr.readyState){return null}xhr.addEventListener("progress",function(progress){this._setProgress({lengthComputable:progress.lengthComputable,loaded:progress.loaded,total:progress.total});// Webcomponents v1 spec does not fire *-changed events when not connected
this.fire("iron-request-progress-changed",{value:this.progress})}.bind(this));xhr.addEventListener("error",function(error){this._setErrored(!0);this._updateStatus();var response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));xhr.addEventListener("timeout",function(error){this._setTimedOut(!0);this._updateStatus();var response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));xhr.addEventListener("abort",function(){this._setAborted(!0);this._updateStatus();var error=new Error("Request aborted."),response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));// Called after all of the above.
xhr.addEventListener("loadend",function(){this._updateStatus();this._setResponse(this.parseResponse());if(!this.succeeded){var error=new Error("The request failed with status code: "+this.xhr.status),response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response);return}this.resolveCompletes(this)}.bind(this));this.url=options.url;var isXHRAsync=!1!==options.async;xhr.open(options.method||"GET",options.url,isXHRAsync);var acceptType={json:"application/json",text:"text/plain",html:"text/html",xml:"application/xml",arraybuffer:"application/octet-stream"}[options.handleAs],headers=options.headers||Object.create(null),newHeaders=Object.create(null);for(var key in headers){newHeaders[key.toLowerCase()]=headers[key]}headers=newHeaders;if(acceptType&&!headers.accept){headers.accept=acceptType}Object.keys(headers).forEach(function(requestHeader){if(/[A-Z]/.test(requestHeader)){_mockApp4App.Base._error("Headers must be lower case, got",requestHeader)}xhr.setRequestHeader(requestHeader,headers[requestHeader])},this);if(isXHRAsync){xhr.timeout=options.timeout;var handleAs=options.handleAs;// If a JSON prefix is present, the responseType must be 'text' or the
// browser won’t be able to parse the response.
if(!!options.jsonPrefix||!handleAs){handleAs="text"}// In IE, `xhr.responseType` is an empty string when the response
// returns. Hence, caching it as `xhr._responseType`.
xhr.responseType=xhr._responseType=handleAs;// Cache the JSON prefix, if it exists.
if(!!options.jsonPrefix){xhr._jsonPrefix=options.jsonPrefix}}xhr.withCredentials=!!options.withCredentials;var body=this._encodeBodyObject(options.body,headers["content-type"]);xhr.send(/**
                 @type {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|
                         null|string|undefined}
               */body);return this.completes},/**
   * Attempts to parse the response body of the XHR. If parsing succeeds,
   * the value returned will be deserialized based on the `responseType`
   * set on the XHR.
   *
   * @return {*} The parsed response,
   * or undefined if there was an empty response or parsing failed.
   */parseResponse:function parseResponse(){var xhr=this.xhr,responseType=xhr.responseType||xhr._responseType,preferResponseText=!this.xhr.responseType,prefixLen=xhr._jsonPrefix&&xhr._jsonPrefix.length||0;try{switch(responseType){case"json":// If the xhr object doesn't have a natural `xhr.responseType`,
// we can assume that the browser hasn't parsed the response for us,
// and so parsing is our responsibility. Likewise if response is
// undefined, as there's no way to encode undefined in JSON.
if(preferResponseText||xhr.response===void 0){// Try to emulate the JSON section of the response body section of
// the spec: https://xhr.spec.whatwg.org/#response-body
// That is to say, we try to parse as JSON, but if anything goes
// wrong return null.
try{return JSON.parse(xhr.responseText)}catch(_){console.warn("Failed to parse JSON sent from "+xhr.responseURL);return null}}return xhr.response;case"xml":return xhr.responseXML;case"blob":case"document":case"arraybuffer":return xhr.response;case"text":default:{// If `prefixLen` is set, it implies the response should be parsed
// as JSON once the prefix of length `prefixLen` is stripped from
// it. Emulate the behavior above where null is returned on failure
// to parse.
if(prefixLen){try{return JSON.parse(xhr.responseText.substring(prefixLen))}catch(_){console.warn("Failed to parse JSON sent from "+xhr.responseURL);return null}}return xhr.responseText}}}catch(e){this.rejectCompletes(new Error("Could not parse response. "+e.message))}},/**
   * Aborts the request.
   */abort:function abort(){this._setAborted(!0);this.xhr.abort()},/**
   * @param {*} body The given body of the request to try and encode.
   * @param {?string} contentType The given content type, to infer an encoding
   *     from.
   * @return {*} Either the encoded body as a string, if successful,
   *     or the unaltered body object if no encoding could be inferred.
   */_encodeBodyObject:function _encodeBodyObject(body,contentType){if("string"==typeof body){return body;// Already encoded.
}var bodyObj=/** @type {Object} */body;switch(contentType){case"application/json":return JSON.stringify(bodyObj);case"application/x-www-form-urlencoded":return this._wwwFormUrlEncode(bodyObj);}return body},/**
   * @param {Object} object The object to encode as x-www-form-urlencoded.
   * @return {string} .
   */_wwwFormUrlEncode:function _wwwFormUrlEncode(object){if(!object){return""}var pieces=[];Object.keys(object).forEach(function(key){// TODO(rictic): handle array values here, in a consistent way with
//   iron-ajax params.
pieces.push(this._wwwFormUrlEncodePiece(key)+"="+this._wwwFormUrlEncodePiece(object[key]))},this);return pieces.join("&")},/**
   * @param {*} str A key or value to encode as x-www-form-urlencoded.
   * @return {string} .
   */_wwwFormUrlEncodePiece:function _wwwFormUrlEncodePiece(str){// Spec says to normalize newlines to \r\n and replace %20 spaces with +.
// jQuery does this as well, so this is likely to be widely compatible.
if(null===str||str===void 0||!str.toString){return""}return encodeURIComponent(str.toString().replace(/\r?\n/g,"\r\n")).replace(/%20/g,"+")},/**
   * Updates the status code and status text.
   */_updateStatus:function _updateStatus(){this._setStatus(this.xhr.status);this._setStatusText(this.xhr.statusText===void 0?"":this.xhr.statusText)}});(0,_mockApp4App.Polymer)({is:"iron-ajax",/**
   * Fired before a request is sent.
   *
   * @event iron-ajax-presend
   */ /**
       * Fired when a request is sent.
       *
       * @event request
       */ /**
           * Fired when a request is sent.
           *
           * @event iron-ajax-request
           */ /**
               * Fired when a response is received.
               *
               * @event response
               */ /**
                   * Fired when a response is received.
                   *
                   * @event iron-ajax-response
                   */ /**
                       * Fired when an error is received.
                       *
                       * @event error
                       */ /**
                           * Fired when an error is received.
                           *
                           * @event iron-ajax-error
                           */hostAttributes:{hidden:!0},properties:{/**
     * The URL target of the request.
     */url:{type:String},/**
     * An object that contains query parameters to be appended to the
     * specified `url` when generating a request. If you wish to set the body
     * content when making a POST request, you should use the `body` property
     * instead.
     */params:{type:Object,value:function value(){return{}}},/**
     * The HTTP method to use such as 'GET', 'POST', 'PUT', or 'DELETE'.
     * Default is 'GET'.
     */method:{type:String,value:"GET"},/**
     * HTTP request headers to send.
     *
     * Example:
     *
     *     <iron-ajax
     *         auto
     *         url="http://somesite.com"
     *         headers='{"X-Requested-With": "XMLHttpRequest"}'
     *         handle-as="json"></iron-ajax>
     *
     * Note: setting a `Content-Type` header here will override the value
     * specified by the `contentType` property of this element.
     */headers:{type:Object,value:function value(){return{}}},/**
     * Content type to use when sending data. If the `contentType` property
     * is set and a `Content-Type` header is specified in the `headers`
     * property, the `headers` property value will take precedence.
     *
     * Varies the handling of the `body` param.
     */contentType:{type:String,value:null},/**
     * Body content to send with the request, typically used with "POST"
     * requests.
     *
     * If body is a string it will be sent unmodified.
     *
     * If Content-Type is set to a value listed below, then
     * the body will be encoded accordingly.
     *
     *    * `content-type="application/json"`
     *      * body is encoded like `{"foo":"bar baz","x":1}`
     *    * `content-type="application/x-www-form-urlencoded"`
     *      * body is encoded like `foo=bar+baz&x=1`
     *
     * Otherwise the body will be passed to the browser unmodified, and it
     * will handle any encoding (e.g. for FormData, Blob, ArrayBuffer).
     *
     * @type
     * (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object)
     */body:{type:Object,value:null},/**
     * Toggle whether XHR is synchronous or asynchronous. Don't change this
     * to true unless You Know What You Are Doing™.
     */sync:{type:Boolean,value:!1},/**
     * Specifies what data to store in the `response` property, and
     * to deliver as `event.detail.response` in `response` events.
     *
     * One of:
     *
     *    `text`: uses `XHR.responseText`.
     *
     *    `xml`: uses `XHR.responseXML`.
     *
     *    `json`: uses `XHR.responseText` parsed as JSON.
     *
     *    `arraybuffer`: uses `XHR.response`.
     *
     *    `blob`: uses `XHR.response`.
     *
     *    `document`: uses `XHR.response`.
     */handleAs:{type:String,value:"json"},/**
     * Set the withCredentials flag on the request.
     */withCredentials:{type:Boolean,value:!1},/**
     * Set the timeout flag on the request.
     */timeout:{type:Number,value:0},/**
     * If true, automatically performs an Ajax request when either `url` or
     * `params` changes.
     */auto:{type:Boolean,value:!1},/**
     * If true, error messages will automatically be logged to the console.
     */verbose:{type:Boolean,value:!1},/**
     * The most recent request made by this iron-ajax element.
     *
     * @type {Object|undefined}
     */lastRequest:{type:Object,notify:!0,readOnly:!0},/**
     * The `progress` property of this element's `lastRequest`.
     *
     * @type {Object|undefined}
     */lastProgress:{type:Object,notify:!0,readOnly:!0},/**
     * True while lastRequest is in flight.
     */loading:{type:Boolean,notify:!0,readOnly:!0},/**
     * lastRequest's response.
     *
     * Note that lastResponse and lastError are set when lastRequest finishes,
     * so if loading is true, then lastResponse and lastError will correspond
     * to the result of the previous request.
     *
     * The type of the response is determined by the value of `handleAs` at
     * the time that the request was generated.
     *
     * @type {Object}
     */lastResponse:{type:Object,notify:!0,readOnly:!0},/**
     * lastRequest's error, if any.
     *
     * @type {Object}
     */lastError:{type:Object,notify:!0,readOnly:!0},/**
     * An Array of all in-flight requests originating from this iron-ajax
     * element.
     */activeRequests:{type:Array,notify:!0,readOnly:!0,value:function value(){return[]}},/**
     * Length of time in milliseconds to debounce multiple automatically
     * generated requests.
     */debounceDuration:{type:Number,value:0,notify:!0},/**
     * Prefix to be stripped from a JSON response before parsing it.
     *
     * In order to prevent an attack using CSRF with Array responses
     * (http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx/)
     * many backends will mitigate this by prefixing all JSON response bodies
     * with a string that would be nonsensical to a JavaScript parser.
     *
     */jsonPrefix:{type:String,value:""},/**
     * By default, iron-ajax's events do not bubble. Setting this attribute will
     * cause its request and response events as well as its iron-ajax-request,
     * -response,  and -error events to bubble to the window object. The vanilla
     * error event never bubbles when using shadow dom even if this.bubbles is
     * true because a scoped flag is not passed with it (first link) and because
     * the shadow dom spec did not used to allow certain events, including
     * events named error, to leak outside of shadow trees (second link).
     * https://www.w3.org/TR/shadow-dom/#scoped-flag
     * https://www.w3.org/TR/2015/WD-shadow-dom-20151215/#events-that-are-not-leaked-into-ancestor-trees
     */bubbles:{type:Boolean,value:!1},/**
     * Changes the [`completes`](iron-request#property-completes) promise chain
     * from `generateRequest` to reject with an object
     * containing the original request, as well an error message.
     * If false (default), the promise rejects with an error message only.
     */rejectWithRequest:{type:Boolean,value:!1},_boundHandleResponse:{type:Function,value:function value(){return this._handleResponse.bind(this)}}},observers:["_requestOptionsChanged(url, method, params.*, headers, contentType, "+"body, sync, handleAs, jsonPrefix, withCredentials, timeout, auto)"],created:function created(){this._boundOnProgressChanged=this._onProgressChanged.bind(this)},/**
   * The query string that should be appended to the `url`, serialized from
   * the current value of `params`.
   *
   * @return {string}
   */get queryString(){var queryParts=[],param,value;for(param in this.params){value=this.params[param];param=window.encodeURIComponent(param);if(Array.isArray(value)){for(var i=0;i<value.length;i++){queryParts.push(param+"="+window.encodeURIComponent(value[i]))}}else if(null!==value){queryParts.push(param+"="+window.encodeURIComponent(value))}else{queryParts.push(param)}}return queryParts.join("&")},/**
   * The `url` with query string (if `params` are specified), suitable for
   * providing to an `iron-request` instance.
   *
   * @return {string}
   */get requestUrl(){var queryString=this.queryString,url=this.url||"";if(queryString){var bindingChar=0<=url.indexOf("?")?"&":"?";return url+bindingChar+queryString}return url},/**
   * An object that maps header names to header values, first applying the
   * the value of `Content-Type` and then overlaying the headers specified
   * in the `headers` property.
   *
   * @return {Object}
   */get requestHeaders(){var headers={},contentType=this.contentType;if(null==contentType&&"string"===typeof this.body){contentType="application/x-www-form-urlencoded"}if(contentType){headers["content-type"]=contentType}var header;if("object"===babelHelpers.typeof(this.headers)){for(header in this.headers){headers[header]=this.headers[header].toString()}}return headers},_onProgressChanged:function _onProgressChanged(event){this._setLastProgress(event.detail.value)},/**
   * Request options suitable for generating an `iron-request` instance based
   * on the current state of the `iron-ajax` instance's properties.
   *
   * @return {{
   *   url: string,
   *   method: (string|undefined),
   *   async: (boolean|undefined),
   *   body:
   * (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object),
   *   headers: (Object|undefined),
   *   handleAs: (string|undefined),
   *   jsonPrefix: (string|undefined),
   *   withCredentials: (boolean|undefined)}}
   */toRequestOptions:function toRequestOptions(){return{url:this.requestUrl||"",method:this.method,headers:this.requestHeaders,body:this.body,async:!this.sync,handleAs:this.handleAs,jsonPrefix:this.jsonPrefix,withCredentials:this.withCredentials,timeout:this.timeout,rejectWithRequest:this.rejectWithRequest}},/**
   * Performs an AJAX request to the specified URL.
   *
   * @return {!IronRequestElement}
   */generateRequest:function generateRequest(){var request=/** @type {!IronRequestElement} */document.createElement("iron-request"),requestOptions=this.toRequestOptions();this.push("activeRequests",request);request.completes.then(this._boundHandleResponse).catch(this._handleError.bind(this,request)).then(this._discardRequest.bind(this,request));var evt=this.fire("iron-ajax-presend",{request:request,options:requestOptions},{bubbles:this.bubbles,cancelable:!0});if(evt.defaultPrevented){request.abort();request.rejectCompletes(request);return request}if(this.lastRequest){this.lastRequest.removeEventListener("iron-request-progress-changed",this._boundOnProgressChanged)}request.addEventListener("iron-request-progress-changed",this._boundOnProgressChanged);request.send(requestOptions);this._setLastProgress(null);this._setLastRequest(request);this._setLoading(!0);this.fire("request",{request:request,options:requestOptions},{bubbles:this.bubbles,composed:!0});this.fire("iron-ajax-request",{request:request,options:requestOptions},{bubbles:this.bubbles,composed:!0});return request},_handleResponse:function _handleResponse(request){if(request===this.lastRequest){this._setLastResponse(request.response);this._setLastError(null);this._setLoading(!1)}this.fire("response",request,{bubbles:this.bubbles,composed:!0});this.fire("iron-ajax-response",request,{bubbles:this.bubbles,composed:!0})},_handleError:function _handleError(request,error){if(this.verbose){_mockApp4App.Base._error(error)}if(request===this.lastRequest){this._setLastError({request:request,error:error,status:request.xhr.status,statusText:request.xhr.statusText,response:request.xhr.response});this._setLastResponse(null);this._setLoading(!1)}// Tests fail if this goes after the normal this.fire('error', ...)
this.fire("iron-ajax-error",{request:request,error:error},{bubbles:this.bubbles,composed:!0});this.fire("error",{request:request,error:error},{bubbles:this.bubbles,composed:!0})},_discardRequest:function _discardRequest(request){var requestIndex=this.activeRequests.indexOf(request);if(-1<requestIndex){this.splice("activeRequests",requestIndex,1)}},_requestOptionsChanged:function _requestOptionsChanged(){this.debounce("generate-request",function(){if(null==this.url){return}if(this.auto){this.generateRequest()}},this.debounceDuration)}});var IronFitBehavior={properties:{/**
     * The element that will receive a `max-height`/`width`. By default it is
     * the same as `this`, but it can be set to a child element. This is useful,
     * for example, for implementing a scrolling region inside the element.
     * @type {!Element}
     */sizingTarget:{type:Object,value:function value(){return this}},/**
     * The element to fit `this` into.
     */fitInto:{type:Object,value:window},/**
     * Will position the element around the positionTarget without overlapping
     * it.
     */noOverlap:{type:Boolean},/**
     * The element that should be used to position the element. If not set, it
     * will default to the parent node.
     * @type {!Element}
     */positionTarget:{type:Element},/**
     * The orientation against which to align the element horizontally
     * relative to the `positionTarget`. Possible values are "left", "right",
     * "center", "auto".
     */horizontalAlign:{type:String},/**
     * The orientation against which to align the element vertically
     * relative to the `positionTarget`. Possible values are "top", "bottom",
     * "middle", "auto".
     */verticalAlign:{type:String},/**
     * If true, it will use `horizontalAlign` and `verticalAlign` values as
     * preferred alignment and if there's not enough space, it will pick the
     * values which minimize the cropping.
     */dynamicAlign:{type:Boolean},/**
     * A pixel value that will be added to the position calculated for the
     * given `horizontalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `horizontalAlign`.
     *
     * If `horizontalAlign` is "left" or "center", this offset will increase or
     * decrease the distance to the left side of the screen: a negative offset
     * will move the dropdown to the left; a positive one, to the right.
     *
     * Conversely if `horizontalAlign` is "right", this offset will increase
     * or decrease the distance to the right side of the screen: a negative
     * offset will move the dropdown to the right; a positive one, to the left.
     */horizontalOffset:{type:Number,value:0,notify:!0},/**
     * A pixel value that will be added to the position calculated for the
     * given `verticalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `verticalAlign`.
     *
     * If `verticalAlign` is "top" or "middle", this offset will increase or
     * decrease the distance to the top side of the screen: a negative offset
     * will move the dropdown upwards; a positive one, downwards.
     *
     * Conversely if `verticalAlign` is "bottom", this offset will increase
     * or decrease the distance to the bottom side of the screen: a negative
     * offset will move the dropdown downwards; a positive one, upwards.
     */verticalOffset:{type:Number,value:0,notify:!0},/**
     * Set to true to auto-fit on attach.
     */autoFitOnAttach:{type:Boolean,value:!1},/** @type {?Object} */_fitInfo:{type:Object}},get _fitWidth(){var fitWidth;if(this.fitInto===window){fitWidth=this.fitInto.innerWidth}else{fitWidth=this.fitInto.getBoundingClientRect().width}return fitWidth},get _fitHeight(){var fitHeight;if(this.fitInto===window){fitHeight=this.fitInto.innerHeight}else{fitHeight=this.fitInto.getBoundingClientRect().height}return fitHeight},get _fitLeft(){var fitLeft;if(this.fitInto===window){fitLeft=0}else{fitLeft=this.fitInto.getBoundingClientRect().left}return fitLeft},get _fitTop(){var fitTop;if(this.fitInto===window){fitTop=0}else{fitTop=this.fitInto.getBoundingClientRect().top}return fitTop},/**
   * The element that should be used to position the element,
   * if no position target is configured.
   */get _defaultPositionTarget(){var parent=(0,_mockApp4App.dom)(this).parentNode;if(parent&&parent.nodeType===Node.DOCUMENT_FRAGMENT_NODE){parent=parent.host}return parent},/**
   * The horizontal align value, accounting for the RTL/LTR text direction.
   */get _localeHorizontalAlign(){if(this._isRTL){// In RTL, "left" becomes "right".
if("right"===this.horizontalAlign){return"left"}if("left"===this.horizontalAlign){return"right"}}return this.horizontalAlign},/**
   * True if the element should be positioned instead of centered.
   * @private
   */get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},/**
   * True if the component is RTL.
   * @private
   */get _isRTL(){// Memoize this to avoid expensive calculations & relayouts.
// Make sure we do it only once
if("undefined"===typeof this._memoizedIsRTL){this._memoizedIsRTL="rtl"==window.getComputedStyle(this).direction}return this._memoizedIsRTL},/** @override */attached:function attached(){this.positionTarget=this.positionTarget||this._defaultPositionTarget;if(this.autoFitOnAttach){if("none"===window.getComputedStyle(this).display){setTimeout(function(){this.fit()}.bind(this))}else{// NOTE: shadydom applies distribution asynchronously
// for performance reasons webcomponents/shadydom#120
// Flush to get correct layout info.
window.ShadyDOM&&ShadyDOM.flush();this.fit()}}},/** @override */detached:function detached(){if(this.__deferredFit){clearTimeout(this.__deferredFit);this.__deferredFit=null}},/**
   * Positions and fits the element into the `fitInto` element.
   */fit:function fit(){this.position();this.constrain();this.center()},/**
   * Memoize information needed to position and size the target element.
   * @suppress {deprecated}
   */_discoverInfo:function _discoverInfo(){if(this._fitInfo){return}var target=window.getComputedStyle(this),sizer=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==target.top?"top":"auto"!==target.bottom?"bottom":null,horizontally:"auto"!==target.left?"left":"auto"!==target.right?"right":null},sizedBy:{height:"none"!==sizer.maxHeight,width:"none"!==sizer.maxWidth,minWidth:parseInt(sizer.minWidth,10)||0,minHeight:parseInt(sizer.minHeight,10)||0},margin:{top:parseInt(target.marginTop,10)||0,right:parseInt(target.marginRight,10)||0,bottom:parseInt(target.marginBottom,10)||0,left:parseInt(target.marginLeft,10)||0}}},/**
   * Resets the target element's position and size constraints, and clear
   * the memoized data.
   */resetFit:function resetFit(){var info=this._fitInfo||{};for(var property in info.sizerInlineStyle){this.sizingTarget.style[property]=info.sizerInlineStyle[property]}for(var property in info.inlineStyle){this.style[property]=info.inlineStyle[property]}this._fitInfo=null},/**
   * Equivalent to calling `resetFit()` and `fit()`. Useful to call this after
   * the element or the `fitInto` element has been resized, or if any of the
   * positioning properties (e.g. `horizontalAlign, verticalAlign`) is updated.
   * It preserves the scroll position of the sizingTarget.
   */refit:function refit(){var scrollLeft=this.sizingTarget.scrollLeft,scrollTop=this.sizingTarget.scrollTop;this.resetFit();this.fit();this.sizingTarget.scrollLeft=scrollLeft;this.sizingTarget.scrollTop=scrollTop},/**
   * Positions the element according to `horizontalAlign, verticalAlign`.
   */position:function position(){if(!this.__shouldPosition){// needs to be centered, and it is done after constrain.
return}this._discoverInfo();this.style.position="fixed";// Need border-box for margin/padding.
this.sizingTarget.style.boxSizing="border-box";// Set to 0, 0 in order to discover any offset caused by parent stacking
// contexts.
this.style.left="0px";this.style.top="0px";var rect=this.getBoundingClientRect(),positionRect=this.__getNormalizedRect(this.positionTarget),fitRect=this.__getNormalizedRect(this.fitInto),margin=this._fitInfo.margin,size={width:rect.width+margin.left+margin.right,height:rect.height+margin.top+margin.bottom},position=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,size,rect,positionRect,fitRect),left=position.left+margin.left,top=position.top+margin.top,right=Math.min(fitRect.right-margin.right,left+rect.width),bottom=Math.min(fitRect.bottom-margin.bottom,top+rect.height);// Keep left/top within fitInto respecting the margin.
left=Math.max(fitRect.left+margin.left,Math.min(left,right-this._fitInfo.sizedBy.minWidth));top=Math.max(fitRect.top+margin.top,Math.min(top,bottom-this._fitInfo.sizedBy.minHeight));// Use right/bottom to set maxWidth/maxHeight, and respect
// minWidth/minHeight.
this.sizingTarget.style.maxWidth=Math.max(right-left,this._fitInfo.sizedBy.minWidth)+"px";this.sizingTarget.style.maxHeight=Math.max(bottom-top,this._fitInfo.sizedBy.minHeight)+"px";// Remove the offset caused by any stacking context.
this.style.left=left-rect.left+"px";this.style.top=top-rect.top+"px"},/**
   * Constrains the size of the element to `fitInto` by setting `max-height`
   * and/or `max-width`.
   */constrain:function constrain(){if(this.__shouldPosition){return}this._discoverInfo();var info=this._fitInfo;// position at (0px, 0px) if not already positioned, so we can measure the
// natural size.
if(!info.positionedBy.vertically){this.style.position="fixed";this.style.top="0px"}if(!info.positionedBy.horizontally){this.style.position="fixed";this.style.left="0px"}// need border-box for margin/padding
this.sizingTarget.style.boxSizing="border-box";// constrain the width and height if not already set
var rect=this.getBoundingClientRect();if(!info.sizedBy.height){this.__sizeDimension(rect,info.positionedBy.vertically,"top","bottom","Height")}if(!info.sizedBy.width){this.__sizeDimension(rect,info.positionedBy.horizontally,"left","right","Width")}},/**
   * @protected
   * @deprecated
   */_sizeDimension:function _sizeDimension(rect,positionedBy,start,end,extent){this.__sizeDimension(rect,positionedBy,start,end,extent)},/**
   * @private
   */__sizeDimension:function __sizeDimension(rect,positionedBy,start,end,extent){var info=this._fitInfo,fitRect=this.__getNormalizedRect(this.fitInto),max="Width"===extent?fitRect.width:fitRect.height,flip=positionedBy===end,offset=flip?max-rect[end]:rect[start],margin=info.margin[flip?start:end],offsetExtent="offset"+extent,sizingOffset=this[offsetExtent]-this.sizingTarget[offsetExtent];this.sizingTarget.style["max"+extent]=max-margin-offset-sizingOffset+"px"},/**
   * Centers horizontally and vertically if not already positioned. This also
   * sets `position:fixed`.
   */center:function center(){if(this.__shouldPosition){return}this._discoverInfo();var positionedBy=this._fitInfo.positionedBy;if(positionedBy.vertically&&positionedBy.horizontally){// Already positioned.
return}// Need position:fixed to center
this.style.position="fixed";// Take into account the offset caused by parents that create stacking
// contexts (e.g. with transform: translate3d). Translate to 0,0 and
// measure the bounding rect.
if(!positionedBy.vertically){this.style.top="0px"}if(!positionedBy.horizontally){this.style.left="0px"}// It will take in consideration margins and transforms
var rect=this.getBoundingClientRect(),fitRect=this.__getNormalizedRect(this.fitInto);if(!positionedBy.vertically){var top=fitRect.top-rect.top+(fitRect.height-rect.height)/2;this.style.top=top+"px"}if(!positionedBy.horizontally){var left=fitRect.left-rect.left+(fitRect.width-rect.width)/2;this.style.left=left+"px"}},__getNormalizedRect:function __getNormalizedRect(target){if(target===document.documentElement||target===window){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}}return target.getBoundingClientRect()},__getOffscreenArea:function __getOffscreenArea(position,size,fitRect){var verticalCrop=Math.min(0,position.top)+Math.min(0,fitRect.bottom-(position.top+size.height)),horizontalCrop=Math.min(0,position.left)+Math.min(0,fitRect.right-(position.left+size.width));return Math.abs(verticalCrop)*size.width+Math.abs(horizontalCrop)*size.height},__getPosition:function __getPosition(hAlign,vAlign,size,sizeNoMargins,positionRect,fitRect){// All the possible configurations.
// Ordered as top-left, top-right, bottom-left, bottom-right.
var positions=[{verticalAlign:"top",horizontalAlign:"left",top:positionRect.top+this.verticalOffset,left:positionRect.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:positionRect.top+this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:positionRect.bottom-size.height-this.verticalOffset,left:positionRect.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:positionRect.bottom-size.height-this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset}];if(this.noOverlap){// Duplicate.
for(var i=0,l=positions.length,copy;i<l;i++){copy={};for(var key in positions[i]){copy[key]=positions[i][key]}positions.push(copy)}// Horizontal overlap only.
positions[0].top=positions[1].top+=positionRect.height;positions[2].top=positions[3].top-=positionRect.height;// Vertical overlap only.
positions[4].left=positions[6].left+=positionRect.width;positions[5].left=positions[7].left-=positionRect.width}// Consider auto as null for coding convenience.
vAlign="auto"===vAlign?null:vAlign;hAlign="auto"===hAlign?null:hAlign;if(!hAlign||"center"===hAlign){positions.push({verticalAlign:"top",horizontalAlign:"center",top:positionRect.top+this.verticalOffset+(this.noOverlap?positionRect.height:0),left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset});positions.push({verticalAlign:"bottom",horizontalAlign:"center",top:positionRect.bottom-size.height-this.verticalOffset-(this.noOverlap?positionRect.height:0),left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset})}if(!vAlign||"middle"===vAlign){positions.push({verticalAlign:"middle",horizontalAlign:"left",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.left+this.horizontalOffset+(this.noOverlap?positionRect.width:0)});positions.push({verticalAlign:"middle",horizontalAlign:"right",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset-(this.noOverlap?positionRect.width:0)})}if("middle"===vAlign&&"center"===hAlign){positions.push({verticalAlign:"middle",horizontalAlign:"center",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset})}for(var position,i=0;i<positions.length;i++){var candidate=positions[i],vAlignOk=candidate.verticalAlign===vAlign,hAlignOk=candidate.horizontalAlign===hAlign;// If both vAlign and hAlign are defined, return exact match.
// For dynamicAlign and noOverlap we'll have more than one candidate, so
// we'll have to check the offscreenArea to make the best choice.
if(!this.dynamicAlign&&!this.noOverlap&&vAlignOk&&hAlignOk){position=candidate;break}// Align is ok if alignment preferences are respected. If no preferences,
// it is considered ok.
var alignOk=(!vAlign||vAlignOk)&&(!hAlign||hAlignOk);// Filter out elements that don't match the alignment (if defined).
// With dynamicAlign, we need to consider all the positions to find the
// one that minimizes the cropped area.
if(!this.dynamicAlign&&!alignOk){continue}candidate.offscreenArea=this.__getOffscreenArea(candidate,size,fitRect);// If not cropped and respects the align requirements, keep it.
// This allows to prefer positions overlapping horizontally over the
// ones overlapping vertically.
if(0===candidate.offscreenArea&&alignOk){position=candidate;break}position=position||candidate;var diff=candidate.offscreenArea-position.offscreenArea;// Check which crops less. If it crops equally, check if at least one
// align setting is ok.
if(0>diff||0===diff&&(vAlignOk||hAlignOk)){position=candidate}}return position}};_exports.IronFitBehavior=IronFitBehavior;var ironFitBehavior={IronFitBehavior:IronFitBehavior};_exports.$ironFitBehavior=ironFitBehavior;var IronFormElementBehavior={properties:{/**
     * The name of this element.
     */name:{type:String},/**
     * The value for this element.
     * @type {*}
     */value:{notify:!0,type:String},/**
     * Set to true to mark the input as required. If used in a form, a
     * custom element that uses this behavior should also use
     * IronValidatableBehavior and define a custom validation method.
     * Otherwise, a `required` element will always be considered valid.
     * It's also strongly recommended to provide a visual style for the element
     * when its value is invalid.
     */required:{type:Boolean,value:!1}},// Empty implementations for backcompatibility.
attached:function attached(){},detached:function detached(){}};_exports.IronFormElementBehavior=IronFormElementBehavior;var ironFormElementBehavior={IronFormElementBehavior:IronFormElementBehavior};_exports.$ironFormElementBehavior=ironFormElementBehavior;(0,_mockApp4App.Polymer)({_template:(0,_mockApp4App.html)(_templateObject2_1dafad604da011ea8faf35a9b7563db5()),is:"iron-form",properties:{/*
     * Set this to true if you don't want the form to be submitted through an
     * ajax request, and you want the page to redirect to the action URL
     * after the form has been submitted.
     */allowRedirect:{type:Boolean,value:!1},/**
     * HTTP request headers to send. See PolymerElements/iron-ajax for
     * more details. Only works when `allowRedirect` is false.
     */headers:{type:Object,value:function value(){return{}}},/**
     * Set the `withCredentials` flag on the request. See
     * PolymerElements/iron-ajax for more details. Only works when
     * `allowRedirect` is false.
     */withCredentials:{type:Boolean,value:!1}},/**
   * Fired if the form cannot be submitted because it's invalid.
   *
   * @event iron-form-invalid
   */ /**
       * Fired after the form is submitted.
       *
       * @event iron-form-submit
       */ /**
           * Fired before the form is submitted.
           *
           * @event iron-form-presubmit
           */ /**
               * Fired after the form is reset.
               *
               * @event iron-form-reset
               */ /**
                   * Fired after the form is submitted and a response is received. An
                   * IronRequestElement is included as the event.detail object.
                   *
                   * @event iron-form-response
                   */ /**
                       * Fired after the form is submitted and an error is received. An
                       * error message is included in event.detail.error and an
                       * IronRequestElement is included in event.detail.request.
                       *
                       * @event iron-form-error
                       */ /**
                           * @return {void}
                           */attached:function attached(){// We might have been detached then re-attached.
// Avoid searching again for the <form> if we already found it.
if(this._form){return}// Search for the `<form>`, if we don't find it, observe for
// mutations.
this._form=(0,_mockApp4App.dom)(this).querySelector("form");if(this._form){this._init();// Since some elements might not be upgraded yet at this time,
// we won't be able to look into their shadowRoots for submittables.
// We wait a tick and check again for any missing submittable default
// values.
this.async(this._saveInitialValues.bind(this),1)}else{this._nodeObserver=(0,_mockApp4App.dom)(this).observeNodes(function(mutations){for(var i=0;i<mutations.addedNodes.length;i++){if("FORM"===mutations.addedNodes[i].tagName){this._form=mutations.addedNodes[i];// At this point in time, all custom elements are expected
// to be upgraded, hence we'll be able to traverse their
// shadowRoots.
this._init();(0,_mockApp4App.dom)(this).unobserveNodes(this._nodeObserver);this._nodeObserver=null}}}.bind(this))}},/**
   * @return {void}
   */detached:function detached(){if(this._nodeObserver){(0,_mockApp4App.dom)(this).unobserveNodes(this._nodeObserver);this._nodeObserver=null}},_init:function _init(){this._form.addEventListener("submit",this.submit.bind(this));this._form.addEventListener("reset",this.reset.bind(this));// Save the initial values.
this._defaults=this._defaults||new WeakMap;this._saveInitialValues()},/**
   * Saves the values of all form elements that will be used when resetting
   * the form. Initially called asynchronously on attach. Any time you
   * call this function, the previously saved values for a form element will
   * be overwritten.
   *
   * This function is useful if you are dynamically adding elements to
   * the form, or if your elements are asynchronously setting their values.
   * @return {void}
   */saveResetValues:function saveResetValues(){this._saveInitialValues(!0)},/**
   * @param {boolean=} overwriteValues
   * @return {void}
   */_saveInitialValues:function _saveInitialValues(overwriteValues){for(var nodes=this._getValidatableElements(),i=0,node;i<nodes.length;i++){node=nodes[i];if(!this._defaults.has(node)||overwriteValues){// Submittables are expected to have `value` property,
// that's what gets serialized.
var defaults={value:node.value};if("checked"in node){defaults.checked=node.checked}// In 1.x iron-form would reset `invalid`, so
// keep it here for backwards compat.
if("invalid"in node){defaults.invalid=node.invalid}this._defaults.set(node,defaults)}}},/**
   * Validates all the required elements (custom and native) in the form.
   * @return {boolean} True if all the elements are valid.
   */validate:function validate(){// If you've called this before distribution happened, bail out.
if(!this._form){return!1}if(""===this._form.getAttribute("novalidate"))return!0;// Start by making the form check the native elements it knows about.
// Go through all the elements, and validate the custom ones.
for(var valid=this._form.checkValidity(),elements=this._getValidatableElements(),el,i=0,validatable;el=elements[i],i<elements.length;i++){// This is weird to appease the compiler. We assume the custom element
// has a validate() method, otherwise we can't check it.
validatable=/** @type {{validate: (function() : boolean)}} */el;if(validatable.validate){valid=!!validatable.validate()&&valid}}return valid},/**
   * Submits the form.
   *
   * @param {Event=} event
   * @return {void}
   */submit:function submit(event){// We are not using this form for submission, so always cancel its event.
if(event){event.preventDefault()}// If you've called this before distribution happened, bail out.
if(!this._form){return}if(!this.validate()){this.fire("iron-form-invalid");return}// Remove any existing children in the submission form (from a previous
// submit).
this.$.helper.textContent="";var json=this.serializeForm();// If we want a redirect, submit the form natively.
if(this.allowRedirect){// If we're submitting the form natively, then create a hidden element for
// each of the values.
for(var element in json){this.$.helper.appendChild(this._createHiddenElement(element,json[element]))}// Copy the original form attributes.
this.$.helper.action=this._form.getAttribute("action");this.$.helper.method=this._form.getAttribute("method")||"GET";this.$.helper.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded";this.$.helper.submit();this.fire("iron-form-submit")}else{this._makeAjaxRequest(json)}},/**
   * Resets the form to the default values.
   *
   * @param {Event=} event
   * @return {void}
   */reset:function reset(event){// We are not using this form for submission, so always cancel its event.
if(event)event.preventDefault();// If you've called this before distribution happened, bail out.
if(!this._form){return}// Ensure the native form fired the `reset` event.
// User might have bound `<button on-click="_resetIronForm">`, or directly
// called `ironForm.reset()`. In these cases we want to first reset the
// native form.
if(!event||"reset"!==event.type||event.target!==this._form){this._form.reset();return}// Load the initial values.
for(var nodes=this._getValidatableElements(),i=0,node;i<nodes.length;i++){node=nodes[i];if(this._defaults.has(node)){var defaults=this._defaults.get(node);for(var propName in defaults){node[propName]=defaults[propName]}}}this.fire("iron-form-reset")},/**
   * Serializes the form as will be used in submission. Note that `serialize`
   * is a Polymer reserved keyword, so calling `someIronForm`.serialize()`
   * will give you unexpected results.
   * @return {!Object<string, *>} An object containing name-value pairs for elements that
   *                  would be submitted.
   */serializeForm:function serializeForm(){// Only elements that have a `name` and are not disabled are submittable.
for(var elements=this._getSubmittableElements(),json={},i=0,values;i<elements.length;i++){values=this._serializeElementValues(elements[i]);for(var v=0;v<values.length;v++){this._addSerializedElement(json,elements[i].name,values[v])}}return json},_handleFormResponse:function _handleFormResponse(event){this.fire("iron-form-response",event.detail)},_handleFormError:function _handleFormError(event){this.fire("iron-form-error",event.detail)},_makeAjaxRequest:function _makeAjaxRequest(json){// Initialize the iron-ajax element if we haven't already.
if(!this.request){this.request=document.createElement("iron-ajax");this.request.addEventListener("response",this._handleFormResponse.bind(this));this.request.addEventListener("error",this._handleFormError.bind(this))}// Native forms can also index elements magically by their name (can't make
// this up if I tried) so we need to get the correct attributes, not the
// elements with those names.
this.request.url=this._form.getAttribute("action");this.request.method=this._form.getAttribute("method")||"GET";this.request.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded";this.request.withCredentials=this.withCredentials;this.request.headers=this.headers;if("POST"===this._form.method.toUpperCase()){this.request.body=json}else{this.request.params=json}// Allow for a presubmit hook
var event=this.fire("iron-form-presubmit",{},{cancelable:!0});if(!event.defaultPrevented){this.request.generateRequest();this.fire("iron-form-submit",json)}},_getValidatableElements:function _getValidatableElements(){return this._findElements(this._form,!0,!1)},_getSubmittableElements:function _getSubmittableElements(){return this._findElements(this._form,!1,!1)},/**
   * Traverse the parent element to find and add all submittable nodes to
   * `submittable`.
   * @param  {!Node} parent The parent node
   * @param  {!boolean} ignoreName  Whether the name of the submittable nodes should be disregarded
   * @param  {!boolean} skipSlots  Whether to skip traversing of slot elements
   * @param  {!Array<!Node>=} submittable Reference to the array of submittables
   * @return {!Array<!Node>}
   * @private
   */_findElements:function _findElements(parent,ignoreName,skipSlots,submittable){submittable=submittable||[];for(var nodes=(0,_mockApp4App.dom)(parent).querySelectorAll("*"),i=0;i<nodes.length;i++){// An element is submittable if it is not disabled, and if it has a
// name attribute.
if(!skipSlots&&("slot"===nodes[i].localName||"content"===nodes[i].localName)){this._searchSubmittableInSlot(submittable,nodes[i],ignoreName)}else{this._searchSubmittable(submittable,nodes[i],ignoreName)}}return submittable},/**
   * Traverse the distributed nodes of a slot or content element
   * and add all submittable nodes to `submittable`.
   * @param  {!Array<!Node>} submittable Reference to the array of submittables
   * @param  {!Node} node The slot or content node
   * @param  {!boolean} ignoreName  Whether the name of the submittable nodes should be disregarded
   * @return {void}
   * @private
   */_searchSubmittableInSlot:function _searchSubmittableInSlot(submittable,node,ignoreName){for(var assignedNodes=(0,_mockApp4App.dom)(node).getDistributedNodes(),i=0;i<assignedNodes.length;i++){if(assignedNodes[i].nodeType===Node.TEXT_NODE){continue}// Note: assignedNodes does not contain <slot> or <content> because
// getDistributedNodes flattens the tree.
this._searchSubmittable(submittable,assignedNodes[i],ignoreName);for(var nestedAssignedNodes=(0,_mockApp4App.dom)(assignedNodes[i]).querySelectorAll("*"),j=0;j<nestedAssignedNodes.length;j++){this._searchSubmittable(submittable,nestedAssignedNodes[j],ignoreName)}}},/**
   * Traverse the distributed nodes of a slot or content element
   * and add all submittable nodes to `submittable`.
   * @param  {!Array<!Node>} submittable Reference to the array of submittables
   * @param  {!Node} node The node to be
   * @param  {!boolean} ignoreName  Whether the name of the submittable nodes should be disregarded
   * @return {void}
   * @private
   */_searchSubmittable:function _searchSubmittable(submittable,node,ignoreName){if(this._isSubmittable(node,ignoreName)){submittable.push(node)}else if(node.root){this._findElements(node.root,ignoreName,!0,submittable)}},/**
   * An element is submittable if it is not disabled, and if it has a
   * 'name' attribute. If we ignore the name, check if is validatable.
   * This allows `_findElements` to decide if to explore an element's shadowRoot
   * or not: an element implementing `validate()` is considered validatable, and
   * we don't search for validatables in its shadowRoot.
   * @param {!Node} node
   * @param {!boolean} ignoreName
   * @return {boolean}
   * @private
   */_isSubmittable:function _isSubmittable(node,ignoreName){return!node.disabled&&(ignoreName?node.name||"function"===typeof node.validate:node.name)},_serializeElementValues:function _serializeElementValues(element){// We will assume that every custom element that needs to be serialized
// has a `value` property, and it contains the correct value.
// The only weird one is an element that implements
// IronCheckedElementBehaviour, in which case like the native checkbox/radio
// button, it's only used when checked. For native elements, from
// https://www.w3.org/TR/html5/forms.html#the-form-element. Native
// submittable elements: button, input, keygen, object, select, textarea;
// 1. We will skip `keygen and `object` for this iteration, and deal with
// them if they're actually required.
// 2. <button> and <textarea> have a `value` property, so they behave like
//    the custom elements.
// 3. <select> can have multiple options selected, in which case its
//    `value` is incorrect, and we must use the values of each of its
//    `selectedOptions`
// 4. <input> can have a whole bunch of behaviours, so it's handled
// separately.
// 5. Buttons are hard. The button that was clicked to submit the form
//    is the one who's name/value gets sent to the server.
var tag=element.tagName.toLowerCase();if("button"===tag||"input"===tag&&("submit"===element.type||"reset"===element.type)){return[]}if("select"===tag){return this._serializeSelectValues(element)}else if("input"===tag){return this._serializeInputValues(element)}else{if(element._hasIronCheckedElementBehavior&&!element.checked)return[];return[element.value]}},_serializeSelectValues:function _serializeSelectValues(element){// A <select multiple> has an array of options, some of which can be
// selected.
for(var values=[],i=0;i<element.options.length;i++){if(element.options[i].selected){values.push(element.options[i].value)}}return values},_serializeInputValues:function _serializeInputValues(element){// Most of the inputs use their 'value' attribute, with the exception
// of radio buttons, checkboxes and file.
var type=element.type.toLowerCase();// Don't do anything for unchecked checkboxes/radio buttons.
// Don't do anything for file, since that requires a different request.
if(("checkbox"===type||"radio"===type)&&!element.checked||"file"===type){return[]}return[element.value]},_createHiddenElement:function _createHiddenElement(name,value){var input=document.createElement("input");input.setAttribute("type","hidden");input.setAttribute("name",name);input.setAttribute("value",value);return input},_addSerializedElement:function _addSerializedElement(json,name,value){// If the name doesn't exist, add it. Otherwise, serialize it to
// an array,
if(json[name]===void 0){json[name]=value}else{if(!Array.isArray(json[name])){json[name]=[json[name]]}json[name].push(value)}}});var IronValidatableBehaviorMeta=null;/**
                                                * `Use IronValidatableBehavior` to implement an element that validates
                                                * user input. Use the related `IronValidatorBehavior` to add custom
                                                * validation logic to an iron-input.
                                                *
                                                * By default, an `<iron-form>` element validates its fields when the user
                                                * presses the submit button. To validate a form imperatively, call the form's
                                                * `validate()` method, which in turn will call `validate()` on all its
                                                * children. By using `IronValidatableBehavior`, your custom element
                                                * will get a public `validate()`, which will return the validity of the
                                                * element, and a corresponding `invalid` attribute, which can be used for
                                                * styling.
                                                *
                                                * To implement the custom validation logic of your element, you must override
                                                * the protected `_getValidity()` method of this behaviour, rather than
                                                * `validate()`. See
                                                * [this](https://github.com/PolymerElements/iron-form/blob/master/demo/simple-element.html)
                                                * for an example.
                                                *
                                                * ### Accessibility
                                                *
                                                * Changing the `invalid` property, either manually or by calling `validate()`
                                                * will update the `aria-invalid` attribute.
                                                *
                                                * @demo demo/index.html
                                                * @polymerBehavior
                                                */_exports.IronValidatableBehaviorMeta=IronValidatableBehaviorMeta;var IronValidatableBehavior={properties:{/**
     * Name of the validator to use.
     */validator:{type:String},/**
     * True if the last call to `validate` is invalid.
     */invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function registered(){_exports.IronValidatableBehaviorMeta=IronValidatableBehaviorMeta=new _mockApp4App.IronMeta({type:"validator"})},_invalidChanged:function _invalidChanged(){if(this.invalid){this.setAttribute("aria-invalid","true")}else{this.removeAttribute("aria-invalid")}},/* Recompute this every time it's needed, because we don't know if the
   * underlying IronValidatableBehaviorMeta has changed. */get _validator(){return IronValidatableBehaviorMeta&&IronValidatableBehaviorMeta.byKey(this.validator)},/**
   * @return {boolean} True if the validator `validator` exists.
   */hasValidator:function hasValidator(){return null!=this._validator},/**
   * Returns true if the `value` is valid, and updates `invalid`. If you want
   * your element to have custom validation logic, do not override this method;
   * override `_getValidity(value)` instead.
    * @param {Object} value Deprecated: The value to be validated. By default,
   * it is passed to the validator's `validate()` function, if a validator is
   set.
   * If this argument is not specified, then the element's `value` property
   * is used, if it exists.
   * @return {boolean} True if `value` is valid.
   */validate:function validate(value){// If this is an element that also has a value property, and there was
// no explicit value argument passed, use the element's property instead.
if(value===void 0&&this.value!==void 0)this.invalid=!this._getValidity(this.value);else this.invalid=!this._getValidity(value);return!this.invalid},/**
   * Returns true if `value` is valid.  By default, it is passed
   * to the validator's `validate()` function, if a validator is set. You
   * should override this method if you want to implement custom validity
   * logic for your element.
   *
   * @param {Object} value The value to be validated.
   * @return {boolean} True if `value` is valid.
   */_getValidity:function _getValidity(value){if(this.hasValidator()){return this._validator.validate(value)}return!0}};_exports.IronValidatableBehavior=IronValidatableBehavior;var ironValidatableBehavior={get IronValidatableBehaviorMeta(){return IronValidatableBehaviorMeta},IronValidatableBehavior:IronValidatableBehavior};_exports.$ironValidatableBehavior=ironValidatableBehavior;(0,_mockApp4App.Polymer)({_template:(0,_mockApp4App.html)(_templateObject3_1dafad604da011ea8faf35a9b7563db5()),is:"iron-input",behaviors:[IronValidatableBehavior],/**
   * Fired whenever `validate()` is called.
   *
   * @event iron-input-validate
   */properties:{/**
     * Use this property instead of `value` for two-way data binding, or to
     * set a default value for the input. **Do not** use the distributed
     * input's `value` property to set a default value.
     */bindValue:{type:String,value:""},/**
     * Computed property that echoes `bindValue` (mostly used for Polymer 1.0
     * backcompatibility, if you were one-way binding to the Polymer 1.0
     * `input is="iron-input"` value attribute).
     */value:{type:String,computed:"_computeValue(bindValue)"},/**
     * Regex-like list of characters allowed as input; all characters not in the
     * list will be rejected. The recommended format should be a list of allowed
     * characters, for example, `[a-zA-Z0-9.+-!;:]`.
     *
     * This pattern represents the allowed characters for the field; as the user
     * inputs text, each individual character will be checked against the
     * pattern (rather than checking the entire value as a whole). If a
     * character is not a match, it will be rejected.
     *
     * Pasted input will have each character checked individually; if any
     * character doesn't match `allowedPattern`, the entire pasted string will
     * be rejected.
     *
     * Note: if you were using `iron-input` in 1.0, you were also required to
     * set `prevent-invalid-input`. This is no longer needed as of Polymer 2.0,
     * and will be set automatically for you if an `allowedPattern` is provided.
     *
     */allowedPattern:{type:String},/**
     * Set to true to auto-validate the input value as you type.
     */autoValidate:{type:Boolean,value:!1},/**
     * The native input element.
     */_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function created(){IronA11yAnnouncer.requestAvailability();this._previousValidInput="";this._patternAlreadyChecked=!1},attached:function attached(){// If the input is added at a later time, update the internal reference.
this._observer=(0,_mockApp4App.dom)(this).observeNodes(function(info){this._initSlottedInput()}.bind(this))},detached:function detached(){if(this._observer){(0,_mockApp4App.dom)(this).unobserveNodes(this._observer);this._observer=null}},/**
   * Returns the distributed input element.
   */get inputElement(){return this._inputElement},_initSlottedInput:function _initSlottedInput(){this._inputElement=this.getEffectiveChildren()[0];if(this.inputElement&&this.inputElement.value){this.bindValue=this.inputElement.value}this.fire("iron-input-ready")},get _patternRegExp(){var pattern;if(this.allowedPattern){pattern=new RegExp(this.allowedPattern)}else{switch(this.inputElement.type){case"number":pattern=/[0-9.,e-]/;break;}}return pattern},/**
   * @suppress {checkTypes}
   */_bindValueChanged:function _bindValueChanged(bindValue,inputElement){// The observer could have run before attached() when we have actually
// initialized this property.
if(!inputElement){return}if(bindValue===void 0){inputElement.value=null}else if(bindValue!==inputElement.value){this.inputElement.value=bindValue}if(this.autoValidate){this.validate()}// manually notify because we don't want to notify until after setting value
this.fire("bind-value-changed",{value:bindValue})},_onInput:function _onInput(){// Need to validate each of the characters pasted if they haven't
// been validated inside `_onKeypress` already.
if(this.allowedPattern&&!this._patternAlreadyChecked){var valid=this._checkPatternValidity();if(!valid){this._announceInvalidCharacter("Invalid string of characters not entered.");this.inputElement.value=this._previousValidInput}}this.bindValue=this._previousValidInput=this.inputElement.value;this._patternAlreadyChecked=!1},_isPrintable:function _isPrintable(event){// What a control/printable character is varies wildly based on the browser.
// - most control characters (arrows, backspace) do not send a `keypress`
// event
//   in Chrome, but the *do* on Firefox
// - in Firefox, when they do send a `keypress` event, control chars have
//   a charCode = 0, keyCode = xx (for ex. 40 for down arrow)
// - printable characters always send a keypress event.
// - in Firefox, printable chars always have a keyCode = 0. In Chrome, the
// keyCode
//   always matches the charCode.
// None of this makes any sense.
// For these keys, ASCII code == browser keycode.
var anyNonPrintable=8==event.keyCode||// backspace
9==event.keyCode||// tab
13==event.keyCode||// enter
27==event.keyCode,mozNonPrintable=19==event.keyCode||// pause
20==event.keyCode||// caps lock
45==event.keyCode||// insert
46==event.keyCode||// delete
144==event.keyCode||// num lock
145==event.keyCode||// scroll lock
32<event.keyCode&&41>event.keyCode||// page up/down, end, home, arrows
111<event.keyCode&&124>event.keyCode;// escape
// For these keys, make sure it's a browser keycode and not an ASCII code.
// fn keys
return!anyNonPrintable&&!(0==event.charCode&&mozNonPrintable)},_onKeypress:function _onKeypress(event){if(!this.allowedPattern&&"number"!==this.inputElement.type){return}var regexp=this._patternRegExp;if(!regexp){return}// Handle special keys and backspace
if(event.metaKey||event.ctrlKey||event.altKey){return}// Check the pattern either here or in `_onInput`, but not in both.
this._patternAlreadyChecked=!0;var thisChar=String.fromCharCode(event.charCode);if(this._isPrintable(event)&&!regexp.test(thisChar)){event.preventDefault();this._announceInvalidCharacter("Invalid character "+thisChar+" not entered.")}},_checkPatternValidity:function _checkPatternValidity(){var regexp=this._patternRegExp;if(!regexp){return!0}for(var i=0;i<this.inputElement.value.length;i++){if(!regexp.test(this.inputElement.value[i])){return!1}}return!0},/**
   * Returns true if `value` is valid. The validator provided in `validator`
   * will be used first, then any constraints.
   * @return {boolean} True if the value is valid.
   */validate:function validate(){if(!this.inputElement){this.invalid=!1;return!0}// Use the nested input's native validity.
var valid=this.inputElement.checkValidity();// Only do extra checking if the browser thought this was valid.
if(valid){// Empty, required input is invalid
if(this.required&&""===this.bindValue){valid=!1}else if(this.hasValidator()){valid=IronValidatableBehavior.validate.call(this,this.bindValue)}}this.invalid=!valid;this.fire("iron-input-validate");return valid},_announceInvalidCharacter:function _announceInvalidCharacter(message){this.fire("iron-announce",{text:message})},_computeValue:function _computeValue(bindValue){return bindValue}});var p=Element.prototype,matches=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector,IronFocusablesHelperClass=/*#__PURE__*/function(){function IronFocusablesHelperClass(){babelHelpers.classCallCheck(this,IronFocusablesHelperClass)}babelHelpers.createClass(IronFocusablesHelperClass,[{key:"getTabbableNodes",/**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */value:function getTabbableNodes(node){var result=[],needsSortByTabIndex=this._collectTabbableNodes(node,result);// If there is at least one element with tabindex > 0, we need to sort
// the final array by tabindex.
if(needsSortByTabIndex){return this._sortByTabIndex(result)}return result}/**
     * Returns if a element is focusable.
     * @param {!HTMLElement} element
     * @return {boolean}
     */},{key:"isFocusable",value:function isFocusable(element){// From http://stackoverflow.com/a/1600194/4228703:
// There isn't a definite list, it's up to the browser. The only
// standard we have is DOM Level 2 HTML
// https://www.w3.org/TR/DOM-Level-2-HTML/html.html, according to which the
// only elements that have a focus() method are HTMLInputElement,
// HTMLSelectElement, HTMLTextAreaElement and HTMLAnchorElement. This
// notably omits HTMLButtonElement and HTMLAreaElement. Referring to these
// tests with tabbables in different browsers
// http://allyjs.io/data-tables/focusable.html
// Elements that cannot be focused if they have [disabled] attribute.
if(matches.call(element,"input, select, textarea, button, object")){return matches.call(element,":not([disabled])")}// Elements that can be focused even if they have [disabled] attribute.
return matches.call(element,"a[href], area[href], iframe, [tabindex], [contentEditable]")}/**
     * Returns if a element is tabbable. To be tabbable, a element must be
     * focusable, visible, and with a tabindex !== -1.
     * @param {!HTMLElement} element
     * @return {boolean}
     */},{key:"isTabbable",value:function isTabbable(element){return this.isFocusable(element)&&matches.call(element,":not([tabindex=\"-1\"])")&&this._isVisible(element)}/**
     * Returns the normalized element tabindex. If not focusable, returns -1.
     * It checks for the attribute "tabindex" instead of the element property
     * `tabIndex` since browsers assign different values to it.
     * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
     * @param {!HTMLElement} element
     * @return {!number}
     * @private
     */},{key:"_normalizedTabIndex",value:function _normalizedTabIndex(element){if(this.isFocusable(element)){var tabIndex=element.getAttribute("tabindex")||0;return+tabIndex}return-1}/**
     * Searches for nodes that are tabbable and adds them to the `result` array.
     * Returns if the `result` array needs to be sorted by tabindex.
     * @param {!Node} node The starting point for the search; added to `result`
     * if tabbable.
     * @param {!Array<!HTMLElement>} result
     * @return {boolean}
     * @private
     */},{key:"_collectTabbableNodes",value:function _collectTabbableNodes(node,result){// If not an element or not visible, no need to explore children.
if(node.nodeType!==Node.ELEMENT_NODE){return!1}var element=/** @type {!HTMLElement} */node;if(!this._isVisible(element)){return!1}var tabIndex=this._normalizedTabIndex(element),needsSort=0<tabIndex;if(0<=tabIndex){result.push(element)}// In ShadowDOM v1, tab order is affected by the order of distrubution.
// E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
// in ShadowDOM v0 tab order is not affected by the distrubution order,
// in fact getTabbableNodes(#root) returns [#B, #A].
//  <div id="root">
//   <!-- shadow -->
//     <slot name="a">
//     <slot name="b">
//   <!-- /shadow -->
//   <input id="A" slot="a">
//   <input id="B" slot="b" tabindex="1">
//  </div>
// TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.
var children;if("content"===element.localName||"slot"===element.localName){children=(0,_mockApp4App.dom)(element).getDistributedNodes()}else{// Use shadow root if possible, will check for distributed nodes.
children=(0,_mockApp4App.dom)(element.root||element).children}for(var i=0;i<children.length;i++){// Ensure method is always invoked to collect tabbable children.
needsSort=this._collectTabbableNodes(children[i],result)||needsSort}return needsSort}/**
     * Returns false if the element has `visibility: hidden` or `display: none`
     * @param {!HTMLElement} element
     * @return {boolean}
     * @private
     */},{key:"_isVisible",value:function _isVisible(element){// Check inline style first to save a re-flow. If looks good, check also
// computed style.
var style=element.style;if("hidden"!==style.visibility&&"none"!==style.display){style=window.getComputedStyle(element);return"hidden"!==style.visibility&&"none"!==style.display}return!1}/**
     * Sorts an array of tabbable elements by tabindex. Returns a new array.
     * @param {!Array<!HTMLElement>} tabbables
     * @return {!Array<!HTMLElement>}
     * @private
     */},{key:"_sortByTabIndex",value:function _sortByTabIndex(tabbables){// Implement a merge sort as Array.prototype.sort does a non-stable sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
var len=tabbables.length;if(2>len){return tabbables}var pivot=Math.ceil(len/2),left=this._sortByTabIndex(tabbables.slice(0,pivot)),right=this._sortByTabIndex(tabbables.slice(pivot));return this._mergeSortByTabIndex(left,right)}/**
     * Merge sort iterator, merges the two arrays into one, sorted by tab index.
     * @param {!Array<!HTMLElement>} left
     * @param {!Array<!HTMLElement>} right
     * @return {!Array<!HTMLElement>}
     * @private
     */},{key:"_mergeSortByTabIndex",value:function _mergeSortByTabIndex(left,right){var result=[];while(0<left.length&&0<right.length){if(this._hasLowerTabOrder(left[0],right[0])){result.push(right.shift())}else{result.push(left.shift())}}return result.concat(left,right)}/**
     * Returns if element `a` has lower tab order compared to element `b`
     * (both elements are assumed to be focusable and tabbable).
     * Elements with tabindex = 0 have lower tab order compared to elements
     * with tabindex > 0.
     * If both have same tabindex, it returns false.
     * @param {!HTMLElement} a
     * @param {!HTMLElement} b
     * @return {boolean}
     * @private
     */},{key:"_hasLowerTabOrder",value:function _hasLowerTabOrder(a,b){// Normalize tabIndexes
// e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
var ati=Math.max(a.tabIndex,0),bti=Math.max(b.tabIndex,0);return 0===ati||0===bti?bti>ati:ati>bti}}]);return IronFocusablesHelperClass}(),IronFocusablesHelper=new IronFocusablesHelperClass;_exports.IronFocusablesHelper=IronFocusablesHelper;var ironFocusablesHelper={IronFocusablesHelper:IronFocusablesHelper};_exports.$ironFocusablesHelper=ironFocusablesHelper;(0,_mockApp4App.Polymer)({/** @override */_template:(0,_mockApp4App.html)(_templateObject4_1dafad604da011ea8faf35a9b7563db5()),is:"iron-overlay-backdrop",properties:{/**
     * Returns true if the backdrop is opened.
     */opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},/** @override */created:function created(){// Used to cancel previous requestAnimationFrame calls when opened changes.
this.__openedRaf=null},/** @override */attached:function attached(){this.opened&&this._openedChanged(this.opened)},/**
   * Appends the backdrop to document body if needed.
   */prepare:function prepare(){if(this.opened&&!this.parentNode){(0,_mockApp4App.dom)(document.body).appendChild(this)}},/**
   * Shows the backdrop.
   */open:function open(){this.opened=!0},/**
   * Hides the backdrop.
   */close:function close(){this.opened=!1},/**
   * Removes the backdrop from document body if needed.
   */complete:function complete(){if(!this.opened&&this.parentNode===document.body){(0,_mockApp4App.dom)(this.parentNode).removeChild(this)}},_onTransitionend:function _onTransitionend(event){if(event&&event.target===this){this.complete()}},/**
   * @param {boolean} opened
   * @private
   */_openedChanged:function _openedChanged(opened){if(opened){// Auto-attach.
this.prepare()}else{// Animation might be disabled via the mixin or opacity custom property.
// If it is disabled in other ways, it's up to the user to call complete.
var cs=window.getComputedStyle(this);if("0s"===cs.transitionDuration||0==cs.opacity){this.complete()}}if(!this.isAttached){return}// Always cancel previous requestAnimationFrame.
if(this.__openedRaf){window.cancelAnimationFrame(this.__openedRaf);this.__openedRaf=null}// Force relayout to ensure proper transitions.
this.scrollTop=this.scrollTop;this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null;this.toggleClass("opened",this.opened)}.bind(this))}});var IronOverlayManagerClass=/*#__PURE__*/function(){function IronOverlayManagerClass(){babelHelpers.classCallCheck(this,IronOverlayManagerClass);/**
     * Used to keep track of the opened overlays.
     * @private {!Array<!Element>}
     */this._overlays=[];/**
                             * iframes have a default z-index of 100,
                             * so this default should be at least that.
                             * @private {number}
                             */this._minimumZ=101;/**
                           * Memoized backdrop element.
                           * @private {Element|null}
                           */this._backdropElement=null;// Enable document-wide tap recognizer.
// NOTE: Use useCapture=true to avoid accidentally prevention of the closing
// of an overlay via event.stopPropagation(). The only way to prevent
// closing of an overlay should be through its APIs.
// NOTE: enable tap on <html> to workaround Polymer/polymer#4459
// Pass no-op function because MSEdge 15 doesn't handle null as 2nd argument
// https://github.com/Microsoft/ChakraCore/issues/3863
(0,_mockApp4App.addListener)(document.documentElement,"tap",function(){});document.addEventListener("tap",this._onCaptureClick.bind(this),!0);document.addEventListener("focus",this._onCaptureFocus.bind(this),!0);document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}/**
     * The shared backdrop element.
     * @return {!Element} backdropElement
     */babelHelpers.createClass(IronOverlayManagerClass,[{key:"_bringOverlayAtIndexToFront",/**
     * Brings the overlay at the specified index to the front.
     * @param {number} i
     * @private
     */value:function _bringOverlayAtIndexToFront(i){var overlay=this._overlays[i];if(!overlay){return}var lastI=this._overlays.length-1,currentOverlay=this._overlays[lastI];// Ensure always-on-top overlay stays on top.
if(currentOverlay&&this._shouldBeBehindOverlay(overlay,currentOverlay)){lastI--}// If already the top element, return.
if(i>=lastI){return}// Update z-index to be on top.
var minimumZ=Math.max(this.currentOverlayZ(),this._minimumZ);if(this._getZ(overlay)<=minimumZ){this._applyOverlayZ(overlay,minimumZ)}// Shift other overlays behind the new on top.
while(i<lastI){this._overlays[i]=this._overlays[i+1];i++}this._overlays[lastI]=overlay}/**
     * Adds the overlay and updates its z-index if it's opened, or removes it if
     * it's closed. Also updates the backdrop z-index.
     * @param {!Element} overlay
     */},{key:"addOrRemoveOverlay",value:function addOrRemoveOverlay(overlay){if(overlay.opened){this.addOverlay(overlay)}else{this.removeOverlay(overlay)}}/**
     * Tracks overlays for z-index and focus management.
     * Ensures the last added overlay with always-on-top remains on top.
     * @param {!Element} overlay
     */},{key:"addOverlay",value:function addOverlay(overlay){var i=this._overlays.indexOf(overlay);if(0<=i){this._bringOverlayAtIndexToFront(i);this.trackBackdrop();return}var insertionIndex=this._overlays.length,currentOverlay=this._overlays[insertionIndex-1],minimumZ=Math.max(this._getZ(currentOverlay),this._minimumZ),newZ=this._getZ(overlay);// Ensure always-on-top overlay stays on top.
if(currentOverlay&&this._shouldBeBehindOverlay(overlay,currentOverlay)){// This bumps the z-index of +2.
this._applyOverlayZ(currentOverlay,minimumZ);insertionIndex--;// Update minimumZ to match previous overlay's z-index.
var previousOverlay=this._overlays[insertionIndex-1];minimumZ=Math.max(this._getZ(previousOverlay),this._minimumZ)}// Update z-index and insert overlay.
if(newZ<=minimumZ){this._applyOverlayZ(overlay,minimumZ)}this._overlays.splice(insertionIndex,0,overlay);this.trackBackdrop()}/**
     * @param {!Element} overlay
     */},{key:"removeOverlay",value:function removeOverlay(overlay){var i=this._overlays.indexOf(overlay);if(-1===i){return}this._overlays.splice(i,1);this.trackBackdrop()}/**
     * Returns the current overlay.
     * @return {!Element|undefined}
     */},{key:"currentOverlay",value:function currentOverlay(){var i=this._overlays.length-1;return this._overlays[i]}/**
     * Returns the current overlay z-index.
     * @return {number}
     */},{key:"currentOverlayZ",value:function currentOverlayZ(){return this._getZ(this.currentOverlay())}/**
     * Ensures that the minimum z-index of new overlays is at least `minimumZ`.
     * This does not effect the z-index of any existing overlays.
     * @param {number} minimumZ
     */},{key:"ensureMinimumZ",value:function ensureMinimumZ(minimumZ){this._minimumZ=Math.max(this._minimumZ,minimumZ)}},{key:"focusOverlay",value:function focusOverlay(){var current=/** @type {?} */this.currentOverlay();if(current){current._applyFocus()}}/**
     * Updates the backdrop z-index.
     */},{key:"trackBackdrop",value:function trackBackdrop(){var overlay=this._overlayWithBackdrop();// Avoid creating the backdrop if there is no overlay with backdrop.
if(!overlay&&!this._backdropElement){return}this.backdropElement.style.zIndex=this._getZ(overlay)-1;this.backdropElement.opened=!!overlay;// Property observers are not fired until element is attached
// in Polymer 2.x, so we ensure element is attached if needed.
// https://github.com/Polymer/polymer/issues/4526
this.backdropElement.prepare()}/**
     * @return {!Array<!Element>}
     */},{key:"getBackdrops",value:function getBackdrops(){for(var backdrops=[],i=0;i<this._overlays.length;i++){if(this._overlays[i].withBackdrop){backdrops.push(this._overlays[i])}}return backdrops}/**
     * Returns the z-index for the backdrop.
     * @return {number}
     */},{key:"backdropZ",value:function backdropZ(){return this._getZ(this._overlayWithBackdrop())-1}/**
     * Returns the top opened overlay that has a backdrop.
     * @return {!Element|undefined}
     * @private
     */},{key:"_overlayWithBackdrop",value:function _overlayWithBackdrop(){for(var i=this._overlays.length-1;0<=i;i--){if(this._overlays[i].withBackdrop){return this._overlays[i]}}}/**
     * Calculates the minimum z-index for the overlay.
     * @param {Element=} overlay
     * @private
     */},{key:"_getZ",value:function _getZ(overlay){var z=this._minimumZ;if(overlay){var z1=+(overlay.style.zIndex||window.getComputedStyle(overlay).zIndex);// Check if is a number
// Number.isNaN not supported in IE 10+
if(z1===z1){z=z1}}return z}/**
     * @param {!Element} element
     * @param {number|string} z
     * @private
     */},{key:"_setZ",value:function _setZ(element,z){element.style.zIndex=z}/**
     * @param {!Element} overlay
     * @param {number} aboveZ
     * @private
     */},{key:"_applyOverlayZ",value:function _applyOverlayZ(overlay,aboveZ){this._setZ(overlay,aboveZ+2)}/**
     * Returns the deepest overlay in the path.
     * @param {!Array<!Element>=} path
     * @return {!Element|undefined}
     * @suppress {missingProperties}
     * @private
     */},{key:"_overlayInPath",value:function _overlayInPath(path){path=path||[];for(var i=0;i<path.length;i++){if(path[i]._manager===this){return path[i]}}}/**
     * Ensures the click event is delegated to the right overlay.
     * @param {!Event} event
     * @private
     */},{key:"_onCaptureClick",value:function _onCaptureClick(event){var i=this._overlays.length-1;if(-1===i)return;var path=/** @type {!Array<!EventTarget>} */(0,_mockApp4App.dom)(event).path,overlay;// Check if clicked outside of overlay.
while((overlay=/** @type {?} */this._overlays[i])&&this._overlayInPath(path)!==overlay){overlay._onCaptureClick(event);if(overlay.allowClickThrough){i--}else{break}}}/**
     * Ensures the focus event is delegated to the right overlay.
     * @param {!Event} event
     * @private
     */},{key:"_onCaptureFocus",value:function _onCaptureFocus(event){var overlay=/** @type {?} */this.currentOverlay();if(overlay){overlay._onCaptureFocus(event)}}/**
     * Ensures TAB and ESC keyboard events are delegated to the right overlay.
     * @param {!Event} event
     * @private
     */},{key:"_onCaptureKeyDown",value:function _onCaptureKeyDown(event){var overlay=/** @type {?} */this.currentOverlay();if(overlay){if(_mockApp4App.IronA11yKeysBehavior.keyboardEventMatchesKeys(event,"esc")){overlay._onCaptureEsc(event)}else if(_mockApp4App.IronA11yKeysBehavior.keyboardEventMatchesKeys(event,"tab")){overlay._onCaptureTab(event)}}}/**
     * Returns if the overlay1 should be behind overlay2.
     * @param {!Element} overlay1
     * @param {!Element} overlay2
     * @return {boolean}
     * @suppress {missingProperties}
     * @private
     */},{key:"_shouldBeBehindOverlay",value:function _shouldBeBehindOverlay(overlay1,overlay2){return!overlay1.alwaysOnTop&&overlay2.alwaysOnTop}},{key:"backdropElement",get:function get(){if(!this._backdropElement){this._backdropElement=document.createElement("iron-overlay-backdrop")}return this._backdropElement}/**
     * The deepest active element.
     * @return {!Element} activeElement the active element
     */},{key:"deepActiveElement",get:function get(){var active=document.activeElement;// document.activeElement can be null
// https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
// In IE 11, it can also be an object when operating in iframes.
// In these cases, default it to document.body.
if(!active||!1===babelHelpers.instanceof(active,Element)){active=document.body}while(active.root&&(0,_mockApp4App.dom)(active.root).activeElement){active=(0,_mockApp4App.dom)(active.root).activeElement}return active}}]);return IronOverlayManagerClass}();_exports.IronOverlayManagerClass=IronOverlayManagerClass;;var IronOverlayManager=new IronOverlayManagerClass;_exports.IronOverlayManager=IronOverlayManager;var ironOverlayManager={IronOverlayManagerClass:IronOverlayManagerClass,IronOverlayManager:IronOverlayManager};_exports.$ironOverlayManager=ironOverlayManager;var lastTouchPosition={pageX:0,pageY:0},lastRootTarget=null,lastScrollableNodes=[],scrollEvents=[// Modern `wheel` event for mouse wheel scrolling:
"wheel",// Older, non-standard `mousewheel` event for some FF:
"mousewheel",// IE:
"DOMMouseScroll",// Touch enabled devices
"touchstart","touchmove"],_boundScrollHandler;/**
    * Used to avoid computing event.path and filter scrollable nodes (better perf).
    * @type {?EventTarget}
    */_exports._boundScrollHandler=_boundScrollHandler;/**
                          * The current element that defines the DOM boundaries of the
                          * scroll lock. This is always the most recently locking element.
                          *
                          * @type {!Node|undefined}
                          */var currentLockingElement;_exports.currentLockingElement=currentLockingElement;function elementIsScrollLocked(element){var lockingElement=currentLockingElement;if(lockingElement===void 0){return!1}var scrollLocked;if(_hasCachedLockedElement(element)){return!0}if(_hasCachedUnlockedElement(element)){return!1}scrollLocked=!!lockingElement&&lockingElement!==element&&!_composedTreeContains(lockingElement,element);if(scrollLocked){_lockedElementCache.push(element)}else{_unlockedElementCache.push(element)}return scrollLocked}/**
   * Push an element onto the current scroll lock stack. The most recently
   * pushed element and its children will be considered scrollable. All
   * other elements will not be scrollable.
   *
   * Scroll locking is implemented as a stack so that cases such as
   * dropdowns within dropdowns are handled well.
   *
   * @param {!HTMLElement} element The element that should lock scroll.
   */function pushScrollLock(element){// Prevent pushing the same element twice
if(0<=_lockingElements.indexOf(element)){return}if(0===_lockingElements.length){_lockScrollInteractions()}_lockingElements.push(element);_exports.currentLockingElement=currentLockingElement=_lockingElements[_lockingElements.length-1];_exports._lockedElementCache=_lockedElementCache=[];_exports._unlockedElementCache=_unlockedElementCache=[]}/**
   * Remove an element from the scroll lock stack. The element being
   * removed does not need to be the most recently pushed element. However,
   * the scroll lock constraints only change when the most recently pushed
   * element is removed.
   *
   * @param {!HTMLElement} element The element to remove from the scroll
   * lock stack.
   */function removeScrollLock(element){var index=_lockingElements.indexOf(element);if(-1===index){return}_lockingElements.splice(index,1);_exports.currentLockingElement=currentLockingElement=_lockingElements[_lockingElements.length-1];_exports._lockedElementCache=_lockedElementCache=[];_exports._unlockedElementCache=_unlockedElementCache=[];if(0===_lockingElements.length){_unlockScrollInteractions()}}var _lockingElements=[];_exports._lockingElements=_lockingElements;var _lockedElementCache=null;_exports._lockedElementCache=_lockedElementCache;var _unlockedElementCache=null;_exports._unlockedElementCache=_unlockedElementCache;function _hasCachedLockedElement(element){return-1<_lockedElementCache.indexOf(element)}function _hasCachedUnlockedElement(element){return-1<_unlockedElementCache.indexOf(element)}function _composedTreeContains(element,child){// NOTE(cdata): This method iterates over content elements and their
// corresponding distributed nodes to implement a contains-like method
// that pierces through the composed tree of the ShadowDOM. Results of
// this operation are cached (elsewhere) on a per-scroll-lock basis, to
// guard against potentially expensive lookups happening repeatedly as
// a user scrolls / touchmoves.
var contentElements,distributedNodes,contentIndex,nodeIndex;if(element.contains(child)){return!0}contentElements=(0,_mockApp4App.dom)(element).querySelectorAll("content,slot");for(contentIndex=0;contentIndex<contentElements.length;++contentIndex){distributedNodes=(0,_mockApp4App.dom)(contentElements[contentIndex]).getDistributedNodes();for(nodeIndex=0;nodeIndex<distributedNodes.length;++nodeIndex){// Polymer 2.x returns slot.assignedNodes which can contain text nodes.
if(distributedNodes[nodeIndex].nodeType!==Node.ELEMENT_NODE)continue;if(_composedTreeContains(distributedNodes[nodeIndex],child)){return!0}}}return!1}function _scrollInteractionHandler(event){// Avoid canceling an event with cancelable=false, e.g. scrolling is in
// progress and cannot be interrupted.
if(event.cancelable&&_shouldPreventScrolling(event)){event.preventDefault()}// If event has targetTouches (touch event), update last touch position.
if(event.targetTouches){var touch=event.targetTouches[0];lastTouchPosition.pageX=touch.pageX;lastTouchPosition.pageY=touch.pageY}}/**
   * @package
   */function _lockScrollInteractions(){_exports._boundScrollHandler=_boundScrollHandler=_boundScrollHandler||_scrollInteractionHandler.bind(void 0);for(var i=0,l=scrollEvents.length;i<l;i++){// NOTE: browsers that don't support objects as third arg will
// interpret it as boolean, hence useCapture = true in this case.
document.addEventListener(scrollEvents[i],_boundScrollHandler,{capture:!0,passive:!1})}}function _unlockScrollInteractions(){for(var i=0,l=scrollEvents.length;i<l;i++){// NOTE: browsers that don't support objects as third arg will
// interpret it as boolean, hence useCapture = true in this case.
document.removeEventListener(scrollEvents[i],_boundScrollHandler,{capture:!0,passive:!1})}}/**
   * Returns true if the event causes scroll outside the current locking
   * element, e.g. pointer/keyboard interactions, or scroll "leaking"
   * outside the locking element when it is already at its scroll boundaries.
   * @param {!Event} event
   * @return {boolean}
   * @package
   */function _shouldPreventScrolling(event){// Update if root target changed. For touch events, ensure we don't
// update during touchmove.
var target=(0,_mockApp4App.dom)(event).rootTarget;if("touchmove"!==event.type&&lastRootTarget!==target){lastRootTarget=target;lastScrollableNodes=_getScrollableNodes((0,_mockApp4App.dom)(event).path)}// Prevent event if no scrollable nodes.
if(!lastScrollableNodes.length){return!0}// Don't prevent touchstart event inside the locking element when it has
// scrollable nodes.
if("touchstart"===event.type){return!1}// Get deltaX/Y.
var info=_getScrollInfo(event);// Prevent if there is no child that can scroll.
return!_getScrollingNode(lastScrollableNodes,info.deltaX,info.deltaY)}/**
   * Returns an array of scrollable nodes up to the current locking element,
   * which is included too if scrollable.
   * @param {!Array<!Node>} nodes
   * @return {!Array<!Node>} scrollables
   * @package
   */function _getScrollableNodes(nodes){// Loop from root target to locking element (included).
for(var scrollables=[],lockingIndex=nodes.indexOf(/** @type {!Node} */currentLockingElement),i=0;i<=lockingIndex;i++){// Skip non-Element nodes.
if(nodes[i].nodeType!==Node.ELEMENT_NODE){continue}var node=/** @type {!Element} */nodes[i],style=node.style;// Check inline style before checking computed style.
if("scroll"!==style.overflow&&"auto"!==style.overflow){style=window.getComputedStyle(node)}if("scroll"===style.overflow||"auto"===style.overflow){scrollables.push(node)}}return scrollables}/**
   * Returns the node that is scrolling. If there is no scrolling,
   * returns undefined.
   * @param {!Array<!Node>} nodes
   * @param {number} deltaX Scroll delta on the x-axis
   * @param {number} deltaY Scroll delta on the y-axis
   * @return {!Node|undefined}
   * @package
   */function _getScrollingNode(nodes,deltaX,deltaY){// No scroll.
if(!deltaX&&!deltaY){return}// Check only one axis according to where there is more scroll.
// Prefer vertical to horizontal.
for(var verticalScroll=Math.abs(deltaY)>=Math.abs(deltaX),i=0;i<nodes.length;i++){var node=nodes[i],canScroll=!1;if(verticalScroll){// delta < 0 is scroll up, delta > 0 is scroll down.
canScroll=0>deltaY?0<node.scrollTop:node.scrollTop<node.scrollHeight-node.clientHeight}else{// delta < 0 is scroll left, delta > 0 is scroll right.
canScroll=0>deltaX?0<node.scrollLeft:node.scrollLeft<node.scrollWidth-node.clientWidth}if(canScroll){return node}}}/**
   * Returns scroll `deltaX` and `deltaY`.
   * @param {!Event} event The scroll event
   * @return {{deltaX: number, deltaY: number}} Object containing the
   * x-axis scroll delta (positive: scroll right, negative: scroll left,
   * 0: no scroll), and the y-axis scroll delta (positive: scroll down,
   * negative: scroll up, 0: no scroll).
   * @package
   */function _getScrollInfo(event){var info={deltaX:event.deltaX,deltaY:event.deltaY};// Already available.
if("deltaX"in event){}// do nothing, values are already good.
// Safari has scroll info in `wheelDeltaX/Y`.
else if("wheelDeltaX"in event&&"wheelDeltaY"in event){info.deltaX=-event.wheelDeltaX;info.deltaY=-event.wheelDeltaY}// IE10 has only vertical scroll info in `wheelDelta`.
else if("wheelDelta"in event){info.deltaX=0;info.deltaY=-event.wheelDelta}// Firefox has scroll info in `detail` and `axis`.
else if("axis"in event){info.deltaX=1===event.axis?event.detail:0;info.deltaY=2===event.axis?event.detail:0}// On mobile devices, calculate scroll direction.
else if(event.targetTouches){var touch=event.targetTouches[0];// Touch moves from right to left => scrolling goes right.
info.deltaX=lastTouchPosition.pageX-touch.pageX;// Touch moves from down to up => scrolling goes down.
info.deltaY=lastTouchPosition.pageY-touch.pageY}return info}var ironScrollManager={get currentLockingElement(){return currentLockingElement},elementIsScrollLocked:elementIsScrollLocked,pushScrollLock:pushScrollLock,removeScrollLock:removeScrollLock,_lockingElements:_lockingElements,get _lockedElementCache(){return _lockedElementCache},get _unlockedElementCache(){return _unlockedElementCache},_hasCachedLockedElement:_hasCachedLockedElement,_hasCachedUnlockedElement:_hasCachedUnlockedElement,_composedTreeContains:_composedTreeContains,_scrollInteractionHandler:_scrollInteractionHandler,get _boundScrollHandler(){return _boundScrollHandler},_lockScrollInteractions:_lockScrollInteractions,_unlockScrollInteractions:_unlockScrollInteractions,_shouldPreventScrolling:_shouldPreventScrolling,_getScrollableNodes:_getScrollableNodes,_getScrollingNode:_getScrollingNode,_getScrollInfo:_getScrollInfo};_exports.$ironScrollManager=ironScrollManager;var IronOverlayBehaviorImpl={properties:{/**
     * True if the overlay is currently displayed.
     */opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},/**
     * True if the overlay was canceled when it was last closed.
     */canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},/**
     * Set to true to display a backdrop behind the overlay. It traps the focus
     * within the light DOM of the overlay.
     */withBackdrop:{observer:"_withBackdropChanged",type:Boolean},/**
     * Set to true to disable auto-focusing the overlay or child nodes with
     * the `autofocus` attribute` when the overlay is opened.
     */noAutoFocus:{type:Boolean,value:!1},/**
     * Set to true to disable canceling the overlay with the ESC key.
     */noCancelOnEscKey:{type:Boolean,value:!1},/**
     * Set to true to disable canceling the overlay by clicking outside it.
     */noCancelOnOutsideClick:{type:Boolean,value:!1},/**
     * Contains the reason(s) this overlay was last closed (see
     * `iron-overlay-closed`). `IronOverlayBehavior` provides the `canceled`
     * reason; implementers of the behavior can provide other reasons in
     * addition to `canceled`.
     */closingReason:{// was a getter before, but needs to be a property so other
// behaviors can override this.
type:Object},/**
     * Set to true to enable restoring of focus when overlay is closed.
     */restoreFocusOnClose:{type:Boolean,value:!1},/**
     * Set to true to allow clicks to go through overlays.
     * When the user clicks outside this overlay, the click may
     * close the overlay below.
     */allowClickThrough:{type:Boolean},/**
     * Set to true to keep overlay always on top.
     */alwaysOnTop:{type:Boolean},/**
     * Determines which action to perform when scroll outside an opened overlay
     * happens. Possible values: lock - blocks scrolling from happening, refit -
     * computes the new position on the overlay cancel - causes the overlay to
     * close
     */scrollAction:{type:String},/**
     * Shortcut to access to the overlay manager.
     * @private
     * @type {!IronOverlayManagerClass}
     */_manager:{type:Object,value:IronOverlayManager},/**
     * The node being focused.
     * @type {?Node}
     */_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],/**
   * The backdrop element.
   * @return {!Element}
   */get backdropElement(){return this._manager.backdropElement},/**
   * Returns the node to give focus to.
   * @return {!Node}
   */get _focusNode(){return this._focusedChild||(0,_mockApp4App.dom)(this).querySelector("[autofocus]")||this},/**
   * Array of nodes that can receive focus (overlay included), ordered by
   * `tabindex`. This is used to retrieve which is the first and last focusable
   * nodes in order to wrap the focus for overlays `with-backdrop`.
   *
   * If you know what is your content (specifically the first and last focusable
   * children), you can override this method to return only `[firstFocusable,
   * lastFocusable];`
   * @return {!Array<!Node>}
   * @protected
   */get _focusableNodes(){return IronFocusablesHelper.getTabbableNodes(this)},/**
   * @return {void}
   */ready:function ready(){// Used to skip calls to notifyResize and refit while the overlay is
// animating.
this.__isAnimating=!1;// with-backdrop needs tabindex to be set in order to trap the focus.
// If it is not set, IronOverlayBehavior will set it, and remove it if
// with-backdrop = false.
this.__shouldRemoveTabIndex=!1;// Used for wrapping the focus on TAB / Shift+TAB.
this.__firstFocusableNode=this.__lastFocusableNode=null;// Used by to keep track of the RAF callbacks.
this.__rafs={};// Focused node before overlay gets opened. Can be restored on close.
this.__restoreFocusNode=null;// Scroll info to be restored.
this.__scrollTop=this.__scrollLeft=null;this.__onCaptureScroll=this.__onCaptureScroll.bind(this);// Root nodes hosting the overlay, used to listen for scroll events on them.
this.__rootNodes=null;this._ensureSetup()},/** @override */attached:function attached(){// Call _openedChanged here so that position can be computed correctly.
if(this.opened){this._openedChanged(this.opened)}this._observer=(0,_mockApp4App.dom)(this).observeNodes(this._onNodesChange)},/** @override */detached:function detached(){// TODO(bicknellr): Per spec, checking `this._observer` should never be
// necessary because `connectedCallback` and `disconnectedCallback` should
// always be called in alternating order. However, the custom elements
// polyfill doesn't implement the reactions stack, so this can sometimes
// happen, particularly if ShadyDOM is in noPatch mode where the custom
// elements polyfill is installed before ShadyDOM. We should investigate
// whether or not we can either implement the reactions stack without major
// performance implications or patch ShadyDOM's functions to restore the
// typical ShadyDOM-then-custom-elements order and remove this workaround.
if(this._observer){(0,_mockApp4App.dom)(this).unobserveNodes(this._observer)}this._observer=null;for(var cb in this.__rafs){if(null!==this.__rafs[cb]){cancelAnimationFrame(this.__rafs[cb])}}this.__rafs={};this._manager.removeOverlay(this);// We got detached while animating, ensure we show/hide the overlay
// and fire iron-overlay-opened/closed event!
if(this.__isAnimating){if(this.opened){this._finishRenderOpened()}else{// Restore the focus if necessary.
this._applyFocus();this._finishRenderClosed()}}},/**
   * Toggle the opened state of the overlay.
   */toggle:function toggle(){this._setCanceled(!1);this.opened=!this.opened},/**
   * Open the overlay.
   */open:function open(){this._setCanceled(!1);this.opened=!0},/**
   * Close the overlay.
   */close:function close(){this._setCanceled(!1);this.opened=!1},/**
   * Cancels the overlay.
   * @param {Event=} event The original event
   */cancel:function cancel(event){var cancelEvent=this.fire("iron-overlay-canceled",event,{cancelable:!0});if(cancelEvent.defaultPrevented){return}this._setCanceled(!0);this.opened=!1},/**
   * Invalidates the cached tabbable nodes. To be called when any of the
   * focusable content changes (e.g. a button is disabled).
   */invalidateTabbables:function invalidateTabbables(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function _ensureSetup(){if(this._overlaySetup){return}this._overlaySetup=!0;this.style.outline="none";this.style.display="none"},/**
   * Called when `opened` changes.
   * @param {boolean=} opened
   * @protected
   */_openedChanged:function _openedChanged(opened){if(opened){this.removeAttribute("aria-hidden")}else{this.setAttribute("aria-hidden","true")}// Defer any animation-related code on attached
// (_openedChanged gets called again on attached).
if(!this.isAttached){return}this.__isAnimating=!0;// Deraf for non-blocking rendering.
this.__deraf("__openedChanged",this.__openedChanged)},_canceledChanged:function _canceledChanged(){this.closingReason=this.closingReason||{};this.closingReason.canceled=this.canceled},_withBackdropChanged:function _withBackdropChanged(){// If tabindex is already set, no need to override it.
if(this.withBackdrop&&!this.hasAttribute("tabindex")){this.setAttribute("tabindex","-1");this.__shouldRemoveTabIndex=!0}else if(this.__shouldRemoveTabIndex){this.removeAttribute("tabindex");this.__shouldRemoveTabIndex=!1}if(this.opened&&this.isAttached){this._manager.trackBackdrop()}},/**
   * tasks which must occur before opening; e.g. making the element visible.
   * @protected
   */_prepareRenderOpened:function _prepareRenderOpened(){// Store focused node.
this.__restoreFocusNode=this._manager.deepActiveElement;// Needed to calculate the size of the overlay so that transitions on its
// size will have the correct starting points.
this._preparePositioning();this.refit();this._finishPositioning();// Safari will apply the focus to the autofocus element when displayed
// for the first time, so we make sure to return the focus where it was.
if(this.noAutoFocus&&document.activeElement===this._focusNode){this._focusNode.blur();this.__restoreFocusNode.focus()}},/**
   * Tasks which cause the overlay to actually open; typically play an
   * animation.
   * @protected
   */_renderOpened:function _renderOpened(){this._finishRenderOpened()},/**
   * Tasks which cause the overlay to actually close; typically play an
   * animation.
   * @protected
   */_renderClosed:function _renderClosed(){this._finishRenderClosed()},/**
   * Tasks to be performed at the end of open action. Will fire
   * `iron-overlay-opened`.
   * @protected
   */_finishRenderOpened:function _finishRenderOpened(){this.notifyResize();this.__isAnimating=!1;this.fire("iron-overlay-opened")},/**
   * Tasks to be performed at the end of close action. Will fire
   * `iron-overlay-closed`.
   * @protected
   */_finishRenderClosed:function _finishRenderClosed(){// Hide the overlay.
this.style.display="none";// Reset z-index only at the end of the animation.
this.style.zIndex="";this.notifyResize();this.__isAnimating=!1;this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function _preparePositioning(){this.style.transition=this.style.webkitTransition="none";this.style.transform=this.style.webkitTransform="none";this.style.display=""},_finishPositioning:function _finishPositioning(){// First, make it invisible & reactivate animations.
this.style.display="none";// Force reflow before re-enabling animations so that they don't start.
// Set scrollTop to itself so that Closure Compiler doesn't remove this.
this.scrollTop=this.scrollTop;this.style.transition=this.style.webkitTransition="";this.style.transform=this.style.webkitTransform="";// Now that animations are enabled, make it visible again
this.style.display="";// Force reflow, so that following animations are properly started.
// Set scrollTop to itself so that Closure Compiler doesn't remove this.
this.scrollTop=this.scrollTop},/**
   * Applies focus according to the opened state.
   * @protected
   */_applyFocus:function _applyFocus(){if(this.opened){if(!this.noAutoFocus){this._focusNode.focus()}}else{// Restore focus.
if(this.restoreFocusOnClose&&this.__restoreFocusNode){// If the activeElement is `<body>` or inside the overlay,
// we are allowed to restore the focus. In all the other
// cases focus might have been moved elsewhere by another
// component or by an user interaction (e.g. click on a
// button outside the overlay).
var activeElement=this._manager.deepActiveElement;if(activeElement===document.body||composedContains(this,activeElement)){this.__restoreFocusNode.focus()}}this.__restoreFocusNode=null;this._focusNode.blur();this._focusedChild=null}},/**
   * Cancels (closes) the overlay. Call when click happens outside the overlay.
   * @param {!Event} event
   * @protected
   */_onCaptureClick:function _onCaptureClick(event){if(!this.noCancelOnOutsideClick){this.cancel(event)}},/**
   * Keeps track of the focused child. If withBackdrop, traps focus within
   * overlay.
   * @param {!Event} event
   * @protected
   */_onCaptureFocus:function _onCaptureFocus(event){if(!this.withBackdrop){return}var path=(0,_mockApp4App.dom)(event).path;if(-1===path.indexOf(this)){event.stopPropagation();this._applyFocus()}else{this._focusedChild=/** @type {Node} */path[0]}},/**
   * Handles the ESC key event and cancels (closes) the overlay.
   * @param {!Event} event
   * @protected
   */_onCaptureEsc:function _onCaptureEsc(event){if(!this.noCancelOnEscKey){this.cancel(event)}},/**
   * Handles TAB key events to track focus changes.
   * Will wrap focus for overlays withBackdrop.
   * @param {!Event} event
   * @protected
   */_onCaptureTab:function _onCaptureTab(event){if(!this.withBackdrop){return}this.__ensureFirstLastFocusables();// TAB wraps from last to first focusable.
// Shift + TAB wraps from first to last focusable.
var shift=event.shiftKey,nodeToCheck=shift?this.__firstFocusableNode:this.__lastFocusableNode,nodeToSet=shift?this.__lastFocusableNode:this.__firstFocusableNode,shouldWrap=!1;if(nodeToCheck===nodeToSet){// If nodeToCheck is the same as nodeToSet, it means we have an overlay
// with 0 or 1 focusables; in either case we still need to trap the
// focus within the overlay.
shouldWrap=!0}else{// In dom=shadow, the manager will receive focus changes on the main
// root but not the ones within other shadow roots, so we can't rely on
// _focusedChild, but we should check the deepest active element.
var focusedNode=this._manager.deepActiveElement;// If the active element is not the nodeToCheck but the overlay itself,
// it means the focus is about to go outside the overlay, hence we
// should prevent that (e.g. user opens the overlay and hit Shift+TAB).
shouldWrap=focusedNode===nodeToCheck||focusedNode===this}if(shouldWrap){// When the overlay contains the last focusable element of the document
// and it's already focused, pressing TAB would move the focus outside
// the document (e.g. to the browser search bar). Similarly, when the
// overlay contains the first focusable element of the document and it's
// already focused, pressing Shift+TAB would move the focus outside the
// document (e.g. to the browser search bar).
// In both cases, we would not receive a focus event, but only a blur.
// In order to achieve focus wrapping, we prevent this TAB event and
// force the focus. This will also prevent the focus to temporarily move
// outside the overlay, which might cause scrolling.
event.preventDefault();this._focusedChild=nodeToSet;this._applyFocus()}},/**
   * Refits if the overlay is opened and not animating.
   * @protected
   */_onIronResize:function _onIronResize(){if(this.opened&&!this.__isAnimating){this.__deraf("refit",this.refit)}},/**
   * Will call notifyResize if overlay is opened.
   * Can be overridden in order to avoid multiple observers on the same node.
   * @protected
   */_onNodesChange:function _onNodesChange(){if(this.opened&&!this.__isAnimating){// It might have added focusable nodes, so invalidate cached values.
this.invalidateTabbables();this.notifyResize()}},/**
   * Updates the references to the first and last focusable nodes.
   * @private
   */__ensureFirstLastFocusables:function __ensureFirstLastFocusables(){var focusableNodes=this._focusableNodes;this.__firstFocusableNode=focusableNodes[0];this.__lastFocusableNode=focusableNodes[focusableNodes.length-1]},/**
   * Tasks executed when opened changes: prepare for the opening, move the
   * focus, update the manager, render opened/closed.
   * @private
   */__openedChanged:function __openedChanged(){if(this.opened){// Make overlay visible, then add it to the manager.
this._prepareRenderOpened();this._manager.addOverlay(this);// Move the focus to the child node with [autofocus].
this._applyFocus();this._renderOpened()}else{// Remove overlay, then restore the focus before actually closing.
this._manager.removeOverlay(this);this._applyFocus();this._renderClosed()}},/**
   * Debounces the execution of a callback to the next animation frame.
   * @param {!string} jobname
   * @param {!Function} callback Always bound to `this`
   * @private
   */__deraf:function __deraf(jobname,callback){var rafs=this.__rafs;if(null!==rafs[jobname]){cancelAnimationFrame(rafs[jobname])}rafs[jobname]=requestAnimationFrame(function nextAnimationFrame(){rafs[jobname]=null;callback.call(this)}.bind(this))},/**
   * @param {boolean} isAttached
   * @param {boolean} opened
   * @param {string=} scrollAction
   * @private
   */__updateScrollObservers:function __updateScrollObservers(isAttached,opened,scrollAction){if(!isAttached||!opened||!this.__isValidScrollAction(scrollAction)){removeScrollLock(this);this.__removeScrollListeners()}else{if("lock"===scrollAction){this.__saveScrollPosition();pushScrollLock(this)}this.__addScrollListeners()}},/**
   * @private
   */__addScrollListeners:function __addScrollListeners(){if(!this.__rootNodes){this.__rootNodes=[];// Listen for scroll events in all shadowRoots hosting this overlay only
// when in native ShadowDOM.
if(_mockApp4App.useShadow){var node=this;while(node){if(node.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&node.host){this.__rootNodes.push(node)}node=node.host||node.assignedSlot||node.parentNode}}this.__rootNodes.push(document)}this.__rootNodes.forEach(function(el){el.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)},/**
   * @private
   */__removeScrollListeners:function __removeScrollListeners(){if(this.__rootNodes){this.__rootNodes.forEach(function(el){el.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)}if(!this.isAttached){this.__rootNodes=null}},/**
   * @param {string=} scrollAction
   * @return {boolean}
   * @private
   */__isValidScrollAction:function __isValidScrollAction(scrollAction){return"lock"===scrollAction||"refit"===scrollAction||"cancel"===scrollAction},/**
   * @private
   */__onCaptureScroll:function __onCaptureScroll(event){if(this.__isAnimating){return}// Check if scroll outside the overlay.
if(0<=(0,_mockApp4App.dom)(event).path.indexOf(this)){return}switch(this.scrollAction){case"lock":// NOTE: scrolling might happen if a scroll event is not cancellable, or
// if user pressed keys that cause scrolling (they're not prevented in
// order not to break a11y features like navigate with arrow keys).
this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(event);break;}},/**
   * Memoizes the scroll position of the outside scrolling element.
   * @private
   */__saveScrollPosition:function __saveScrollPosition(){if(document.scrollingElement){this.__scrollTop=document.scrollingElement.scrollTop;this.__scrollLeft=document.scrollingElement.scrollLeft}else{// Since we don't know if is the body or html, get max.
this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop);this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft)}},/**
   * Resets the scroll position of the outside scrolling element.
   * @private
   */__restoreScrollPosition:function __restoreScrollPosition(){if(document.scrollingElement){document.scrollingElement.scrollTop=this.__scrollTop;document.scrollingElement.scrollLeft=this.__scrollLeft}else{// Since we don't know if is the body or html, set both.
document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop;document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft}}};_exports.IronOverlayBehaviorImpl=IronOverlayBehaviorImpl;var composedParent=function composedParent(node){return node.assignedSlot||node.parentNode||node.host},composedContains=function composedContains(ancestor,descendant){for(var element=descendant;element;element=composedParent(element)){if(element===ancestor){return!0}}return!1},IronOverlayBehavior=[IronFitBehavior,_mockApp4App.IronResizableBehavior,IronOverlayBehaviorImpl];_exports.IronOverlayBehavior=IronOverlayBehavior;/**
                                                                                                       * Fired after the overlay opens.
                                                                                                       * @event iron-overlay-opened
                                                                                                       */ /**
                                                                                                           * Fired when the overlay is canceled, but before it is closed.
                                                                                                           * @event iron-overlay-canceled
                                                                                                           * @param {Event} event The closing of the overlay can be prevented
                                                                                                           * by calling `event.preventDefault()`. The `event.detail` is the original event
                                                                                                           * that originated the canceling (e.g. ESC keyboard event or click event outside
                                                                                                           * the overlay).
                                                                                                           */ /**
                                                                                                               * Fired after the overlay closes.
                                                                                                               * @event iron-overlay-closed
                                                                                                               * @param {Event} event The `event.detail` is the `closingReason` property
                                                                                                               * (contains `canceled`, whether the overlay was canceled).
                                                                                                               */var ironOverlayBehavior={IronOverlayBehaviorImpl:IronOverlayBehaviorImpl,IronOverlayBehavior:IronOverlayBehavior};_exports.$ironOverlayBehavior=ironOverlayBehavior;var PaperInputAddonBehavior={attached:function attached(){this.fire("addon-attached")},/**
   * The function called by `<paper-input-container>` when the input value or
   * validity changes.
   * @param {{
   *   invalid: boolean,
   *   inputElement: (Element|undefined),
   *   value: (string|undefined)
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */update:function update(state){}};_exports.PaperInputAddonBehavior=PaperInputAddonBehavior;var paperInputAddonBehavior={PaperInputAddonBehavior:PaperInputAddonBehavior};// aria-labelledby) and add-ons.
_exports.$paperInputAddonBehavior=paperInputAddonBehavior;var PaperInputHelper={};_exports.PaperInputHelper=PaperInputHelper;PaperInputHelper.NextLabelID=1;PaperInputHelper.NextAddonID=1;PaperInputHelper.NextInputID=1;/**
                                   * Use `PaperInputBehavior` to implement inputs with `<paper-input-container>`.
                                   * This behavior is implemented by `<paper-input>`. It exposes a number of
                                   * properties from `<paper-input-container>` and `<input is="iron-input">` and
                                   * they should be bound in your template.
                                   *
                                   * The input element can be accessed by the `inputElement` property if you need
                                   * to access properties or methods that are not exposed.
                                   * @polymerBehavior PaperInputBehavior
                                   */var PaperInputBehaviorImpl={properties:{/**
     * Fired when the input changes due to user interaction.
     *
     * @event change
     */ /**
         * The label for this input. If you're using PaperInputBehavior to
         * implement your own paper-input-like element, bind this to
         * `<label>`'s content and `hidden` property, e.g.
         * `<label hidden$="[[!label]]">[[label]]</label>` in your `template`
         */label:{type:String},/**
     * The value for this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<iron-input>`'s `bindValue`
     * property, or the value property of your input that is `notify:true`.
     * @type {*}
     */value:{notify:!0,type:String},/**
     * Set to true to disable this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * both the `<paper-input-container>`'s and the input's `disabled` property.
     */disabled:{type:Boolean,value:!1},/**
     * Returns true if the value is invalid. If you're using PaperInputBehavior
     * to implement your own paper-input-like element, bind this to both the
     * `<paper-input-container>`'s and the input's `invalid` property.
     *
     * If `autoValidate` is true, the `invalid` attribute is managed
     * automatically, which can clobber attempts to manage it manually.
     */invalid:{type:Boolean,value:!1,notify:!0},/**
     * Set this to specify the pattern allowed by `preventInvalidInput`. If
     * you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `allowedPattern`
     * property.
     */allowedPattern:{type:String},/**
     * The type of the input. The supported types are the
     * [native input's
     * types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_<input>_types).
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the (Polymer 1) `<input is="iron-input">`'s or
     * (Polymer 2)
     * `<iron-input>`'s `type` property.
     */type:{type:String},/**
     * The datalist of the input (if any). This should match the id of an
     * existing `<datalist>`. If you're using PaperInputBehavior to implement
     * your own paper-input-like element, bind this to the `<input
     * is="iron-input">`'s `list` property.
     */list:{type:String},/**
     * A pattern to validate the `input` with. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<input is="iron-input">`'s `pattern` property.
     */pattern:{type:String},/**
     * Set to true to mark the input as required. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<input is="iron-input">`'s `required` property.
     */required:{type:Boolean,value:!1},/**
     * The error message to display when the input is invalid. If you're using
     * PaperInputBehavior to implement your own paper-input-like element,
     * bind this to the `<paper-input-error>`'s content, if using.
     */errorMessage:{type:String},/**
     * Set to true to show a character counter.
     */charCounter:{type:Boolean,value:!1},/**
     * Set to true to disable the floating label. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<paper-input-container>`'s `noLabelFloat` property.
     */noLabelFloat:{type:Boolean,value:!1},/**
     * Set to true to always float the label. If you're using PaperInputBehavior
     * to implement your own paper-input-like element, bind this to the
     * `<paper-input-container>`'s `alwaysFloatLabel` property.
     */alwaysFloatLabel:{type:Boolean,value:!1},/**
     * Set to true to auto-validate the input value. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<paper-input-container>`'s `autoValidate` property.
     */autoValidate:{type:Boolean,value:!1},/**
     * Name of the validator to use. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<input is="iron-input">`'s `validator` property.
     */validator:{type:String},// HTMLInputElement attributes for binding if needed
/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocomplete`
     * property.
     */autocomplete:{type:String,value:"off"},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autofocus`
     * property.
     */autofocus:{type:Boolean,observer:"_autofocusChanged"},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `inputmode`
     * property.
     */inputmode:{type:String},/**
     * The minimum length of the input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `minlength`
     * property.
     */minlength:{type:Number},/**
     * The maximum length of the input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `maxlength`
     * property.
     */maxlength:{type:Number},/**
     * The minimum (numeric or date-time) input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `min` property.
     */min:{type:String},/**
     * The maximum (numeric or date-time) input value.
     * Can be a String (e.g. `"2000-01-01"`) or a Number (e.g. `2`).
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `max` property.
     */max:{type:String},/**
     * Limits the numeric or date-time increments.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `step` property.
     */step:{type:String},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `name` property.
     */name:{type:String},/**
     * A placeholder string in addition to the label. If this is set, the label
     * will always float.
     */placeholder:{type:String,// need to set a default so _computeAlwaysFloatLabel is run
value:""},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `readonly`
     * property.
     */readonly:{type:Boolean,value:!1},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `size` property.
     */size:{type:Number},// Nonstandard attributes for binding if needed
/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocapitalize`
     * property.
     *
     * @type {string}
     */autocapitalize:{type:String,value:"none"},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocorrect`
     * property.
     */autocorrect:{type:String,value:"off"},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autosave`
     * property, used with type=search.
     */autosave:{type:String},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `results` property,
     * used with type=search.
     */results:{type:Number},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `accept` property,
     * used with type=file.
     */accept:{type:String},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the`<input is="iron-input">`'s `multiple` property,
     * used with type=file.
     */multiple:{type:Boolean},/** @private */_ariaDescribedBy:{type:String,value:""},/** @private */_ariaLabelledBy:{type:String,value:""},/** @private */_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},/**
   * @type {!Object}
   */keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},/** @private */hostAttributes:{tabindex:0},/**
   * Returns a reference to the input element.
   * @return {!HTMLElement}
   */get inputElement(){// Chrome generates audit errors if an <input type="password"> has a
// duplicate ID, which is almost always true in Shady DOM. Generate
// a unique ID instead.
if(!this.$){this.$={}}if(!this.$.input){this._generateInputId();this.$.input=this.$$("#"+this._inputId)}return this.$.input},/**
   * Returns a reference to the focusable element.
   * @return {!HTMLElement}
   */get _focusableElement(){return this.inputElement},/** @override */created:function created(){// These types have some default placeholder text; overlapping
// the label on top of it looks terrible. Auto-float the label in this case.
this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},/** @override */attached:function attached(){this._updateAriaLabelledBy();// In the 2.0 version of the element, this is handled in `onIronInputReady`,
// i.e. after the native input has finished distributing. In the 1.0
// version, the input is in the shadow tree, so it's already available.
if(!_mockApp4App.PolymerElement&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)){this.alwaysFloatLabel=!0}},_appendStringWithSpace:function _appendStringWithSpace(str,more){if(str){str=str+" "+more}else{str=more}return str},_onAddonAttached:function _onAddonAttached(event){var target=(0,_mockApp4App.dom)(event).rootTarget;if(target.id){this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,target.id)}else{var id="paper-input-add-on-"+PaperInputHelper.NextAddonID++;target.id=id;this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,id)}},/**
   * Validates the input element and sets an error style if needed.
   *
   * @return {boolean}
   */validate:function validate(){return this.inputElement.validate()},/**
   * Forward focus to inputElement. Overriden from IronControlState.
   */_focusBlurHandler:function _focusBlurHandler(event){_mockApp4App.IronControlState._focusBlurHandler.call(this,event);// Forward the focus to the nested input.
if(this.focused&&!this._shiftTabPressed&&this._focusableElement){this._focusableElement.focus()}},/**
   * Handler that is called when a shift+tab keypress is detected by the menu.
   *
   * @param {CustomEvent} event A key combination event.
   */_onShiftTabDown:function _onShiftTabDown(event){var oldTabIndex=this.getAttribute("tabindex");this._shiftTabPressed=!0;this.setAttribute("tabindex","-1");this.async(function(){this.setAttribute("tabindex",oldTabIndex);this._shiftTabPressed=!1},1)},/**
   * If `autoValidate` is true, then validates the element.
   */_handleAutoValidate:function _handleAutoValidate(){if(this.autoValidate)this.validate()},/**
   * Restores the cursor to its original position after updating the value.
   * @param {string} newValue The value that should be saved.
   */updateValueAndPreserveCaret:function updateValueAndPreserveCaret(newValue){// Not all elements might have selection, and even if they have the
// right properties, accessing them might throw an exception (like for
// <input type=number>)
try{var start=this.inputElement.selectionStart;this.value=newValue;// The cursor automatically jumps to the end after re-setting the value,
// so restore it to its original position.
this.inputElement.selectionStart=start;this.inputElement.selectionEnd=start}catch(e){// Just set the value and give up on the caret.
this.value=newValue}},_computeAlwaysFloatLabel:function _computeAlwaysFloatLabel(alwaysFloatLabel,placeholder){return placeholder||alwaysFloatLabel},_updateAriaLabelledBy:function _updateAriaLabelledBy(){var label=(0,_mockApp4App.dom)(this.root).querySelector("label");if(!label){this._ariaLabelledBy="";return}var labelledBy;if(label.id){labelledBy=label.id}else{labelledBy="paper-input-label-"+PaperInputHelper.NextLabelID++;label.id=labelledBy}this._ariaLabelledBy=labelledBy},_generateInputId:function _generateInputId(){if(!this._inputId||""===this._inputId){this._inputId="input-"+PaperInputHelper.NextInputID++}},_onChange:function _onChange(event){// In the Shadow DOM, the `change` event is not leaked into the
// ancestor tree, so we must do this manually.
// See
// https://w3c.github.io/webcomponents/spec/shadow/#events-that-are-not-leaked-into-ancestor-trees.
if(this.shadowRoot){this.fire(event.type,{sourceEvent:event},{node:this,bubbles:event.bubbles,cancelable:event.cancelable})}},_autofocusChanged:function _autofocusChanged(){// Firefox doesn't respect the autofocus attribute if it's applied after
// the page is loaded (Chrome/WebKit do respect it), preventing an
// autofocus attribute specified in markup from taking effect when the
// element is upgraded. As a workaround, if the autofocus property is set,
// and the focus hasn't already been moved elsewhere, we take focus.
if(this.autofocus&&this._focusableElement){// In IE 11, the default document.activeElement can be the page's
// outermost html element, but there are also cases (under the
// polyfill?) in which the activeElement is not a real HTMLElement, but
// just a plain object. We identify the latter case as having no valid
// activeElement.
var activeElement=document.activeElement,isActiveElementValid=babelHelpers.instanceof(activeElement,HTMLElement),isSomeElementActive=isActiveElementValid&&activeElement!==document.body&&activeElement!==document.documentElement;/* IE 11 */if(!isSomeElementActive){// No specific element has taken the focus yet, so we can take it.
this._focusableElement.focus()}}}};/** @polymerBehavior */_exports.PaperInputBehaviorImpl=PaperInputBehaviorImpl;var PaperInputBehavior=[_mockApp4App.IronControlState,_mockApp4App.IronA11yKeysBehavior,PaperInputBehaviorImpl];_exports.PaperInputBehavior=PaperInputBehavior;var paperInputBehavior={PaperInputHelper:PaperInputHelper,PaperInputBehaviorImpl:PaperInputBehaviorImpl,PaperInputBehavior:PaperInputBehavior};_exports.$paperInputBehavior=paperInputBehavior;var template=(0,_mockApp4App.html)(_templateObject5_1dafad604da011ea8faf35a9b7563db5());template.setAttribute("style","display: none;");document.head.appendChild(template.content);(0,_mockApp4App.Polymer)({/** @override */_template:(0,_mockApp4App.html)(_templateObject6_1dafad604da011ea8faf35a9b7563db5()),is:"paper-input-char-counter",behaviors:[PaperInputAddonBehavior],properties:{_charCounterStr:{type:String,value:"0"}},/**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */update:function update(state){if(!state.inputElement){return}state.value=state.value||"";var counter=state.value.toString().length.toString();if(state.inputElement.hasAttribute("maxlength")){counter+="/"+state.inputElement.getAttribute("maxlength")}this._charCounterStr=counter}});var template$1=(0,_mockApp4App.html)(_templateObject7_1dafad604da011ea8faf35a9b7563db5());template$1.setAttribute("style","display: none;");document.head.appendChild(template$1.content);/*
                                               `<paper-input-container>` is a container for a `<label>`, an `<iron-input>` or
                                               `<textarea>` and optional add-on elements such as an error message or character
                                               counter, used to implement Material Design text fields.
                                                                                           For example:
                                                                                               <paper-input-container>
                                                   <label slot="label">Your name</label>
                                                   <iron-input slot="input">
                                                     <input>
                                                   </iron-input>
                                                   // In Polymer 1.0, you would use `<input is="iron-input" slot="input">`
                                               instead of the above.
                                                 </paper-input-container>
                                                                                           You can style the nested `<input>` however you want; if you want it to look like
                                               a Material Design input, you can style it with the
                                               --paper-input-container-shared-input-style mixin.
                                                                                           Do not wrap `<paper-input-container>` around elements that already include it,
                                               such as `<paper-input>`. Doing so may cause events to bounce infinitely between
                                               the container and its contained element.
                                                                                           ### Listening for input changes
                                                                                           By default, it listens for changes on the `bind-value` attribute on its children
                                               nodes and perform tasks such as auto-validating and label styling when the
                                               `bind-value` changes. You can configure the attribute it listens to with the
                                               `attr-for-value` attribute.
                                                                                           ### Using a custom input element
                                                                                           You can use a custom input element in a `<paper-input-container>`, for example
                                               to implement a compound input field like a social security number input. The
                                               custom input element should have the `paper-input-input` class, have a
                                               `notify:true` value property and optionally implements
                                               `Polymer.IronValidatableBehavior` if it is validatable.
                                                                                               <paper-input-container attr-for-value="ssn-value">
                                                   <label slot="label">Social security number</label>
                                                   <ssn-input slot="input" class="paper-input-input"></ssn-input>
                                                 </paper-input-container>
                                                                                           
                                               If you're using a `<paper-input-container>` imperatively, it's important to make
                                               sure that you attach its children (the `iron-input` and the optional `label`)
                                               before you attach the `<paper-input-container>` itself, so that it can be set up
                                               correctly.
                                                                                           ### Validation
                                                                                           If the `auto-validate` attribute is set, the input container will validate the
                                               input and update the container styling when the input value changes.
                                                                                           ### Add-ons
                                                                                           Add-ons are child elements of a `<paper-input-container>` with the `add-on`
                                               attribute and implements the `Polymer.PaperInputAddonBehavior` behavior. They
                                               are notified when the input value or validity changes, and may implement
                                               functionality such as error messages or character counters. They appear at the
                                               bottom of the input.
                                                                                           ### Prefixes and suffixes
                                               These are child elements of a `<paper-input-container>` with the `prefix`
                                               or `suffix` attribute, and are displayed inline with the input, before or after.
                                                                                               <paper-input-container>
                                                   <div slot="prefix">$</div>
                                                   <label slot="label">Total</label>
                                                   <iron-input slot="input">
                                                     <input>
                                                   </iron-input>
                                                   // In Polymer 1.0, you would use `<input is="iron-input" slot="input">`
                                               instead of the above. <paper-icon-button slot="suffix"
                                               icon="clear"></paper-icon-button>
                                                 </paper-input-container>
                                                                                           ### Styling
                                                                                           The following custom properties and mixins are available for styling:
                                                                                           Custom property | Description | Default
                                               ----------------|-------------|----------
                                               `--paper-input-container-color` | Label and underline color when the input is not focused | `--secondary-text-color`
                                               `--paper-input-container-focus-color` | Label and underline color when the input is focused | `--primary-color`
                                               `--paper-input-container-invalid-color` | Label and underline color when the input is is invalid | `--error-color`
                                               `--paper-input-container-input-color` | Input foreground color | `--primary-text-color`
                                               `--paper-input-container` | Mixin applied to the container | `{}`
                                               `--paper-input-container-disabled` | Mixin applied to the container when it's disabled | `{}`
                                               `--paper-input-container-label` | Mixin applied to the label | `{}`
                                               `--paper-input-container-label-focus` | Mixin applied to the label when the input is focused | `{}`
                                               `--paper-input-container-label-floating` | Mixin applied to the label when floating | `{}`
                                               `--paper-input-container-input` | Mixin applied to the input | `{}`
                                               `--paper-input-container-input-align` | The vertical-align property of the input | `bottom`
                                               `--paper-input-container-input-disabled` | Mixin applied to the input when the component is disabled | `{}`
                                               `--paper-input-container-input-focus` | Mixin applied to the input when focused | `{}`
                                               `--paper-input-container-input-invalid` | Mixin applied to the input when invalid | `{}`
                                               `--paper-input-container-input-webkit-spinner` | Mixin applied to the webkit spinner | `{}`
                                               `--paper-input-container-input-webkit-clear` | Mixin applied to the webkit clear button | `{}`
                                               `--paper-input-container-input-webkit-calendar-picker-indicator` | Mixin applied to the webkit calendar picker indicator | `{}`
                                               `--paper-input-container-ms-clear` | Mixin applied to the Internet Explorer clear button | `{}`
                                               `--paper-input-container-underline` | Mixin applied to the underline | `{}`
                                               `--paper-input-container-underline-focus` | Mixin applied to the underline when the input is focused | `{}`
                                               `--paper-input-container-underline-disabled` | Mixin applied to the underline when the input is disabled | `{}`
                                               `--paper-input-prefix` | Mixin applied to the input prefix | `{}`
                                               `--paper-input-suffix` | Mixin applied to the input suffix | `{}`
                                               `--paper-input-container-label-before` | Mixin applied to label before pseudo element | {}
                                               `--paper-input-container-label-after` | Mixin applied to label after pseudo element (useful for required asterisk) | {}
                                                                                           This element is `display:block` by default, but you can set the `inline`
                                               attribute to make it `display:inline-block`.
                                               */(0,_mockApp4App.Polymer)({/** @override */_template:(0,_mockApp4App.html)(_templateObject8_1dafad604da011ea8faf35a9b7563db5()),is:"paper-input-container",properties:{/**
     * Set to true to disable the floating label. The label disappears when the
     * input value is not null.
     */noLabelFloat:{type:Boolean,value:!1},/**
     * Set to true to always float the floating label.
     */alwaysFloatLabel:{type:Boolean,value:!1},/**
     * The attribute to listen for value changes on.
     */attrForValue:{type:String,value:"bind-value"},/**
     * Set to true to auto-validate the input value when it changes.
     */autoValidate:{type:Boolean,value:!1},/**
     * True if the input is invalid. This property is set automatically when the
     * input value changes if auto-validating, or when the `iron-input-validate`
     * event is heard from a child.
     */invalid:{observer:"_invalidChanged",type:Boolean,value:!1},/**
     * True if the input has focus.
     */focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array// do not set a default value here intentionally - it will be initialized
// lazily when a distributed child is attached, which may occur before
// configuration for this element in polyfill.
},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function value(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function value(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function value(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function value(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return(0,_mockApp4App.dashToCamelCase)(this.attrForValue)},get _inputElement(){return(0,_mockApp4App.dom)(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},/** @override */ready:function ready(){// Paper-input treats a value of undefined differently at startup than
// the rest of the time (specifically: it does not validate it at startup,
// but it does after that. We need to track whether the first time we
// encounter the value is basically this first time, so that we can validate
// it correctly the rest of the time. See
// https://github.com/PolymerElements/paper-input/issues/605
this.__isFirstValueUpdate=!0;if(!this._addons){this._addons=[]}this.addEventListener("focus",this._boundOnFocus,!0);this.addEventListener("blur",this._boundOnBlur,!0)},/** @override */attached:function attached(){if(this.attrForValue){this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged)}else{this.addEventListener("input",this._onInput)}// Only validate when attached if the input already has a value.
if(this._inputElementValue&&""!=this._inputElementValue){this._handleValueAndAutoValidate(this._inputElement)}else{this._handleValue(this._inputElement)}},/** @private */_onAddonAttached:function _onAddonAttached(event){if(!this._addons){this._addons=[]}var target=event.target;if(-1===this._addons.indexOf(target)){this._addons.push(target);if(this.isAttached){this._handleValue(this._inputElement)}}},/** @private */_onFocus:function _onFocus(){this._setFocused(!0)},/** @private */_onBlur:function _onBlur(){this._setFocused(!1);this._handleValueAndAutoValidate(this._inputElement)},/** @private */_onInput:function _onInput(event){this._handleValueAndAutoValidate(event.target)},/** @private */_onValueChanged:function _onValueChanged(event){var input=event.target;// Paper-input treats a value of undefined differently at startup than
// the rest of the time (specifically: it does not validate it at startup,
// but it does after that. If this is in fact the bootup case, ignore
// validation, just this once.
if(this.__isFirstValueUpdate){this.__isFirstValueUpdate=!1;if(input.value===void 0||""===input.value){return}}this._handleValueAndAutoValidate(event.target)},/** @private */_handleValue:function _handleValue(inputElement){var value=this._inputElementValue;// type="number" hack needed because this.value is empty until it's valid
if(value||0===value||"number"===inputElement.type&&!inputElement.checkValidity()){this._inputHasContent=!0}else{this._inputHasContent=!1}this.updateAddons({inputElement:inputElement,value:value,invalid:this.invalid})},/** @private */_handleValueAndAutoValidate:function _handleValueAndAutoValidate(inputElement){if(this.autoValidate&&inputElement){var valid;if(inputElement.validate){valid=inputElement.validate(this._inputElementValue)}else{valid=inputElement.checkValidity()}this.invalid=!valid}// Call this last to notify the add-ons.
this._handleValue(inputElement)},/** @private */_onIronInputValidate:function _onIronInputValidate(event){this.invalid=this._inputElement.invalid},/** @private */_invalidChanged:function _invalidChanged(){if(this._addons){this.updateAddons({invalid:this.invalid})}},/**
   * Call this to update the state of add-ons.
   * @param {Object} state Add-on state.
   */updateAddons:function updateAddons(state){for(var addon,index=0;addon=this._addons[index];index++){addon.update(state)}},/** @private */_computeInputContentClass:function _computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent){var cls="input-content";if(!noLabelFloat){var label=this.querySelector("label");if(alwaysFloatLabel||_inputHasContent){cls+=" label-is-floating";// If the label is floating, ignore any offsets that may have been
// applied from a prefix element.
this.$.labelAndInputContainer.style.position="static";if(invalid){cls+=" is-invalid"}else if(focused){cls+=" label-is-highlighted"}}else{// When the label is not floating, it should overlap the input element.
if(label){this.$.labelAndInputContainer.style.position="relative"}if(invalid){cls+=" is-invalid"}}}else{if(_inputHasContent){cls+=" label-is-hidden"}if(invalid){cls+=" is-invalid"}}if(focused){cls+=" focused"}return cls},/** @private */_computeUnderlineClass:function _computeUnderlineClass(focused,invalid){var cls="underline";if(invalid){cls+=" is-invalid"}else if(focused){cls+=" is-highlighted"}return cls},/** @private */_computeAddOnContentClass:function _computeAddOnContentClass(focused,invalid){var cls="add-on-content";if(invalid){cls+=" is-invalid"}else if(focused){cls+=" is-highlighted"}return cls}});(0,_mockApp4App.Polymer)({/** @override */_template:(0,_mockApp4App.html)(_templateObject9_1dafad604da011ea8faf35a9b7563db5()),is:"paper-input-error",behaviors:[PaperInputAddonBehavior],properties:{/**
     * True if the error is showing.
     */invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},/**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */update:function update(state){this._setInvalid(state.invalid)}});(0,_mockApp4App.Polymer)({is:"paper-input",/** @override */_template:(0,_mockApp4App.html)(_templateObject10_1dafad604da011ea8faf35a9b7563db5()),behaviors:[PaperInputBehavior,IronFormElementBehavior],properties:{value:{// Required for the correct TypeScript type-generation
type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},/**
   * Returns a reference to the focusable element. Overridden from
   * PaperInputBehavior to correctly focus the native input.
   *
   * @return {!HTMLElement}
   */get _focusableElement(){return this.inputElement._inputElement},// Note: This event is only available in the 1.0 version of this element.
// In 2.0, the functionality of `_onIronInputReady` is done in
// PaperInputBehavior::attached.
listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function _onIronInputReady(){// Even though this is only used in the next line, save this for
// backwards compatibility, since the native input had this ID until 2.0.5.
if(!this.$.nativeInput){this.$.nativeInput=/** @type {!Element} */this.$$("input")}if(this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)){this.alwaysFloatLabel=!0}// Only validate when attached if the input already has a value.
if(!!this.inputElement.bindValue){this.$.container._handleValueAndAutoValidate(this.inputElement)}}});var currentToast=null;/**
                         Material design: [Snackbars &
                         toasts](https://www.google.com/design/spec/components/snackbars-toasts.html)
                         
                         `paper-toast` provides a subtle notification toast. Only one `paper-toast` will
                         be visible on screen.
                         
                         Use `opened` to show the toast:
                         
                         Example:
                         
                             <paper-toast text="Hello world!" opened></paper-toast>
                         
                         Also `open()` or `show()` can be used to show the toast:
                         
                         Example:
                         
                             <paper-button on-click="openToast">Open Toast</paper-button>
                             <paper-toast id="toast" text="Hello world!"></paper-toast>
                         
                             ...
                         
                             openToast: function() {
                               this.$.toast.open();
                             }
                         
                         Set `duration` to 0, a negative number or Infinity to persist the toast on
                         screen:
                         
                         Example:
                         
                             <paper-toast text="Terms and conditions" opened duration="0">
                               <a href="#">Show more</a>
                             </paper-toast>
                         
                         
                         ### Styling
                         The following custom properties and mixins are available for styling:
                         
                         Custom property | Description | Default
                         ----------------|-------------|----------
                         `--paper-toast-background-color` | The paper-toast background-color | `#323232`
                         `--paper-toast-color` | The paper-toast color | `#f1f1f1`
                         
                         This element applies the mixin `--paper-font-common-base` but does not import
                         `paper-styles/typography.html`. In order to apply the `Roboto` font to this
                         element, make sure you've imported `paper-styles/typography.html`.
                         
                         @group Paper Elements
                         @element paper-toast
                         @demo demo/index.html
                         @hero hero.svg
                         */(0,_mockApp4App.Polymer)({_template:(0,_mockApp4App.html)(_templateObject11_1dafad604da011ea8faf35a9b7563db5()),is:"paper-toast",behaviors:[IronOverlayBehavior],properties:{/**
     * The element to fit `this` into.
     * Overridden from `Polymer.IronFitBehavior`.
     */fitInto:{type:Object,value:window,observer:"_onFitIntoChanged"},/**
     * The orientation against which to align the dropdown content
     * horizontally relative to `positionTarget`.
     * Overridden from `Polymer.IronFitBehavior`.
     */horizontalAlign:{type:String,value:"left"},/**
     * The orientation against which to align the dropdown content
     * vertically relative to `positionTarget`.
     * Overridden from `Polymer.IronFitBehavior`.
     */verticalAlign:{type:String,value:"bottom"},/**
     * The duration in milliseconds to show the toast.
     * Set to `0`, a negative number, or `Infinity`, to disable the
     * toast auto-closing.
     */duration:{type:Number,value:3e3},/**
     * The text to display in the toast.
     */text:{type:String,value:""},/**
     * Overridden from `IronOverlayBehavior`.
     * Set to false to enable closing of the toast by clicking outside it.
     */noCancelOnOutsideClick:{type:Boolean,value:!0},/**
     * Overridden from `IronOverlayBehavior`.
     * Set to true to disable auto-focusing the toast or child nodes with
     * the `autofocus` attribute` when the overlay is opened.
     */noAutoFocus:{type:Boolean,value:!0}},listeners:{transitionend:"__onTransitionEnd"},/**
   * Read-only. Deprecated. Use `opened` from `IronOverlayBehavior`.
   * @property visible
   * @deprecated
   */get visible(){_mockApp4App.Base._warn("`visible` is deprecated, use `opened` instead");return this.opened},/**
   * Read-only. Can auto-close if duration is a positive finite number.
   * @property _canAutoClose
   */get _canAutoClose(){return 0<this.duration&&this.duration!==1/0},created:function created(){this._autoClose=null;IronA11yAnnouncer.requestAvailability()},/**
   * Show the toast. Without arguments, this is the same as `open()` from
   * `IronOverlayBehavior`.
   * @param {(Object|string)=} properties Properties to be set before opening the toast.
   * e.g. `toast.show('hello')` or `toast.show({text: 'hello', duration: 3000})`
   */show:function show(properties){if("string"==typeof properties){properties={text:properties}}for(var property in properties){if(0===property.indexOf("_")){_mockApp4App.Base._warn("The property \""+property+"\" is private and was not set.")}else if(property in this){this[property]=properties[property]}else{_mockApp4App.Base._warn("The property \""+property+"\" is not valid.")}}this.open()},/**
   * Hide the toast. Same as `close()` from `IronOverlayBehavior`.
   */hide:function hide(){this.close()},/**
   * Called on transitions of the toast, indicating a finished animation
   * @private
   */__onTransitionEnd:function __onTransitionEnd(e){// there are different transitions that are happening when opening and
// closing the toast. The last one so far is for `opacity`.
// This marks the end of the transition, so we check for this to determine
// if this is the correct event.
if(e&&e.target===this&&"opacity"===e.propertyName){if(this.opened){this._finishRenderOpened()}else{this._finishRenderClosed()}}},/**
   * Overridden from `IronOverlayBehavior`.
   * Called when the value of `opened` changes.
   */_openedChanged:function _openedChanged(){if(null!==this._autoClose){this.cancelAsync(this._autoClose);this._autoClose=null}if(this.opened){if(currentToast&&currentToast!==this){currentToast.close()}currentToast=this;this.fire("iron-announce",{text:this.text});if(this._canAutoClose){this._autoClose=this.async(this.close,this.duration)}}else if(currentToast===this){currentToast=null}IronOverlayBehaviorImpl._openedChanged.apply(this,arguments)},/**
   * Overridden from `IronOverlayBehavior`.
   */_renderOpened:function _renderOpened(){this.classList.add("paper-toast-open")},/**
   * Overridden from `IronOverlayBehavior`.
   */_renderClosed:function _renderClosed(){this.classList.remove("paper-toast-open")},/**
   * @private
   */_onFitIntoChanged:function _onFitIntoChanged(fitInto){this.positionTarget=fitInto}/**
     * Fired when `paper-toast` is opened.
     *
     * @event 'iron-announce'
     * @param {{text: string}} detail Contains text that will be announced.
     */});var LoginPage=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(LoginPage,_PolymerElement);function LoginPage(){babelHelpers.classCallCheck(this,LoginPage);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LoginPage).apply(this,arguments))}babelHelpers.createClass(LoginPage,[{key:"_handleLogin",//validates if the user exist and logs in to the user portal
value:function _handleLogin(){if(this.$.loginForm.validate()){var loginPostObj={phoneNumber:parseInt(this.$.username.value),password:this.$.password.value};this.$.loginForm.reset();this.action="list";this._makeAjax("".concat(baseUrl,"/lifelinehealthcare/login"),"post",loginPostObj)}}//handling the response for the ajax request made
},{key:"_handleResponse",value:function _handleResponse(event){switch(this.action){case"list":this.loggedInUser=event.detail.response;//if the successful response is returned
if(200===this.loggedInUser.statusCode){sessionStorage.setItem("doctorId",this.loggedInUser.userId);sessionStorage.setItem("doctorName",this.loggedInUser.name);this.set("route.path","./dashboard");this.dispatchEvent(new CustomEvent("refresh-dashboard",{detail:{},bubbles:!0,composed:!0}))}//handling the exception
else{this.$.toast0.open()}break;default:break;}}//handling error 
},{key:"_handleError",value:function _handleError(){this.$.toast1.open()}/**
     * 
     * @param {String} url 
     * @param {String} method 
     * @param {Object} postObj 
     */},{key:"_makeAjax",value:function _makeAjax(url,method,postObj){var ajax=this.$.ajax;ajax.url=url;ajax.method=method;ajax.body=postObj?JSON.stringify(postObj):void 0;ajax.generateRequest()}}],[{key:"template",get:function get(){return(0,_mockApp4App.html$1)(_templateObject12_1dafad604da011ea8faf35a9b7563db5())}},{key:"properties",get:function get(){return{loggedInUser:{type:Array,value:[]},action:{type:String,value:"list"}}}}]);return LoginPage}(_mockApp4App.PolymerElement);window.customElements.define("login-page",LoginPage)});