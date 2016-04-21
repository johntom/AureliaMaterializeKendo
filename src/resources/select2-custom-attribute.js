// Aurelia Framework specific functionality
import {bindable, inject, customElement} from 'aurelia-framework';
// plnk from jdanny
// import 'select2/css/select2.css!'
import $ from 'jquery';
import select2 from 'select2'; // install the select2 jquery plugin

//import from 'select2/css/select2.min.css!';

@customElement('select2') // Define the name of our custom element
@inject(Element) // Inject the instance of this element
export class SelectCustomAttribute {
    @bindable name = null; // The name of our custom select
    @bindable selected = false; // The default selected value
    @bindable options = {}; // The label/option values

    constructor(element) {
        this.element = element;
    }

    // Once the Custom Element has its DOM instantiated and ready for binding
    // to happenings within the DOM itself
    attached() {
        $(this.element).find('select')
            .select2()
            .on('change', (event) => {
                let changeEvent;

                if (window.CustomEvent) {
                    changeEvent = new CustomEvent('change', {
                        detail: {
                            value: event.val
                        },
                        bubbles: true
                    });
                } else {
                    changeEvent = document.createEvent('CustomEvent');
                    changeEvent.initCustomEvent('change', true, true, {value: event.val});
                }
                this.element.dispatchEvent(changeEvent);
            });
    }
}
