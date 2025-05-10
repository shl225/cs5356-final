console.log("Calling DOMContentLoaded");
// Create a new div element
console.log("Creating chatHost");
var chatHost = document.createElement('div');
chatHost.className = 'DPAssistantChatHost';
chatHost.style.cssText = 'width:0 !important; height:0 !important;';

console.log("Setting innerHTML of chatHost");

// Set innerHTML of the div
chatHost.innerHTML = `

<link rel="stylesheet" type="text/css" href="../css/chatbot_stylesheet.css">
<style>
    @font-face {
        font-family: DataPowered;
        font-weight: 400 800;
        font-display: block;
        src: url('https://datapowered.ai/fonts/inter-var-4-latin.woff2') format("woff2")
    }
</style>

<style>
    /* Button Styling */

.btn {
  position: relative;
  border: none;
  width: 75%;
  padding: 25px;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  color: black;
  cursor: pointer;
  max-width: 90%;
  word-break: break-word;
  animation: .4s cubic-bezier(0,0,.3,1) DPFadeInUp calc(var(--cds-chat-HomeScreenStarter-index)* .12s) both;
  margin-bottom: 12px;
  display: block;
  border-radius: 16px;
  padding-inline-end: 32px;
  background: transparent;
  box-sizing: border-box;
  padding: 5px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 6px 10px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 20px;
}

#DPContainer.DPContainer {
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: visible;
}

#DPContainer.DPContainer a {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer a:after,#DPContainer.DPContainer a:before {
  all: revert;
}

#DPContainer.DPContainer b {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer b:after,#DPContainer.DPContainer b:before {
  all: revert;
}

#DPContainer.DPContainer br {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer br:after,#DPContainer.DPContainer br:before {
  all: revert;
}

#DPContainer.DPContainer button {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer button:after,#DPContainer.DPContainer button:before {
  all: revert;
}

#DPContainer.DPContainer col {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer col:after,#DPContainer.DPContainer col:before {
  all: revert;
}

#DPContainer.DPContainer data {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer data:after,#DPContainer.DPContainer data:before {
  all: revert;
}

#DPContainer.DPContainer div {
  /* all: revert; */
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer div:after,#DPContainer.DPContainer div:before {
  all: revert;
}

#DPContainer.DPContainer form {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer form:after,#DPContainer.DPContainer form:before {
  all: revert;
}

#DPContainer.DPContainer h1 {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer h1:after,#DPContainer.DPContainer h1:before {
  all: revert;
}

#DPContainer.DPContainer h2 {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer h2:after,#DPContainer.DPContainer h2:before {
  all: revert;
}

#DPContainer.DPContainer h3 {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer h3:after,#DPContainer.DPContainer h3:before {
  all: revert;
}

#DPContainer.DPContainer h4 {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer h4:after,#DPContainer.DPContainer h4:before {
  all: revert;
}

#DPContainer.DPContainer h5 {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer h5:after,#DPContainer.DPContainer h5:before {
  all: revert;
}

#DPContainer.DPContainer header {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer header:after,#DPContainer.DPContainer header:before {
  all: revert;
}

#DPContainer.DPContainer i {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer i:after,#DPContainer.DPContainer i:before {
  all: revert;
}

#DPContainer.DPContainer iframe {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer iframe:after,#DPContainer.DPContainer iframe:before {
  all: revert;
}

#DPContainer.DPContainer img {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer img:after,#DPContainer.DPContainer img:before {
  all: revert;
}

#DPContainer.DPContainer input {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer input:after,#DPContainer.DPContainer input:before {
  all: revert;
}

#DPContainer.DPContainer label {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer label:after,#DPContainer.DPContainer label:before {
  all: revert;
}

#DPContainer.DPContainer main {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer main:after,#DPContainer.DPContainer main:before {
  all: revert;
}

#DPContainer.DPContainer menu {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer menu:after,#DPContainer.DPContainer menu:before {
  all: revert;
}

#DPContainer.DPContainer object {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer object:after,#DPContainer.DPContainer object:before {
  all: revert;
}

#DPContainer.DPContainer p {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer p:after,#DPContainer.DPContainer p:before {
  all: revert;
}

#DPContainer.DPContainer rp {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer rp:after,#DPContainer.DPContainer rp:before {
  all: revert;
}

#DPContainer.DPContainer s {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer s:after,#DPContainer.DPContainer s:before {
  all: revert;
}

#DPContainer.DPContainer source {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer source:after,#DPContainer.DPContainer source:before {
  all: revert;
}

#DPContainer.DPContainer span {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer span:after,#DPContainer.DPContainer span:before {
  all: revert;
}

#DPContainer.DPContainer style {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer style:after,#DPContainer.DPContainer style:before {
  all: revert;
}

#DPContainer.DPContainer textarea {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer textarea:after,#DPContainer.DPContainer textarea:before {
  all: revert;
}

#DPContainer.DPContainer time {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer time:after,#DPContainer.DPContainer time:before {
  all: revert;
}

#DPContainer.DPContainer ul {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer ul:after,#DPContainer.DPContainer ul:before {
  all: revert;
}

#DPContainer.DPContainer var {
  all: revert;
  box-sizing: border-box;
  -webkit-mask-box-image-slice: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke-color: initial;
  -webkit-text-emphasis-color: initial;
  text-emphasis-color: initial;
  caret-color: auto;
}

#DPContainer.DPContainer var:after,#DPContainer.DPContainer var:before {
  all: revert;
}

#DPContainer.DPContainer svg:not([class*="cds--"]) {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  background: none auto 0 0 repeat padding-box border-box scroll transparent;
  border-radius: 0;
  border: none;
  border-image: none;
  box-shadow: none;
  box-sizing: border-box;
  inset: auto;
  clear: none;
  clip: auto;
  color: inherit;
  -moz-columns: auto auto;
  columns: auto;
  -moz-column-gap: normal;
  column-gap: normal;
  -moz-column-rule: medium none #000;
  column-rule: medium none #000;
  -moz-column-span: 1;
  column-span: 1;
  counter-increment: none;
  counter-reset: none;
  direction: inherit;
  display: inline;
  float: none;
  font-family: inherit;
  font-feature-settings: normal;
  font-size: inherit;
  font-style: inherit;
  font-variant: normal;
  font-weight: inherit;
  height: auto;
  -webkit-hyphens: manual;
  hyphens: manual;
  letter-spacing: normal;
  line-height: inherit;
  list-style-type: inherit;
  list-style-position: outside;
  list-style-image: none;
  margin: 0;
  max-height: none;
  max-width: none;
  min-height: 0;
  min-width: 0;
  opacity: 1;
  outline: medium none invert;
  overflow: auto;
  overflow: auto auto;
  padding: 0;
  perspective: none;
  perspective-origin: 50% 50%;
  position: static;
  quotes: "" "";
  table-layout: auto;
  text-align: inherit;
  text-decoration: inherit;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  transition: all 0s ease 0s;
  transform: none;
  transform-origin: 50% 50%;
  transform-style: flat;
  unicode-bidi: normal;
  vertical-align: initial;
  visibility: inherit;
  white-space: normal;
  width: auto;
  word-break: normal;
  word-spacing: normal;
  z-index: auto;
}

#DPContainer.DPContainer svg:not([class*="cds--"]):after,#DPContainer.DPContainer svg:not([class*="cds--"]):before {
  all: revert;
}

#DPContainer.DPContainer .cds--g10,#DPContainer.DPContainer .cds--g100,#DPContainer.DPContainer .cds--g90,#DPContainer.DPContainer .cds--white {
  --cds-spacing-01: 2px;
  --cds-spacing-02: 4px;
  --cds-spacing-03: 8px;
  --cds-spacing-04: 12px;
  --cds-spacing-05: 16px;
  --cds-spacing-06: 24px;
  --cds-spacing-07: 32px;
  --cds-spacing-08: 40px;
  --cds-spacing-09: 48px;
  --cds-spacing-10: 64px;
  --cds-spacing-11: 80px;
  --cds-spacing-12: 96px;
  --cds-spacing-13: 160px;
  --cds-fluid-spacing-01: 0;
  --cds-fluid-spacing-02: 2vw;
  --cds-fluid-spacing-03: 5vw;
  --cds-fluid-spacing-04: 10vw;
  --cds-caption-01-font-size: 12px;
  --cds-caption-01-font-weight: 400;
  --cds-caption-01-line-height: 1.33333;
  --cds-caption-01-letter-spacing: 0.32px;
  --cds-caption-02-font-size: 14px;
  --cds-caption-02-font-weight: 400;
  --cds-caption-02-line-height: 1.28572;
  --cds-caption-02-letter-spacing: 0.32px;
  --cds-label-01-font-size: 12px;
  --cds-label-01-font-weight: 400;
  --cds-label-01-line-height: 1.33333;
  --cds-label-01-letter-spacing: 0.32px;
  --cds-label-02-font-size: 14px;
  --cds-label-02-font-weight: 400;
  --cds-label-02-line-height: 1.28572;
  --cds-label-02-letter-spacing: 0.16px;
  --cds-helper-text-01-font-size: 12px;
  --cds-helper-text-01-line-height: 1.33333;
  --cds-helper-text-01-letter-spacing: 0.32px;
  --cds-helper-text-02-font-size: 14px;
  --cds-helper-text-02-font-weight: 400;
  --cds-helper-text-02-line-height: 1.28572;
  --cds-helper-text-02-letter-spacing: 0.16px;
  --cds-body-short-01-font-size: 14px;
  --cds-body-short-01-font-weight: 400;
  --cds-body-short-01-line-height: 1.28572;
  --cds-body-short-01-letter-spacing: 0.16px;
  --cds-body-short-02-font-size: 16px;
  --cds-body-short-02-font-weight: 400;
  --cds-body-short-02-line-height: 1.375;
  --cds-body-short-02-letter-spacing: 0;
  --cds-body-long-01-font-size: 14px;
  --cds-body-long-01-font-weight: 400;
  --cds-body-long-01-line-height: 1.42857;
  --cds-body-long-01-letter-spacing: 0.16px;
  --cds-body-long-02-font-size: 16px;
  --cds-body-long-02-font-weight: 400;
  --cds-body-long-02-line-height: 1.5;
  --cds-body-long-02-letter-spacing: 0;
  --cds-code-01-font-family: system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", monospace;
  --cds-code-01-font-size: 12px;
  --cds-code-01-font-weight: 400;
  --cds-code-01-line-height: 1.33333;
  --cds-code-01-letter-spacing: 0.32px;
  --cds-code-02-font-family: system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", monospace;
  --cds-code-02-font-size: 14px;
  --cds-code-02-font-weight: 400;
  --cds-code-02-line-height: 1.42857;
  --cds-code-02-letter-spacing: 0.32px;
  --cds-heading-01-font-size: 14px;
  --cds-heading-01-font-weight: 600;
  --cds-heading-01-line-height: 1.42857;
  --cds-heading-01-letter-spacing: 0.16px;
  --cds-heading-02-font-size: 16px;
  --cds-heading-02-font-weight: 600;
  --cds-heading-02-line-height: 1.5;
  --cds-heading-02-letter-spacing: 0;
  --cds-productive-heading-01-font-size: 14px;
  --cds-productive-heading-01-font-weight: 600;
  --cds-productive-heading-01-line-height: 1.28572;
  --cds-productive-heading-01-letter-spacing: 0.16px;
  --cds-productive-heading-02-font-size: 16px;
  --cds-productive-heading-02-font-weight: 600;
  --cds-productive-heading-02-line-height: 1.375;
  --cds-productive-heading-02-letter-spacing: 0;
  --cds-productive-heading-03-font-size: 20px;
  --cds-productive-heading-03-font-weight: 400;
  --cds-productive-heading-03-line-height: 1.4;
  --cds-productive-heading-03-letter-spacing: 0;
  --cds-productive-heading-04-font-size: 28px;
  --cds-productive-heading-04-font-weight: 400;
  --cds-productive-heading-04-line-height: 1.28572;
  --cds-productive-heading-04-letter-spacing: 0;
  --cds-productive-heading-05-font-size: 32px;
  --cds-productive-heading-05-font-weight: 400;
  --cds-productive-heading-05-line-height: 1.25;
  --cds-productive-heading-05-letter-spacing: 0;
  --cds-productive-heading-06-font-size: 42px;
  --cds-productive-heading-06-font-weight: 300;
  --cds-productive-heading-06-line-height: 1.199;
  --cds-productive-heading-06-letter-spacing: 0;
  --cds-productive-heading-07-font-size: 54px;
  --cds-productive-heading-07-font-weight: 300;
  --cds-productive-heading-07-line-height: 1.19;
  --cds-productive-heading-07-letter-spacing: 0;
  --cds-expressive-paragraph-01-font-size: 24px;
  --cds-expressive-paragraph-01-font-weight: 300;
  --cds-expressive-paragraph-01-line-height: 1.334;
  --cds-expressive-paragraph-01-letter-spacing: 0;
  --cds-expressive-heading-01-font-size: 14px;
  --cds-expressive-heading-01-font-weight: 600;
  --cds-expressive-heading-01-line-height: 1.42857;
  --cds-expressive-heading-01-letter-spacing: 0.16px;
  --cds-expressive-heading-02-font-size: 16px;
  --cds-expressive-heading-02-font-weight: 600;
  --cds-expressive-heading-02-line-height: 1.5;
  --cds-expressive-heading-02-letter-spacing: 0;
  --cds-expressive-heading-03-font-size: 20px;
  --cds-expressive-heading-03-font-weight: 400;
  --cds-expressive-heading-03-line-height: 1.4;
  --cds-expressive-heading-03-letter-spacing: 0;
  --cds-expressive-heading-04-font-size: 28px;
  --cds-expressive-heading-04-font-weight: 400;
  --cds-expressive-heading-04-line-height: 1.28572;
  --cds-expressive-heading-04-letter-spacing: 0;
  --cds-expressive-heading-05-font-size: 32px;
  --cds-expressive-heading-05-font-weight: 400;
  --cds-expressive-heading-05-line-height: 1.25;
  --cds-expressive-heading-05-letter-spacing: 0;
  --cds-expressive-heading-06-font-size: 32px;
  --cds-expressive-heading-06-font-weight: 600;
  --cds-expressive-heading-06-line-height: 1.25;
  --cds-expressive-heading-06-letter-spacing: 0;
  --cds-quotation-01-font-family: system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", serif;
  --cds-quotation-01-font-size: 20px;
  --cds-quotation-01-font-weight: 400;
  --cds-quotation-01-line-height: 1.3;
  --cds-quotation-01-letter-spacing: 0;
  --cds-quotation-02-font-family: system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", serif;
  --cds-quotation-02-font-size: 32px;
  --cds-quotation-02-font-weight: 300;
  --cds-quotation-02-line-height: 1.25;
  --cds-quotation-02-letter-spacing: 0;
  --cds-display-01-font-size: 42px;
  --cds-display-01-font-weight: 300;
  --cds-display-01-line-height: 1.19;
  --cds-display-01-letter-spacing: 0;
  --cds-display-02-font-size: 42px;
  --cds-display-02-font-weight: 600;
  --cds-display-02-line-height: 1.19;
  --cds-display-02-letter-spacing: 0;
  --cds-display-03-font-size: 42px;
  --cds-display-03-font-weight: 300;
  --cds-display-03-line-height: 1.19;
  --cds-display-03-letter-spacing: 0;
  --cds-display-04-font-size: 42px;
  --cds-display-04-font-weight: 300;
  --cds-display-04-line-height: 1.19;
  --cds-display-04-letter-spacing: 0;
  --cds-legal-01-font-size: 12px;
  --cds-legal-01-font-weight: 400;
  --cds-legal-01-line-height: 1.33333;
  --cds-legal-01-letter-spacing: 0.32px;
  --cds-legal-02-font-size: 14px;
  --cds-legal-02-font-weight: 400;
  --cds-legal-02-line-height: 1.28572;
  --cds-legal-02-letter-spacing: 0.16px;
  --cds-body-compact-01-font-size: 14px;
  --cds-body-compact-01-font-weight: 400;
  --cds-body-compact-01-line-height: 1.28572;
  --cds-body-compact-01-letter-spacing: 0.16px;
  --cds-body-compact-02-font-size: 16px;
  --cds-body-compact-02-font-weight: 400;
  --cds-body-compact-02-line-height: 1.375;
  --cds-body-compact-02-letter-spacing: 0;
  --cds-heading-compact-01-font-size: 14px;
  --cds-heading-compact-01-font-weight: 600;
  --cds-heading-compact-01-line-height: 1.28572;
  --cds-heading-compact-01-letter-spacing: 0.16px;
  --cds-heading-compact-02-font-size: 16px;
  --cds-heading-compact-02-font-weight: 600;
  --cds-heading-compact-02-line-height: 1.375;
  --cds-heading-compact-02-letter-spacing: 0;
  --cds-body-01-font-size: 14px;
  --cds-body-01-font-weight: 400;
  --cds-body-01-line-height: 1.42857;
  --cds-body-01-letter-spacing: 0.16px;
  --cds-body-02-font-size: 16px;
  --cds-body-02-font-weight: 400;
  --cds-body-02-line-height: 1.5;
  --cds-body-02-letter-spacing: 0;
  --cds-heading-03-font-size: 20px;
  --cds-heading-03-font-weight: 400;
  --cds-heading-03-line-height: 1.4;
  --cds-heading-03-letter-spacing: 0;
  --cds-heading-04-font-size: 28px;
  --cds-heading-04-font-weight: 400;
  --cds-heading-04-line-height: 1.28572;
  --cds-heading-04-letter-spacing: 0;
  --cds-heading-05-font-size: 32px;
  --cds-heading-05-font-weight: 400;
  --cds-heading-05-line-height: 1.25;
  --cds-heading-05-letter-spacing: 0;
  --cds-heading-06-font-size: 42px;
  --cds-heading-06-font-weight: 300;
  --cds-heading-06-line-height: 1.199;
  --cds-heading-06-letter-spacing: 0;
  --cds-heading-07-font-size: 54px;
  --cds-heading-07-font-weight: 300;
  --cds-heading-07-line-height: 1.19;
  --cds-heading-07-letter-spacing: 0;
  --cds-fluid-heading-03-font-size: 20px;
  --cds-fluid-heading-03-font-weight: 400;
  --cds-fluid-heading-03-line-height: 1.4;
  --cds-fluid-heading-03-letter-spacing: 0;
  --cds-fluid-heading-04-font-size: 28px;
  --cds-fluid-heading-04-font-weight: 400;
  --cds-fluid-heading-04-line-height: 1.28572;
  --cds-fluid-heading-04-letter-spacing: 0;
  --cds-fluid-heading-05-font-size: 32px;
  --cds-fluid-heading-05-font-weight: 400;
  --cds-fluid-heading-05-line-height: 1.25;
  --cds-fluid-heading-05-letter-spacing: 0;
  --cds-fluid-heading-06-font-size: 32px;
  --cds-fluid-heading-06-font-weight: 600;
  --cds-fluid-heading-06-line-height: 1.25;
  --cds-fluid-heading-06-letter-spacing: 0;
  --cds-fluid-paragraph-01-font-size: 24px;
  --cds-fluid-paragraph-01-font-weight: 300;
  --cds-fluid-paragraph-01-line-height: 1.334;
  --cds-fluid-paragraph-01-letter-spacing: 0;
  --cds-fluid-quotation-01-font-family: system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", serif;
  --cds-fluid-quotation-01-font-size: 20px;
  --cds-fluid-quotation-01-font-weight: 400;
  --cds-fluid-quotation-01-line-height: 1.3;
  --cds-fluid-quotation-01-letter-spacing: 0;
  --cds-fluid-quotation-02-font-family: system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", serif;
  --cds-fluid-quotation-02-font-size: 32px;
  --cds-fluid-quotation-02-font-weight: 300;
  --cds-fluid-quotation-02-line-height: 1.25;
  --cds-fluid-quotation-02-letter-spacing: 0;
  --cds-fluid-display-01-font-size: 42px;
  --cds-fluid-display-01-font-weight: 300;
  --cds-fluid-display-01-line-height: 1.19;
  --cds-fluid-display-01-letter-spacing: 0;
  --cds-fluid-display-02-font-size: 42px;
  --cds-fluid-display-02-font-weight: 600;
  --cds-fluid-display-02-line-height: 1.19;
  --cds-fluid-display-02-letter-spacing: 0;
  --cds-fluid-display-03-font-size: 42px;
  --cds-fluid-display-03-font-weight: 300;
  --cds-fluid-display-03-line-height: 1.19;
  --cds-fluid-display-03-letter-spacing: 0;
  --cds-fluid-display-04-font-size: 42px;
  --cds-fluid-display-04-font-weight: 300;
  --cds-fluid-display-04-line-height: 1.19;
  --cds-fluid-display-04-letter-spacing: 0;
}

#DPContainer.DPContainer .cds--g10,#DPContainer.DPContainer .cds--g100,#DPContainer.DPContainer .cds--g90,#DPContainer.DPContainer .cds--white {
  --cds-chat-BASE-weight-semibold: 600;
  --cds-chat-BASE-font-size-extra-small: 9px;
  --cds-chat-BASE-font-size-small: 12px;
  --cds-chat-BASE-font-size-med: 14px;
  --cds-chat-BASE-font-size-large: 16px;
  --cds-chat-BASE-font-size-xlarge: 20px;
  --cds-chat-BASE-font-size-xxlarge: 28px;
  --cds-chat-BASE-line-height-extra-small: 14px;
  --cds-chat-BASE-line-height-small: 16px;
  --cds-chat-BASE-line-height-med: 18px;
  --cds-chat-BASE-line-height-large: 20px;
  --cds-chat-BASE-line-height-xlarge: 26px;
  --cds-chat-BASE-line-height-xxlarge: 36px;
  --cds-chat-BASE-border-radius-xsmall: 2px;
  --cds-chat-BASE-border-radius-small: 4px;
  --cds-chat-BASE-border-radius-med: 8px;
  --cds-chat-BASE-border-radius-large: 12px;
  --cds-chat-BASE-border-radius-xlarge: 16px;
  --cds-chat-BASE-border-width-small: 1px;
  --cds-chat-BASE-border-width-med: 2px;
  --cds-chat-BASE-border-width-large: 3px;
  --cds-chat-WIDGET-border-radius: 8px;
  --cds-chat-BASE-max-height: 640px;
  --cds-chat-BASE-min-height: max(150px, calc(min(256px, 100vh) - var(--cds-chat-BASE-bottom-position)));
  --cds-chat-BASE-max-width: calc(100vw - var(--cds-chat-BASE-right-position) * 2);
  --cds-chat-BASE-bottom-position: 32px;
  --cds-chat-BASE-right-position: 32px;
  --cds-chat-BASE-top-position: auto;
  --cds-chat-BASE-left-position: auto;
  --cds-chat-LAUNCHER-default-size: 56px;
  --cds-chat-LAUNCHER-position-bottom: 32px;
  --cds-chat-LAUNCHER-position-right: 32px;
  --cds-chat-BASE-z-index: 99999;
  --cds-chat-BASE-width: min(380px, var(--cds-chat-BASE-max-width));
  --cds-chat-BASE-height: calc(100vh - 64px);
  --cds-chat-UNREAD-INDICATOR-color-background: #da1e28;
  --cds-chat-UNREAD-INDICATOR-color-text: #fff;
  --cds-chat-BASE-font-family: "Helvetica Neue", arial, sans-serif;
  --cds-chat-BASE-header-font-family: "Helvetica Neue", arial, sans-serif;
  --cds-chat-HOME_SCREEN-greeting-font-family: "Helvetica Neue", arial, sans-serif;
  --cds-chat-PRIMARY-color: var(--cds-chat-header-background, #fff);
  --cds-chat-PRIMARY-color-text: var(--cds-text-primary, #161616);
  --cds-chat-PRIMARY-color-hover: var(--cds-background-hover);
  --cds-chat-PRIMARY-color-active: var(--cds-background-active);
  --cds-chat-PRIMARY-color-focus: var(--cds-focus);
  --cds-chat-SECONDARY-color: var(--cds-chat-bubble-user);
  --cds-chat-SECONDARY-color-text: var(--cds-text-secondary);
  --cds-chat-ACCENT-color: var(--cds-background-brand);
  --cds-chat-ACCENT-color-hover: var(--cds-button-tertiary-hover, #0050e6);
  --cds-chat-ACCENT-color-active: var(--cds-button-tertiary-active, #002d9c);
  --cds-chat-ACCENT-color-r: 15;
  --cds-chat-ACCENT-color-g: 98;
  --cds-chat-ACCENT-color-b: 254;
  --cds-chat-ACCENT-color-ghost-text: var(--cds-link-primary);
  --cds-chat-ACCENT-color-text: var(--cds-text-on-color);
  --cds-chat-ACCENT-color-bw: #fff;
  --cds-chat-ACCENT-color-bw-hover: #e0e0e0;
  --cds-chat-ACCENT-color-bw-active: #c6c6c6;
  --cds-chat-ACCENT-color-bw-inverse: #161616;
  --cds-chat-ACCENT-color-bw-gray: #f4f4f4;
  --cds-chat-LAUNCHER-color-background: var(--cds-chat-ACCENT-color);
  --cds-chat-LAUNCHER-color-avatar: var(--cds-chat-ACCENT-color-text);
  --cds-chat-LAUNCHER-color-background-hover: var(--cds-button-primary-hover, #0050e6);
  --cds-chat-LAUNCHER-color-background-active: var(--cds-button-primary-active, #002d9c);
  --cds-chat-LAUNCHER-color-focus-border: var(--cds-chat-ACCENT-color-text);
  --cds-chat-LAUNCHER-MOBILE-color-text: var(--cds-chat-ACCENT-color-text);
  --cds-chat-LAUNCHER-EXPANDED-MESSAGE-color-background: var(--cds-chat-ACCENT-color);
  --cds-chat-LAUNCHER-EXPANDED-MESSAGE-color-text: var(--cds-chat-ACCENT-color-text);
  --cds-chat-LAUNCHER-EXPANDED-MESSAGE-color-background-hover: var(--cds-button-primary-hover, #0050e6);
  --cds-chat-LAUNCHER-EXPANDED-MESSAGE-color-background-active: var(--cds-button-primary-active, #002d9c);
  --cds-chat-LAUNCHER-EXPANDED-MESSAGE-color-focus-border: var(--cds-chat-ACCENT-color-text);
  --cds-chat-BRANDING-color-text-01: var(--cds-text-primary);
  --cds-chat-BRANDING-color-text-02: var(--cds-text-secondary);
  --cds-chat-BRANDING-background: var(--cds-layer-01);
  --cds-chat-BRANDING-link: var(--cds-link-primary);
  --cds-chat-BRANDING-border-color: var(--cds-layer-02);
  --cds-chat-BRANDING-font-family: "Helvetica Neue", arial, sans-serif;
  --cds-chat-CONTAINER-border-radius: 0px;
}

#DPContainer.DPContainer .DPWidget--rounded {
  --cds-chat-CONTAINER-border-radius: 8px;
}

#DPContainer.DPContainer .cds--g10,#DPContainer.DPContainer .cds--white {
  --cds-chat-TILE-background: #fff;
}

#DPContainer.DPContainer .cds--g100,#DPContainer.DPContainer .cds--g90 {
  --cds-chat-TILE-background: #292929;
}

#DPContainer.DPContainer a,#DPContainer.DPContainer b,#DPContainer.DPContainer body,#DPContainer.DPContainer center,#DPContainer.DPContainer div,#DPContainer.DPContainer form,#DPContainer.DPContainer h1,#DPContainer.DPContainer h2,#DPContainer.DPContainer h3,#DPContainer.DPContainer h4,#DPContainer.DPContainer h5,#DPContainer.DPContainer h6,#DPContainer.DPContainer header,#DPContainer.DPContainer html,#DPContainer.DPContainer i,#DPContainer.DPContainer iframe,#DPContainer.DPContainer img,#DPContainer.DPContainer label,#DPContainer.DPContainer menu,#DPContainer.DPContainer object,#DPContainer.DPContainer p,#DPContainer.DPContainer s,#DPContainer.DPContainer span,#DPContainer.DPContainer time,#DPContainer.DPContainer ul,#DPContainer.DPContainer var {
  padding: 0;
  border: 0;
  margin: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: initial;
}

#DPContainer.DPContainer button,#DPContainer.DPContainer input,#DPContainer.DPContainer textarea {
  border-radius: 0;
  font-family: inherit;
}

#DPContainer.DPContainer header,#DPContainer.DPContainer menu {
  display: block;
}

#DPContainer.DPContainer body {
  background-color: var(--cds-background, #fff);
  color: var(--cds-text-primary, #161616);
  line-height: 1;
}

#DPContainer.DPContainer ul {
  list-style: none;
}

#DPContainer.DPContainer html {
  box-sizing: border-box;
}

#DPContainer.DPContainer *,#DPContainer.DPContainer :after,#DPContainer.DPContainer :before {
  box-sizing: inherit;
}

#DPContainer.DPContainer html {
  font-size: 100%;
}

#DPContainer.DPContainer body {
  font-weight: 400;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, \.SFNSText-Regular, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

@media screen and (-ms-high-contrast: active) {
  #DPContainer.DPContainer svg {
    fill: ButtonText;
  }
}

#DPContainer.DPContainer h1 {
  font-size: var(--cds-heading-06-font-size, 42px);
  font-weight: var(--cds-heading-06-font-weight, 300);
  line-height: var(--cds-heading-06-line-height, 1.199);
  letter-spacing: var(--cds-heading-06-letter-spacing, 0);
}

#DPContainer.DPContainer h2 {
  font-size: var(--cds-heading-05-font-size, 32px);
  font-weight: var(--cds-heading-05-font-weight, 400);
  line-height: var(--cds-heading-05-line-height, 1.25);
  letter-spacing: var(--cds-heading-05-letter-spacing, 0);
}

#DPContainer.DPContainer h3 {
  font-size: var(--cds-heading-04-font-size, 28px);
  font-weight: var(--cds-heading-04-font-weight, 400);
  line-height: var(--cds-heading-04-line-height, 1.28572);
  letter-spacing: var(--cds-heading-04-letter-spacing, 0);
}

#DPContainer.DPContainer h4 {
  font-size: var(--cds-heading-03-font-size, 20px);
  font-weight: var(--cds-heading-03-font-weight, 400);
  line-height: var(--cds-heading-03-line-height, 1.4);
  letter-spacing: var(--cds-heading-03-letter-spacing, 0);
}

#DPContainer.DPContainer h5 {
  font-size: var(--cds-heading-02-font-size, 16px);
  font-weight: var(--cds-heading-02-font-weight, 600);
  line-height: var(--cds-heading-02-line-height, 1.5);
  letter-spacing: var(--cds-heading-02-letter-spacing, 0);
}

#DPContainer.DPContainer h6 {
  font-size: var(--cds-heading-01-font-size, 14px);
  font-weight: var(--cds-heading-01-font-weight, 600);
  line-height: var(--cds-heading-01-line-height, 1.42857);
  letter-spacing: var(--cds-heading-01-letter-spacing, 0.16px);
}

#DPContainer.DPContainer p {
  font-size: var(--cds-body-02-font-size, 16px);
  font-weight: var(--cds-body-02-font-weight, 400);
  line-height: var(--cds-body-02-line-height, 1.5);
  letter-spacing: var(--cds-body-02-letter-spacing, 0);
}

#DPContainer.DPContainer a {
  color: var(--cds-link-primary, #0062fe);
}

#DPContainer.DPContainer {
  --cds-grid-gutter: 32px;
  --cds-grid-columns: 4;
  --cds-grid-margin: 0;
}

@media (min-width: 672px) {
  #DPContainer.DPContainer {
    --cds-grid-columns: 8;
    --cds-grid-margin: 16px;
  }
}

@media (min-width: 1056px) {
  #DPContainer.DPContainer {
    --cds-grid-columns: 16;
  }
}

@media (min-width: 1584px) {
  #DPContainer.DPContainer {
    --cds-grid-margin: 24px;
  }
}

#DPContainer.DPContainer .cds--col-span-0 {
  display: none;
}

#DPContainer.DPContainer .cds--col-span-1 {
  --cds-grid-columns: 1;
  display: block;
  grid-column: span 1 / span 1;
}

#DPContainer.DPContainer .cds--col-span-2 {
  --cds-grid-columns: 2;
  display: block;
  grid-column: span 2 / span 2;
}

#DPContainer.DPContainer .cds--col-span-3 {
  --cds-grid-columns: 3;
  display: block;
  grid-column: span 3 / span 3;
}

#DPContainer.DPContainer .cds--col-span-4 {
  --cds-grid-columns: 4;
  display: block;
  grid-column: span 4 / span 4;
}

#DPContainer.DPContainer .cds--col-span-5 {
  --cds-grid-columns: 5;
  display: block;
  grid-column: span 5 / span 5;
}

#DPContainer.DPContainer .cds--col-span-6 {
  --cds-grid-columns: 6;
  display: block;
  grid-column: span 6 / span 6;
}

#DPContainer.DPContainer .cds--col-span-7 {
  --cds-grid-columns: 7;
  display: block;
  grid-column: span 7 / span 7;
}

#DPContainer.DPContainer .cds--col-span-8 {
  --cds-grid-columns: 8;
  display: block;
  grid-column: span 8 / span 8;
}

#DPContainer.DPContainer .cds--col-span-9 {
  --cds-grid-columns: 9;
  display: block;
  grid-column: span 9 / span 9;
}

#DPContainer.DPContainer .cds--col-span-10 {
  --cds-grid-columns: 10;
  display: block;
  grid-column: span 10 / span 10;
}

#DPContainer.DPContainer .cds--col-span-11 {
  --cds-grid-columns: 11;
  display: block;
  grid-column: span 11 / span 11;
}

#DPContainer.DPContainer .cds--col-span-12 {
  --cds-grid-columns: 12;
  display: block;
  grid-column: span 12 / span 12;
}

#DPContainer.DPContainer .cds--col-span-13 {
  --cds-grid-columns: 13;
  display: block;
  grid-column: span 13 / span 13;
}

#DPContainer.DPContainer .cds--col-span-14 {
  --cds-grid-columns: 14;
  display: block;
  grid-column: span 14 / span 14;
}

#DPContainer.DPContainer .cds--col-span-15 {
  --cds-grid-columns: 15;
  display: block;
  grid-column: span 15 / span 15;
}

#DPContainer.DPContainer .cds--col-span-16 {
  --cds-grid-columns: 16;
  display: block;
  grid-column: span 16 / span 16;
}

#DPContainer.DPContainer .cds--sm\:col-span-0 {
  display: none;
}

#DPContainer.DPContainer .cds--sm\:col-span-1 {
  --cds-grid-columns: 1;
  display: block;
  grid-column: span 1 / span 1;
}

#DPContainer.DPContainer .cds--sm\:col-span-2 {
  --cds-grid-columns: 2;
  display: block;
  grid-column: span 2 / span 2;
}

#DPContainer.DPContainer .cds--sm\:col-span-3 {
  --cds-grid-columns: 3;
  display: block;
  grid-column: span 3 / span 3;
}

#DPContainer.DPContainer .cds--sm\:col-span-4 {
  --cds-grid-columns: 4;
  display: block;
  grid-column: span 4 / span 4;
}

#DPContainer.DPContainer .cds--sm\:col-span-auto {
  grid-column: auto;
}

#DPContainer.DPContainer .cds--sm\:col-span-100 {
  grid-column: 1/-1;
}

#DPContainer.DPContainer .cds--sm\:col-span-75 {
  --cds-grid-columns: 3;
  grid-column: span 3 / span 3;
}

#DPContainer.DPContainer .cds--sm\:col-span-50 {
  --cds-grid-columns: 2;
  grid-column: span 2 / span 2;
}

#DPContainer.DPContainer .cds--sm\:col-span-25 {
  --cds-grid-columns: 1;
  grid-column: span 1 / span 1;
}

@media (min-width: 672px) {
  #DPContainer.DPContainer .cds--md\:col-span-0 {
    display: none;
  }

  #DPContainer.DPContainer .cds--md\:col-span-1 {
    --cds-grid-columns: 1;
    display: block;
    grid-column: span 1 / span 1;
  }

  #DPContainer.DPContainer .cds--md\:col-span-2 {
    --cds-grid-columns: 2;
    display: block;
    grid-column: span 2 / span 2;
  }

  #DPContainer.DPContainer .cds--md\:col-span-3 {
    --cds-grid-columns: 3;
    display: block;
    grid-column: span 3 / span 3;
  }

  #DPContainer.DPContainer .cds--md\:col-span-4 {
    --cds-grid-columns: 4;
    display: block;
    grid-column: span 4 / span 4;
  }

  #DPContainer.DPContainer .cds--md\:col-span-5 {
    --cds-grid-columns: 5;
    display: block;
    grid-column: span 5 / span 5;
  }

  #DPContainer.DPContainer .cds--md\:col-span-6 {
    --cds-grid-columns: 6;
    display: block;
    grid-column: span 6 / span 6;
  }

  #DPContainer.DPContainer .cds--md\:col-span-7 {
    --cds-grid-columns: 7;
    display: block;
    grid-column: span 7 / span 7;
  }

  #DPContainer.DPContainer .cds--md\:col-span-8 {
    --cds-grid-columns: 8;
    display: block;
    grid-column: span 8 / span 8;
  }

  #DPContainer.DPContainer .cds--md\:col-span-auto {
    grid-column: auto;
  }

  #DPContainer.DPContainer .cds--md\:col-span-100 {
    grid-column: 1/-1;
  }

  #DPContainer.DPContainer .cds--md\:col-span-75 {
    --cds-grid-columns: 6;
    grid-column: span 6 / span 6;
  }

  #DPContainer.DPContainer .cds--md\:col-span-50 {
    --cds-grid-columns: 4;
    grid-column: span 4 / span 4;
  }

  #DPContainer.DPContainer .cds--md\:col-span-25 {
    --cds-grid-columns: 2;
    grid-column: span 2 / span 2;
  }
}

@media (min-width: 1584px) {
  #DPContainer.DPContainer .cds--max\:col-span-0 {
    display: none;
  }

  #DPContainer.DPContainer .cds--max\:col-span-1 {
    --cds-grid-columns: 1;
    display: block;
    grid-column: span 1 / span 1;
  }

  #DPContainer.DPContainer .cds--max\:col-span-2 {
    --cds-grid-columns: 2;
    display: block;
    grid-column: span 2 / span 2;
  }

  #DPContainer.DPContainer .cds--max\:col-span-3 {
    --cds-grid-columns: 3;
    display: block;
    grid-column: span 3 / span 3;
  }

  #DPContainer.DPContainer .cds--max\:col-span-4 {
    --cds-grid-columns: 4;
    display: block;
    grid-column: span 4 / span 4;
  }

  #DPContainer.DPContainer .cds--max\:col-span-5 {
    --cds-grid-columns: 5;
    display: block;
    grid-column: span 5 / span 5;
  }

  #DPContainer.DPContainer .cds--max\:col-span-6 {
    --cds-grid-columns: 6;
    display: block;
    grid-column: span 6 / span 6;
  }

  #DPContainer.DPContainer .cds--max\:col-span-7 {
    --cds-grid-columns: 7;
    display: block;
    grid-column: span 7 / span 7;
  }

  #DPContainer.DPContainer .cds--max\:col-span-8 {
    --cds-grid-columns: 8;
    display: block;
    grid-column: span 8 / span 8;
  }

  #DPContainer.DPContainer .cds--max\:col-span-9 {
    --cds-grid-columns: 9;
    display: block;
    grid-column: span 9 / span 9;
  }

  #DPContainer.DPContainer .cds--max\:col-span-10 {
    --cds-grid-columns: 10;
    display: block;
    grid-column: span 10 / span 10;
  }

  #DPContainer.DPContainer .cds--max\:col-span-11 {
    --cds-grid-columns: 11;
    display: block;
    grid-column: span 11 / span 11;
  }

  #DPContainer.DPContainer .cds--max\:col-span-12 {
    --cds-grid-columns: 12;
    display: block;
    grid-column: span 12 / span 12;
  }

  #DPContainer.DPContainer .cds--max\:col-span-13 {
    --cds-grid-columns: 13;
    display: block;
    grid-column: span 13 / span 13;
  }

  #DPContainer.DPContainer .cds--max\:col-span-14 {
    --cds-grid-columns: 14;
    display: block;
    grid-column: span 14 / span 14;
  }

  #DPContainer.DPContainer .cds--max\:col-span-15 {
    --cds-grid-columns: 15;
    display: block;
    grid-column: span 15 / span 15;
  }

  #DPContainer.DPContainer .cds--max\:col-span-16 {
    --cds-grid-columns: 16;
    display: block;
    grid-column: span 16 / span 16;
  }

  #DPContainer.DPContainer .cds--max\:col-span-auto {
    grid-column: auto;
  }

  #DPContainer.DPContainer .cds--max\:col-span-100 {
    grid-column: 1/-1;
  }

  #DPContainer.DPContainer .cds--max\:col-span-75 {
    --cds-grid-columns: 12;
    grid-column: span 12 / span 12;
  }

  #DPContainer.DPContainer .cds--max\:col-span-50 {
    --cds-grid-columns: 8;
    grid-column: span 8 / span 8;
  }

  #DPContainer.DPContainer .cds--max\:col-span-25 {
    --cds-grid-columns: 4;
    grid-column: span 4 / span 4;
  }
}

#DPContainer.DPContainer .cds--col-span-auto {
  grid-column: auto;
}

#DPContainer.DPContainer .cds--col-span-100 {
  grid-column: 1/-1;
}

#DPContainer.DPContainer .cds--col-span-75 {
  --cds-grid-columns: 3;
  grid-column: span 3 / span 3;
}

@media (min-width: 672px) {
  #DPContainer.DPContainer .cds--col-span-75 {
    --cds-grid-columns: 6;
    grid-column: span 6 / span 6;
  }
}

@media (min-width: 1056px) {
  #DPContainer.DPContainer .cds--col-span-75 {
    --cds-grid-columns: 12;
    grid-column: span 12 / span 12;
  }
}

#DPContainer.DPContainer .cds--col-span-50 {
  --cds-grid-columns: 2;
  grid-column: span 2 / span 2;
}

@media (min-width: 672px) {
  #DPContainer.DPContainer .cds--col-span-50 {
    --cds-grid-columns: 4;
    grid-column: span 4 / span 4;
  }
}

@media (min-width: 1056px) {
  #DPContainer.DPContainer .cds--col-span-50 {
    --cds-grid-columns: 8;
    grid-column: span 8 / span 8;
  }
}

#DPContainer.DPContainer .cds--col-span-25 {
  --cds-grid-columns: 1;
  grid-column: span 1 / span 1;
}

@media (min-width: 672px) {
  #DPContainer.DPContainer .cds--col-span-25 {
    --cds-grid-columns: 2;
    grid-column: span 2 / span 2;
  }
}

@media (min-width: 1056px) {
  #DPContainer.DPContainer .cds--col-span-25 {
    --cds-grid-columns: 4;
    grid-column: span 4 / span 4;
  }
}

#DPContainer.DPContainer .cds--col-start-1 {
  grid-column-start: 1;
}

#DPContainer.DPContainer .cds--col-start-2 {
  grid-column-start: 2;
}

#DPContainer.DPContainer .cds--col-start-3 {
  grid-column-start: 3;
}

#DPContainer.DPContainer .cds--col-start-4 {
  grid-column-start: 4;
}

#DPContainer.DPContainer .cds--col-start-5 {
  grid-column-start: 5;
}

#DPContainer.DPContainer .cds--col-start-6 {
  grid-column-start: 6;
}

#DPContainer.DPContainer .cds--col-start-7 {
  grid-column-start: 7;
}

#DPContainer.DPContainer .cds--col-start-8 {
  grid-column-start: 8;
}

#DPContainer.DPContainer .cds--col-start-9 {
  grid-column-start: 9;
}

#DPContainer.DPContainer .cds--col-start-10 {
  grid-column-start: 10;
}

#DPContainer.DPContainer .cds--col-start-11 {
  grid-column-start: 11;
}

#DPContainer.DPContainer .cds--col-start-12 {
  grid-column-start: 12;
}

#DPContainer.DPContainer .cds--col-start-13 {
  grid-column-start: 13;
}

#DPContainer.DPContainer .cds--col-start-14 {
  grid-column-start: 14;
}

#DPContainer.DPContainer .cds--col-start-15 {
  grid-column-start: 15;
}

#DPContainer.DPContainer .cds--col-start-16 {
  grid-column-start: 16;
}

#DPContainer.DPContainer .cds--col-end-2 {
  grid-column-end: 2;
}

#DPContainer.DPContainer .cds--col-end-3 {
  grid-column-end: 3;
}

#DPContainer.DPContainer .cds--col-end-4 {
  grid-column-end: 4;
}

#DPContainer.DPContainer .cds--col-end-5 {
  grid-column-end: 5;
}

#DPContainer.DPContainer .cds--col-end-6 {
  grid-column-end: 6;
}

#DPContainer.DPContainer .cds--col-end-7 {
  grid-column-end: 7;
}

#DPContainer.DPContainer .cds--col-end-8 {
  grid-column-end: 8;
}

#DPContainer.DPContainer .cds--col-end-9 {
  grid-column-end: 9;
}

#DPContainer.DPContainer .cds--col-end-10 {
  grid-column-end: 10;
}

#DPContainer.DPContainer .cds--col-end-11 {
  grid-column-end: 11;
}

#DPContainer.DPContainer .cds--col-end-12 {
  grid-column-end: 12;
}

#DPContainer.DPContainer .cds--col-end-13 {
  grid-column-end: 13;
}

#DPContainer.DPContainer .cds--col-end-14 {
  grid-column-end: 14;
}

#DPContainer.DPContainer .cds--col-end-15 {
  grid-column-end: 15;
}

#DPContainer.DPContainer .cds--col-end-16 {
  grid-column-end: 16;
}

#DPContainer.DPContainer .cds--col-end-17 {
  grid-column-end: 17;
}

#DPContainer.DPContainer .cds--col-start-auto {
  grid-column-start: auto;
}

#DPContainer.DPContainer .cds--col-end-auto {
  grid-column-end: auto;
}

#DPContainer.DPContainer .cds--sm\:col-start-1 {
  grid-column-start: 1;
}

#DPContainer.DPContainer .cds--sm\:col-start-2 {
  grid-column-start: 2;
}

#DPContainer.DPContainer .cds--sm\:col-start-3 {
  grid-column-start: 3;
}

#DPContainer.DPContainer .cds--sm\:col-start-4 {
  grid-column-start: 4;
}

#DPContainer.DPContainer .cds--sm\:col-start-5 {
  grid-column-start: 5;
}

#DPContainer.DPContainer .cds--sm\:col-start-6 {
  grid-column-start: 6;
}

#DPContainer.DPContainer .cds--sm\:col-start-7 {
  grid-column-start: 7;
}

#DPContainer.DPContainer .cds--sm\:col-start-8 {
  grid-column-start: 8;
}

#DPContainer.DPContainer .cds--sm\:col-start-9 {
  grid-column-start: 9;
}

#DPContainer.DPContainer .cds--sm\:col-start-10 {
  grid-column-start: 10;
}

#DPContainer.DPContainer .cds--sm\:col-start-11 {
  grid-column-start: 11;
}

#DPContainer.DPContainer .cds--sm\:col-start-12 {
  grid-column-start: 12;
}

#DPContainer.DPContainer .cds--sm\:col-start-13 {
  grid-column-start: 13;
}

#DPContainer.DPContainer .cds--sm\:col-start-14 {
  grid-column-start: 14;
}

#DPContainer.DPContainer .cds--sm\:col-start-15 {
  grid-column-start: 15;
}

#DPContainer.DPContainer .cds--sm\:col-start-16 {
  grid-column-start: 16;
}

#DPContainer.DPContainer .cds--sm\:col-end-2 {
  grid-column-end: 2;
}

#DPContainer.DPContainer .cds--sm\:col-end-3 {
  grid-column-end: 3;
}

#DPContainer.DPContainer .cds--sm\:col-end-4 {
  grid-column-end: 4;
}

#DPContainer.DPContainer .cds--sm\:col-end-5 {
  grid-column-end: 5;
}

#DPContainer.DPContainer .cds--sm\:col-end-6 {
  grid-column-end: 6;
}

#DPContainer.DPContainer .cds--sm\:col-end-7 {
  grid-column-end: 7;
}

#DPContainer.DPContainer .cds--sm\:col-end-8 {
  grid-column-end: 8;
}

#DPContainer.DPContainer .cds--sm\:col-end-9 {
  grid-column-end: 9;
}

#DPContainer.DPContainer .cds--sm\:col-end-10 {
  grid-column-end: 10;
}

#DPContainer.DPContainer .cds--sm\:col-end-11 {
  grid-column-end: 11;
}

#DPContainer.DPContainer .cds--sm\:col-end-12 {
  grid-column-end: 12;
}

#DPContainer.DPContainer .cds--sm\:col-end-13 {
  grid-column-end: 13;
}

#DPContainer.DPContainer .cds--sm\:col-end-14 {
  grid-column-end: 14;
}

#DPContainer.DPContainer .cds--sm\:col-end-15 {
  grid-column-end: 15;
}

#DPContainer.DPContainer .cds--sm\:col-end-16 {
  grid-column-end: 16;
}

#DPContainer.DPContainer .cds--sm\:col-end-17 {
  grid-column-end: 17;
}

#DPContainer.DPContainer .cds--sm\:col-start-auto {
  grid-column-start: auto;
}

#DPContainer.DPContainer .cds--sm\:col-end-auto {
  grid-column-end: auto;
}

@media (min-width: 672px) {
  #DPContainer.DPContainer .cds--md\:col-start-1 {
    grid-column-start: 1;
  }

  #DPContainer.DPContainer .cds--md\:col-start-2 {
    grid-column-start: 2;
  }

  #DPContainer.DPContainer .cds--md\:col-start-3 {
    grid-column-start: 3;
  }

  #DPContainer.DPContainer .cds--md\:col-start-4 {
    grid-column-start: 4;
  }

  #DPContainer.DPContainer .cds--md\:col-start-5 {
    grid-column-start: 5;
  }

  #DPContainer.DPContainer .cds--md\:col-start-6 {
    grid-column-start: 6;
  }

  #DPContainer.DPContainer .cds--md\:col-start-7 {
    grid-column-start: 7;
  }

  #DPContainer.DPContainer .cds--md\:col-start-8 {
    grid-column-start: 8;
  }

  #DPContainer.DPContainer .cds--md\:col-start-9 {
    grid-column-start: 9;
  }

  #DPContainer.DPContainer .cds--md\:col-start-10 {
    grid-column-start: 10;
  }

  #DPContainer.DPContainer .cds--md\:col-start-11 {
    grid-column-start: 11;
  }

  #DPContainer.DPContainer .cds--md\:col-start-12 {
    grid-column-start: 12;
  }

  #DPContainer.DPContainer .cds--md\:col-start-13 {
    grid-column-start: 13;
  }

  #DPContainer.DPContainer .cds--md\:col-start-14 {
    grid-column-start: 14;
  }

  #DPContainer.DPContainer .cds--md\:col-start-15 {
    grid-column-start: 15;
  }

  #DPContainer.DPContainer .cds--md\:col-start-16 {
    grid-column-start: 16;
  }

  #DPContainer.DPContainer .cds--md\:col-end-2 {
    grid-column-end: 2;
  }

  #DPContainer.DPContainer .cds--md\:col-end-3 {
    grid-column-end: 3;
  }

  #DPContainer.DPContainer .cds--md\:col-end-4 {
    grid-column-end: 4;
  }

  #DPContainer.DPContainer .cds--md\:col-end-5 {
    grid-column-end: 5;
  }

  #DPContainer.DPContainer .cds--md\:col-end-6 {
    grid-column-end: 6;
  }

  #DPContainer.DPContainer .cds--md\:col-end-7 {
    grid-column-end: 7;
  }

  #DPContainer.DPContainer .cds--md\:col-end-8 {
    grid-column-end: 8;
  }

  #DPContainer.DPContainer .cds--md\:col-end-9 {
    grid-column-end: 9;
  }

  #DPContainer.DPContainer .cds--md\:col-end-10 {
    grid-column-end: 10;
  }

  #DPContainer.DPContainer .cds--md\:col-end-11 {
    grid-column-end: 11;
  }

  #DPContainer.DPContainer .cds--md\:col-end-12 {
    grid-column-end: 12;
  }

  #DPContainer.DPContainer .cds--md\:col-end-13 {
    grid-column-end: 13;
  }

  #DPContainer.DPContainer .cds--md\:col-end-14 {
    grid-column-end: 14;
  }

  #DPContainer.DPContainer .cds--md\:col-end-15 {
    grid-column-end: 15;
  }

  #DPContainer.DPContainer .cds--md\:col-end-16 {
    grid-column-end: 16;
  }

  #DPContainer.DPContainer .cds--md\:col-end-17 {
    grid-column-end: 17;
  }

  #DPContainer.DPContainer .cds--md\:col-start-auto {
    grid-column-start: auto;
  }

  #DPContainer.DPContainer .cds--md\:col-end-auto {
    grid-column-end: auto;
  }
}

@media (min-width: 1584px) {
  #DPContainer.DPContainer .cds--max\:col-start-1 {
    grid-column-start: 1;
  }

  #DPContainer.DPContainer .cds--max\:col-start-2 {
    grid-column-start: 2;
  }

  #DPContainer.DPContainer .cds--max\:col-start-3 {
    grid-column-start: 3;
  }

  #DPContainer.DPContainer .cds--max\:col-start-4 {
    grid-column-start: 4;
  }

  #DPContainer.DPContainer .cds--max\:col-start-5 {
    grid-column-start: 5;
  }

  #DPContainer.DPContainer .cds--max\:col-start-6 {
    grid-column-start: 6;
  }

  #DPContainer.DPContainer .cds--max\:col-start-7 {
    grid-column-start: 7;
  }

  #DPContainer.DPContainer .cds--max\:col-start-8 {
    grid-column-start: 8;
  }

  #DPContainer.DPContainer .cds--max\:col-start-9 {
    grid-column-start: 9;
  }

  #DPContainer.DPContainer .cds--max\:col-start-10 {
    grid-column-start: 10;
  }

  #DPContainer.DPContainer .cds--max\:col-start-11 {
    grid-column-start: 11;
  }

  #DPContainer.DPContainer .cds--max\:col-start-12 {
    grid-column-start: 12;
  }

  #DPContainer.DPContainer .cds--max\:col-start-13 {
    grid-column-start: 13;
  }

  #DPContainer.DPContainer .cds--max\:col-start-14 {
    grid-column-start: 14;
  }

  #DPContainer.DPContainer .cds--max\:col-start-15 {
    grid-column-start: 15;
  }

  #DPContainer.DPContainer .cds--max\:col-start-16 {
    grid-column-start: 16;
  }

  #DPContainer.DPContainer .cds--max\:col-end-2 {
    grid-column-end: 2;
  }

  #DPContainer.DPContainer .cds--max\:col-end-3 {
    grid-column-end: 3;
  }

  #DPContainer.DPContainer .cds--max\:col-end-4 {
    grid-column-end: 4;
  }

  #DPContainer.DPContainer .cds--max\:col-end-5 {
    grid-column-end: 5;
  }

  #DPContainer.DPContainer .cds--max\:col-end-6 {
    grid-column-end: 6;
  }

  #DPContainer.DPContainer .cds--max\:col-end-7 {
    grid-column-end: 7;
  }

  #DPContainer.DPContainer .cds--max\:col-end-8 {
    grid-column-end: 8;
  }

  #DPContainer.DPContainer .cds--max\:col-end-9 {
    grid-column-end: 9;
  }

  #DPContainer.DPContainer .cds--max\:col-end-10 {
    grid-column-end: 10;
  }

  #DPContainer.DPContainer .cds--max\:col-end-11 {
    grid-column-end: 11;
  }

  #DPContainer.DPContainer .cds--max\:col-end-12 {
    grid-column-end: 12;
  }

  #DPContainer.DPContainer .cds--max\:col-end-13 {
    grid-column-end: 13;
  }

  #DPContainer.DPContainer .cds--max\:col-end-14 {
    grid-column-end: 14;
  }

  #DPContainer.DPContainer .cds--max\:col-end-15 {
    grid-column-end: 15;
  }

  #DPContainer.DPContainer .cds--max\:col-end-16 {
    grid-column-end: 16;
  }

  #DPContainer.DPContainer .cds--max\:col-end-17 {
    grid-column-end: 17;
  }

  #DPContainer.DPContainer .cds--max\:col-start-auto {
    grid-column-start: auto;
  }

  #DPContainer.DPContainer .cds--max\:col-end-auto {
    grid-column-end: auto;
  }
}

#DPContainer.DPContainer {
  --cds-layer: var(--cds-layer-01, #f4f4f4);
  --cds-layer-active: var(--cds-layer-active-01, #c6c6c6);
  --cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);
  --cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);
  --cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);
  --cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);
  --cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);
  --cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);
  --cds-field: var(--cds-field-01, #f4f4f4);
  --cds-field-hover: var(--cds-field-hover-01, #e8e8e8);
  --cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);
  --cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);
  --cds-border-strong: var(--cds-border-strong-01, #8d8d8d);
  --cds-border-tile: var(--cds-border-tile-01, #c6c6c6);
}

#DPContainer.DPContainer .cds--layout--size-sm {
  --cds-layout-size-height-context: var(--cds-layout-size-height-sm, 32px);
  --cds-layout-size-height: var(--cds-layout-size-height-context);
}

#DPContainer.DPContainer .cds--layout--size-md {
  --cds-layout-size-height-context: var(--cds-layout-size-height-md, 40px);
  --cds-layout-size-height: var(--cds-layout-size-height-context);
}

#DPContainer.DPContainer {
  --cds-layout-size-height-xs: 24px;
  --cds-layout-size-height-sm: 32px;
  --cds-layout-size-height-md: 40px;
  --cds-layout-size-height-lg: 48px;
  --cds-layout-size-height-xl: 64px;
  --cds-layout-size-height-2xl: 80px;
  --cds-layout-size-height-min: 0px;
  --cds-layout-size-height-max: 999999999px;
  --cds-layout-density-padding-inline-condensed: 8px;
  --cds-layout-density-padding-inline-normal: 16px;
  --cds-layout-density-padding-inline-min: 0px;
  --cds-layout-density-padding-inline-max: 999999999px;
}

#DPContainer.DPContainer .cds--white {
  background-color: var(--cds-background);
  color: var(--cds-text-primary);
  --cds-ai-aura-end: hsla(0, 0%, 100%, 0);
  --cds-ai-aura-hover-background: #edf5ff;
  --cds-ai-aura-hover-end: hsla(0, 0%, 100%, 0);
  --cds-ai-aura-hover-start: rgba(69, 137, 255, 0.32);
  --cds-ai-aura-start: rgba(69, 137, 255, 0.1);
  --cds-ai-aura-start-sm: rgba(69, 137, 255, 0.16);
  --cds-ai-border-end: #78a9ff;
  --cds-ai-border-start: rgba(166, 200, 255, 0.64);
  --cds-ai-border-strong: #4589ff;
  --cds-ai-drop-shadow: rgba(15, 98, 254, 0.1);
  --cds-ai-inner-shadow: rgba(69, 137, 255, 0.1);
  --cds-ai-overlay: rgba(0, 17, 65, 0.5);
  --cds-ai-popover-background: #fff;
  --cds-ai-popover-caret-bottom: #78a9ff;
  --cds-ai-popover-caret-bottom-background: #eaf1ff;
  --cds-ai-popover-caret-bottom-background-actions: #e9effa;
  --cds-ai-popover-caret-center: #a0c3ff;
  --cds-ai-popover-shadow-outer-01: rgba(0, 67, 206, 0.06);
  --cds-ai-popover-shadow-outer-02: rgba(0, 0, 0, 0.04);
  --cds-ai-skeleton-background: #d0e2ff;
  --cds-ai-skeleton-element-background: #4589ff;
  --cds-background: #fff;
  --cds-background-active: hsla(0, 0%, 55%, 0.5);
  --cds-background-brand: #0f62fe;
  --cds-background-hover: hsla(0, 0%, 55%, 0.12);
  --cds-background-inverse: #393939;
  --cds-background-inverse-hover: #474747;
  --cds-background-selected: hsla(0, 0%, 55%, 0.2);
  --cds-background-selected-hover: hsla(0, 0%, 55%, 0.32);
  --cds-border-disabled: #c6c6c6;
  --cds-border-interactive: #0f62fe;
  --cds-border-inverse: #161616;
  --cds-border-strong-01: #8d8d8d;
  --cds-border-strong-02: #8d8d8d;
  --cds-border-strong-03: #8d8d8d;
  --cds-border-subtle-00: #e0e0e0;
  --cds-border-subtle-01: #c6c6c6;
  --cds-border-subtle-02: #e0e0e0;
  --cds-border-subtle-03: #c6c6c6;
  --cds-border-subtle-selected-01: #c6c6c6;
  --cds-border-subtle-selected-02: #c6c6c6;
  --cds-border-subtle-selected-03: #c6c6c6;
  --cds-border-tile-01: #c6c6c6;
  --cds-border-tile-02: #a8a8a8;
  --cds-border-tile-03: #c6c6c6;
  --cds-chat-avatar-agent: #393939;
  --cds-chat-avatar-bot: #6f6f6f;
  --cds-chat-avatar-user: #0f62fe;
  --cds-chat-bubble-agent: #fff;
  --cds-chat-bubble-border: #e0e0e0;
  --cds-chat-bubble-user: #e0e0e0;
  --cds-chat-button: #0f62fe;
  --cds-chat-button-active: hsla(0, 0%, 55%, 0.5);
  --cds-chat-button-hover: hsla(0, 0%, 55%, 0.12);
  --cds-chat-button-selected: hsla(0, 0%, 55%, 0.2);
  --cds-chat-button-text-hover: #0043ce;
  --cds-chat-button-text-selected: #525252;
  --cds-chat-header-background: #fff;
  --cds-chat-prompt-background: #fff;
  --cds-chat-prompt-border-end: hsla(0, 0%, 96%, 0);
  --cds-chat-prompt-border-start: #f4f4f4;
  --cds-chat-shell-background: #fff;
  --cds-field-01: #f4f4f4;
  --cds-field-02: #fff;
  --cds-field-03: #f4f4f4;
  --cds-field-hover-01: #e8e8e8;
  --cds-field-hover-02: #e8e8e8;
  --cds-field-hover-03: #e8e8e8;
  --cds-focus: #0f62fe;
  --cds-focus-inset: #fff;
  --cds-focus-inverse: #fff;
  --cds-highlight: #d0e2ff;
  --cds-icon-disabled: hsla(0, 0%, 9%, 0.25);
  --cds-icon-interactive: #0f62fe;
  --cds-icon-inverse: #fff;
  --cds-icon-on-color: #fff;
  --cds-icon-on-color-disabled: #8d8d8d;
  --cds-icon-primary: #161616;
  --cds-icon-secondary: #525252;
  --cds-interactive: #0f62fe;
  --cds-layer-01: #f4f4f4;
  --cds-layer-02: #fff;
  --cds-layer-03: #f4f4f4;
  --cds-layer-accent-01: #e0e0e0;
  --cds-layer-accent-02: #e0e0e0;
  --cds-layer-accent-03: #e0e0e0;
  --cds-layer-accent-active-01: #a8a8a8;
  --cds-layer-accent-active-02: #a8a8a8;
  --cds-layer-accent-active-03: #a8a8a8;
  --cds-layer-accent-hover-01: #d1d1d1;
  --cds-layer-accent-hover-02: #d1d1d1;
  --cds-layer-accent-hover-03: #d1d1d1;
  --cds-layer-active-01: #c6c6c6;
  --cds-layer-active-02: #c6c6c6;
  --cds-layer-active-03: #c6c6c6;
  --cds-layer-hover-01: #e8e8e8;
  --cds-layer-hover-02: #e8e8e8;
  --cds-layer-hover-03: #e8e8e8;
  --cds-layer-selected-01: #e0e0e0;
  --cds-layer-selected-02: #e0e0e0;
  --cds-layer-selected-03: #e0e0e0;
  --cds-layer-selected-disabled: #8d8d8d;
  --cds-layer-selected-hover-01: #d1d1d1;
  --cds-layer-selected-hover-02: #d1d1d1;
  --cds-layer-selected-hover-03: #d1d1d1;
  --cds-layer-selected-inverse: #161616;
  --cds-link-inverse: #78a9ff;
  --cds-link-inverse-active: #f4f4f4;
  --cds-link-inverse-hover: #a6c8ff;
  --cds-link-primary: #0f62fe;
  --cds-link-primary-hover: #0043ce;
  --cds-link-secondary: #0043ce;
  --cds-link-visited: #8a3ffc;
  --cds-overlay: hsla(0, 0%, 9%, 0.5);
  --cds-shadow: rgba(0, 0, 0, 0.3);
  --cds-skeleton-background: #e8e8e8;
  --cds-skeleton-element: #c6c6c6;
  --cds-support-caution-major: #ff832b;
  --cds-support-caution-minor: #f1c21b;
  --cds-support-caution-undefined: #8a3ffc;
  --cds-support-error: #da1e28;
  --cds-support-error-inverse: #fa4d56;
  --cds-support-info: #0043ce;
  --cds-support-info-inverse: #4589ff;
  --cds-support-success: #24a148;
  --cds-support-success-inverse: #42be65;
  --cds-support-warning: #f1c21b;
  --cds-support-warning-inverse: #f1c21b;
  --cds-text-disabled: hsla(0, 0%, 9%, 0.25);
  --cds-text-error: #da1e28;
  --cds-text-helper: #6f6f6f;
  --cds-text-inverse: #fff;
  --cds-text-on-color: #fff;
  --cds-text-on-color-disabled: #8d8d8d;
  --cds-text-placeholder: hsla(0, 0%, 9%, 0.4);
  --cds-text-primary: #161616;
  --cds-text-secondary: #525252;
  --cds-toggle-off: #8d8d8d;
  --cds-layer: var(--cds-layer-01, #f4f4f4);
  --cds-layer-active: var(--cds-layer-active-01, #c6c6c6);
  --cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);
  --cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);
  --cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);
  --cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);
  --cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);
  --cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);
  --cds-field: var(--cds-field-01, #f4f4f4);
  --cds-field-hover: var(--cds-field-hover-01, #e8e8e8);
  --cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);
  --cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);
  --cds-border-strong: var(--cds-border-strong-01, #8d8d8d);
  --cds-border-tile: var(--cds-border-tile-01, #c6c6c6);
  --cds-button-separator: #e0e0e0;
  --cds-button-primary: #0f62fe;
  --cds-button-secondary: #393939;
  --cds-button-tertiary: #0f62fe;
  --cds-button-danger-primary: #da1e28;
  --cds-button-danger-secondary: #da1e28;
  --cds-button-danger-active: #750e13;
  --cds-button-primary-active: #002d9c;
  --cds-button-secondary-active: #6f6f6f;
  --cds-button-tertiary-active: #002d9c;
  --cds-button-danger-hover: #b81921;
  --cds-button-primary-hover: #0050e6;
  --cds-button-secondary-hover: #474747;
  --cds-button-tertiary-hover: #0050e6;
  --cds-button-disabled: #c6c6c6;
  --cds-notification-background-error: #fff1f1;
  --cds-notification-background-success: #defbe6;
  --cds-notification-background-info: #edf5ff;
  --cds-notification-background-warning: #fdf6dd;
  --cds-notification-action-hover: #fff;
  --cds-notification-action-tertiary-inverse: #fff;
  --cds-notification-action-tertiary-inverse-active: #c6c6c6;
  --cds-notification-action-tertiary-inverse-hover: #f4f4f4;
  --cds-notification-action-tertiary-inverse-text: #161616;
  --cds-notification-action-tertiary-inverse-text-on-color-disabled: hsla(0, 0%, 100%, 0.25);
  --cds-tag-background-red: #ffd7d9;
  --cds-tag-color-red: #750e13;
  --cds-tag-hover-red: #ffc2c5;
  --cds-tag-background-magenta: #ffd6e8;
  --cds-tag-color-magenta: #740937;
  --cds-tag-hover-magenta: #ffbdda;
  --cds-tag-background-purple: #e8daff;
  --cds-tag-color-purple: #491d8b;
  --cds-tag-hover-purple: #dcc7ff;
  --cds-tag-background-blue: #d0e2ff;
  --cds-tag-color-blue: #002d9c;
  --cds-tag-hover-blue: #b8d3ff;
  --cds-tag-background-cyan: #bae6ff;
  --cds-tag-color-cyan: #003a6d;
  --cds-tag-hover-cyan: #99daff;
  --cds-tag-background-teal: #9ef0f0;
  --cds-tag-color-teal: #004144;
  --cds-tag-hover-teal: #57e5e5;
  --cds-tag-background-green: #a7f0ba;
  --cds-tag-color-green: #044317;
  --cds-tag-hover-green: #74e792;
  --cds-tag-background-gray: #e0e0e0;
  --cds-tag-color-gray: #161616;
  --cds-tag-hover-gray: #d1d1d1;
  --cds-tag-border-red: #ff8389;
  --cds-tag-border-blue: #78a9ff;
  --cds-tag-border-cyan: #33b1ff;
  --cds-tag-border-teal: #08bdba;
  --cds-tag-border-green: #42be65;
  --cds-tag-border-magenta: #ff7eb6;
  --cds-tag-border-purple: #be95ff;
  --cds-tag-border-gray: #a8a8a8;
  --cds-tag-border-cool-gray: #a2a9b0;
  --cds-tag-border-warm-gray: #ada8a8;
  --cds-tag-background-cool-gray: #dde1e6;
  --cds-tag-color-cool-gray: #121619;
  --cds-tag-hover-cool-gray: #cdd3da;
  --cds-tag-background-warm-gray: #e5e0df;
  --cds-tag-color-warm-gray: #171414;
  --cds-tag-hover-warm-gray: #d8d0cf;
}

#DPContainer.DPContainer .cds--g10 {
  background-color: var(--cds-background);
  color: var(--cds-text-primary);
  --cds-ai-aura-end: hsla(0, 0%, 100%, 0);
  --cds-ai-aura-hover-background: #edf5ff;
  --cds-ai-aura-hover-end: hsla(0, 0%, 100%, 0);
  --cds-ai-aura-hover-start: rgba(69, 137, 255, 0.32);
  --cds-ai-aura-start: rgba(69, 137, 255, 0.1);
  --cds-ai-aura-start-sm: rgba(69, 137, 255, 0.16);
  --cds-ai-border-end: #78a9ff;
  --cds-ai-border-start: rgba(166, 200, 255, 0.64);
  --cds-ai-border-strong: #4589ff;
  --cds-ai-drop-shadow: rgba(15, 98, 254, 0.1);
  --cds-ai-inner-shadow: rgba(69, 137, 255, 0.1);
  --cds-ai-overlay: rgba(0, 17, 65, 0.5);
  --cds-ai-popover-background: #fff;
  --cds-ai-popover-caret-bottom: #78a9ff;
  --cds-ai-popover-caret-bottom-background: #eaf1ff;
  --cds-ai-popover-caret-bottom-background-actions: #e9effa;
  --cds-ai-popover-caret-center: #a0c3ff;
  --cds-ai-popover-shadow-outer-01: rgba(0, 67, 206, 0.06);
  --cds-ai-popover-shadow-outer-02: rgba(0, 0, 0, 0.04);
  --cds-ai-skeleton-background: #d0e2ff;
  --cds-ai-skeleton-element-background: #4589ff;
  --cds-background: #f4f4f4;
  --cds-background-active: hsla(0, 0%, 55%, 0.5);
  --cds-background-brand: #0f62fe;
  --cds-background-hover: hsla(0, 0%, 55%, 0.12);
  --cds-background-inverse: #393939;
  --cds-background-inverse-hover: #474747;
  --cds-background-selected: hsla(0, 0%, 55%, 0.2);
  --cds-background-selected-hover: hsla(0, 0%, 55%, 0.32);
  --cds-border-disabled: #c6c6c6;
  --cds-border-interactive: #0f62fe;
  --cds-border-inverse: #161616;
  --cds-border-strong-01: #8d8d8d;
  --cds-border-strong-02: #8d8d8d;
  --cds-border-strong-03: #8d8d8d;
  --cds-border-subtle-00: #c6c6c6;
  --cds-border-subtle-01: #e0e0e0;
  --cds-border-subtle-02: #c6c6c6;
  --cds-border-subtle-03: #e0e0e0;
  --cds-border-subtle-selected-01: #c6c6c6;
  --cds-border-subtle-selected-02: #c6c6c6;
  --cds-border-subtle-selected-03: #c6c6c6;
  --cds-border-tile-01: #a8a8a8;
  --cds-border-tile-02: #c6c6c6;
  --cds-border-tile-03: #a8a8a8;
  --cds-chat-avatar-agent: #393939;
  --cds-chat-avatar-bot: #6f6f6f;
  --cds-chat-avatar-user: #0f62fe;
  --cds-chat-bubble-agent: #fff;
  --cds-chat-bubble-border: #e0e0e0;
  --cds-chat-bubble-user: #e0e0e0;
  --cds-chat-button: #0f62fe;
  --cds-chat-button-active: hsla(0, 0%, 55%, 0.5);
  --cds-chat-button-hover: hsla(0, 0%, 55%, 0.12);
  --cds-chat-button-selected: hsla(0, 0%, 55%, 0.2);
  --cds-chat-button-text-hover: #0043ce;
  --cds-chat-button-text-selected: #525252;
  --cds-chat-header-background: #fff;
  --cds-chat-prompt-background: #fff;
  --cds-chat-prompt-border-end: hsla(0, 0%, 96%, 0);
  --cds-chat-prompt-border-start: #f4f4f4;
  --cds-chat-shell-background: #fff;
  --cds-field-01: #fff;
  --cds-field-02: #f4f4f4;
  --cds-field-03: #fff;
  --cds-field-hover-01: #e8e8e8;
  --cds-field-hover-02: #e8e8e8;
  --cds-field-hover-03: #e8e8e8;
  --cds-focus: #0f62fe;
  --cds-focus-inset: #fff;
  --cds-focus-inverse: #fff;
  --cds-highlight: #d0e2ff;
  --cds-icon-disabled: hsla(0, 0%, 9%, 0.25);
  --cds-icon-interactive: #0f62fe;
  --cds-icon-inverse: #fff;
  --cds-icon-on-color: #fff;
  --cds-icon-on-color-disabled: #8d8d8d;
  --cds-icon-primary: #161616;
  --cds-icon-secondary: #525252;
  --cds-interactive: #0f62fe;
  --cds-layer-01: #fff;
  --cds-layer-02: #f4f4f4;
  --cds-layer-03: #fff;
  --cds-layer-accent-01: #e0e0e0;
  --cds-layer-accent-02: #e0e0e0;
  --cds-layer-accent-03: #e0e0e0;
  --cds-layer-accent-active-01: #a8a8a8;
  --cds-layer-accent-active-02: #a8a8a8;
  --cds-layer-accent-active-03: #a8a8a8;
  --cds-layer-accent-hover-01: #d1d1d1;
  --cds-layer-accent-hover-02: #d1d1d1;
  --cds-layer-accent-hover-03: #d1d1d1;
  --cds-layer-active-01: #c6c6c6;
  --cds-layer-active-02: #c6c6c6;
  --cds-layer-active-03: #c6c6c6;
  --cds-layer-hover-01: #e8e8e8;
  --cds-layer-hover-02: #e8e8e8;
  --cds-layer-hover-03: #e8e8e8;
  --cds-layer-selected-01: #e0e0e0;
  --cds-layer-selected-02: #e0e0e0;
  --cds-layer-selected-03: #e0e0e0;
  --cds-layer-selected-disabled: #8d8d8d;
  --cds-layer-selected-hover-01: #d1d1d1;
  --cds-layer-selected-hover-02: #d1d1d1;
  --cds-layer-selected-hover-03: #d1d1d1;
  --cds-layer-selected-inverse: #161616;
  --cds-link-inverse: #78a9ff;
  --cds-link-inverse-active: #f4f4f4;
  --cds-link-inverse-hover: #a6c8ff;
  --cds-link-primary: #0f62fe;
  --cds-link-primary-hover: #0043ce;
  --cds-link-secondary: #0043ce;
  --cds-link-visited: #8a3ffc;
  --cds-overlay: hsla(0, 0%, 9%, 0.5);
  --cds-shadow: rgba(0, 0, 0, 0.3);
  --cds-skeleton-background: #e8e8e8;
  --cds-skeleton-element: #c6c6c6;
  --cds-support-caution-major: #ff832b;
  --cds-support-caution-minor: #f1c21b;
  --cds-support-caution-undefined: #8a3ffc;
  --cds-support-error: #da1e28;
  --cds-support-error-inverse: #fa4d56;
  --cds-support-info: #0043ce;
  --cds-support-info-inverse: #4589ff;
  --cds-support-success: #24a148;
  --cds-support-success-inverse: #42be65;
  --cds-support-warning: #f1c21b;
  --cds-support-warning-inverse: #f1c21b;
  --cds-text-disabled: hsla(0, 0%, 9%, 0.25);
  --cds-text-error: #da1e28;
  --cds-text-helper: #6f6f6f;
  --cds-text-inverse: #fff;
  --cds-text-on-color: #fff;
  --cds-text-on-color-disabled: #8d8d8d;
  --cds-text-placeholder: hsla(0, 0%, 9%, 0.4);
  --cds-text-primary: #161616;
  --cds-text-secondary: #525252;
  --cds-toggle-off: #8d8d8d;
  --cds-layer: var(--cds-layer-01, #f4f4f4);
  --cds-layer-active: var(--cds-layer-active-01, #c6c6c6);
  --cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);
  --cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);
  --cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);
  --cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);
  --cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);
  --cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);
  --cds-field: var(--cds-field-01, #f4f4f4);
  --cds-field-hover: var(--cds-field-hover-01, #e8e8e8);
  --cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);
  --cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);
  --cds-border-strong: var(--cds-border-strong-01, #8d8d8d);
  --cds-border-tile: var(--cds-border-tile-01, #c6c6c6);
  --cds-button-separator: #e0e0e0;
  --cds-button-primary: #0f62fe;
  --cds-button-secondary: #393939;
  --cds-button-tertiary: #0f62fe;
  --cds-button-danger-primary: #da1e28;
  --cds-button-danger-secondary: #da1e28;
  --cds-button-danger-active: #750e13;
  --cds-button-primary-active: #002d9c;
  --cds-button-secondary-active: #6f6f6f;
  --cds-button-tertiary-active: #002d9c;
  --cds-button-danger-hover: #b81921;
  --cds-button-primary-hover: #0050e6;
  --cds-button-secondary-hover: #474747;
  --cds-button-tertiary-hover: #0050e6;
  --cds-button-disabled: #c6c6c6;
  --cds-notification-background-error: #fff1f1;
  --cds-notification-background-success: #defbe6;
  --cds-notification-background-info: #edf5ff;
  --cds-notification-background-warning: #fdf6dd;
  --cds-notification-action-hover: #fff;
  --cds-notification-action-tertiary-inverse: #fff;
  --cds-notification-action-tertiary-inverse-active: #c6c6c6;
  --cds-notification-action-tertiary-inverse-hover: #f4f4f4;
  --cds-notification-action-tertiary-inverse-text: #161616;
  --cds-notification-action-tertiary-inverse-text-on-color-disabled: hsla(0, 0%, 100%, 0.25);
  --cds-tag-background-red: #ffd7d9;
  --cds-tag-color-red: #750e13;
  --cds-tag-hover-red: #ffc2c5;
  --cds-tag-background-magenta: #ffd6e8;
  --cds-tag-color-magenta: #740937;
  --cds-tag-hover-magenta: #ffbdda;
  --cds-tag-background-purple: #e8daff;
  --cds-tag-color-purple: #491d8b;
  --cds-tag-hover-purple: #dcc7ff;
  --cds-tag-background-blue: #d0e2ff;
  --cds-tag-color-blue: #002d9c;
  --cds-tag-hover-blue: #b8d3ff;
  --cds-tag-background-cyan: #bae6ff;
  --cds-tag-color-cyan: #003a6d;
  --cds-tag-hover-cyan: #99daff;
  --cds-tag-background-teal: #9ef0f0;
  --cds-tag-color-teal: #004144;
  --cds-tag-hover-teal: #57e5e5;
  --cds-tag-background-green: #a7f0ba;
  --cds-tag-color-green: #044317;
  --cds-tag-hover-green: #74e792;
  --cds-tag-background-gray: #e0e0e0;
  --cds-tag-color-gray: #161616;
  --cds-tag-hover-gray: #d1d1d1;
  --cds-tag-border-red: #ff8389;
  --cds-tag-border-blue: #78a9ff;
  --cds-tag-border-cyan: #33b1ff;
  --cds-tag-border-teal: #08bdba;
  --cds-tag-border-green: #42be65;
  --cds-tag-border-magenta: #ff7eb6;
  --cds-tag-border-purple: #be95ff;
  --cds-tag-border-gray: #a8a8a8;
  --cds-tag-border-cool-gray: #a2a9b0;
  --cds-tag-border-warm-gray: #ada8a8;
  --cds-tag-background-cool-gray: #dde1e6;
  --cds-tag-color-cool-gray: #121619;
  --cds-tag-hover-cool-gray: #cdd3da;
  --cds-tag-background-warm-gray: #e5e0df;
  --cds-tag-color-warm-gray: #171414;
  --cds-tag-hover-warm-gray: #d8d0cf;
}

#DPContainer.DPContainer .cds--g90 {
  background-color: var(--cds-background);
  color: var(--cds-text-primary);
  --cds-ai-aura-end: transparent;
  --cds-ai-aura-hover-background: #474747;
  --cds-ai-aura-hover-end: transparent;
  --cds-ai-aura-hover-start: rgba(69, 137, 255, 0.4);
  --cds-ai-aura-start: rgba(69, 137, 255, 0.1);
  --cds-ai-aura-start-sm: rgba(69, 137, 255, 0.16);
  --cds-ai-border-end: #4589ff;
  --cds-ai-border-start: rgba(166, 200, 255, 0.36);
  --cds-ai-border-strong: #78a9ff;
  --cds-ai-drop-shadow: rgba(0, 0, 0, 0.28);
  --cds-ai-inner-shadow: rgba(69, 137, 255, 0.16);
  --cds-ai-overlay: rgba(0, 0, 0, 0.5);
  --cds-ai-popover-background: #161616;
  --cds-ai-popover-caret-bottom: #4589ff;
  --cds-ai-popover-caret-bottom-background: #202d45;
  --cds-ai-popover-caret-bottom-background-actions: #1e283a;
  --cds-ai-popover-caret-center: #4870b5;
  --cds-ai-popover-shadow-outer-01: rgba(0, 0, 0, 0.12);
  --cds-ai-popover-shadow-outer-02: rgba(0, 0, 0, 0.08);
  --cds-ai-skeleton-background: rgba(120, 169, 255, 0.5);
  --cds-ai-skeleton-element-background: rgba(120, 169, 255, 0.3);
  --cds-background: #262626;
  --cds-background-active: hsla(0, 0%, 55%, 0.4);
  --cds-background-brand: #0f62fe;
  --cds-background-hover: hsla(0, 0%, 55%, 0.16);
  --cds-background-inverse: #f4f4f4;
  --cds-background-inverse-hover: #e8e8e8;
  --cds-background-selected: hsla(0, 0%, 55%, 0.24);
  --cds-background-selected-hover: hsla(0, 0%, 55%, 0.32);
  --cds-border-disabled: hsla(0, 0%, 55%, 0.5);
  --cds-border-interactive: #4589ff;
  --cds-border-inverse: #f4f4f4;
  --cds-border-strong-01: #8d8d8d;
  --cds-border-strong-02: #a8a8a8;
  --cds-border-strong-03: #c6c6c6;
  --cds-border-subtle-00: #525252;
  --cds-border-subtle-01: #6f6f6f;
  --cds-border-subtle-02: #8d8d8d;
  --cds-border-subtle-03: #8d8d8d;
  --cds-border-subtle-selected-01: #8d8d8d;
  --cds-border-subtle-selected-02: #a8a8a8;
  --cds-border-subtle-selected-03: #a8a8a8;
  --cds-border-tile-01: #6f6f6f;
  --cds-border-tile-02: #8d8d8d;
  --cds-border-tile-03: #a8a8a8;
  --cds-chat-avatar-agent: #c6c6c6;
  --cds-chat-avatar-bot: #8d8d8d;
  --cds-chat-avatar-user: #4589ff;
  --cds-chat-bubble-agent: #262626;
  --cds-chat-bubble-border: #525252;
  --cds-chat-bubble-user: #393939;
  --cds-chat-button: #78a9ff;
  --cds-chat-button-active: hsla(0, 0%, 55%, 0.4);
  --cds-chat-button-hover: hsla(0, 0%, 55%, 0.16);
  --cds-chat-button-selected: hsla(0, 0%, 55%, 0.24);
  --cds-chat-button-text-hover: #a6c8ff;
  --cds-chat-button-text-selected: #c6c6c6;
  --cds-chat-header-background: #262626;
  --cds-chat-prompt-background: #161616;
  --cds-chat-prompt-border-end: rgba(38, 38, 38, 0);
  --cds-chat-prompt-border-start: #262626;
  --cds-chat-shell-background: #262626;
  --cds-field-01: #393939;
  --cds-field-02: #525252;
  --cds-field-03: #6f6f6f;
  --cds-field-hover-01: #474747;
  --cds-field-hover-02: #636363;
  --cds-field-hover-03: #5e5e5e;
  --cds-focus: #fff;
  --cds-focus-inset: #161616;
  --cds-focus-inverse: #0f62fe;
  --cds-highlight: #0043ce;
  --cds-icon-disabled: hsla(0, 0%, 96%, 0.25);
  --cds-icon-interactive: #fff;
  --cds-icon-inverse: #161616;
  --cds-icon-on-color: #fff;
  --cds-icon-on-color-disabled: hsla(0, 0%, 100%, 0.25);
  --cds-icon-primary: #f4f4f4;
  --cds-icon-secondary: #c6c6c6;
  --cds-interactive: #4589ff;
  --cds-layer-01: #393939;
  --cds-layer-02: #525252;
  --cds-layer-03: #6f6f6f;
  --cds-layer-accent-01: #525252;
  --cds-layer-accent-02: #6f6f6f;
  --cds-layer-accent-03: #8d8d8d;
  --cds-layer-accent-active-01: #8d8d8d;
  --cds-layer-accent-active-02: #393939;
  --cds-layer-accent-active-03: #525252;
  --cds-layer-accent-hover-01: #636363;
  --cds-layer-accent-hover-02: #5e5e5e;
  --cds-layer-accent-hover-03: #7a7a7a;
  --cds-layer-active-01: #6f6f6f;
  --cds-layer-active-02: #8d8d8d;
  --cds-layer-active-03: #393939;
  --cds-layer-hover-01: #474747;
  --cds-layer-hover-02: #636363;
  --cds-layer-hover-03: #5e5e5e;
  --cds-layer-selected-01: #525252;
  --cds-layer-selected-02: #6f6f6f;
  --cds-layer-selected-03: #525252;
  --cds-layer-selected-disabled: #a8a8a8;
  --cds-layer-selected-hover-01: #636363;
  --cds-layer-selected-hover-02: #5e5e5e;
  --cds-layer-selected-hover-03: #636363;
  --cds-layer-selected-inverse: #f4f4f4;
  --cds-link-inverse: #0f62fe;
  --cds-link-inverse-active: #161616;
  --cds-link-inverse-hover: #0043ce;
  --cds-link-primary: #78a9ff;
  --cds-link-primary-hover: #a6c8ff;
  --cds-link-secondary: #a6c8ff;
  --cds-link-visited: #be95ff;
  --cds-overlay: rgba(0, 0, 0, 0.65);
  --cds-shadow: rgba(0, 0, 0, 0.8);
  --cds-skeleton-background: #333;
  --cds-skeleton-element: #525252;
  --cds-support-caution-major: #ff832b;
  --cds-support-caution-minor: #f1c21b;
  --cds-support-caution-undefined: #a56eff;
  --cds-support-error: #ff8389;
  --cds-support-error-inverse: #da1e28;
  --cds-support-info: #4589ff;
  --cds-support-info-inverse: #0043ce;
  --cds-support-success: #42be65;
  --cds-support-success-inverse: #24a148;
  --cds-support-warning: #f1c21b;
  --cds-support-warning-inverse: #f1c21b;
  --cds-text-disabled: hsla(0, 0%, 96%, 0.25);
  --cds-text-error: #ffb3b8;
  --cds-text-helper: #c6c6c6;
  --cds-text-inverse: #161616;
  --cds-text-on-color: #fff;
  --cds-text-on-color-disabled: hsla(0, 0%, 100%, 0.25);
  --cds-text-placeholder: hsla(0, 0%, 96%, 0.4);
  --cds-text-primary: #f4f4f4;
  --cds-text-secondary: #c6c6c6;
  --cds-toggle-off: #8d8d8d;
  --cds-layer: var(--cds-layer-01, #f4f4f4);
  --cds-layer-active: var(--cds-layer-active-01, #c6c6c6);
  --cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);
  --cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);
  --cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);
  --cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);
  --cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);
  --cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);
  --cds-field: var(--cds-field-01, #f4f4f4);
  --cds-field-hover: var(--cds-field-hover-01, #e8e8e8);
  --cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);
  --cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);
  --cds-border-strong: var(--cds-border-strong-01, #8d8d8d);
  --cds-border-tile: var(--cds-border-tile-01, #c6c6c6);
  --cds-button-separator: #161616;
  --cds-button-primary: #0f62fe;
  --cds-button-secondary: #6f6f6f;
  --cds-button-tertiary: #fff;
  --cds-button-danger-primary: #da1e28;
  --cds-button-danger-secondary: #ff8389;
  --cds-button-danger-active: #750e13;
  --cds-button-primary-active: #002d9c;
  --cds-button-secondary-active: #393939;
  --cds-button-tertiary-active: #c6c6c6;
  --cds-button-danger-hover: #b81921;
  --cds-button-primary-hover: #0050e6;
  --cds-button-secondary-hover: #5e5e5e;
  --cds-button-tertiary-hover: #f4f4f4;
  --cds-button-disabled: hsla(0, 0%, 55%, 0.3);
  --cds-notification-background-error: #393939;
  --cds-notification-background-success: #393939;
  --cds-notification-background-info: #393939;
  --cds-notification-background-warning: #393939;
  --cds-notification-action-tertiary-inverse: #0f62fe;
  --cds-notification-action-tertiary-inverse-active: #002d9c;
  --cds-notification-action-tertiary-inverse-hover: #0050e6;
  --cds-notification-action-tertiary-inverse-text: #fff;
  --cds-notification-action-tertiary-inverse-text-on-color-disabled: #8d8d8d;
  --cds-tag-background-red: #a2191f;
  --cds-tag-color-red: #ffd7d9;
  --cds-tag-hover-red: #c21e25;
  --cds-tag-background-magenta: #9f1853;
  --cds-tag-color-magenta: #ffd6e8;
  --cds-tag-hover-magenta: #bf1d63;
  --cds-tag-background-purple: #6929c4;
  --cds-tag-color-purple: #e8daff;
  --cds-tag-hover-purple: #7c3dd6;
  --cds-tag-background-blue: #0043ce;
  --cds-tag-color-blue: #d0e2ff;
  --cds-tag-hover-blue: #0053ff;
  --cds-tag-background-cyan: #00539a;
  --cds-tag-color-cyan: #bae6ff;
  --cds-tag-hover-cyan: #0066bd;
  --cds-tag-background-teal: #005d5d;
  --cds-tag-color-teal: #9ef0f0;
  --cds-tag-hover-teal: #007070;
  --cds-tag-background-green: #0e6027;
  --cds-tag-color-green: #a7f0ba;
  --cds-tag-hover-green: #11742f;
  --cds-tag-background-gray: #525252;
  --cds-tag-color-gray: #f4f4f4;
  --cds-tag-hover-gray: #636363;
  --cds-tag-border-red: #fa4d56;
  --cds-tag-border-blue: #4589ff;
  --cds-tag-border-cyan: #1192e8;
  --cds-tag-border-teal: #009d9a;
  --cds-tag-border-green: #24a148;
  --cds-tag-border-magenta: #ee5396;
  --cds-tag-border-purple: #a56eff;
  --cds-tag-border-gray: #8d8d8d;
  --cds-tag-border-cool-gray: #878d96;
  --cds-tag-border-warm-gray: #8f8b8b;
  --cds-tag-background-cool-gray: #4d5358;
  --cds-tag-color-cool-gray: #f2f4f8;
  --cds-tag-hover-cool-gray: #5d646a;
  --cds-tag-background-warm-gray: #565151;
  --cds-tag-color-warm-gray: #f7f3f2;
  --cds-tag-hover-warm-gray: #696363;
}

#DPContainer.DPContainer .cds--g100 {
  background-color: var(--cds-background);
  color: var(--cds-text-primary);
  --cds-ai-aura-end: transparent;
  --cds-ai-aura-hover-background: #333;
  --cds-ai-aura-hover-end: transparent;
  --cds-ai-aura-hover-start: rgba(69, 137, 255, 0.4);
  --cds-ai-aura-start: rgba(69, 137, 255, 0.1);
  --cds-ai-aura-start-sm: rgba(69, 137, 255, 0.16);
  --cds-ai-border-end: #4589ff;
  --cds-ai-border-start: rgba(166, 200, 255, 0.36);
  --cds-ai-border-strong: #78a9ff;
  --cds-ai-drop-shadow: rgba(0, 0, 0, 0.28);
  --cds-ai-inner-shadow: rgba(69, 137, 255, 0.16);
  --cds-ai-overlay: rgba(0, 0, 0, 0.5);
  --cds-ai-popover-background: #161616;
  --cds-ai-popover-caret-bottom: #4589ff;
  --cds-ai-popover-caret-bottom-background: #202d45;
  --cds-ai-popover-caret-bottom-background-actions: #1e283a;
  --cds-ai-popover-caret-center: #4870b5;
  --cds-ai-popover-shadow-outer-01: rgba(0, 0, 0, 0.12);
  --cds-ai-popover-shadow-outer-02: rgba(0, 0, 0, 0.08);
  --cds-ai-skeleton-background: rgba(120, 169, 255, 0.5);
  --cds-ai-skeleton-element-background: rgba(120, 169, 255, 0.3);
  --cds-background: #161616;
  --cds-background-active: hsla(0, 0%, 55%, 0.4);
  --cds-background-brand: #0f62fe;
  --cds-background-hover: hsla(0, 0%, 55%, 0.16);
  --cds-background-inverse: #f4f4f4;
  --cds-background-inverse-hover: #e8e8e8;
  --cds-background-selected: hsla(0, 0%, 55%, 0.24);
  --cds-background-selected-hover: hsla(0, 0%, 55%, 0.32);
  --cds-border-disabled: hsla(0, 0%, 55%, 0.5);
  --cds-border-interactive: #4589ff;
  --cds-border-inverse: #f4f4f4;
  --cds-border-strong-01: #6f6f6f;
  --cds-border-strong-02: #8d8d8d;
  --cds-border-strong-03: #a8a8a8;
  --cds-border-subtle-00: #393939;
  --cds-border-subtle-01: #525252;
  --cds-border-subtle-02: #6f6f6f;
  --cds-border-subtle-03: #6f6f6f;
  --cds-border-subtle-selected-01: #6f6f6f;
  --cds-border-subtle-selected-02: #8d8d8d;
  --cds-border-subtle-selected-03: #8d8d8d;
  --cds-border-tile-01: #525252;
  --cds-border-tile-02: #6f6f6f;
  --cds-border-tile-03: #8d8d8d;
  --cds-chat-avatar-agent: #c6c6c6;
  --cds-chat-avatar-bot: #8d8d8d;
  --cds-chat-avatar-user: #4589ff;
  --cds-chat-bubble-agent: #262626;
  --cds-chat-bubble-border: #525252;
  --cds-chat-bubble-user: #393939;
  --cds-chat-button: #78a9ff;
  --cds-chat-button-active: hsla(0, 0%, 55%, 0.4);
  --cds-chat-button-hover: hsla(0, 0%, 55%, 0.16);
  --cds-chat-button-selected: hsla(0, 0%, 55%, 0.24);
  --cds-chat-button-text-hover: #a6c8ff;
  --cds-chat-button-text-selected: #c6c6c6;
  --cds-chat-header-background: #262626;
  --cds-chat-prompt-background: #161616;
  --cds-chat-prompt-border-end: rgba(38, 38, 38, 0);
  --cds-chat-prompt-border-start: #262626;
  --cds-chat-shell-background: #262626;
  --cds-field-01: #262626;
  --cds-field-02: #393939;
  --cds-field-03: #525252;
  --cds-field-hover-01: #333;
  --cds-field-hover-02: #474747;
  --cds-field-hover-03: #636363;
  --cds-focus: #fff;
  --cds-focus-inset: #161616;
  --cds-focus-inverse: #0f62fe;
  --cds-highlight: #002d9c;
  --cds-icon-disabled: hsla(0, 0%, 96%, 0.25);
  --cds-icon-interactive: #fff;
  --cds-icon-inverse: #161616;
  --cds-icon-on-color: #fff;
  --cds-icon-on-color-disabled: hsla(0, 0%, 100%, 0.25);
  --cds-icon-primary: #f4f4f4;
  --cds-icon-secondary: #c6c6c6;
  --cds-interactive: #4589ff;
  --cds-layer-01: #262626;
  --cds-layer-02: #393939;
  --cds-layer-03: #525252;
  --cds-layer-accent-01: #393939;
  --cds-layer-accent-02: #525252;
  --cds-layer-accent-03: #6f6f6f;
  --cds-layer-accent-active-01: #6f6f6f;
  --cds-layer-accent-active-02: #8d8d8d;
  --cds-layer-accent-active-03: #393939;
  --cds-layer-accent-hover-01: #474747;
  --cds-layer-accent-hover-02: #636363;
  --cds-layer-accent-hover-03: #5e5e5e;
  --cds-layer-active-01: #525252;
  --cds-layer-active-02: #6f6f6f;
  --cds-layer-active-03: #8d8d8d;
  --cds-layer-hover-01: #333;
  --cds-layer-hover-02: #474747;
  --cds-layer-hover-03: #636363;
  --cds-layer-selected-01: #393939;
  --cds-layer-selected-02: #525252;
  --cds-layer-selected-03: #6f6f6f;
  --cds-layer-selected-disabled: #a8a8a8;
  --cds-layer-selected-hover-01: #474747;
  --cds-layer-selected-hover-02: #636363;
  --cds-layer-selected-hover-03: #5e5e5e;
  --cds-layer-selected-inverse: #f4f4f4;
  --cds-link-inverse: #0f62fe;
  --cds-link-inverse-active: #161616;
  --cds-link-inverse-hover: #0043ce;
  --cds-link-primary: #78a9ff;
  --cds-link-primary-hover: #a6c8ff;
  --cds-link-secondary: #a6c8ff;
  --cds-link-visited: #be95ff;
  --cds-overlay: rgba(0, 0, 0, 0.65);
  --cds-shadow: rgba(0, 0, 0, 0.8);
  --cds-skeleton-background: #292929;
  --cds-skeleton-element: #393939;
  --cds-support-caution-major: #ff832b;
  --cds-support-caution-minor: #f1c21b;
  --cds-support-caution-undefined: #a56eff;
  --cds-support-error: #fa4d56;
  --cds-support-error-inverse: #da1e28;
  --cds-support-info: #4589ff;
  --cds-support-info-inverse: #0043ce;
  --cds-support-success: #42be65;
  --cds-support-success-inverse: #24a148;
  --cds-support-warning: #f1c21b;
  --cds-support-warning-inverse: #f1c21b;
  --cds-text-disabled: hsla(0, 0%, 96%, 0.25);
  --cds-text-error: #ff8389;
  --cds-text-helper: #a8a8a8;
  --cds-text-inverse: #161616;
  --cds-text-on-color: #fff;
  --cds-text-on-color-disabled: hsla(0, 0%, 100%, 0.25);
  --cds-text-placeholder: hsla(0, 0%, 96%, 0.4);
  --cds-text-primary: #f4f4f4;
  --cds-text-secondary: #c6c6c6;
  --cds-toggle-off: #6f6f6f;
  --cds-layer: var(--cds-layer-01, #f4f4f4);
  --cds-layer-active: var(--cds-layer-active-01, #c6c6c6);
  --cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);
  --cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);
  --cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);
  --cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);
  --cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);
  --cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);
  --cds-field: var(--cds-field-01, #f4f4f4);
  --cds-field-hover: var(--cds-field-hover-01, #e8e8e8);
  --cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);
  --cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);
  --cds-border-strong: var(--cds-border-strong-01, #8d8d8d);
  --cds-border-tile: var(--cds-border-tile-01, #c6c6c6);
  --cds-button-separator: #161616;
  --cds-button-primary: #0f62fe;
  --cds-button-secondary: #6f6f6f;
  --cds-button-tertiary: #fff;
  --cds-button-danger-primary: #da1e28;
  --cds-button-danger-secondary: #fa4d56;
  --cds-button-danger-active: #750e13;
  --cds-button-primary-active: #002d9c;
  --cds-button-secondary-active: #393939;
  --cds-button-tertiary-active: #c6c6c6;
  --cds-button-danger-hover: #b81921;
  --cds-button-primary-hover: #0050e6;
  --cds-button-secondary-hover: #5e5e5e;
  --cds-button-tertiary-hover: #f4f4f4;
  --cds-button-disabled: hsla(0, 0%, 55%, 0.3);
  --cds-notification-background-error: #262626;
  --cds-notification-background-success: #262626;
  --cds-notification-background-info: #262626;
  --cds-notification-background-warning: #262626;
  --cds-notification-action-tertiary-inverse: #0f62fe;
  --cds-notification-action-tertiary-inverse-active: #002d9c;
  --cds-notification-action-tertiary-inverse-hover: #0050e6;
  --cds-notification-action-tertiary-inverse-text: #fff;
  --cds-notification-action-tertiary-inverse-text-on-color-disabled: #8d8d8d;
  --cds-tag-background-red: #a2191f;
  --cds-tag-color-red: #ffd7d9;
  --cds-tag-hover-red: #c21e25;
  --cds-tag-background-magenta: #9f1853;
  --cds-tag-color-magenta: #ffd6e8;
  --cds-tag-hover-magenta: #bf1d63;
  --cds-tag-background-purple: #6929c4;
  --cds-tag-color-purple: #e8daff;
  --cds-tag-hover-purple: #7c3dd6;
  --cds-tag-background-blue: #0043ce;
  --cds-tag-color-blue: #d0e2ff;
  --cds-tag-hover-blue: #0053ff;
  --cds-tag-background-cyan: #00539a;
  --cds-tag-color-cyan: #bae6ff;
  --cds-tag-hover-cyan: #0066bd;
  --cds-tag-background-teal: #005d5d;
  --cds-tag-color-teal: #9ef0f0;
  --cds-tag-hover-teal: #007070;
  --cds-tag-background-green: #0e6027;
  --cds-tag-color-green: #a7f0ba;
  --cds-tag-hover-green: #11742f;
  --cds-tag-background-gray: #525252;
  --cds-tag-color-gray: #f4f4f4;
  --cds-tag-hover-gray: #636363;
  --cds-tag-border-red: #fa4d56;
  --cds-tag-border-blue: #4589ff;
  --cds-tag-border-cyan: #1192e8;
  --cds-tag-border-teal: #009d9a;
  --cds-tag-border-green: #24a148;
  --cds-tag-border-magenta: #ee5396;
  --cds-tag-border-purple: #a56eff;
  --cds-tag-border-gray: #8d8d8d;
  --cds-tag-border-cool-gray: #878d96;
  --cds-tag-border-warm-gray: #8f8b8b;
  --cds-tag-background-cool-gray: #4d5358;
  --cds-tag-color-cool-gray: #f2f4f8;
  --cds-tag-hover-cool-gray: #5d646a;
  --cds-tag-background-warm-gray: #565151;
  --cds-tag-color-warm-gray: #f7f3f2;
  --cds-tag-hover-warm-gray: #696363;
}

@keyframes cds--hide-feedback {
  0% {
    opacity: 1;
    visibility: inherit;
  }

  to {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes cds--show-feedback {
  0% {
    opacity: 0;
    visibility: hidden;
  }

  to {
    opacity: 1;
    visibility: inherit;
  }
}

@keyframes cds--skeleton {
  0% {
    opacity: 0.3;
    transform: scaleX(0);
    transform-origin: left;
  }

  20% {
    opacity: 1;
    transform: scaleX(1);
    transform-origin: left;
  }

  28% {
    transform: scaleX(1);
    transform-origin: right;
  }

  51% {
    transform: scaleX(0);
    transform-origin: right;
  }

  58% {
    transform: scaleX(0);
    transform-origin: right;
  }

  82% {
    transform: scaleX(1);
    transform-origin: right;
  }

  83% {
    transform: scaleX(1);
    transform-origin: left;
  }

  96% {
    transform: scaleX(0);
    transform-origin: left;
  }

  to {
    opacity: 0.3;
    transform: scaleX(0);
    transform-origin: left;
  }
}

#DPContainer.DPContainer .cds--popover-container {
  display: inline-block;
}

#DPContainer.DPContainer .cds--popover-container:not(.cds--popover--auto-align) {
  position: relative;
}

#DPContainer.DPContainer .cds--popover--high-contrast .cds--popover {
  --cds-popover-background-color: var(--cds-background-inverse, #393939);
  --cds-popover-text-color: var(--cds-text-inverse, #fff);
}

#DPContainer.DPContainer .cds--popover--caret {
  --cds-popover-offset: 10px;
}

#DPContainer.DPContainer .cds--popover {
  position: absolute;
  z-index: 6000;
  filter: var(--cds-popover-drop-shadow, none);
  inset: 0;
  pointer-events: none;
}

#DPContainer.DPContainer .cds--popover-content {
  --cds-layout-size-height-sm: 32px;
  --cds-layout-size-height-md: 40px;
  --cds-layout-size-height-lg: 48px;
  box-sizing: border-box;
  padding: 0;
  border: 0;
  margin: 0;
  font-family: inherit;
  font-size: 100%;
  vertical-align: initial;
  position: absolute;
  z-index: 6000;
  display: none;
  border-radius: var(--cds-popover-border-radius, 2px);
  background-color: var(--cds-popover-background-color, var(--cds-layer));
  color: var(--cds-popover-text-color, var(--cds-text-primary, #161616));
  inline-size: -webkit-max-content;
  inline-size: -moz-max-content;
  inline-size: max-content;
  max-inline-size: 368px;
  pointer-events: auto;
}

#DPContainer.DPContainer .cds--layout--size-sm .cds--popover-content {
  --cds-layout-size-height: var(--cds-layout-size-height-sm);
}

#DPContainer.DPContainer .cds--layout--size-md .cds--popover-content {
  --cds-layout-size-height: var(--cds-layout-size-height-md);
}

#DPContainer.DPContainer .cds--popover-content *,#DPContainer.DPContainer .cds--popover-content :after,#DPContainer.DPContainer .cds--popover-content :before {
  box-sizing: inherit;
}

#DPContainer.DPContainer .cds--popover--open > .cds--popover > .cds--popover-content {
  display: block;
}

#DPContainer.DPContainer .cds--popover-content:before {
  position: absolute;
  display: none;
  content: "";
}

#DPContainer.DPContainer .cds--popover--open > .cds--popover > .cds--popover-content:before {
  display: block;
}

#DPContainer.DPContainer .cds--popover--auto-align.cds--popover-caret,#DPContainer.DPContainer .cds--popover-caret {
  position: absolute;
  z-index: 6000;
  display: none;
  background-color: var(--cds-popover-background-color, var(--cds-layer));
  will-change: transform;
}

#DPContainer.DPContainer .cds--popover--auto-align.cds--popover--caret.cds--popover--open > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--caret.cds--popover--open > .cds--popover > .cds--popover-caret {
  display: block;
}

#DPContainer.DPContainer .cds--popover--bottom:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-block-end: 0;
  inset-inline-start: 50%;
  transform: translate(-50%, calc(100% + var(--cds-popover-offset, 0)));
}

#DPContainer.DPContainer [dir="rtl"] .cds--popover--bottom:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  transform: translate(50%, calc(100% + var(--cds-popover-offset, 0)));
}

#DPContainer.DPContainer .cds--popover--bottom-left:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer .cds--popover--bottom-start:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-block-end: 0;
  inset-inline-start: 0;
  transform: translate(calc(var(--cds-popover-offset, 0) * -1), calc(100% + var(--cds-popover-offset, 0)));
}

#DPContainer.DPContainer [dir="rtl"] .cds--popover--bottom-left:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer [dir="rtl"] .cds--popover--bottom-start:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-inline-end: 0;
  inset-inline-start: auto;
}

#DPContainer.DPContainer .cds--popover--bottom-end:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer .cds--popover--bottom-right:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-block-end: 0;
  inset-inline-end: 0;
  transform: translate(var(--cds-popover-offset, 0), calc(100% + var(--cds-popover-offset, 0)));
}

#DPContainer.DPContainer [dir="rtl"] .cds--popover--bottom-end:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer [dir="rtl"] .cds--popover--bottom-right:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-inline-start: 0;
}

#DPContainer.DPContainer .cds--popover--bottom-end > .cds--popover > .cds--popover-content:before,#DPContainer.DPContainer .cds--popover--bottom-left > .cds--popover > .cds--popover-content:before,#DPContainer.DPContainer .cds--popover--bottom-right > .cds--popover > .cds--popover-content:before,#DPContainer.DPContainer .cds--popover--bottom-start > .cds--popover > .cds--popover-content:before,#DPContainer.DPContainer .cds--popover--bottom > .cds--popover > .cds--popover-content:before {
  block-size: var(--cds-popover-offset, 0);
  inset-block-start: 0;
  inset-inline-end: 0;
  inset-inline-start: 0;
  transform: translateY(-100%);
}

#DPContainer.DPContainer .cds--popover--bottom-end > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--bottom-left > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--bottom-right > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--bottom-start > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--bottom > .cds--popover > .cds--popover-caret {
  block-size: var(--cds-popover-caret-height, 6px);
  -webkit-clip-path: polygon(0 100%, 50% 0, 100% 100%);
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
  inline-size: var(--cds-popover-caret-width, 12px);
  inset-block-end: 0;
  inset-inline-start: 50%;
  transform: translate(-50%, var(--cds-popover-offset, 0));
}

#DPContainer.DPContainer [dir="rtl"] .cds--popover--bottom-end > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer [dir="rtl"] .cds--popover--bottom-left > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer [dir="rtl"] .cds--popover--bottom-right > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer [dir="rtl"] .cds--popover--bottom-start > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer [dir="rtl"] .cds--popover--bottom > .cds--popover > .cds--popover-caret {
  transform: translate(50%, var(--cds-popover-offset, 0));
}

#DPContainer.DPContainer .cds--popover--bottom-end.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--bottom-left.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--bottom-right.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--bottom-start.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--bottom.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret {
  block-size: var(--cds-popover-caret-height, 6px);
  -webkit-clip-path: polygon(0 100%, 50% 0, 100% 100%);
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
  inline-size: var(--cds-popover-caret-width, 12px);
}

#DPContainer.DPContainer .cds--popover--top:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-block-start: 0;
  inset-inline-start: 50%;
  transform: translate(-50%, calc(-100% - var(--cds-popover-offset, 0)));
}

#DPContainer.DPContainer [dir="rtl"] .cds--popover--top:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  transform: translate(50%, calc(-100% - var(--cds-popover-offset, 0)));
}

#DPContainer.DPContainer .cds--popover--top-left:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer .cds--popover--top-start:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-block-start: 0;
  inset-inline-start: 0;
  transform: translate(calc(var(--cds-popover-offset, 0) * -1), calc(-100% - var(--cds-popover-offset, 0)));
}

#DPContainer.DPContainer [dir="rtl"] .cds--popover--top-left:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer [dir="rtl"] .cds--popover--top-start:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-inline-end: 0;
  inset-inline-start: auto;
}

#DPContainer.DPContainer .cds--popover--top-end:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer .cds--popover--top-right:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-block-start: 0;
  inset-inline-end: 0;
  transform: translate(var(--cds-popover-offset, 0), calc(-100% - var(--cds-popover-offset, 0)));
}

#DPContainer.DPContainer [dir="rtl"] .cds--popover--top-end:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer [dir="rtl"] .cds--popover--top-right:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-inline-start: 0;
}

#DPContainer.DPContainer .cds--popover--top-end > .cds--popover > .cds--popover-content:before,#DPContainer.DPContainer .cds--popover--top-left > .cds--popover > .cds--popover-content:before,#DPContainer.DPContainer .cds--popover--top-right > .cds--popover > .cds--popover-content:before,#DPContainer.DPContainer .cds--popover--top-start > .cds--popover > .cds--popover-content:before,#DPContainer.DPContainer .cds--popover--top > .cds--popover > .cds--popover-content:before {
  block-size: var(--cds-popover-offset, 0);
  inset-block-end: 0;
  inset-inline-end: 0;
  inset-inline-start: 0;
  transform: translateY(100%);
}

#DPContainer.DPContainer .cds--popover--top-end > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--top-left > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--top-right > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--top-start > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--top > .cds--popover > .cds--popover-caret {
  block-size: var(--cds-popover-caret-height, 6px);
  -webkit-clip-path: polygon(0 0, 50% 100%, 100% 0);
  clip-path: polygon(0 0, 50% 100%, 100% 0);
  inline-size: var(--cds-popover-caret-width, 12px);
  inset-block-start: 0;
  inset-inline-start: 50%;
  transform: translate(-50%, calc(var(--cds-popover-offset, 0) * -1));
}

#DPContainer.DPContainer [dir="rtl"] .cds--popover--top-end:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer [dir="rtl"] .cds--popover--top-left:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer [dir="rtl"] .cds--popover--top-right:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer [dir="rtl"] .cds--popover--top-start:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer [dir="rtl"] .cds--popover--top:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret {
  transform: translate(50%, calc(var(--cds-popover-offset, 0) * -1));
}

#DPContainer.DPContainer .cds--popover--top-end.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--top-left.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--top-right.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--top-start.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--top.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret {
  block-size: var(--cds-popover-caret-height, 6px);
  -webkit-clip-path: polygon(0 0, 50% 100%, 100% 0);
  clip-path: polygon(0 0, 50% 100%, 100% 0);
  inline-size: var(--cds-popover-caret-width, 12px);
}

#DPContainer.DPContainer .cds--popover--right:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-block-start: 50%;
  inset-inline-start: 100%;
  transform: translate(var(--cds-popover-offset, 0), -50%);
}

#DPContainer.DPContainer .cds--popover--right-start:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer .cds--popover--right-top:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-block-start: 50%;
  inset-inline-start: 100%;
  transform: translate(var(--cds-popover-offset, 0), calc(var(--cds-popover-offset, 0) * 0.5 * -1 - 16px));
}

#DPContainer.DPContainer .cds--popover--right-bottom:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer .cds--popover--right-end:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-block-end: 50%;
  inset-inline-start: 100%;
  transform: translate(var(--cds-popover-offset, 0), calc(var(--cds-popover-offset, 0) * 0.5 + 16px));
}

#DPContainer.DPContainer [dir="rtl"] .cds--popover--right-bottom:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer [dir="rtl"] .cds--popover--right-end:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer [dir="rtl"] .cds--popover--right-start:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer [dir="rtl"] .cds--popover--right-top:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer [dir="rtl"] .cds--popover--right:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-inline-end: 100%;
  inset-inline-start: auto;
}

#DPContainer.DPContainer .cds--popover--right-bottom > .cds--popover > .cds--popover-content:before,#DPContainer.DPContainer .cds--popover--right-end > .cds--popover > .cds--popover-content:before,#DPContainer.DPContainer .cds--popover--right-start > .cds--popover > .cds--popover-content:before,#DPContainer.DPContainer .cds--popover--right-top > .cds--popover > .cds--popover-content:before,#DPContainer.DPContainer .cds--popover--right > .cds--popover > .cds--popover-content:before {
  inline-size: var(--cds-popover-offset, 0);
  inset-block-end: 0;
  inset-block-start: 0;
  inset-inline-start: 0;
  transform: translateX(-100%);
}

#DPContainer.DPContainer .cds--popover--right-bottom:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--right-end:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--right-start:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--right-top:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--right:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret {
  block-size: var(--cds-popover-caret-width, 12px);
  -webkit-clip-path: polygon(0 50%, 100% 0, 100% 100%);
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
  inline-size: var(--cds-popover-caret-height, 6px);
  inset-block-start: 50%;
  inset-inline-start: 100%;
  transform: translate(calc(var(--cds-popover-offset, 0) - 100%), -50%);
}

#DPContainer.DPContainer [dir="rtl"] .cds--popover--right-bottom:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer [dir="rtl"] .cds--popover--right-end:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer [dir="rtl"] .cds--popover--right-start:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer [dir="rtl"] .cds--popover--right-top:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer [dir="rtl"] .cds--popover--right:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret {
  inset-inline-end: 100%;
  inset-inline-start: auto;
}

#DPContainer.DPContainer .cds--popover--right-bottom.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--right-end.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--right-start.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--right-top.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--right.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret {
  block-size: var(--cds-popover-caret-width, 12px);
  -webkit-clip-path: polygon(0 50%, 100% 0, 100% 100%);
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
  inline-size: var(--cds-popover-caret-height, 6px);
}

#DPContainer.DPContainer .cds--popover--left:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-block-start: 50%;
  inset-inline-end: 100%;
  transform: translate(calc(var(--cds-popover-offset, 0) * -1 + 0.1px), -50%);
}

#DPContainer.DPContainer .cds--popover--left-start:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer .cds--popover--left-top:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-block-start: 50%;
  inset-inline-end: 100%;
  transform: translate(calc(var(--cds-popover-offset, 0) * -1), calc(var(--cds-popover-offset, 0) * -0.5 - 16px));
}

#DPContainer.DPContainer .cds--popover--left-bottom:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer .cds--popover--left-end:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-block-end: 50%;
  inset-inline-end: 100%;
  transform: translate(calc(var(--cds-popover-offset, 0) * -1), calc(var(--cds-popover-offset, 0) * 0.5 + 16px));
}

#DPContainer.DPContainer [dir="rtl"] .cds--popover--left-bottom:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer [dir="rtl"] .cds--popover--left-end:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer [dir="rtl"] .cds--popover--left-start:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer [dir="rtl"] .cds--popover--left-top:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content,#DPContainer.DPContainer [dir="rtl"] .cds--popover--left:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-content {
  inset-inline-end: auto;
  inset-inline-start: 100%;
}

#DPContainer.DPContainer .cds--popover--left-bottom > .cds--popover > .cds--popover-content:before,#DPContainer.DPContainer .cds--popover--left-end > .cds--popover > .cds--popover-content:before,#DPContainer.DPContainer .cds--popover--left-start > .cds--popover > .cds--popover-content:before,#DPContainer.DPContainer .cds--popover--left-top > .cds--popover > .cds--popover-content:before,#DPContainer.DPContainer .cds--popover--left > .cds--popover > .cds--popover-content:before {
  inline-size: var(--cds-popover-offset, 0);
  inset-block-end: 0;
  inset-block-start: 0;
  inset-inline-end: 0;
  transform: translateX(100%);
}

#DPContainer.DPContainer .cds--popover--left-bottom:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--left-end:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--left-start:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--left-top:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--left:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret {
  block-size: var(--cds-popover-caret-width, 12px);
  -webkit-clip-path: polygon(0 0, 100% 50%, 0 100%);
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  inline-size: var(--cds-popover-caret-height, 6px);
  inset-block-start: 50%;
  inset-inline-end: 100%;
  transform: translate(calc(var(--cds-popover-offset, 0) * -1 + 100%), -50%);
}

#DPContainer.DPContainer [dir="rtl"] .cds--popover--left-bottom:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer [dir="rtl"] .cds--popover--left-end:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer [dir="rtl"] .cds--popover--left-start:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer [dir="rtl"] .cds--popover--left-top:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret,#DPContainer.DPContainer [dir="rtl"] .cds--popover--left:not(.cds--popover--auto-align) > .cds--popover > .cds--popover-caret {
  inset-inline-end: auto;
  inset-inline-start: 100%;
}

#DPContainer.DPContainer .cds--popover--left-bottom.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--left-end.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--left-start.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--left-top.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret,#DPContainer.DPContainer .cds--popover--left.cds--popover--auto-align > .cds--popover > .cds--popover-content > .cds--popover-caret {
  block-size: var(--cds-popover-caret-width, 12px);
  -webkit-clip-path: polygon(0 0, 100% 50%, 0 100%);
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  inline-size: var(--cds-popover-caret-height, 6px);
}

#DPContainer.DPContainer .cds--tooltip {
  --cds-popover-offset: 12px;
}

#DPContainer.DPContainer .cds--tooltip-content {
  font-size: var(--cds-body-01-font-size, 14px);
  font-weight: var(--cds-body-01-font-weight, 400);
  line-height: var(--cds-body-01-line-height, 1.42857);
  letter-spacing: var(--cds-body-01-letter-spacing, 0.16px);
  padding: var(--cds-tooltip-padding-block, 16px) var(--cds-tooltip-padding-inline, 16px);
  color: var(--cds-text-inverse, #fff);
  max-inline-size: 288px;
}

#DPContainer.DPContainer .cds--icon-tooltip {
  --cds-tooltip-padding-block: 2px;
  --cds-popover-caret-width: 8px;
  --cds-popover-caret-height: 4px;
  --cds-popover-offset: 8px;
}

#DPContainer.DPContainer .cds--icon-tooltip .cds--tooltip-content {
  font-size: var(--cds-body-compact-01-font-size, 14px);
  font-weight: var(--cds-body-compact-01-font-weight, 400);
  line-height: var(--cds-body-compact-01-line-height, 1.28572);
  letter-spacing: var(--cds-body-compact-01-letter-spacing, 0.16px);
}

#DPContainer.DPContainer .cds--btn {
  --cds-layout-size-height-local: clamp(
        max(var(--cds-layout-size-height-min), var(--cds-layout-size-height-sm)),
        var(--cds-layout-size-height, var(--cds-layout-size-height-lg)),
        min(var(--cds-layout-size-height-max), var(--cds-layout-size-height-2xl))
    );
  --cds-layout-density-padding-inline-local: clamp(
        var(--cds-layout-density-padding-inline-min),
        var(--cds-layout-density-padding-inline, var(--cds-layout-density-padding-inline-normal)),
        var(--cds-layout-density-padding-inline-max)
    );
  --temp-1lh: (var(--cds-body-compact-01-line-height, 1.28572) * 1em);
  --temp-expressive-1lh: (var(--cds-body-compact-02-line-height, 1.375) * 1em);
  --temp-padding-block-max: calc((var(--cds-layout-size-height-lg) - var(--temp-1lh)) / 2 - 1px);
  box-sizing: border-box;
  padding: 0;
  border: 0;
  font-family: inherit;
  font-size: 100%;
  vertical-align: initial;
  font-size: var(--cds-body-compact-01-font-size, 14px);
  font-weight: var(--cds-body-compact-01-font-weight, 400);
  line-height: var(--cds-body-compact-01-line-height, 1.28572);
  letter-spacing: var(--cds-body-compact-01-letter-spacing, 0.16px);
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  justify-content: space-between;
  border-radius: 0;
  margin: 0;
  cursor: pointer;
  inline-size: -webkit-max-content;
  inline-size: -moz-max-content;
  inline-size: max-content;
  max-inline-size: 320px;
  min-block-size: var(--cds-layout-size-height-local);
  outline: none;
  padding-block: min((var(--cds-layout-size-height-local) - var(--temp-1lh))/2 - 1px, var(--temp-padding-block-max));
  padding-inline-end: calc(var(--cds-layout-density-padding-inline-local) * 3 + 15px);
  padding-inline-start: calc(var(--cds-layout-density-padding-inline-local) - 1px);
  text-align: start;
  text-decoration: none;
  transition: background 70ms cubic-bezier(0, 0, 0.38, 0.9), box-shadow 70ms cubic-bezier(0, 0, 0.38, 0.9), border-color 70ms cubic-bezier(0, 0, 0.38, 0.9), outline 70ms cubic-bezier(0, 0, 0.38, 0.9);
  vertical-align: top;
}

#DPContainer.DPContainer .cds--btn *,#DPContainer.DPContainer .cds--btn :after,#DPContainer.DPContainer .cds--btn :before {
  box-sizing: inherit;
}

#DPContainer.DPContainer .cds--btn.cds--btn--disabled,#DPContainer.DPContainer .cds--btn.cds--btn--disabled:focus,#DPContainer.DPContainer .cds--btn.cds--btn--disabled:hover,#DPContainer.DPContainer .cds--btn:disabled,#DPContainer.DPContainer .cds--btn:focus:disabled,#DPContainer.DPContainer .cds--btn:hover:disabled {
  border-color: var(--cds-button-disabled, #c6c6c6);
  background: var(--cds-button-disabled, #c6c6c6);
  box-shadow: none;
  color: var(--cds-text-on-color-disabled, #8d8d8d);
  cursor: not-allowed;
}

#DPContainer.DPContainer .cds--btn .cds--btn__icon {
  position: absolute;
  flex-shrink: 0;
  block-size: 16px;
  inline-size: 16px;
  inset-block-start: min((var(--cds-layout-size-height-local) - 16px)/2 - 1px, var(--temp-padding-block-max));
  inset-inline-end: var(--cds-layout-density-padding-inline-local);
  margin-block-start: 1px;
}

#DPContainer.DPContainer .cds--btn::-moz-focus-inner {
  padding: 0;
  border: 0;
}

#DPContainer.DPContainer .cds--btn--primary {
  border: 1px solid transparent;
  background-color: var(--cds-button-primary, #0f62fe);
  color: var(--cds-text-on-color, #fff);
}

#DPContainer.DPContainer .cds--btn--primary:hover {
  background-color: var(--cds-button-primary-hover, #0050e6);
}

#DPContainer.DPContainer .cds--btn--primary:focus {
  border-color: var(--cds-button-focus-color, var(--cds-focus, #0f62fe));
  box-shadow: inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus, #0f62fe)), inset 0 0 0 2px var(--cds-background, #fff);
}

#DPContainer.DPContainer .cds--btn--primary:active {
  background-color: var(--cds-button-primary-active, #002d9c);
}

#DPContainer.DPContainer .cds--btn--primary .cds--btn__icon,#DPContainer.DPContainer .cds--btn--primary .cds--btn__icon path:not([data-icon-path]):not([fill="none"]) {
  fill: currentColor;
}

#DPContainer.DPContainer .cds--btn--primary:hover {
  color: var(--cds-text-on-color, #fff);
}

#DPContainer.DPContainer .cds--btn--ghost {
  border: 1px solid transparent;
  background-color: transparent;
  color: var(--cds-link-primary, #0f62fe);
  padding-inline-end: calc(var(--cds-layout-density-padding-inline-local) - 1px);
}

#DPContainer.DPContainer .cds--btn--ghost:hover {
  background-color: var(--cds-background-hover, hsla(0, 0%, 55%, 0.12));
}

#DPContainer.DPContainer .cds--btn--ghost:focus {
  border-color: var(--cds-button-focus-color, var(--cds-focus, #0f62fe));
  box-shadow: inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus, #0f62fe)), inset 0 0 0 2px var(--cds-background, #fff);
}

#DPContainer.DPContainer .cds--btn--ghost .cds--btn__icon,#DPContainer.DPContainer .cds--btn--ghost .cds--btn__icon path:not([data-icon-path]):not([fill="none"]) {
  fill: currentColor;
}

#DPContainer.DPContainer .cds--btn--ghost .cds--btn__icon {
  position: static;
  margin-inline-start: 8px;
}

#DPContainer.DPContainer .cds--btn--ghost:active,#DPContainer.DPContainer .cds--btn--ghost:hover {
  color: var(--cds-link-primary-hover, #0043ce);
}

#DPContainer.DPContainer .cds--btn--ghost:active {
  background-color: var(--cds-background-active, hsla(0, 0%, 55%, 0.5));
}

#DPContainer.DPContainer .cds--btn--ghost.cds--btn--disabled,#DPContainer.DPContainer .cds--btn--ghost.cds--btn--disabled:focus,#DPContainer.DPContainer .cds--btn--ghost.cds--btn--disabled:hover,#DPContainer.DPContainer .cds--btn--ghost:disabled,#DPContainer.DPContainer .cds--btn--ghost:focus:disabled,#DPContainer.DPContainer .cds--btn--ghost:hover:disabled {
  border-color: transparent;
  background: transparent;
  color: var(--cds-text-on-color-disabled, #8d8d8d);
  outline: none;
}

#DPContainer.DPContainer .cds--btn--ghost:not([disabled]) svg {
  fill: var(--cds-icon-primary, #161616);
}

#DPContainer.DPContainer .cds--btn--icon-only {
  justify-content: center;
  padding: 0;
  block-size: var(--cds-layout-size-height-local);
  inline-size: var(--cds-layout-size-height-local);
  padding-block-start: min((var(--cds-layout-size-height-local) - 16px)/2 - 1px, var(--temp-padding-block-max));
}

#DPContainer.DPContainer .cds--btn--icon-only > :first-child {
  margin-block-start: 1px;
  min-inline-size: 16px;
}

#DPContainer.DPContainer .cds--btn--icon-only .cds--btn__icon {
  position: static;
}

#DPContainer.DPContainer .cds--btn--icon-only.cds--btn--ghost .cds--btn__icon {
  margin: 0;
}

#DPContainer.DPContainer .cds--btn--md:not(.cds--btn--icon-only) .cds--btn__icon,#DPContainer.DPContainer .cds--btn--sm:not(.cds--btn--icon-only) .cds--btn__icon {
  margin-block-start: 0;
}

#DPContainer.DPContainer .cds--btn path[data-icon-path="inner-path"] {
  fill: none;
}

#DPContainer.DPContainer .cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,#DPContainer.DPContainer .cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill="none"]) {
  fill: var(--cds-icon-primary, #161616);
}

#DPContainer.DPContainer .cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon,#DPContainer.DPContainer .cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon path:not([data-icon-path]):not([fill="none"]),#DPContainer.DPContainer .cds--btn.cds--btn--icon-only.cds--btn--ghost[disabled]:hover .cds--btn__icon {
  fill: var(--cds-icon-on-color-disabled, #8d8d8d);
}

#DPContainer.DPContainer .cds--btn--ghost.cds--btn--icon-only[disabled],#DPContainer.DPContainer .cds--icon-tooltip--disabled .cds--tooltip-trigger__wrapper {
  cursor: not-allowed;
}

#DPContainer.DPContainer .cds--icon-tooltip--disabled .cds--btn--icon-only[disabled] {
  pointer-events: none;
}

@media (forced-colors: active), screen and (-ms-high-contrast: active) {
  #DPContainer.DPContainer .cds--btn:focus {
    color: Highlight;
    outline: 1px solid Highlight;
  }

  #DPContainer.DPContainer .cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,  #DPContainer.DPContainer .cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill="none"]) {
    fill: ButtonText;
  }
}

#DPContainer.DPContainer .cds--overflow-menu,#DPContainer.DPContainer .cds--overflow-menu__trigger {
  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  text-align: start;
  inline-size: 100%;
  box-sizing: border-box;
  padding: 0;
  border: 0;
  margin: 0;
  font-family: inherit;
  font-size: 100%;
  vertical-align: initial;
  outline: 2px solid transparent;
  outline-offset: -2px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  block-size: 40px;
  cursor: pointer;
  inline-size: 40px;
  min-block-size: 40px;
  transition: outline 0.11s cubic-bezier(0, 0, 0.38, 0.9), background-color 0.11s cubic-bezier(0, 0, 0.38, 0.9);
}

#DPContainer.DPContainer .cds--overflow-menu::-moz-focus-inner,#DPContainer.DPContainer .cds--overflow-menu__trigger::-moz-focus-inner {
  border: 0;
}

#DPContainer.DPContainer .cds--overflow-menu *,#DPContainer.DPContainer .cds--overflow-menu :after,#DPContainer.DPContainer .cds--overflow-menu :before,#DPContainer.DPContainer .cds--overflow-menu__trigger *,#DPContainer.DPContainer .cds--overflow-menu__trigger :after,#DPContainer.DPContainer .cds--overflow-menu__trigger :before {
  box-sizing: inherit;
}

#DPContainer.DPContainer .cds--overflow-menu:focus,#DPContainer.DPContainer .cds--overflow-menu__trigger:focus {
  outline: 2px solid var(--cds-focus, #0f62fe);
  outline-offset: -2px;
}

@media screen and (prefers-contrast) {
  #DPContainer.DPContainer .cds--overflow-menu:focus,  #DPContainer.DPContainer .cds--overflow-menu__trigger:focus {
    outline-style: dotted;
  }
}

#DPContainer.DPContainer .cds--overflow-menu:hover,#DPContainer.DPContainer .cds--overflow-menu__trigger:hover {
  background-color: var(--cds-layer-hover);
}

#DPContainer.DPContainer .cds--overflow-menu > :first-child {
  margin-block-start: 0;
}

#DPContainer.DPContainer .cds--overflow-menu--sm {
  block-size: 32px;
  inline-size: 32px;
  min-block-size: 32px;
}

#DPContainer.DPContainer .cds--overflow-menu__trigger.cds--tooltip--a11y.cds--tooltip__trigger:focus {
  outline: 2px solid var(--cds-focus, #0f62fe);
  outline-offset: -2px;
}

@media screen and (prefers-contrast) {
  #DPContainer.DPContainer .cds--overflow-menu__trigger.cds--tooltip--a11y.cds--tooltip__trigger:focus {
    outline-style: dotted;
  }
}

#DPContainer.DPContainer .cds--overflow-menu__trigger.cds--tooltip--a11y.cds--tooltip__trigger:focus svg {
  outline: none;
}

#DPContainer.DPContainer .cds--overflow-menu.cds--overflow-menu--open,#DPContainer.DPContainer .cds--overflow-menu.cds--overflow-menu--open .cds--overflow-menu__trigger {
  box-shadow: 0 2px 6px var(--cds-shadow, rgba(0, 0, 0, 0.3));
  background-color: var(--cds-layer);
  transition: none;
}

#DPContainer.DPContainer .cds--overflow-menu__icon {
  block-size: 16px;
  fill: var(--cds-icon-primary, #161616);
  inline-size: 16px;
}

#DPContainer.DPContainer .cds--overflow-menu__wrapper {
  line-height: 0;
}

#DPContainer.DPContainer .cds--overflow-menu.cds--overflow-menu--open:hover {
  background-color: var(--cds-layer);
}

@media (forced-colors: active), screen and (-ms-high-contrast: active) {
  #DPContainer.DPContainer .cds--overflow-menu:focus {
    color: Highlight;
    outline: 1px solid Highlight;
  }

  #DPContainer.DPContainer .cds--overflow-menu svg {
    fill: ButtonText;
  }
}

#DPContainer.DPContainer .cds--overflow-menu__top-end,#DPContainer.DPContainer .cds--overflow-menu__top-start {
  transform: translateY(calc(-100% - var(--cds-popover-offset, 40px)));
}

#DPContainer.DPContainer .cds--chat-btn {
  border-radius: 24px;
}

#DPContainer.DPContainer .cds--chat-btn:not(.cds--chat-btn--with-icon) {
  padding-inline-end: 15px;
}

#DPContainer.DPContainer .cds--chat-btn.cds--btn--md {
  border-radius: 20px;
}

#DPContainer.DPContainer .cds--chat-btn.cds--btn--sm {
  border-radius: 16px;
}

#DPContainer.DPContainer .cds--chat-btn--quick-action {
  align-items: center;
  border: 1px solid var(--cds-chat-button, #0f62fe);
  background: transparent;
  color: var(--cds-chat-button, #0f62fe);
}

#DPContainer.DPContainer .cds--chat-btn--quick-action:hover:not(:active):not([disabled]) {
  border-color: transparent;
  background: var(--cds-chat-button-hover, hsla(0, 0%, 55%, 0.12));
  color: var(--cds-chat-button-text-hover, #0043ce);
}

#DPContainer.DPContainer .cds--chat-btn--quick-action:active {
  border-color: transparent;
  background: var(--cds-chat-button-active, hsla(0, 0%, 55%, 0.5));
  color: var(--cds-chat-button-text-hover, #0043ce);
}

#DPContainer.DPContainer .cds--chat-btn--quick-action.cds--btn--ghost:focus {
  border-color: var(--cds-focus, #0f62fe);
  box-shadow: inset 0 0 0 1px var(--cds-focus, #0f62fe);
}

#DPContainer.DPContainer .cds--chat-btn--quick-action.cds--btn--ghost:hover:focus {
  border-color: var(--cds-focus, #0f62fe);
  box-shadow: inset 0 0 0 1px var(--cds-focus-inset, #fff);
}

#DPContainer.DPContainer .cds--chat-btn--quick-action[disabled],#DPContainer.DPContainer .cds--chat-btn--quick-action[disabled]:hover {
  border-color: var(--cds-button-disabled, #c6c6c6);
  color: var(--cds-button-disabled, #c6c6c6);
}

#DPContainer.DPContainer input:-webkit-autofill,#DPContainer.DPContainer input:-webkit-autofill:focus,#DPContainer.DPContainer input:-webkit-autofill:hover,#DPContainer.DPContainer textarea:-webkit-autofill,#DPContainer.DPContainer textarea:-webkit-autofill:focus,#DPContainer.DPContainer textarea:-webkit-autofill:hover {
  box-shadow: 0 0 0 1000px var(--cds-field) inset;
  -webkit-text-fill-color: var(--cds-text-primary, #161616);
}

#DPContainer.DPContainer .cds--label {
  font-size: var(--cds-label-01-font-size, 12px);
  font-weight: var(--cds-label-01-font-weight, 400);
  line-height: var(--cds-label-01-line-height, 1.33333);
  letter-spacing: var(--cds-label-01-letter-spacing, 0.32px);
  display: inline-block;
  color: var(--cds-text-secondary, #525252);
  font-weight: 400;
  line-height: 16px;
  margin-block-end: 8px;
  vertical-align: initial;
}

#DPContainer.DPContainer .cds--label html {
  font-size: 100%;
}

#DPContainer.DPContainer .cds--label body {
  font-weight: 400;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, \.SFNSText-Regular, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

#DPContainer.DPContainer .cds--label--no-margin {
  margin-block-end: 0;
}

#DPContainer.DPContainer .cds--label + .cds--tooltip {
  position: relative;
  inset-block-start: 3.2px;
  inset-inline-start: 8px;
}

#DPContainer.DPContainer .cds--label + .cds--tooltip .cds--tooltip__trigger {
  box-sizing: border-box;
  margin: 0;
  font-family: inherit;
  font-size: 100%;
  vertical-align: initial;
  display: inline-block;
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  cursor: pointer;
  text-align: start;
  inline-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--cds-label-01-font-size, 12px);
  font-weight: var(--cds-label-01-font-weight, 400);
  line-height: var(--cds-label-01-line-height, 1.33333);
  letter-spacing: var(--cds-label-01-letter-spacing, 0.32px);
}

#DPContainer.DPContainer .cds--label + .cds--tooltip .cds--tooltip__trigger *,#DPContainer.DPContainer .cds--label + .cds--tooltip .cds--tooltip__trigger :after,#DPContainer.DPContainer .cds--label + .cds--tooltip .cds--tooltip__trigger :before {
  box-sizing: inherit;
}

#DPContainer.DPContainer .cds--label + .cds--tooltip .cds--tooltip__trigger::-moz-focus-inner {
  border: 0;
}

#DPContainer.DPContainer .cds--label + .cds--tooltip .cds--tooltip__trigger:focus {
  outline: 1px solid var(--cds-focus, #0f62fe);
}

#DPContainer.DPContainer .cds--label + .cds--tooltip .cds--tooltip__trigger svg {
  fill: var(--cds-icon-secondary, #525252);
}

#DPContainer.DPContainer .cds--label + .cds--tooltip .cds--tooltip__trigger svg :hover {
  fill: var(--cds-icon-primary, #161616);
}

#DPContainer.DPContainer input[type="number"] {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, \.SFNSText-Regular, sans-serif;
}

#DPContainer.DPContainer input[data-invalid]:not(:focus) {
  outline: 2px solid var(--cds-support-error, #da1e28);
  outline-offset: -2px;
}

@media screen and (prefers-contrast) {
  #DPContainer.DPContainer input[data-invalid]:not(:focus) {
    outline-style: dotted;
  }
}

#DPContainer.DPContainer input:not(output, [data-invalid]):-moz-ui-invalid {
  box-shadow: none;
}

#DPContainer.DPContainer .cds--label--disabled {
  color: var(--cds-text-disabled, hsla(0, 0%, 9%, 0.25));
}

@supports (-ms-accelerator: true) {
  #DPContainer.DPContainer .cds--copy-btn .cds--copy-btn__feedback {
    inline-size: auto;
  }
}

@supports (-ms-ime-align: auto) {
  #DPContainer.DPContainer .cds--copy-btn .cds--copy-btn__feedback {
    inline-size: auto;
  }
}

@supports (-ms-accelerator: true) {
  #DPContainer.DPContainer .cds--snippet--inline .cds--copy-btn__feedback {
    inline-size: auto;
  }
}

@supports (-ms-ime-align: auto) {
  #DPContainer.DPContainer .cds--snippet--inline .cds--copy-btn__feedback {
    inline-size: auto;
  }
}

@media not all and (min-resolution >= 0.001dpcm) {
@supports (-webkit-appearance: none) and (stroke-color: transparent) {
    #DPContainer.DPContainer .cds--snippet__overflow-indicator--left {
      background-image: linear-gradient(to left, rgba(var(--cds-layer), 0), var(--cds-layer));
    }

    #DPContainer.DPContainer .cds--snippet__overflow-indicator--right {
      background-image: linear-gradient(to right, rgba(var(--cds-layer), 0), var(--cds-layer));
    }
}
}

#DPContainer.DPContainer .cds--text-input {
  --cds-layout-size-height-local: clamp(
        max(var(--cds-layout-size-height-min), var(--cds-layout-size-height-sm)),
        var(--cds-layout-size-height, var(--cds-layout-size-height-md)),
        min(var(--cds-layout-size-height-max), var(--cds-layout-size-height-lg))
    );
  --cds-layout-density-padding-inline-local: clamp(
        var(--cds-layout-density-padding-inline-min),
        var(--cds-layout-density-padding-inline, var(--cds-layout-density-padding-inline-normal)),
        var(--cds-layout-density-padding-inline-max)
    );
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 100%;
  vertical-align: initial;
  font-size: var(--cds-body-compact-01-font-size, 14px);
  font-weight: var(--cds-body-compact-01-font-weight, 400);
  line-height: var(--cds-body-compact-01-line-height, 1.28572);
  letter-spacing: var(--cds-body-compact-01-letter-spacing, 0.16px);
  outline: 2px solid transparent;
  outline-offset: -2px;
  padding: 0 var(--cds-layout-density-padding-inline-local);
  border: none;
  background-color: var(--cds-field);
  block-size: var(--cds-layout-size-height-local);
  border-block-end: 1px solid var(--cds-border-strong);
  color: var(--cds-text-primary, #161616);
  font-family: inherit;
  inline-size: 100%;
  transition: background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9), outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
}

#DPContainer.DPContainer .cds--text-input *,#DPContainer.DPContainer .cds--text-input :after,#DPContainer.DPContainer .cds--text-input :before {
  box-sizing: inherit;
}

#DPContainer.DPContainer .cds--text-input:active,#DPContainer.DPContainer .cds--text-input:focus {
  outline: 2px solid var(--cds-focus, #0f62fe);
  outline-offset: -2px;
}

@media screen and (prefers-contrast) {
  #DPContainer.DPContainer .cds--text-input:active,  #DPContainer.DPContainer .cds--text-input:focus {
    outline-style: dotted;
  }
}

#DPContainer.DPContainer .cds--text-input-wrapper svg[hidden] {
  display: none;
}

#DPContainer.DPContainer .cds--text-input::-moz-placeholder {
  color: var(--cds-text-placeholder, hsla(0, 0%, 9%, 0.4));
  opacity: 1;
}

#DPContainer.DPContainer .cds--text-input::placeholder {
  color: var(--cds-text-placeholder, hsla(0, 0%, 9%, 0.4));
  opacity: 1;
}

@supports (-ms-accelerator: true) {
  #DPContainer.DPContainer .cds--text-input--password__visibility .cds--assistive-text,  #DPContainer.DPContainer .cds--text-input--password__visibility + .cds--assistive-text,  #DPContainer.DPContainer .cds--text-input--password__visibility:after {
    inline-size: auto;
  }
}

@supports (-ms-ime-align: auto) {
  #DPContainer.DPContainer .cds--text-input--password__visibility .cds--assistive-text,  #DPContainer.DPContainer .cds--text-input--password__visibility + .cds--assistive-text,  #DPContainer.DPContainer .cds--text-input--password__visibility:after {
    inline-size: auto;
  }
}

@keyframes cds--tooltip-fade {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

#DPContainer.DPContainer .cds--text-input:disabled {
  outline: 2px solid transparent;
  outline-offset: -2px;
  background-color: var(--cds-field);
  border-block-end: 1px solid transparent;
  color: var(--cds-text-disabled, hsla(0, 0%, 9%, 0.25));
  cursor: not-allowed;
  -webkit-text-fill-color: var(--cds-text-disabled, hsla(0, 0%, 9%, 0.25));
}

#DPContainer.DPContainer .cds--text-input:disabled::-moz-placeholder {
  color: var(--cds-text-disabled, hsla(0, 0%, 9%, 0.25));
  opacity: 1;
}

#DPContainer.DPContainer .cds--text-input:disabled::placeholder {
  color: var(--cds-text-disabled, hsla(0, 0%, 9%, 0.25));
  opacity: 1;
}

#DPContainer.DPContainer .cds--text-input-wrapper.cds--text-input-wrapper--inline {
  flex-flow: row wrap;
}

#DPContainer.DPContainer .cds--text-input-wrapper .cds--label--inline {
  flex: 1;
  margin: 13px 0 0;
  overflow-wrap: break-word;
  word-break: break-word;
}

#DPContainer.DPContainer .cds--text-input-wrapper .cds--label--inline--sm {
  margin-block-start: 9px;
}

#DPContainer.DPContainer .cds--text-input__label-wrapper {
  display: flex;
  justify-content: space-between;
  inline-size: 100%;
}

@media not all and (min-resolution >= 0.001dpcm) {
@supports (-webkit-appearance: none) and (stroke-color: transparent) {
    #DPContainer.DPContainer .cds--tag.cds--skeleton {
      transform: translateZ(0);
    }
}
}

#DPContainer.DPContainer .cds--list-box__wrapper--inline {
  display: inline-grid;
  align-items: center;
  grid-gap: 4px;
  grid-template: auto auto/auto auto;
}

#DPContainer.DPContainer .cds--list-box__wrapper--inline .cds--label {
  font-size: var(--cds-body-compact-01-font-size, 14px);
  font-weight: var(--cds-body-compact-01-font-weight, 400);
  line-height: var(--cds-body-compact-01-line-height, 1.28572);
  letter-spacing: var(--cds-body-compact-01-letter-spacing, 0.16px);
}

#DPContainer.DPContainer .cds--list-box__wrapper--inline .cds--label {
  margin: 0;
}

#DPContainer.DPContainer .cds--list-box {
  position: relative;
  border: none;
  background-color: var(--cds-field);
  block-size: 40px;
  border-block-end: 1px solid var(--cds-border-strong);
  color: var(--cds-text-primary, #161616);
  cursor: pointer;
  inline-size: 100%;
  max-block-size: 40px;
  transition: all 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
}

#DPContainer.DPContainer .cds--list-box html {
  font-size: 100%;
}

#DPContainer.DPContainer .cds--list-box body {
  font-weight: 400;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, \.SFNSText-Regular, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

#DPContainer.DPContainer .cds--list-box:hover {
  background-color: var(--cds-field-hover);
}

#DPContainer.DPContainer .cds--list-box--sm {
  block-size: 32px;
  max-block-size: 32px;
}

#DPContainer.DPContainer .cds--list-box .cds--text-input {
  block-size: 100%;
  min-inline-size: 0;
}

#DPContainer.DPContainer .cds--list-box--disabled:hover {
  background-color: var(--cds-field);
}

#DPContainer.DPContainer .cds--list-box--disabled {
  border-block-end-color: transparent;
  outline: none;
}

#DPContainer.DPContainer .cds--list-box--disabled .cds--list-box__label,#DPContainer.DPContainer .cds--list-box--disabled.cds--list-box--inline .cds--list-box__label {
  color: var(--cds-text-disabled, hsla(0, 0%, 9%, 0.25));
}

#DPContainer.DPContainer .cds--list-box--disabled .cds--list-box__menu-icon > svg {
  fill: var(--cds-icon-disabled, hsla(0, 0%, 9%, 0.25));
}

#DPContainer.DPContainer .cds--list-box--disabled,#DPContainer.DPContainer .cds--list-box--disabled .cds--list-box__menu-icon {
  cursor: not-allowed;
}

#DPContainer.DPContainer .cds--list-box.cds--list-box--inline {
  border-width: 0;
  background-color: transparent;
}

#DPContainer.DPContainer .cds--list-box.cds--list-box--inline:hover {
  background-color: var(--cds-layer-hover);
}

#DPContainer.DPContainer .cds--list-box.cds--list-box--inline.cds--list-box--disabled:hover {
  background-color: transparent;
}

#DPContainer.DPContainer .cds--list-box.cds--list-box--inline .cds--list-box__menu-icon {
  inset-inline-end: 8px;
}

#DPContainer.DPContainer .cds--list-box--inline .cds--list-box__label {
  color: var(--cds-text-primary, #161616);
}

#DPContainer.DPContainer .cds--list-box__label {
  font-size: var(--cds-body-compact-01-font-size, 14px);
  font-weight: var(--cds-body-compact-01-font-weight, 400);
  line-height: var(--cds-body-compact-01-line-height, 1.28572);
  letter-spacing: var(--cds-body-compact-01-letter-spacing, 0.16px);
  overflow: hidden;
  color: var(--cds-text-primary, #161616);
  text-overflow: ellipsis;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  white-space: nowrap;
}

#DPContainer.DPContainer .cds--list-box__menu-icon {
  box-sizing: border-box;
  margin: 0;
  font-family: inherit;
  font-size: 100%;
  vertical-align: initial;
  display: inline-block;
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  text-align: start;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  block-size: 24px;
  cursor: pointer;
  inline-size: 24px;
  inset-inline-end: 12px;
  outline: none;
  transition: transform 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
}

#DPContainer.DPContainer .cds--list-box__menu-icon *,#DPContainer.DPContainer .cds--list-box__menu-icon :after,#DPContainer.DPContainer .cds--list-box__menu-icon :before {
  box-sizing: inherit;
}

#DPContainer.DPContainer .cds--list-box__menu-icon::-moz-focus-inner {
  border: 0;
}

#DPContainer.DPContainer .cds--list-box__menu-icon > svg {
  fill: var(--cds-icon-primary, #161616);
}

#DPContainer.DPContainer .cds--list-box__menu-icon--open {
  justify-content: center;
  inline-size: 24px;
  transform: rotate(180deg);
}

#DPContainer.DPContainer .cds--list-box__menu {
  box-shadow: 0 2px 6px var(--cds-shadow, rgba(0, 0, 0, 0.3));
  position: absolute;
  z-index: 9100;
  display: none;
  background-color: var(--cds-layer);
  inline-size: 100%;
  inset-inline-end: 0;
  inset-inline-start: 0;
  overflow-y: auto;
  transition: max-height 0.11s cubic-bezier(0.2, 0, 0.38, 0.9);
}

#DPContainer.DPContainer .cds--list-box__menu:focus {
  outline: 1px solid var(--cds-focus, #0f62fe);
}

@media screen and (prefers-contrast) {
  #DPContainer.DPContainer .cds--list-box__menu:focus {
    outline-style: dotted;
  }
}

#DPContainer.DPContainer .cds--list-box--up .cds--list-box__menu {
  inset-block-end: 40px;
}

#DPContainer.DPContainer .cds--list-box--up .cds--list-box--sm .cds--list-box__menu,#DPContainer.DPContainer .cds--list-box--up.cds--list-box--sm .cds--list-box__menu {
  inset-block-end: 32px;
}

#DPContainer.DPContainer .cds--list-box input[role="combobox"],#DPContainer.DPContainer .cds--list-box input[type="text"] {
  background-color: inherit;
  min-inline-size: 0;
  text-overflow: ellipsis;
}

@media (forced-colors: active), screen and (-ms-high-contrast: active) {
  #DPContainer.DPContainer .cds--list-box__menu {
    outline: 1px solid transparent;
  }

  #DPContainer.DPContainer .cds--list-box__menu-icon > svg {
    fill: ButtonText;
  }
}

#DPContainer.DPContainer .cds--menu {
  box-sizing: border-box;
  border: 0;
  margin: 0;
  font-family: inherit;
  font-size: 100%;
  vertical-align: initial;
  box-shadow: 0 2px 6px var(--cds-shadow, rgba(0, 0, 0, 0.3));
  position: fixed;
  z-index: 9000;
  padding: 4px 0;
  background-color: var(--cds-layer);
  max-inline-size: 288px;
  min-inline-size: 160px;
  opacity: 0;
  overflow-y: auto;
  visibility: hidden;
}

#DPContainer.DPContainer .cds--menu *,#DPContainer.DPContainer .cds--menu :after,#DPContainer.DPContainer .cds--menu :before {
  box-sizing: inherit;
}

#DPContainer.DPContainer .cds--menu--open {
  visibility: visible;
}

#DPContainer.DPContainer .cds--menu--open:focus {
  outline: 1px solid var(--cds-focus, #0f62fe);
}

@media screen and (prefers-contrast) {
  #DPContainer.DPContainer .cds--menu--open:focus {
    outline-style: dotted;
  }
}

#DPContainer.DPContainer .cds--menu:not(.cds--menu--open) .cds--menu--open {
  visibility: hidden;
}

@-moz-document url-prefix()  {
  #DPContainer.DPContainer .cds--data-table--sticky-header tbody,  #DPContainer.DPContainer .cds--data-table--sticky-header thead {
    scrollbar-width: none;
  }
}

#DPContainer.DPContainer .cds--action-list {
  display: flex;
  align-items: center;
}

#DPContainer.DPContainer .cds--action-list .cds--btn {
  color: var(--cds-text-on-color, #fff);
  padding-inline-end: 16px;
  padding-inline-start: 16px;
  white-space: nowrap;
}

#DPContainer.DPContainer .cds--action-list .cds--btn:disabled {
  border-color: transparent;
  background-color: transparent;
  color: var(--cds-text-on-color, #fff);
  opacity: 0.5;
}

#DPContainer.DPContainer .cds--action-list .cds--btn .cds--btn__icon {
  position: static;
  fill: var(--cds-icon-on-color, #fff);
  margin-inline-start: 8px;
}

#DPContainer.DPContainer .cds--action-list .cds--btn--primary:after,#DPContainer.DPContainer .cds--action-list .cds--btn--primary:before,#DPContainer.DPContainer .cds--action-list .cds--btn--primary:focus:after,#DPContainer.DPContainer .cds--action-list .cds--btn--primary:focus:before {
  display: none;
}

#DPContainer.DPContainer .cds--action-list .cds--btn--primary:focus {
  outline: 2px solid var(--cds-layer);
  outline-offset: -2px;
}

@keyframes fp-fade-in-down {
  0% {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 1;
    transform: translateZ(0);
  }
}

@keyframes fp-slide-left {
  0% {
    transform: translateZ(0);
  }

  to {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes fp-slide-left-new {
  0% {
    transform: translate3d(100%, 0, 0);
  }

  to {
    transform: translateZ(0);
  }
}

@keyframes fp-slide-right {
  0% {
    transform: translateZ(0);
  }

  to {
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes fp-slide-right-new {
  0% {
    transform: translate3d(-100%, 0, 0);
  }

  to {
    transform: translateZ(0);
  }
}

@keyframes fp-fade-out {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fp-fade-in {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media not all and (resolution >= 0.001dpcm) {
@supports (-webkit-appearance: none) and (stroke-color: transparent) {
    #DPContainer.DPContainer circle.cds--loading__background {
      stroke-dasharray: 265;
      stroke-dashoffset: 0;
    }
}
}

@keyframes cds--rotate {
  0% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(1turn);
  }
}

@keyframes cds--rotate-end-p1 {
  to {
    transform: rotate(1turn);
  }
}

@keyframes cds--rotate-end-p2 {
  to {
    transform: rotate(-1turn);
  }
}

@keyframes cds--init-stroke {
  0% {
    stroke-dashoffset: 276.4608;
  }

  to {
    stroke-dashoffset: 52.527552;
  }
}

@keyframes cds--stroke-end {
  0% {
    stroke-dashoffset: 52.527552;
  }

  to {
    stroke-dashoffset: 276.4608;
  }
}

@-moz-document url-prefix()  {
  #DPContainer.DPContainer .cds--file__selected-file .cds--file-filename-container-wrap-invalid .cds--file-filename-tooltip {
    inline-size: -moz-available;
  }
}

@-moz-document url-prefix()  {
  #DPContainer.DPContainer .cds--file__selected-file .cds--file-filename-tooltip {
    inline-size: -moz-available;
  }
}

@-moz-document url-prefix()  {
  #DPContainer.DPContainer .cds--file__selected-file .cds--file-filename-button {
    inline-size: -moz-available;
  }
}

@-moz-document url-prefix()  {
  #DPContainer.DPContainer .cds--select-input:-moz-focusring,  #DPContainer.DPContainer .cds--select-input::-moz-focus-inner {
    background-image: none;
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
}

@keyframes prefix--stroke {
  to {
    stroke-dashoffset: 0;
  }
}

#DPContainer.DPContainer .cds--menu-button__container {
  display: inline-block;
}

#DPContainer.DPContainer .cds--menu-button__trigger:not(.cds--btn--ghost) {
  min-inline-size: 192px;
}

#DPContainer.DPContainer .cds--menu-button__trigger svg {
  transition: transform 0.11s cubic-bezier(0.2, 0, 0.38, 0.9);
}

#DPContainer.DPContainer .cds--menu-button__trigger--open svg {
  transform: rotate(180deg);
}

#DPContainer.DPContainer .cds--menu-button__top,#DPContainer.DPContainer .cds--menu-button__top-end,#DPContainer.DPContainer .cds--menu-button__top-start {
  transform: translateY(calc(-100% - var(--cds-popover-offset, 48px)));
}

@-moz-document url-prefix()  {
  #DPContainer.DPContainer .cds--pagination-nav__page--select {
    text-indent: 0;
  }
}

@keyframes cds--progress-bar-indeterminate {
  0% {
    background-position-x: 25%;
  }

  80%, to {
    background-position-x: -105%;
  }
}

@keyframes cds--progress-bar-indeterminate-rtl {
  0% {
    background-position-x: -105%;
  }

  80%, to {
    background-position-x: 25%;
  }
}

#DPContainer.DPContainer .cds--tooltip__text {
  padding: 0;
  margin: 0;
  font-weight: 400;
}

@keyframes ai-skeleton-animation {
  0% {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
}

@media not all and (resolution >= 0.001dpcm) {
@supports (-webkit-appearance: none) and (stroke-color: transparent) {
    #DPContainer.DPContainer .cds--tabs .cds--tabs__overflow-indicator--left {
      background-image: linear-gradient(to left, rgba(var(--cds-background, #ffffff), 0), var(--cds-background, #fff));
    }

    #DPContainer.DPContainer .cds--tabs .cds--tabs__overflow-indicator--right {
      background-image: linear-gradient(to right, rgba(var(--cds-background, #ffffff), 0), var(--cds-background, #fff));
    }

    #DPContainer.DPContainer .cds--tabs.cds--tabs--contained .cds--tabs__overflow-indicator--left {
      background-image: linear-gradient(to left, rgba(var(--cds-layer-accent), 0), var(--cds-layer-accent));
    }

    #DPContainer.DPContainer .cds--tabs.cds--tabs--contained .cds--tabs__overflow-indicator--right {
      background-image: linear-gradient(to right, rgba(var(--cds-layer-accent), 0), var(--cds-layer-accent));
    }
}
}

@media not all and (resolution >= 0.001dpcm) {
@supports (-webkit-appearance: none) and (stroke-color: transparent) {
    #DPContainer.DPContainer .cds--tile--is-expanded .cds--tile-content__below-the-fold {
      overflow-y: auto;
    }
}
}

#DPContainer.DPContainer .cds--content {
  padding: 32px;
  color: var(--cds-text-primary, #161616);
  will-change: margin-left;
}

#DPContainer.DPContainer .cds--header ~ .cds--content,#DPContainer.DPContainer div:has(.cds--header) ~ .cds--content {
  margin-block-start: 48px;
}

#DPContainer.DPContainer .cds--header {
  box-sizing: border-box;
  padding: 0;
  border: 0;
  margin: 0;
  font-family: inherit;
  font-size: 100%;
  vertical-align: initial;
  position: fixed;
  z-index: 8000;
  display: flex;
  align-items: center;
  background-color: var(--cds-background, #fff);
  block-size: 48px;
  border-block-end: 1px solid var(--cds-border-subtle);
  inset-block-start: 0;
  inset-inline-end: 0;
  inset-inline-start: 0;
}

#DPContainer.DPContainer .cds--header *,#DPContainer.DPContainer .cds--header :after,#DPContainer.DPContainer .cds--header :before {
  box-sizing: inherit;
}

#DPContainer.DPContainer .cds--header__action {
  box-sizing: border-box;
  margin: 0;
  font-family: inherit;
  font-size: 100%;
  vertical-align: initial;
  display: inline-block;
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  cursor: pointer;
  text-align: start;
  inline-size: 100%;
  display: inline-flex;
  border: 1px solid transparent;
  block-size: 48px;
  inline-size: 48px;
  transition: background-color 0.11s, border-color 0.11s;
}

#DPContainer.DPContainer .cds--header__action *,#DPContainer.DPContainer .cds--header__action :after,#DPContainer.DPContainer .cds--header__action :before {
  box-sizing: inherit;
}

#DPContainer.DPContainer .cds--header__action::-moz-focus-inner {
  border: 0;
}

@media (max-width: 671.68px) {
  #DPContainer.DPContainer .cds--header__action {
    min-inline-size: 48px;
  }
}

#DPContainer.DPContainer .cds--header__action > :first-child {
  margin-block-start: 0;
}

#DPContainer.DPContainer .cds--header__action:hover {
  background-color: var(--cds-background-hover, hsla(0, 0%, 55%, 0.12));
}

#DPContainer.DPContainer .cds--header__action:focus {
  border-color: var(--cds-focus, #0f62fe);
  outline: none;
}

#DPContainer.DPContainer .cds--header__action:active {
  background-color: var(--cds-background-active, hsla(0, 0%, 55%, 0.5));
}

#DPContainer.DPContainer .cds--header__action.cds--btn--icon-only {
  align-items: center;
  justify-content: center;
}

#DPContainer.DPContainer .cds--btn.cds--btn--icon-only.cds--header__action svg {
  fill: var(--cds-icon-secondary, #525252);
}

#DPContainer.DPContainer .cds--btn.cds--btn--icon-only.cds--header__action:active svg,#DPContainer.DPContainer .cds--btn.cds--btn--icon-only.cds--header__action:hover svg,#DPContainer.DPContainer .cds--header__menu-trigger:hover > svg,#DPContainer.DPContainer .cds--header__menu-trigger > svg {
  fill: var(--cds-icon-primary, #161616);
}

#DPContainer.DPContainer a.cds--header__name {
  font-size: var(--cds-body-compact-01-font-size, 14px);
  font-weight: var(--cds-body-compact-01-font-weight, 400);
  line-height: var(--cds-body-compact-01-line-height, 1.28572);
  letter-spacing: var(--cds-body-compact-01-letter-spacing, 0.16px);
  display: flex;
  align-items: center;
  padding: 0 32px 0 16px;
  border: 2px solid transparent;
  block-size: 100%;
  font-weight: 600;
  letter-spacing: 0.1px;
  line-height: 20px;
  outline: none;
  text-decoration: none;
  transition: border-color 0.11s;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (max-width: 671.68px) {
  #DPContainer.DPContainer a.cds--header__name {
    padding: 0 16px;
  }
}

#DPContainer.DPContainer a.cds--header__name:focus {
  border-color: var(--cds-focus, #0f62fe);
}

#DPContainer.DPContainer a.cds--header__name,#DPContainer.DPContainer a.cds--header__name:hover {
  color: var(--cds-text-primary, #161616);
}

#DPContainer.DPContainer .cds--header__action:active {
  background-color: var(--cds-background-active, hsla(0, 0%, 55%, 0.5));
  color: var(--cds-text-primary, #161616);
}

#DPContainer.DPContainer .cds--header__menu {
  display: none;
  padding: 0;
  margin: 0;
  list-style: none;
}

#DPContainer.DPContainer .cds--header__menu-arrow {
  fill: var(--cds-icon-secondary, #525252);
  margin-inline-start: 8px;
  transition: transform 0.11s, fill 0.11s;
}

#DPContainer.DPContainer .cds--header-panel {
  position: fixed;
  z-index: 8000;
  overflow: hidden;
  border: none;
  background-color: var(--cds-layer);
  color: var(--cds-text-secondary, #525252);
  inline-size: 0;
  inset-block-end: 0;
  inset-block-start: 48px;
  inset-inline-end: 0;
  transition: width 0.11s cubic-bezier(0.2, 0, 1, 0.9);
  will-change: width;
}

@supports (-moz-appearance: none) {
  #DPContainer.DPContainer .cds--data-table td {
    background-clip: padding-box;
  }
}

@keyframes shimmer {
  0% {
    stroke: var(--cds-layer-accent-01, #e0e0e0);
  }

  20% {
    stroke: #fff;
    opacity: 0.5;
  }

  to {
    stroke: var(--cds-layer-accent-01, #e0e0e0);
  }
}

#DPContainer.DPContainer .cds--g10,#DPContainer.DPContainer .cds--g100,#DPContainer.DPContainer .cds--g90,#DPContainer.DPContainer .cds--white {
  background-color: unset;
}

@keyframes DPFadeIn {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes DPFadeInUp {
  0% {
    opacity: 0;
    transform: translateY(32px);
  }

  50% {
    transform: translateY(0);
  }

  to {
    opacity: 1;
  }
}

@keyframes DPFadeOut {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes DPSlideInFromRight {
  0% {
    left: 100%;
  }

  to {
    left: 0;
  }
}

@keyframes DPSlideOutToRight {
  0% {
    left: 0;
  }

  to {
    left: 100%;
  }
}

@keyframes DPSlideOutToTop {
  0% {
    top: 0;
  }

  to {
    top: -100%;
  }
}

@keyframes DPSlideInFromLeft {
  0% {
    right: 100%;
  }

  to {
    right: 0;
  }
}

@keyframes DPSlideOutToLeft {
  0% {
    right: 0;
  }

  to {
    right: 100%;
  }
}

@keyframes DPSlideInFromBottom {
  0% {
    top: 100%;
  }

  to {
    top: 0;
  }
}

@keyframes DPSlideOutToBottom {
  0% {
    top: 0;
  }

  to {
    top: 100%;
  }
}

@keyframes DPLauncherIn {
  0% {
    bottom: calc(var(--cds-chat-LAUNCHER-position-bottom) - 16px);
    opacity: 0;
  }

  to {
    bottom: var(--cds-chat-LAUNCHER-position-bottom);
    opacity: 1;
  }
}

@keyframes DPAnimateHeight {
  0% {
    height: var(--cds-chat-Animate-Start-Height);
  }

  to {
    height: var(--cds-chat-Animate-End-Height);
  }
}

#DPContainer.DPContainer .DP--primaryColor button.cds--overflow-menu--open {
  box-shadow: none;
  background-color: transparent;
  color: inherit;
}

#DPContainer.DPContainer .DP--primaryColor {
  color: var(--cds-chat-PRIMARY-color-text);
  background-color: var(--cds-chat-PRIMARY-color);
}

#DPContainer.DPContainer .DP--primaryColor .cds--overflow-menu__icon {
  fill: currentcolor;
}

#DPContainer.DPContainer .DP--primaryColor button.cds--btn--ghost,#DPContainer.DPContainer .DP--primaryColor button.cds--overflow-menu {
  color: currentcolor;
}

#DPContainer.DPContainer .DP--primaryColor button.cds--btn--ghost:not([disabled]) svg {
  fill: currentcolor;
}

#DPContainer.DPContainer .DP--primaryColor button.cds--btn--ghost:enabled:hover,#DPContainer.DPContainer .DP--primaryColor button.cds--overflow-menu--open:enabled:hover,#DPContainer.DPContainer .DP--primaryColor button.cds--overflow-menu:enabled:hover {
  background-color: var(--cds-chat-PRIMARY-color-hover);
}

#DPContainer.DPContainer .DP--primaryColor button.cds--btn--ghost:enabled:focus,#DPContainer.DPContainer .DP--primaryColor button.cds--overflow-menu--open:enabled:focus,#DPContainer.DPContainer .DP--primaryColor button.cds--overflow-menu:enabled:focus {
  border-color: var(--cds-chat-PRIMARY-color-focus);
  box-shadow: inset 0 0 0 1px var(--cds-chat-PRIMARY-color-focus);
  outline-color: var(--cds-chat-PRIMARY-color-focus);
}

#DPContainer.DPContainer .DP--primaryColor button.cds--btn--ghost:enabled:active,#DPContainer.DPContainer .DP--primaryColor button.cds--overflow-menu--open:enabled:active,#DPContainer.DPContainer .DP--primaryColor button.cds--overflow-menu:enabled:active {
  background-color: var(--cds-chat-PRIMARY-color-active);
}

#DPContainer.DPContainer .cds--g10,#DPContainer.DPContainer .cds--g100,#DPContainer.DPContainer .cds--g90,#DPContainer.DPContainer .cds--white {
  font-size: 100%;
  font-family: var(--cds-chat-BASE-font-family);
  font-feature-settings: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: var(--cds-chat-BASE-line-height-med);
  text-decoration: none;
}

#DPContainer.DPContainer .cds--g100,#DPContainer.DPContainer .cds--g90 {
  scrollbar-color: var(--cds-layer-03) var(--cds-layer-01);
}

#DPContainer.DPContainer .DPWidget__textEllipsis {
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: nowrap;
}

#DPContainer.DPContainer .DP__hidden {
  display: none;
}

#DPContainer.DPContainer #DPContainer.DPContainer,#DPContainer.DPContainer .datapowered-web-chat--reset-styles {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  background: none auto 0 0 repeat padding-box border-box scroll transparent;
  border-radius: 0;
  border: none;
  border-image: none;
  box-shadow: none;
  box-sizing: border-box;
  inset: auto;
  clear: none;
  clip: auto;
  color: inherit;
  -moz-columns: auto auto;
  columns: auto;
  -moz-column-gap: normal;
  column-gap: normal;
  -moz-column-rule: medium none #000;
  column-rule: medium none #000;
  -moz-column-span: 1;
  column-span: 1;
  counter-increment: none;
  counter-reset: none;
  cursor: auto;
  direction: inherit;
  display: block;
  float: none;
  font-family: inherit;
  font-feature-settings: inherit;
  font-size: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  height: auto;
  -webkit-hyphens: manual;
  hyphens: manual;
  letter-spacing: inherit;
  line-height: inherit;
  list-style-type: inherit;
  list-style-position: outside;
  list-style-image: none;
  margin: 0;
  max-height: none;
  max-width: none;
  min-height: 0;
  min-width: 0;
  opacity: 1;
  outline: medium none invert;
  overflow: visible;
  overflow: visible visible;
  padding: 0;
  perspective: none;
  perspective-origin: 50% 50%;
  position: static;
  quotes: "" "";
  table-layout: auto;
  text-align: inherit;
  text-decoration: inherit;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  transition: all 0s ease 0s;
  transform: none;
  transform-origin: 50% 50%;
  transform-style: flat;
  unicode-bidi: normal;
  visibility: inherit;
  white-space: normal;
  width: auto;
  word-break: normal;
  word-spacing: normal;
  z-index: auto;
}

#DPContainer.DPContainer .DPContainer--render {
  box-sizing: border-box;
  font-family: var(--cds-chat-BASE-font-family);
  color: var(--cds-text-primary, #161616);
  width: 100%;
  height: 100%;
}

#DPContainer.DPContainer .DPContainer--render[dir="rtl"] {
  direction: rtl;
}

#DPContainer.DPContainer .DPContainer--render > div > div[role="log"] {
  overflow: hidden;
  width: 1px;
  height: 1px;
  position: absolute;
  left: -10000px;
}

#DPContainer.DPContainer .DPContainer__LayoutDirection,#DPContainer.DPContainer .DPWidget {
  height: 100%;
  width: 100%;
}

#DPContainer.DPContainer .DPBrandingBanner {
  height: 35px;
  background-color: var(--cds-chat-BRANDING-background);
  color: var(--cds-chat-BRANDING-color-text-01);
  border-top: 1px solid var(--cds-chat-BRANDING-border-color);
  width: 100%;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  font-family: var(--cds-chat-BRANDING-font-family);
}

#DPContainer.DPContainer .DPBrandingBanner__text {
  height: 100%;
  position: relative;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  font-size: var(--cds-chat-BASE-font-size-small);
  display: flex;
  align-items: center;
}

#DPContainer.DPContainer .DPBrandingBanner__text span {
  display: none;
}

#DPContainer.DPContainer .DPBrandingBanner__text b {
  font-weight: var(--cds-chat-BASE-weight-semibold);
}

#DPContainer.DPContainer .DPBrandingBanner button {
  justify-content: center;
  align-items: center;
  width: 25px;
  height: inherit;
  min-height: unset;
  padding: 0;
  color: inherit;
  outline: 0;
  border: 0;
  margin: 0 3px;
}

#DPContainer.DPContainer .DPBrandingBanner__icon {
  width: 16px;
  height: 16px;
}

#DPContainer.DPContainer .DPBrandingOverlay {
  display: flex;
  background-color: var(--cds-chat-BRANDING-background);
  color: var(--cds-chat-BRANDING-color-text-01);
  height: 100%;
  width: 100%;
  flex-direction: column;
  font-family: var(--cds-chat-BRANDING-font-family);
  padding-bottom: 10px;
}

#DPContainer.DPContainer .DPBrandingOverlay__header {
  display: flex;
  justify-content: flex-end;
  padding: 8px 8px 0;
}

#DPContainer.DPContainer .DPBrandingOverlay__body {
  flex: 1;
  overflow: auto;
}

#DPContainer.DPContainer .DPBrandingOverlay__header button {
  color: inherit;
  padding: 8px;
  justify-content: center;
}

#DPContainer.DPContainer .DPBrandingOverlay__main-content {
  padding: 76px 16px 16px;
}

#DPContainer.DPContainer .DPBrandingOverlay__logoContainer {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  display: flex;
}

#DPContainer.DPContainer .DPBrandingOverlay__logoContainer .DPDataPoweredLogo {
  width: 70px;
  margin: 10px;
}

#DPContainer.DPContainer .DPBrandingOverlay__textHolder {
  margin-left: 20px;
  margin-top: 24px;
  width: 75%;
  max-width: 400px;
}

#DPContainer.DPContainer .DPBrandingOverlay__headline {
  font-size: 20px;
  line-height: 28px;
  font-weight: var(--cds-chat-BASE-weight-semibold);
  letter-spacing: 0;
  margin-bottom: 16px;
}

#DPContainer.DPContainer .DPBrandingOverlay__text {
  color: var(--cds-chat-BRANDING-color-text-02);
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.16px;
}

#DPContainer.DPContainer .DPBrandingOverlay__text a {
  color: var(--cds-chat-BRANDING-link);
  text-decoration: none;
}

#DPContainer.DPContainer .DPBrandingOverlay__text a:hover {
  text-decoration: underline;
}

#DPContainer.DPContainer .DPCustomPanel {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

#DPContainer.DPContainer .DPCustomPanel__ContentContainer {
  overflow: auto;
  background-color: var(--cds-background, #fff);
  height: 100%;
}

#DPContainer.DPContainer .DPCustomPanel__HostElement {
  height: 100%;
  width: 100%;
}

#DPContainer.DPContainer .DPCustomPanel .DPPanelContent {
  flex: 1;
}

#DPContainer.DPContainer .DPHeader__BotAvatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

#DPContainer.DPContainer svg.DPHeader__BotAvatar {
  fill: currentcolor;
  border-radius: unset;
}

#DPContainer.DPContainer .DPHeader {
  justify-content: center;
  font-size: var(--cds-chat-BASE-font-size-med);
  line-height: var(--cds-chat-BASE-line-height-med);
  border-bottom: 1px solid var(--cds-border-subtle-00, #e0e0e0);
  height: 41px;
}

#DPContainer.DPContainer .DPHeader,#DPContainer.DPContainer .DPHeader--content {
  display: flex;
  width: 100%;
  position: relative;
}

#DPContainer.DPContainer .DPHeader__Buttons {
  display: flex;
  align-items: center;
}

#DPContainer.DPContainer .DPHeader__Buttons .cds--btn:active,#DPContainer.DPContainer .DPHeader__Buttons .cds--btn:hover {
  color: var(--cds-chat-PRIMARY-color-text);
}

#DPContainer.DPContainer .DPWidget.DPWidget--rounded .DPHeader--content {
  border-start-start-radius: var(--cds-chat-CONTAINER-border-radius);
}

#DPContainer.DPContainer .DPWidget.DPWidget--rounded .DPHeader--content {
  border-start-end-radius: var(--cds-chat-CONTAINER-border-radius);
}

#DPContainer.DPContainer .DPHeader__CenterContainer:first-child {
  margin: 0 16px;
}

#DPContainer.DPContainer .DPHeader__CenterContainer {
  overflow: hidden;
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0 4px;
}

#DPContainer.DPContainer .DPHeader__Name {
  text-align: center;
  word-break: break-word;
  font-family: var(--cds-chat-BASE-header-font-family);
  font-size: var(--cds-heading-compact-01-font-size);
  line-height: var(--cds-heading-compact-01-line-height);
  font-weight: var(--cds-heading-compact-01-font-weight);
  letter-spacing: var(--cds-heading-compact-01-letter-spacing);
}

#DPContainer.DPContainer .DPHeader__BackButton svg,#DPContainer.DPContainer .DPHeader__CloseButton svg {
  width: 16px;
  height: 16px;
}

#DPContainer.DPContainer .DPContainer--render[dir="rtl"] .DPHomeScreenHeader button.DPHeader__BackButton {
  transform: none;
}

#DPContainer.DPContainer .DPHomeScreen {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--cds-chat-shell-background, #fff);
}

#DPContainer.DPContainer .DPHomeScreen--backgroundGradientBottomUp {
  background-image: linear-gradient(
        to bottom,
        var(--cds-chat-shell-background, #fff) 0,
        rgb(var(--cds-chat-ACCENT-color-r) var(--cds-chat-ACCENT-color-g) var(--cds-chat-ACCENT-color-b) / 15%) 70%,
        rgb(var(--cds-chat-ACCENT-color-r) var(--cds-chat-ACCENT-color-g) var(--cds-chat-ACCENT-color-b) / 50%) 100%
    );
}

#DPContainer.DPContainer .DPHomeScreen--backgroundGradientBottomUp:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.35;
}

#DPContainer.DPContainer .DPHomeScreen--backgroundGradientBottomUp:before {
  opacity: 0.5;
}

#DPContainer.DPContainer .DPHomeScreen__HomeScreenBottomElement {
  max-width: 672px;
  margin: auto;
  width: 100%;
  position: relative;
}

#DPContainer.DPContainer .DPHomeScreen__content {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

#DPContainer.DPContainer .DPHomeScreen__bodyWrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  position: relative;
}

#DPContainer.DPContainer .DPHomeScreen__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px 32px;
}

#DPContainer.DPContainer .DPHomeScreen__body--customContent {
  min-height: 90%;
  flex-shrink: 0;
  flex-grow: 1;
}

#DPContainer.DPContainer .DPHomeScreen__body--customContent > * {
  flex-shrink: 0;
}

#DPContainer.DPContainer .DPHomeScreen__body--noCustomContent {
  flex: 1;
  padding-bottom: 0;
}

#DPContainer.DPContainer .DPHomeScreen__avatarHolder {
  width: 96px;
  height: 96px;
  margin-top: 48px;
  transform: translateY(0);
}

#DPContainer.DPContainer .DPHomeScreen.DPHomeScreen--hydrationComplete .DPHomeScreen__avatarHolder {
  animation: DPFadeIn 0.4s cubic-bezier(0, 0, 0.3, 1) 0.07s both;
}

#DPContainer.DPContainer .DPHomeScreen__avatarHolder img {
  border-radius: 48px;
}

#DPContainer.DPContainer .DPHomeScreen__botAvatar {
  fill: var(--cds-text-primary, #161616);
  width: 100%;
  height: 100%;
}

#DPContainer.DPContainer .DPHomeScreen__greeting {
  font-family: var(--cds-chat-HOME_SCREEN-greeting-font-family);
  color: var(--cds-text-primary, #161616);
  font-weight: var(--cds-heading-04-font-weight);
  line-height: var(--cds-heading-04-line-height);
  font-size: var(--cds-heading-04-font-size);
  letter-spacing: var(--cds-heading-04-letter-spacing);
  margin-top: 32px;
}

#DPContainer.DPContainer .DPHomeScreen.DPHomeScreen--hydrationComplete .DPHomeScreen__greeting {
  animation: DPFadeInUp 0.4s cubic-bezier(0, 0, 0.3, 1) 0.07s both;
}

#DPContainer.DPContainer .DPHomeScreen__starters {
  margin-top: 32px;
}

#DPContainer.DPContainer .DPHomeScreen__body--noCustomContent .DPHomeScreen__starters {
  margin-bottom: 48px;
}

#DPContainer.DPContainer .DPHomeScreen.DPHomeScreen--hydrationComplete button.DPHomeScreen__starter {
  max-width: 100%;
  word-break: break-word;
  animation: 0.4s cubic-bezier(0, 0, 0.3, 1) DPFadeInUp calc(var(--cds-chat-HomeScreenStarter-index) * 0.12s) both;
  margin-bottom: 12px;
  display: block;
}

#DPContainer.DPContainer .DPHomeScreen.DPHomeScreen--hydrationComplete button.DPHomeScreen__starter:last-child {
  margin-bottom: 0;
}

#DPContainer.DPContainer button.DPHomeScreen__starter:first-child {
  --cds-chat-HomeScreenStarter-index: 1;
}

#DPContainer.DPContainer button.DPHomeScreen__starter:nth-child(2) {
  --cds-chat-HomeScreenStarter-index: 2;
}

#DPContainer.DPContainer button.DPHomeScreen__starter:nth-child(3) {
  --cds-chat-HomeScreenStarter-index: 3;
}

#DPContainer.DPContainer button.DPHomeScreen__starter:nth-child(4) {
  --cds-chat-HomeScreenStarter-index: 4;
}

#DPContainer.DPContainer button.DPHomeScreen__starter:nth-child(5) {
  --cds-chat-HomeScreenStarter-index: 5;
}

#DPContainer.DPContainer .DPHomeScreen.DPHomeScreen--hydrationComplete .DPHomeScreen__customContent--animation {
  animation: DPFadeInUp 0.4s cubic-bezier(0, 0, 0.3, 1) 0.33s both;
}

#DPContainer.DPContainer .DPHomeScreen__backButton {
  position: absolute;
  left: 50%;
  transform: translate(-50%, calc(-100% - 16px));
}

@keyframes DPFadeInUpBackButton {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-100% + 16px));
  }

  15% {
    opacity: 0;
  }

  50% {
    transform: translate(-50%, calc(-100% - 16px));
  }

  to {
    opacity: 1;
  }
}

#DPContainer.DPContainer .DPHomeScreen.DPHomeScreen--hydrationComplete .DPHomeScreen__backButton {
  animation: DPFadeInUpBackButton 0.4s cubic-bezier(0, 0, 0.3, 1) 0.35s both;
}

#DPContainer.DPContainer .DPHomeScreen__inputContainer,#DPContainer.DPContainer .DPHomeScreen__inputContainerWrapper {
  display: flex;
  width: 100%;
  transform: translateY(0);
}

#DPContainer.DPContainer .DPHomeScreen__inputContainerWrapper {
  flex-direction: column;
}

@keyframes DPAnimAlternateSuggestionsContainer__Button--slide-in {
  0% {
    bottom: -48px;
  }

  to {
    bottom: 6px;
  }
}

@keyframes DPAnimAlternateSuggestionsContainer__Button--slide-out {
  0% {
    bottom: 0;
  }

  to {
    bottom: -48px;
  }
}

@keyframes DPAnimAlternateSuggestionsContainer__Button--bounce-in {
  0% {
    bottom: 6px;
  }

  to {
    bottom: 0;
  }
}

@supports (-webkit-line-clamp: 3) {
  #DPContainer.DPContainer .DPAlternateSuggestionsOptionsPanel .DP__searchResponseBody {
    -webkit-line-clamp: 3;
  }
}

@keyframes DPAnimAlternateSuggestionsOptionsPanel {
  0% {
    top: var(--cds-chat-Animate-Start-Position);
    opacity: 0;
    transform: scale(0.5);
  }

  to {
    top: var(--cds-chat-Animate-End-Position);
    opacity: 1;
    transform: scale(1);
  }
}

#DPContainer.DPContainer .DPInputAndCompletions {
  position: relative;
  width: 100%;
}

#DPContainer.DPContainer .DPInputContainer {
  background-color: var(--cds-chat-prompt-background);
  border-top: var(--cds-chat-BASE-border-width-small) solid var(--cds-border-subtle-00);
  outline: var(--cds-chat-BASE-border-width-med) solid transparent;
  outline-offset: -2px;
  color: var(--cds-text-primary, #161616);
  min-height: 0;
  position: relative;
  width: 100%;
  display: flex;
  padding-block: 12px;
  padding-inline: 16px 8px;
  align-items: center;
  z-index: 1;
}

#DPContainer.DPContainer .DPInputContainer__TextAndUpload {
  display: flex;
  align-items: center;
}

#DPContainer.DPContainer .DPInputContainer > :not(:last-child),#DPContainer.DPContainer .DPInputContainer__TextAndUpload > :not(:last-child) {
  margin-inline-end: 8px;
}

#DPContainer.DPContainer .DPInputContainer__LeftContainer {
  position: relative;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

#DPContainer.DPContainer .DPInputContainer .DPInputContainer__LeftContainer .DP__TextArea .DP__TextArea-textarea {
  border: none;
}

#DPContainer.DPContainer .DPBotContainer .DPInputContainer {
  display: flex;
}

#DPContainer.DPContainer .DPInputContainer .DP__TextArea {
  display: inline-block;
  width: 100%;
  font-size: var(--cds-chat-BASE-font-size-med);
  line-height: var(--cds-chat-BASE-line-height-med);
  min-height: 0;
  overflow: hidden;
}

#DPContainer.DPContainer .DPInputContainer .DP__TextArea textarea.DP__TextArea-textarea {
  margin: 0;
  background: transparent;
  resize: none;
  color: var(--cds-text-primary, #161616);
}

#DPContainer.DPContainer .DPInputContainer .DP__TextArea .DP__TextArea-sizer,#DPContainer.DPContainer .DPInputContainer .DP__TextArea .DP__TextArea-textarea {
  max-height: 157px;
}

#DPContainer.DPContainer .DPInputContainer .DP__TextArea .DP__TextArea-textarea::-moz-placeholder {
  color: var(--cds-text-placeholder, hsla(0, 0%, 9%, 0.4));
  font-family: inherit;
  font-size: var(--cds-chat-BASE-font-size-med);
  line-height: var(--cds-chat-BASE-line-height-med);
}

#DPContainer.DPContainer .DPInputContainer .DP__TextArea .DP__TextArea-textarea::placeholder {
  color: var(--cds-text-placeholder, hsla(0, 0%, 9%, 0.4));
  font-family: inherit;
  font-size: var(--cds-chat-BASE-font-size-med);
  line-height: var(--cds-chat-BASE-line-height-med);
}

#DPContainer.DPContainer button.DPInputContainer__SendButton svg {
  cursor: inherit;
}

#DPContainer.DPContainer button.DPInputContainer__SendButton:active svg,#DPContainer.DPContainer button.DPInputContainer__SendButton:active:focus svg,#DPContainer.DPContainer button.DPInputContainer__SendButton:enabled svg,#DPContainer.DPContainer button.DPInputContainer__SendButton:focus svg {
  fill: var(--cds-interactive, #0f62fe);
}

#DPContainer.DPContainer button.DPInputContainer__SendButton:disabled svg,#DPContainer.DPContainer button.DPInputContainer__SendButton:disabled:hover svg {
  fill: var(--cds-icon-disabled, hsla(0, 0%, 9%, 0.25));
}

#DPContainer.DPContainer .DPContainer--render[dir="rtl"] .DPInputContainer__SendButton svg {
  transform: scaleX(-1);
}

#DPContainer.DPContainer .DPInputContainer__SendButton svg {
  width: 16px;
  height: 16px;
}

#DPContainer.DPContainer .DPLauncher__ButtonContainer {
  animation: DPLauncherIn 0.15s cubic-bezier(0, 0, 0.3, 1) both;
  background-color: #fff;
  bottom: var(--cds-chat-LAUNCHER-position-bottom);
  border-radius: var(--cds-chat-BASE-border-radius-xsmall);
  position: fixed;
  right: var(--cds-chat-LAUNCHER-position-bottom);
  box-shadow: 1px 0 4px hsla(0, 0%, 9%, 0.3);
  z-index: var(--cds-chat-BASE-z-index);
}

#DPContainer.DPContainer .DPContainer--render[dir="rtl"] .DPLauncher__ButtonContainer {
  left: var(--cds-chat-LAUNCHER-position-bottom);
  right: unset;
}

#DPContainer.DPContainer .DPLauncher__ButtonContainer.DPLauncher__ButtonContainer--hidden {
  visibility: hidden;
}

#DPContainer.DPContainer .DPLauncher__ButtonContainer.DPLauncher__ButtonContainer--round {
  border-radius: 28px;
  box-shadow: 1px 0 4px hsla(0, 0%, 9%, 0.3);
}

#DPContainer.DPContainer .DPLauncher__ButtonContainer.DPLauncher__ButtonContainer--round .DPLauncher__Button {
  border-radius: 28px;
}

#DPContainer.DPContainer .DPLauncher__ButtonContainer.DPLauncher__ButtonContainer--noAnimation {
  animation: none;
}

#DPContainer.DPContainer button.DPLauncher__Button {
  position: static;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: var(--cds-chat-BASE-border-radius-xsmall);
  height: var(--cds-chat-LAUNCHER-default-size);
  width: var(--cds-chat-LAUNCHER-default-size);
  transition: background 0.25s ease-in-out, transform 0.15s ease;
  background-color: var(--cds-chat-LAUNCHER-color-background);
}

#DPContainer.DPContainer button.DPLauncher__Button:focus {
  border-width: var(--cds-chat-BASE-border-width-large);
}

#DPContainer.DPContainer button.DPLauncher__Button svg {
  width: 24px;
  height: 24px;
}

#DPContainer.DPContainer .DPLauncher__svg {
  fill: currentcolor;
}

#DPContainer.DPContainer .DPLauncher__Avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@keyframes DPLauncherBounce {
  0% {
    transform: translateY(0);
  }

  30% {
    transform: translateY(-10px);
  }

  50% {
    transform: translateY(0);
  }

  70% {
    transform: translateY(-10px);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes DPAnimLauncherComplex__FadeInSlideUp {
  0% {
    bottom: calc(16px + var(--cds-chat-LAUNCHER-default-size) + var(--cds-chat-LAUNCHER-position-bottom) - var(--cds-chat-LAUNCHER-desktop-expanded-height));
    background: transparent;
    box-shadow: none;
  }

  30% {
    background: transparent;
    box-shadow: none;
  }

  to {
    bottom: 64px;
    box-shadow: 1px 0 4px hsla(0, 0%, 9%, 0.3);
    background: var(--cds-chat-LAUNCHER-EXPANDED-MESSAGE-color-background);
  }
}

@keyframes DPAnimLauncherComplex__FadeInText {
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes DPAnimLauncherComplex__SmallLauncherResizeReposition {
  0% {
    right: var(--cds-chat-LAUNCHER-position-right);
    bottom: var(--cds-chat-LAUNCHER-position-bottom);
    height: var(--cds-chat-LAUNCHER-default-size);
    width: var(--cds-chat-LAUNCHER-default-size);
    border-radius: 28px;
    padding: 0;
  }

  to {
    right: -80px;
    bottom: -80px;
    height: 160px;
    width: 160px;
    border-radius: 80px;
    padding: 0 60px 60px 0;
  }
}

@keyframes DPAnimLauncherComplex__SmallLauncherResizeRepositionRTL {
  0% {
    left: var(--cds-chat-LAUNCHER-position-right);
    bottom: var(--cds-chat-LAUNCHER-position-bottom);
    height: var(--cds-chat-LAUNCHER-default-size);
    width: var(--cds-chat-LAUNCHER-default-size);
    border-radius: 28px;
    padding: 0;
  }

  to {
    left: -80px;
    bottom: -80px;
    height: 160px;
    width: 160px;
    border-radius: 80px;
    padding: 0 0 60px 60px;
  }
}

@keyframes DPAnimLauncherComplex__FadeInCloseButton {
  0% {
    opacity: 0;
  }

  80% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes DPAnimLauncherComplex__AvatarResize {
  0% {
    height: 32px;
    width: 32px;
  }

  to {
    height: 48px;
    width: 48px;
  }
}

@keyframes DPAnimLauncherComplex__FadeInSlideUpSmallExpandedLauncher {
  0% {
    bottom: -160px;
    opacity: 0;
  }

  30% {
    opacity: 0;
  }

  to {
    bottom: -80px;
    opacity: 1;
  }
}

@keyframes DPAnimLauncherComplex__FadeOutSlideDown {
  0% {
    bottom: 64px;
    background: var(--cds-chat-LAUNCHER-EXPANDED-MESSAGE-color-background);
    box-shadow: 1px 0 4px hsla(0, 0%, 9%, 0.3);
  }

  40% {
    background: transparent;
    box-shadow: none;
  }

  to {
    bottom: calc(16px + var(--cds-chat-LAUNCHER-default-size) + var(--cds-chat-LAUNCHER-position-bottom) - var(--cds-chat-LAUNCHER-desktop-expanded-height));
    background: transparent;
    box-shadow: none;
  }
}

@keyframes DPAnimLauncherComplex__FadeOut {
  0% {
    opacity: 1;
  }

  40% {
    opacity: 0;
  }

  to {
    opacity: 0;
  }
}

@keyframes DPAnimLauncherComplex__SmallLauncherDefaultSizePosition {
  0% {
    right: -80px;
    bottom: -80px;
    height: 160px;
    width: 160px;
    border-radius: 80px;
    padding: 0 60px 60px 0;
  }

  to {
    right: var(--cds-chat-LAUNCHER-position-right);
    bottom: var(--cds-chat-LAUNCHER-position-bottom);
    height: var(--cds-chat-LAUNCHER-default-size);
    width: var(--cds-chat-LAUNCHER-default-size);
    border-radius: 28px;
    padding: 0;
  }
}

@keyframes DPAnimLauncherComplex__SmallLauncherDefaultSizePositionRTL {
  0% {
    left: -80px;
    bottom: -80px;
    height: 160px;
    width: 160px;
    border-radius: 80px;
    padding: 0 0 60px 60px;
  }

  to {
    left: var(--cds-chat-LAUNCHER-position-right);
    bottom: var(--cds-chat-LAUNCHER-position-bottom);
    height: var(--cds-chat-LAUNCHER-default-size);
    width: var(--cds-chat-LAUNCHER-default-size);
    border-radius: 28px;
    padding: 0;
  }
}

@keyframes DPLauncherIconTo32 {
  0% {
    width: 24px;
  }

  to {
    width: 32px;
  }
}

@keyframes DPLauncherIconTo24 {
  0% {
    width: 32px;
  }

  to {
    width: 24px;
  }
}

@keyframes DPLauncherPartiallyRound {
  0% {
    border-radius: 28px;
  }

  to {
    border-radius: 14px;
  }
}

@keyframes DPLauncherCompletelyRound {
  0% {
    border-radius: 14px;
  }

  to {
    border-radius: 28px;
  }
}

@keyframes DPLauncherExtend {
  0% {
    width: var(--cds-chat-LAUNCHER-default-size);
  }

  to {
    width: var(--cds-chat--LAUNCHER-EXTENDED-width);
  }
}

@keyframes DPLauncherReduce {
  0% {
    width: var(--cds-chat--LAUNCHER-EXTENDED-width);
  }

  to {
    width: var(--cds-chat-LAUNCHER-default-size);
  }
}

@keyframes DPLauncherExtendedElementFadeIn {
  0% {
    bottom: -12px;
    opacity: 0;
  }

  50%, to {
    bottom: 0;
    opacity: 1;
  }
}

@keyframes DPLauncherExtendedElementFadeOut {
  0% {
    top: 0;
    opacity: 1;
  }

  50%, to {
    top: -12px;
    opacity: 0;
  }
}

@font-face {
  font-family: swiper-icons;
  src: url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA")
        format("woff");
  font-weight: 400;
  font-style: normal;
}

#DPContainer.DPContainer {
  --swiper-theme-color: #007aff;
}

#DPContainer.DPContainer :host {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}

@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(1turn);
  }
}

#DPContainer.DPContainer .DP__inlineError {
  display: flex;
  flex-direction: row;
  margin-left: -16px;
}

#DPContainer.DPContainer .DPContainer--render[dir="rtl"] .DP__inlineError {
  margin-left: unset;
  margin-right: -16px;
}

#DPContainer.DPContainer .DP__inlineError--iconHolder {
  display: flex;
  align-items: flex-start;
  margin: 2px 8px 0 16px;
  flex: 0 0 var(--cds-chat-BASE-border-radius-xlarge);
}

#DPContainer.DPContainer .DPContainer--render[dir="rtl"] .DP__inlineError--iconHolder {
  margin: 0 16px 0 8px;
}

#DPContainer.DPContainer .DP__inlineError--icon {
  height: var(--cds-chat-BASE-border-radius-xlarge);
  width: var(--cds-chat-BASE-border-radius-xlarge);
}

#DPContainer.DPContainer .DP__inlineError--text {
  flex: 1;
  font-size: var(--cds-chat-BASE-font-size-med);
  margin-top: 1px;
}

#DPContainer.DPContainer .DP__inlineError .DP__inlineError--text {
  color: var(--cds-text-error);
}

#DPContainer.DPContainer .DPIFramePanel {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#DPContainer.DPContainer .DPIFramePanel__Content {
  position: relative;
  display: flex;
  flex: 1;
}

#DPContainer.DPContainer .DPIFramePanel__Content .DPIFrameComponent__StatusContainer {
  background-color: var(--cds-background, #fff);
}

#DPContainer.DPContainer .DPIFramePanel__Content .DPIFrameComponent__Wrapper {
  height: unset;
  flex: 1;
}

#DPContainer.DPContainer .DPIFrameComponent__Wrapper {
  position: relative;
  overflow: hidden;
  background: #fff;
}

#DPContainer.DPContainer .DPIFrameComponent__IFrame,#DPContainer.DPContainer .DPIFrameComponent__Wrapper {
  width: 100%;
  height: 100%;
}

#DPContainer.DPContainer .DPIFrameComponent__StatusContainer {
  position: absolute;
  background-color: var(--cds-layer-01, #f4f4f4);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#DPContainer.DPContainer .DPIFramePanel .DPPanelContent {
  flex: 1;
  display: flex;
  flex-direction: column;
}

#DPContainer.DPContainer .DPIFramePanel__Content {
  width: 100%;
  height: 100%;
}

@keyframes DPfadeInImg {
  0% {
    opacity: 0;
    filter: grayscale(100%);
  }

  to {
    opacity: 1;
    filter: grayscale(0);
  }
}

#DPContainer.DPContainer .DP__button-holder {
  margin-top: 8px;
}

#DPContainer.DPContainer .DP__button-holder ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

@supports (-webkit-line-clamp: 5) {
  #DPContainer.DPContainer .DP__searchResponseBody {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    text-overflow: revert;
    -webkit-line-clamp: 5;
    white-space: normal;
  }

  #DPContainer.DPContainer .DP__searchResponseBody.DPSearchMessage__Result--full {
    -webkit-line-clamp: 15;
  }
}

#DPContainer.DPContainer .DP__TextArea {
  position: relative;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}

#DPContainer.DPContainer .DP__TextArea .DP__TextArea-textarea {
  width: 100%;
  height: 100%;
  font: inherit;
  color: inherit;
  border: var(--cds-chat-BASE-border-width-med) solid transparent;
  padding: 0;
}

#DPContainer.DPContainer .DP__TextArea .DP__TextArea-textarea:focus {
  border: var(--cds-chat-BASE-border-width-med) solid var(--cds-focus, #0f62fe);
  outline: 0;
  border-radius: 0;
}

#DPContainer.DPContainer .DP__TextArea .DP__TextArea-textarea::-moz-focus-inner {
  border: var(--cds-chat-BASE-border-width-med) solid var(--cds-focus, #0f62fe);
  outline: 0;
  border-radius: 0;
}

#DPContainer.DPContainer .DP__TextArea.DP__TextArea--autoSize .DP__TextArea-textarea {
  position: absolute;
  top: 0;
}

#DPContainer.DPContainer .DP__TextArea .DP__TextArea-sizer {
  visibility: hidden;
  padding-bottom: 1px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

@supports (-webkit-line-clamp: 3) {
  #DPContainer.DPContainer .DPTextHolderTile__Description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
  }
}

@supports (-webkit-line-clamp: 2) {
  #DPContainer.DPContainer .DPTextHolderTile__Title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
  }
}

#DPContainer.DPContainer .DPViewSourcePanel {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#DPContainer.DPContainer .DPViewSourcePanel .DPPanelContent {
  flex: 1;
}

#DPContainer.DPContainer .DPViewSourcePanel__Content {
  background-color: var(--cds-background, #fff);
  padding: 12px;
  height: 100%;
  overflow: auto;
}

#DPContainer.DPContainer .DPVisuallyHidden {
  position: absolute;
  top: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  white-space: nowrap;
}

#DPContainer.DPContainer .DP__ChatNonHeaderContainer {
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
}

#DPContainer.DPContainer .DP__messagesAndInputContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
}

#DPContainer.DPContainer .DPMessagesContainer__NonInputContainer {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

#DPContainer.DPContainer .DPErrorIcon {
  fill: var(--cds-support-error, #da1e28);
  vertical-align: middle;
}

#DPContainer.DPContainer .DPErrorIcon path[data-icon-path="inner-path"] {
  fill: var(--cds-icon-on-color, #fff);
  opacity: 1;
}

#DPContainer.DPContainer .DP__hydratingContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

#DPContainer.DPContainer .DP__hydrating {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

@keyframes DPdot {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

#DPContainer.DPContainer .DP__overlay-panelContainer {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

#DPContainer.DPContainer .DP__overlay--covering .DP__overlay-panel .DPHeader.DP--primaryColor {
  position: relative;
}

#DPContainer.DPContainer .DPWidget--rounded .DP__overlay--covering.DP__overlay-panelContainer .DPHeader--content {
  border-top-left-radius: var(--cds-chat-BASE-border-radius-med);
  border-top-right-radius: var(--cds-chat-BASE-border-radius-med);
}

#DPContainer.DPContainer .DP__overlay-panel {
  position: absolute;
  display: block;
  top: 0;
  border-radius: 0;
  box-sizing: border-box;
  height: 100%;
  margin: 0;
  min-height: 100%;
  text-align: left;
  width: 100%;
}

#DPContainer.DPContainer .DPContainer--render[dir="rtl"] .DP__overlay-panel {
  left: unset;
  right: 0;
  text-align: right;
}

#DPContainer.DPContainer .DP__overlay-panel--closed {
  display: none;
}

#DPContainer.DPContainer .DPDataPoweredLogo {
  fill: currentcolor;
}

#DPContainer.DPContainer .DPWidget__regionContainer {
  height: 100%;
  width: 100%;
}

#DPContainer.DPContainer .DPWidget.DPWidget {
  visibility: visible;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -moz-osx-font-smoothing: grayscale;
  box-shadow: 1px 0 4px hsla(0, 0%, 9%, 0.3);
  font-size: var(--cds-chat-BASE-font-size-med);
  line-height: var(--cds-chat-BASE-line-height-med);
}

#DPContainer.DPContainer .DPWidget.DPWidget--rounded,#DPContainer.DPContainer .DPWidget.DPWidget--rounded .DP,#DPContainer.DPContainer .DPWidget.DPWidget--rounded .DPBotContainer,#DPContainer.DPContainer .DPWidget.DPWidget--rounded .DPHomeScreen,#DPContainer.DPContainer .DPWidget.DPWidget--rounded .DPViewSourcePanel,#DPContainer.DPContainer .DPWidget.DPWidget--rounded .DPWidget__animationContainer,#DPContainer.DPContainer .DPWidget.DPWidget--rounded .DP__hydratingContainer,#DPContainer.DPContainer .DPWidget.DPWidget--rounded .DP__overlay-panel {
  border-radius: var(--cds-chat-BASE-border-radius-med);
}

#DPContainer.DPContainer .DPWidget.DPWidget--rounded .DPHeader {
  border-top-left-radius: var(--cds-chat-BASE-border-radius-med);
  border-top-right-radius: var(--cds-chat-BASE-border-radius-med);
}

#DPContainer.DPContainer .DPWidget.DPWidget--rounded .DPBrandingBanner,#DPContainer.DPContainer .DPWidget.DPWidget--rounded .DPInputContainer {
  border-bottom-left-radius: var(--cds-chat-BASE-border-radius-med);
  border-bottom-right-radius: var(--cds-chat-BASE-border-radius-med);
}

#DPContainer.DPContainer .DPWidget.DPWidget--rounded .DPWidget__animationContainer--withBrandingBanner {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

#DPContainer.DPContainer .DPWidget .DPWidget__animationContainer {
  background: var(--cds-chat-shell-background, #fff);
  position: relative;
  width: 100%;
  flex: 1;
  z-index: 1;
}

#DPContainer.DPContainer .DPWidget.DPWidget--closed .DPWidget__animationContainer {
  overflow: hidden;
}

#DPContainer.DPContainer .DPWidget.DPWidget--launched.DPWidget--defaultElement {
  animation: DPWidgetIn 0.24s cubic-bezier(0, 0, 0.3, 1) both;
}

#DPContainer.DPContainer .DPWidget.DPWidget.DPWidget--closed {
  box-shadow: none;
  border: none;
}

#DPContainer.DPContainer .DPWidget.DPWidget--closed.DPWidget--defaultElement {
  display: none;
}

#DPContainer.DPContainer .DPWidget.DPWidget--defaultElement {
  inset: var(--cds-chat-BASE-top-position) var(--cds-chat-BASE-right-position) var(--cds-chat-BASE-bottom-position) var(--cds-chat-BASE-left-position);
  height: var(--cds-chat-BASE-height);
  max-height: var(--cds-chat-BASE-max-height);
  min-height: var(--cds-chat-BASE-min-height);
  position: fixed;
  max-width: var(--cds-chat-BASE-max-width);
  width: var(--cds-chat-BASE-width);
  z-index: var(--cds-chat-BASE-z-index);
}

#DPContainer.DPContainer .DPContainer--render[dir="rtl"] .DPWidget.DPWidget--defaultElement {
  right: var(--cds-chat-BASE-left-position);
  left: var(--cds-chat-BASE-right-position);
}

#DPContainer.DPContainer .DP {
  align-content: stretch;
  align-items: stretch;
  background-color: var(--cds-chat-shell-background, #fff);
  border-radius: 0;
  box-sizing: border-box;
  color: var(--cds-text-primary, #161616);
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  margin: 0;
  text-align: left;
  width: 100%;
}

#DPContainer.DPContainer .DPContainer--render[dir="rtl"] .DP {
  text-align: right;
}

#DPContainer.DPContainer .DPBotContainer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

#DPContainer.DPContainer .DPWidget__FocusTrapContainer {
  width: 100%;
  height: 100%;
}

@keyframes DPWidgetIn {
  0% {
    bottom: calc(var(--cds-chat-BASE-bottom-position) - 32px);
    opacity: 0;
  }

  to {
    bottom: var(--cds-chat-BASE-bottom-position);
    opacity: 1;
  }
}

@keyframes DPWidgetOut {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes DPAnimBackgroundCover {
  0% {
    opacity: 0;
  }

  to {
    opacity: 0.5;
  }
}

#DPContainer.DPContainer .DPContainer--render[dir="rtl"] .DPDirectionHasReversibleSVG svg {
  transform: scaleX(-1);
}

@keyframes DPLoadingBar__ConnectingAnimationKeyFrames {
  0% {
    background-position: 0 0;
  }

  to {
    background-position: -200% 0;
  }
}

#DPContainer.DPContainer .DPPanelContent {
  overflow: hidden;
}

#DPContainer.DPContainer .DPWidget .DPHeader__Container ~ .DPPanelContent,#DPContainer.DPContainer .DPWidget .DPHeader ~ .DPPanelContent {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

#DPContainer.DPContainer .DPWidget--rounded .DPWidget__animationContainer:not(.DPWidget__animationContainer--withBrandingBanner) .DPPanelContent {
  border-end-start-radius: var(--cds-chat-CONTAINER-border-radius);
  border-end-end-radius: var(--cds-chat-CONTAINER-border-radius);
}

#DPContainer.DPContainer .DPWidget--rounded .DPWidget__animationContainer .DPCustomPanel .DPHeader ~ .DPPanelContent {
  border-start-start-radius: 0;
  border-start-end-radius: 0;
}

#DPContainer.DPContainer .DPWidget--rounded .DPWidget__animationContainer .DPCustomPanel .DPPanelContent {
  border-start-start-radius: var(--cds-chat-CONTAINER-border-radius);
  border-start-end-radius: var(--cds-chat-CONTAINER-border-radius);
}

#DPContainer.DPContainer .DP__message {
  animation: DPMessageIn 0.24s cubic-bezier(0, 0, 0.38, 0.9) forwards;
  display: block;
  position: relative;
  margin: 0;
}

#DPContainer.DPContainer .DP__message.DP__message--no-animation {
  animation: none;
}

#DPContainer.DPContainer .DP__message.DP__message--has-focus:after {
  top: 0;
  pointer-events: none;
  box-sizing: border-box;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid var(--cds-focus, #0f62fe);
}

#DPContainer.DPContainer .DP__message a {
  outline: none;
  color: var(--cds-link-primary, #0f62fe);
  text-decoration: none;
}

#DPContainer.DPContainer .DP__message a:visited {
  color: var(--cds-link-primary, #0f62fe);
}

#DPContainer.DPContainer .DP__message a:focus,#DPContainer.DPContainer .DP__message a:hover {
  text-decoration: underline;
}

#DPContainer.DPContainer .DP__message:after {
  content: "";
  display: table;
  clear: both;
}

@keyframes DPMessageIn {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

#DPContainer.DPContainer .DPMessages--holder {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

#DPContainer.DPContainer .DPMessages__Wrapper {
  overflow: hidden;
  width: 100%;
  flex: 1;
  position: relative;
}

#DPContainer.DPContainer .DPMessages__Wrapper:focus {
  outline: none;
}

#DPContainer.DPContainer .DPMessages--scrollHandle {
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  overflow: hidden;
  position: relative;
  display: block;
}

#DPContainer.DPContainer .DP__messages {
  overflow: hidden scroll;
  height: 100%;
  width: 100%;
}

#DPContainer.DPContainer .cds--white,#DPContainer.DPContainer .cds--g10,#DPContainer.DPContainer .cds--g90,#DPContainer.DPContainer .cds--g100 {
  --cds-chat-button: #000000;
  --cds-chat-button-text-hover: #525252;
  --cds-chat-PRIMARY-color: #0079fb;
  --cds-chat-PRIMARY-color-text: #ffffff;
  --cds-chat-PRIMARY-color-hover: #0065d1;
  --cds-chat-PRIMARY-color-active: #0060c7;
  --cds-chat-PRIMARY-color-focus: #161616;
  --cds-chat-SECONDARY-color: #e0e0e0;
  --cds-chat-SECONDARY-color-text: #161616;
  --cds-highlight: #c7e2ff;
  --cds-background-brand: #0079fb;
  --cds-interactive: #0079fb;
  --cds-border-interactive: #0079fb;
  --cds-button-primary: #0079fb;
  --cds-button-tertiary: #0079fb;
  --cds-icon-interactive: #0079fb;
  --cds-focus: #0079fb;
  --cds-button-primary-hover: #0065d1;
  --cds-button-tertiary-hover: #0065d1;
  --cds-button-primary-active: #004794;
  --cds-button-tertiary-active: #004794;
  --cds-chat-LAUNCHER-color-background: #0079fb;
  --cds-chat-LAUNCHER-color-background-hover: #0065d1;
  --cds-chat-LAUNCHER-color-background-active: #004794;
  --cds-chat-LAUNCHER-EXPANDED-MESSAGE-color-background: #0079fb;
  --cds-chat-LAUNCHER-EXPANDED-MESSAGE-color-hover: #0065d1;
  --cds-chat-LAUNCHER-EXPANDED-MESSAGE-color-active: #004794;
  --cds-chat-ACCENT-color: #0079fb;
  --cds-chat-ACCENT-color-r: 0;
  --cds-chat-ACCENT-color-g: 121;
  --cds-chat-ACCENT-color-b: 251;
  --cds-chat-ACCENT-color-ghost-text: #0079fb;
  --cds-chat-ACCENT-color-text: #ffffff;
  --cds-chat-ACCENT-color-background-hover: #0065d1;
  --cds-chat-ACCENT-color-background-active: #004794;
  --cds-chat-LAUNCHER-color-focus-border: #ffffff;
  --cds-chat-LAUNCHER-color-avatar: #ffffff;
  --cds-chat-LAUNCHER-EXPANDED-MESSAGE-color-text: #ffffff;
  --cds-chat-LAUNCHER-EXPANDED-MESSAGE-color-focus-border: #ffffff;
  --cds-chat-LAUNCHER-MOBILE-color-text: #ffffff;
  --cds-chat-ACCENT-color-bw: #ffffff;
  --cds-chat-ACCENT-color-bw-hover: #ebebeb;
  --cds-chat-ACCENT-color-bw-active: #e6e6e6;
  --cds-chat-ACCENT-color-bw-inverse: #161616;
  --cds-chat-ACCENT-color-bw-gray: #f4f4f4;
  --cds-chat-ACCENT-color-pastel: #0054ad;
}
</style>

<style>
@keyframes fadeInText {
    from {
        opacity: 0;
        filter: blur(10px);
        transform: translateY(20%);
    }
    to {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
    }
}

/* Apply !important to the animation rules in your CSS class */
.dp-animate {
    animation: fadeInText 1s ease forwards !important;
}

@keyframes fadeInTextNoBlur {
    from {
        opacity: 0;
        transform: translateY(10%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.dp-animate-noblur {
    animation: fadeInTextNoBlur 0.5s ease forwards !important;
}

</style>

`;

