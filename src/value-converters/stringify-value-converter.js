// import {inject, valueConverter} from 'aurelia-framework';

export class StringifyValueConverter {


    toView(value) {
      return JSON.stringify(value, null, 2);
    }
}



// export class StringifyValueConverter {
//   toView(value) {
//     return JSON.stringify(value, null, 2);
//   }
//
//
// export class FilterValueConverter {
//
// // this is for ProjectStatusId
//   toView(array, filterText) {
//     console.log('FilterValueConverter a' ,array, 'p',filterText) ;
//
//     if( !array || array.length < 1 || filterText==='-1' || (!filterText || filterText.length < 1)) {
//         return array;
//     }
//     return array.filter(item => {
//         // return item.ProjectStatus.indexOf(filterText) >= 0;
//         //console.log('item ',item)
//           // return item.ProjectStatus.indexOf(filterText) >= 0; // for text
//         //filterText =  +parseInt(filterText.toString());
//           //console.log('item.ProjectStatusId -- filterText ',item.ProjectStatusId, filterText ,item.ProjectStatusId === filterText)
//           return item.ProjectStatusId.toString() === filterText;
//
//
//     });
//   }
// }
