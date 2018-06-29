import { LitElement, html } from '@polymer/lit-element';
import style from './style.styl';
import { cart } from '../my-icons'
import { ButtonSharedStyles } from '../button-shared-styles.js'
class LitTest extends LitElement{

    _render()  {
        const styl = html([` <style>${style} </style>`])
         return html`
            ${styl}
            ${ButtonSharedStyles}
            
            <div class="wrapper">
        <button>${cart}</button>
       
    </div>

         `
}
    ready(){
        super.ready()
      

        }
        static get properties() { return {
           
          }}
        
        
        
  
}
window.customElements.define('LitTest', LitTest);