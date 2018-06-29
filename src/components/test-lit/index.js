import { LitElement, html } from '@polymer/lit-element';
import style from './style.styl';
import { cart } from '../my-icons'
import { ButtonSharedStyles } from '../button-shared-styles.js'
class TestLit extends LitElement{

    _render()  {
        const styl = html([` <style>${style} </style>`])
         return html`
            ${styl}
            ${ButtonSharedStyles}

            <div class="wrapper">
                <h1>hello from lit element!</h1>
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
window.customElements.define('test-lit', TestLit);