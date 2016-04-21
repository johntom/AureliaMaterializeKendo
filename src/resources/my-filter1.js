// export class MyFilterValueConverter {
//   toView(value) {
//     return value + " transformed!!!";
//   }
// }

//

// export class MyFilter1ValueConverter {
// toView(array: {}[], property: string, exp: string) {
//
// //property='withdrawal';
// console.log('array',array,'prop',property)
// if (array === undefined || array === null || property === undefined || exp === undefined) {
//     return array;
// }
//     return array.filter((item) => item[property]);//.toLowerCase().indexOf(exp.toLowerCase()) > -1);
// }
// }
export class MyFilter1ValueConverter {
  toView(array, filterObject) {
    return array.filter((item) => {
      for (let key in filterObject) {
        if (item[key] !== filterObject[key]) {
          return false;
        }
      }
      return true;
    });
  }
}