chatHost.innerHTML +=  `








<div class="DPContainer" style="--cds-chat-viewport-height: 1316px; --cds-chat-viewport-width: 2552px; --cds-chat-viewport-offsetTop: 0px; --cds-chat-viewport-offsetLeft: 0px;" id="DPContainer">
    <div class="DPContainer--render cds--g10" dir="auto">
        <div dir="ltr" class="DPContainer__LayoutDirection">
            <div class="DPWidget__regionContainer" role="region" aria-label="Chat">
                <div class="DPMainWindow DPWidget__FocusTrapContainer">
                    <div id="DPWidget" class="DPWidget DPLocale-en DPWidget--rounded DPWidget--defaultElement DPWidget--launched DP--standardWidth DPWidgethidden" style="--cds-chat-scrollbar-width: 15px;">
                        <div class="DPWidget__animationContainer DPWidget__animationContainer--withBrandingBanner">
                            <div class="DPWidget--content">
                                
                                
                                <div class="DP__overlay-panelContainer DP__overlay--HomeScreen">
                                    <div class="DP__overlay-panel DP__overlay-panel--open" style="z-index: 30;">
                                        <div class="DPHomeScreen DPHomeScreen--hydrationComplete DPHomeScreen--backgroundGradientBottomUp">
                                            <div class="DPHomeScreenHeader">
                                                <div class="DPHeader DP--primaryColor">
                                                    <div class="DPHeader--content DP--primaryColor" data-floating-menu-container="true">
                                                        <div class="DPHeader__CenterContainer"><div class="DPHeader__Name DPWidget__textEllipsis"><span class="assistantName"></span></div></div>
                                                        <div class="DPHeader__Buttons DPHeader__RightButtons">
                                                            <span class="cds--popover-container cds--popover--caret cds--popover--high-contrast cds--popover--left cds--tooltip cds--icon-tooltip">
                                                                <div class="cds--tooltip-trigger__wrapper">
                                                                
                                                                    <button onclick="minChat()"
                                                                        aria-labelledby="tooltip-:rc:"
                                                                        class="cds--btn--icon-only DPHeader__CloseButton DPDirectionHasReversibleSVG cds--btn cds--btn--md cds--layout--size-md cds--btn--ghost"
                                                                        type="button"
                                                                    >
                                                                        <svg
                                                                            focusable="false"
                                                                            preserveAspectRatio="xMidYMid meet"
                                                                            fill="currentColor"
                                                                            width="16"
                                                                            height="16"
                                                                            viewBox="0 0 32 32"
                                                                            aria-hidden="true"
                                                                            class="DPIcon__Subtract"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M5 15L5 17 27 17 27 15 5 15z"></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                                <span aria-hidden="true" id="tooltip-:rc:" role="tooltip" class="cds--popover">
                                                                    <span class="cds--popover-content cds--tooltip-content">Close the chat window</span><span class="cds--popover-caret"></span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="DPHomeScreen__HomeScreenBottomElement" id="homeScreenHeaderBottomElement"><div></div></div>
                                            
                                            <div id="frame" style="display: flex;position: relative;width: 100%;height: 100%; background-image: linear-gradient(to bottom, var(--cds-chat-shell-background, #fff) 0, var(--cds-chat-shell-background, #fff) 33%, rgb(var(--cds-chat-ACCENT-color-r) var(--cds-chat-ACCENT-color-g) var(--cds-chat-ACCENT-color-b) / 10%) 70%, rgb(var(--cds-chat-ACCENT-color-r) var(--cds-chat-ACCENT-color-g) var(--cds-chat-ACCENT-color-b) / 30%) 100%);">
                                            <div class="content" style="
                                            width: 100%;
                                            height: 100%;
                                        ">
                                        
                                                <div id="chat" style="height: auto;min-height: 90%;max-height: 9%;overflow-y: auto;overflow-x: hidden;display: flex;flex-direction: column-reverse;">
                                                    <div id="info" style="margin: 0px auto;width: 100%;position: absolute;left: 0;top: 20%;">
                                                    <div id="s1" style="
                                                    width: 100%;
                                                    transition: 1s;
                                                    width: 100%;
                                                    height: 100%;
                                                    top: 0px;
                                                    position: absolute;
                                                    left: 0px;
                                                    ">
                                                    <ul id="infoleft" class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto" style="
                                                        position: absolute;
                                                        display: flex;
                                                        flex-direction: column;
                                                        gap: 10px;
                                                        z-index: 1;
                                                    "><p class="dp-animate" style="opacity: 0; animation-delay: 0s;
                                                        margin: 0 auto;
                                                        margin-bottom: 25px;
                                                    "><b style="
                                                        color: black;
                                                        margin-top: 32px;
                                                        letter-spacing: 0;
                                                        font-size: 28px;
                                                        line-height: 1.28572;
                                                        font-family: 'DataPowered';
                                                        font-weight: 500;
                                                    ">Hi! I'm <span class="assistantName"></span>.<br>How can I help you today?</b></p>

                                                    <button class="btn dp-animate" style="opacity: 0; animation-delay: 0.1s !important; position: relative;border: none;width: 75%;padding: 25px;border-radius: 15px;background-color: rgb(255, 255, 255);color: black;cursor: pointer;max-width: 90%;word-break: break-word;animation: .4s cubic-bezier(0,0,.3,1) DPFadeInUp calc(var(--cds-chat-HomeScreenStarter-index)* .12s) both;margin-bottom: 12px;display: block;border-radius: 16px;padding-inline-end: 32px;background: transparent;box-sizing: border-box;padding: 5px;background: white;box-shadow: rgba(0, 0, 0, 0.06) 0px 6px 10px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;padding-top: 10px;padding-bottom: 10px;padding-left: 15px;padding-right: 15px;margin-left: 20px;" onclick="addBtnMessage(this)">What is the best way to avoid my home flooding during hurricane season?<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="
                                                        position: absolute;
                                                        width: 20px;
                                                        bottom: 7.5px;
                                                        right: 10px;
                                                    "><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11179)"> <path d="M7 7H17M17 7V17M17 7L7 17" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11179"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg></button>

                                                    <button class="btn dp-animate" style="opacity: 0; animation-delay: 0.2s !important; position: relative;border: none;width: 75%;padding: 25px;border-radius: 15px;background-color: rgb(255, 255, 255);color: black;cursor: pointer;max-width: 90%;word-break: break-word;animation: .4s cubic-bezier(0,0,.3,1) DPFadeInUp calc(var(--cds-chat-HomeScreenStarter-index)* .12s) both;margin-bottom: 12px;display: block;border-radius: 16px;padding-inline-end: 32px;background: transparent;box-sizing: border-box;padding: 5px;background: white;box-shadow: rgba(0, 0, 0, 0.06) 0px 6px 10px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;padding-top: 10px;padding-bottom: 10px;padding-left: 15px;padding-right: 15px;margin-left: 20px;" onclick="addBtnMessage(this)">Are there any resources available to help me prepare for a hurricane?<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="
                                                        position: absolute;
                                                        width: 20px;
                                                        bottom: 7.5px;
                                                        right: 10px;
                                                    "><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11179)"> <path d="M7 7H17M17 7V17M17 7L7 17" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11179"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg></button>

                                                    <button class="btn dp-animate" style="opacity: 0; animation-delay: 0.3s !important; position: relative;border: none;width: 75%;padding: 25px;border-radius: 15px;background-color: rgb(255, 255, 255);color: black;cursor: pointer;max-width: 90%;word-break: break-word;animation: .4s cubic-bezier(0,0,.3,1) DPFadeInUp calc(var(--cds-chat-HomeScreenStarter-index)* .12s) both;margin-bottom: 12px;display: block;border-radius: 16px;padding-inline-end: 32px;background: transparent;box-sizing: border-box;padding: 5px;background: white;box-shadow: rgba(0, 0, 0, 0.06) 0px 6px 10px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;padding-top: 10px;padding-bottom: 10px;padding-left: 15px;padding-right: 15px;margin-left: 20px;" onclick="addBtnMessage(this)">What can I prepare for in case of a power outage?<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute;bottom: 7.5px;right: 10px;width: 20px;">
                                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                            <g id="SVGRepo_iconCarrier">
                                                                <g clip-path="url(#clip0_429_11179)">
                                                                    <path d="M7 7H17M17 7V17M17 7L7 17" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_429_11179">
                                                                        <rect width="24" height="24" fill="white"></rect>
                                                                    </clipPath>
                                                                </defs>
                                                            </g>
                                                        </svg>
                                                    </button>                                                    
                                                    
                                                    
                                                    
                                                    
                                                    </ul></div>
                                        
                                                    
                                                    
                                                    
                                                    </div>

                                                   
                                                    <div class="menu-animate" id="suggestions" style="
                                                        padding: 0 10 15 10;
                                                        width: 100%;
                                                        display: flex;
                                                        flex-direction: column-reverse;
                                                        justify-content: flex-start;
                                                        row-gap: 5px;
                                                        margin-top: -10px;
                                                    "></div>

                                                    
                                                <div class="messages">
                                                    <ul></ul>
                                                </div>
                                                </div>
                                                <div class="message-input" style="z-index: 99;">
                                                    <div class="wrap">
                                                        <form id="form" method="POST" style="
                                                        display: flex;
                                                        column-count: 2;
                                                    ">
                                                        <img src="https://user-images.githubusercontent.com/96705270/219923607-611224d9-4f06-46a9-aafc-129c09b65c97.gif" id="loader" style="
                                                        width: 25px;
                                                        position: absolute;
                                                        left: 10px;
                                                        bottom: 30px;
                                                        visibility: hidden;
                                                        z-index: 1;
                                                    ">

                                                        <textarea name="content_topic" id="dp-chatbot-text" placeholder="Write your question..." cols="30" rows="3" style="
                                                        max-width: 100%;
                                                        margin: 0px auto;
                                                        right: 0;
                                                        left: 0;
                                                        bottom: 0;
                                                        position: absolute;
                                                        height: 60px;
                                                        padding: 10px;
                                                        padding-right: 100px;
                                                        border:none;
                                                        resize:none;
                                                        outline:none;
                                                        font-family:Roboto;
                                                    "></textarea>
                                                    
                                                    <button class="submit" style="
                                                    position: absolute;
                                                    margin: 0px auto;
                                                    left: 0;
                                                    right: -86%;
                                                    bottom: -9px;
                                                    border-radius: 15px;
                                                    min-width: 50px;
                                                    background: transparent;
                                                    color: #8E929A;
                                                    scale: 0.75;
                                                ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="
scale: 0.5;
"><path fill="#8f9299" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg>
                                                        
                                                    </button></form>
                                                        <button id="toggleBtn" style="
                                                        border: none;
                                                        background: none;
                                                        position: absolute;
                                                        left: 0;
                                                        margin: 0px auto;
                                                        right: -70%;
                                                        bottom: -8px;
                                                        border-radius: 15px;
                                                        min-width: 50px;
                                                        background: transparent;
                                                        color: #8E929A;
                                                        scale: 0.5;
                                                        ">
                                                    <img src="https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/6e81388f-c57c-4808-b756-98b3ebd59242" draggable="false" alt="Start" id="btnImage" style="
                                                        /* filter: brightness(0) invert(1); */
                                                        width: inherit;
                                                        filter: brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(228%) hue-rotate(180deg) brightness(100%) contrast(90%);
                                                    "></button>
                                                    </div>
                                                </div>
                                                
                                            </div>

                                            <div id="headlessui-portal-root2" style="width: 100%;height: 100%;z-index: 1000;background-color: rgba(44,62,80,0.5);position: absolute; display:none;"><div data-headlessui-portal="" style="
                                            padding: 5px;
                                            margin-top: 25%;
                                        "><div class="relative z-50 dp-animate-noblur" id="headlessui-dialog-:r0:" role="dialog" aria-modal="true" data-headlessui-state="open">
                                                    <div class="" style="background-color: rgba(44,62,80,0.5);"></div><div id="languagePopup" class="" style="
                                        ">
                                                        <div class="popup-content" style="
                                                        background: white;
                                                        border-radius: 40px;
                                                        margin-left: auto;
                                                        margin-right: auto;
                                                        margin-top: auto;
                                                        margin-bottom: auto;
                                                        text-align: center;
                                                        "><img src="https://github.com/user-attachments/assets/0c30a610-3dd9-46b1-ab6d-f3839a594ce1" style="
                                                        width: 60px;
                                                        margin-top: 15px;
                                                        background-image: linear-gradient(to bottom right, var(--cds-chat-PRIMARY-color), var(--cds-chat-ACCENT-color));
                                                        background-size: cover;
                                                        background-repeat: no-repeat;
                                                        "><style> /* Limit the number of visible options */
                                                        select option {
                                                            height: 20px; /* Adjust the height of each option */
                                                        }
                                        
                                                        /* Style the dropdown to show fewer elements */
                                                        select[size] {
                                                            height: auto;
                                                            overflow-y: auto;
                                                        }
                                                        select[expanded] {
                                                            max-height: 200px;
                                                        }
                                                        </style>
                                                        <h2 style="
                                                        font-weight: 800;
                                                        font-size: larger;
                                                        line-height: 2em;
                                                        color: var(--cds-chat-PRIMARY-color);
                                                        ">Select Vocal Language</h2>
                                                        <p style="
                                                        font-size: 14px;
                                                        margin-bottom: 20px;
                                                        ">Please select the language you prefer for vocal input.</p>
                                                        <select onfocus="this.size=10;" onblur="this.size=1;" onchange="this.size=1; this.blur();" id="language" style="
                                                        padding: 8px;
                                                        border-radius: 10px;
                                                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow around the select box */
                                                        border: 2px solid #ccc; /* Light gray border */
                                                        font-family: Arial, sans-serif; /* Clean, web-safe font family */
                                                        font-size: 16px; /* Sets a readable font size */
                                                        color: #333; /* Darker text for better readability */
                                                        background-color: #fff; /* White background */
                                                        cursor: pointer; /* Cursor indicates the element is interactive */
                                                        appearance: none; /* Remove default styling */
                                                        -moz-appearance: none; /* Remove default styling for Firefox */
                                                        -webkit-appearance: none; /* Remove default styling for Chrome, Safari */
                                                        outline: none; /* Remove focus outline */
                                                        text-align: center;
                                                        position: absolute;
                                                        z-index: 100;
                                                        margin-left: -115px;
                                                        " size="1">
                                                            <option value="en-US">English (United States)</option>
                                                            <option value="af-ZA">Afrikaans (South Africa)</option>
                                                            <option value="am-ET">አማርኛ (Ethiopia)</option>
                                                            <option value="az-AZ">Azərbaycanca (Azerbaijan)</option>
                                                            <option value="bn-BD">বাংলা (Bangladesh)</option>
                                                            <option value="bn-IN">বাংলা (India)</option>
                                                            <option value="id-ID">Bahasa Indonesia (Indonesia)</option>
                                                            <option value="ms-MY">Bahasa Melayu (Malaysia)</option>
                                                            <option value="da-DK">Dansk (Denmark)</option>
                                                            <option value="de-DE">Deutsch (Germany)</option>
                                                            <option value="es-ES">Español (Spain)</option>
                                                            <option value="fil-PH">Filipino (Philippines)</option>
                                                            <option value="fr-FR">Français (France)</option>
                                                            <option value="gu-IN">ગુજરાતી (India)</option>
                                                            <option value="it-IT">Italiano (Italy)</option>
                                                            <option value="kn-IN">ಕನ್ನಡ (India)</option>
                                                            <option value="lv-LV">Latviešu (Latvia)</option>
                                                            <option value="lt-LT">Lietuvių (Lithuania)</option>
                                                            <option value="ml-IN">മലയാളം (India)</option>
                                                            <option value="mr-IN">मराठी (India)</option>
                                                            <option value="lo-LA">ລາວ (Laos)</option>
                                                            <option value="nl-NL">Nederlands (Netherlands)</option>
                                                            <option value="ne-NP">नेपाली भाषा (Nepal)</option>
                                                            <option value="pl-PL">Polski (Poland)</option>
                                                            <option value="pt-BR">Português (Brazil)</option>
                                                            <option value="ro-RO">Română (Romania)</option>
                                                            <option value="si-LK">සිංහල (Sri Lanka)</option>
                                                            <option value="sl-SI">Slovenščina (Slovenia)</option>
                                                            <option value="fi-FI">Suomi (Finland)</option>
                                                            <option value="sv-SE">Svenska (Sweden)</option>
                                                            <option value="sw-KE">Kiswahili (Kenya)</option>
                                                            <option value="ka-GE">ქართული (Georgia)</option>
                                                            <option value="hy-AM">Հայերեն (Armenia)</option>
                                                            <option value="ta-IN">தமிழ் (India)</option>
                                                            <option value="te-IN">తెలుగు (India)</option>
                                                            <option value="vi-VN">Tiếng Việt (Vietnam)</option>
                                                            <option value="tr-TR">Türkçe (Turkey)</option>
                                                            <option value="ur-PK">اُردُو (Pakistan)</option>
                                                            <option value="el-GR">Ελληνικά (Greece)</option>
                                                            <option value="bg-BG">български (Bulgaria)</option>
                                                            <option value="ru-RU">Pусский (Russia)</option>
                                                            <option value="sr-RS">Српски (Serbia)</option>
                                                            <option value="uk-UA">Українська (Ukraine)</option>
                                                            <option value="ko-KR">한국어 (South Korea)</option>
                                                            <option value="cmn-Hans-CN">中文 (Simplified, China)</option>
                                                            <option value="cmn-Hant-TW">中文 (Traditional, Taiwan)</option>
                                                            <option value="ja-JP">日本語 (Japan)</option>
                                                            <option value="hi-IN">हिन्दी (India)</option>
                                                            <option value="th-TH">ภาษาไทย (Thailand)</option>
                                                        </select>
                                        
                                                        <p style="
                                                        line-height: 1em;
                                                        padding-top: 15px;
                                                        padding: 35px;
                                                        font-size: 13px;
                                                        padding-top: 60px;
                                                        ">You can change this setting at any time from the language icon at the bottom right of the screen.</p><button onclick="doneVC()" class="btnintro relative btnintro-neutral ml-auto" tabindex="0" style="cursor: pointer;top: -22px;background-color: var(--cds-chat-PRIMARY-color);color: white;border-color: white;margin-bottom: 15px;border-radius: 10px;font-family: 'DataPowered';font-size: 13px;padding-left: 10px;padding-right: 10px;padding-top: 5px;padding-bottom: 5px;border-style: unset;"><div class="flex w-full items-center justify-center gap-2">Done</div></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        </div>


                                        </div>
                                    </div>
                                </div>
                                
                                
                                
                               
                            </div>
                        </div>
                        <div class="DPBrandingBanner" style="display: flex; align-items: center;">
                            <div class="DPBrandingBanner__text" style="flex-grow: 1; display: flex; align-items: center;">
                                <div style="
                                    display: flex;
                                    flex-direction: row;
                                    align-items: center;
                                    width: 100%;
                                    height: 100%;
                                    font-style: italic;
                                    justify-content: flex-start;
                                ">
                                    Accelerated by 
                                    <a href="https://datapowered.ai" target="_blank" style="
                                        display: inline-flex;
                                        align-items: center;
                                        max-height: 75%; 
                                        cursor: pointer; 
                                        min-width: 40%;
                                        width: 40%;
                                    ">
                                        <img decoding="async" src="https://user-images.githubusercontent.com/96705270/236582129-e13335ba-c54a-44bf-a8e8-416f26e5c820.png" alt="DataPowered AI - Artificial Intelligence for Anyone" style="
                                                height: auto;
                                                width: 100%;
                                                object-fit: contain;
                                                background-image: linear-gradient(to bottom right, var(--cds-chat-PRIMARY-color), var(--cds-chat-ACCENT-color));
                                                background-size: cover;
                                                background-repeat: no-repeat;
                                            ">
                                    </a>
                                    <button onclick="toggleVC();" id="vc" style="width: 10%;height: inherit;margin-left: auto;background: transparent;position: absolute;right: -15px;cursor: pointer;"><img src="https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/63a8c3e8-711b-4b8b-9b80-d99ec499a2c8" style="
                                                width: 20px;
                                                filter: invert(85%) sepia(10%) saturate(150%) hue-rotate(180deg) brightness(67%) contrast(85%);
                                                position: absolute;
                                                top: 7px;
                                                right: 7px;
                                    "></button>
                                </div>
                            </div>
                        </div>
                        <div class="DPMainWindowModalHost"></div>
                    </div>
                </div>
                <div class="DPLauncher__ButtonContainer DPLauncher__ButtonContainer--round DPLauncher__ButtonContainer--noAnimation DPLauncher__ButtonContainer--hidden">
                    <button aria-label="Close the chat window" id="DPLauncher__Button" class="DPLauncher__Button cds--btn cds--btn--primary" type="button" onclick="openChat()">
                        <svg viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" transform="rotate(0)" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M14 3v2H4v13.385L5.763 17H20v-7h2v8a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h11zm5 0V0h2v3h3v2h-3v3h-2V5h-3V3h3z"></path> </g> </g></svg>
                    </button>
                </div>
            </div>
            <div class="DPVisuallyHidden DPAriaAnnouncer">
                <div aria-live="polite">The chat window has been opened</div>
                <div aria-live="polite"></div>
            </div>
        </div>
    </div>
</div>

`;



