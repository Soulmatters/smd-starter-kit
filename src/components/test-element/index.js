import { PolymerElement, html } from '@polymer/polymer';
import template from './template.html';
import style from './style.styl';
import '@polymer/paper-button'

class TestElement extends PolymerElement {
    static get template()  {
         return html([`${template} <style>${style} </style>`])
}
    ready(){
        super.ready()
        }
    static get properties() { return {
       
    }}

    
}
window.customElements.define('test-element', TestElement);