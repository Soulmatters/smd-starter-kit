/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import { updateMetadata } from 'pwa-helpers/metadata.js';

import { html, PolymerElement } from '@polymer/polymer';
import  SharedStyles  from '../shared-style.styl';
import { connect } from 'pwa-helpers/connect-mixin.js';
// This element is connected to the redux store.
import { store } from '../../store.js';
import '../lit-test';
import template from './template.html'
import '../test-element';
// These are the actions needed by this element.
import { config } from '../../config';

import style from './style.styl';
class MyHome extends connect(store)(PolymerElement) {
  static get template() {
    return html([`
    <style>${SharedStyles}</style>
    <style>${style}</style>
      ${template}
      
     
    `]);
  }

  static get properties() { return {
    // This is the data from the store.
    
  }}
 ready() {
    super.ready();
   
  
}


  // This is called every time something is updated in the store.
  _stateChanged(state) {
    updateMetadata({
      title: 'Acasă | Soulmatters.ro',
  });
  }
}

window.customElements.define('my-home', MyHome);
