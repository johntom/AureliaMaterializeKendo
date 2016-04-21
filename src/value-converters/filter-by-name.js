import {valueConverter} from 'aurelia-framework';


@valueConverter("filterByName")
export class filterByNameValueConverter {

    toView(value, filterText) {
      console.log('value',value)
      console.log('filerText', filterText)
        if( !value || value.length < 1 || (!filterText || filterText.length < 1)) {
            return value;
        }
        return value.filter(item => {
            // return item.name.indexOf(filterText) >= 0;
            return item.ProjectStatus.indexOf(filterText) >= 0;
        });
    }
}
