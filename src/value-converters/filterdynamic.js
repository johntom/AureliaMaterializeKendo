import {valueConverter} from 'aurelia-framework';

//
// @valueConverter("filterByName")
// export class filterByNameValueConverter {

@valueConverter("filterByDynamicName")
export class FilterByDynamicNameValueConverter {
  // return item.ProjectStatusId.toString() === filterText;
  // console.log('FilterByDynamicNameValueConverter')
// this is for ProjectStatusId
  // toView(array, propertyName,filterText) {
    toView(array,filterText) {
    let propertyName='TenantName';
    //console.log('FilterValueDynamicConverter a' ,array, 'p',filterText) ;

    if( !array || array.length < 1 || filterText==='Select a Tenant' || filterText==='-1' || (!filterText || filterText.length < 1)) {
        return array;
    }
    return array.filter(item => {
        // return item.ProjectStatus.indexOf(filterText) >= 0;
        //console.log('item ',item)
          // return item.ProjectStatus.indexOf(filterText) >= 0; // for text
        //filterText =  +parseInt(filterText.toString());
          //console.log('item.ProjectStatusId -- filterText ',item.ProjectStatusId, filterText ,item.ProjectStatusId === filterText)
          // return item.ProjectStatusId.toString() === filterText;
    //      console.log('item[propertyName].toString()  ',filterText,item.TenantId.toString());//item[propertyName].toString() )
          // return item[propertyName].toString() === filterText;
//          return item.TenantId.toString() === filterText;

//console.log('item[propertyName].toString()  ',item[propertyName].toString());//item[propertyName].toString() )

    //      return item.TenantName === filterText;
    return  item[propertyName] === filterText;

    });
  }
}