console.log("Appending chatHost child");

// Append the new element to the body as the last child
document.body.appendChild(chatHost);

function loadScript() {
    var script = document.createElement('script');
    script.src = "../js/chat.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
}

// Call the function when needed
loadScript();

function loadScript2() {
    var script = document.createElement('script');
    script.innerHTML = `
    function minChat() {
        // set display of class="DPMainWindow DPWidget__FocusTrapContainer" to none
        document.getElementsByClassName("DPMainWindow DPWidget__FocusTrapContainer")[0].style.display = "none";
        //set visibility of class="DPLauncher__ButtonContainer DPLauncher__ButtonContainer--round DPLauncher__ButtonContainer--noAnimation DPLauncher__ButtonContainer--hidden" to visible
        document.getElementsByClassName("DPLauncher__ButtonContainer DPLauncher__ButtonContainer--round DPLauncher__ButtonContainer--noAnimation DPLauncher__ButtonContainer--hidden")[0].style.visibility = "visible";
    }
    function openChat() {
        // set display of class="DPMainWindow DPWidget__FocusTrapContainer" to block
        document.getElementsByClassName("DPMainWindow DPWidget__FocusTrapContainer")[0].style.display = "block";
        //set visibility of class="DPLauncher__ButtonContainer DPLauncher__ButtonContainer--round DPLauncher__ButtonContainer--noAnimation DPLauncher__ButtonContainer--hidden" to hidden   
        document.getElementsByClassName("DPLauncher__ButtonContainer DPLauncher__ButtonContainer--round DPLauncher__ButtonContainer--noAnimation DPLauncher__ButtonContainer--hidden")[0].style.visibility = "hidden";
    }
    // Define the assistant's name
    var assistantName = "Assistant Name";

    // Get all elements with the class 'assistantName'
    var nameElements = document.getElementsByClassName("assistantName");

    // Set the text content of each element to the assistant name
    Array.from(nameElements).forEach(element => {
        element.textContent = assistantName;
    });
    `;
    document.body.appendChild(script);
}

// Call the function when needed
loadScript2();
