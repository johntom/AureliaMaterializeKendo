export class SortValueConverter {
  toView(array, propertyName, direction) {
    // console.log('a' ,array, 'p',propertyName,'d',  direction) ;

    var factor = direction === 'ascending' ? 1 : -1;
    // console.log('factor',factor) ;

    if( !array || array.length < 1 || (!propertyName || propertyName.length < 1)) {
      // console.log('1 ') ;

        return array;
    }
    return array

      .sort((a, b) => {
        // console.log('ab ',a,b)
        // console.log('pn ',a[propertyName] , b[propertyName] ) ;
        return (a[propertyName] - b[propertyName]) * factor
      }).slice(0);
      // return array
      //   .slice(0)
      //   .sort((a, b) => {
      //     console.log('ab ',a,b)
      //     console.log('pn ',a[propertyName] , b[propertyName] ) ;
      //     return (a[propertyName] - b[propertyName]) * factor
      //   });
  }
}
// sort() {
//    this.array.sort(...);  // existing sort code
//    this.array = this.array.slice(0);  // force the binding to update
// }

// export class SortValueConverter {
//   toView(array, propertyName, comparison = 'ordinalIgnoreCase', direction = 'ascending') {
//     var directionFactor = direction === 'ascending' ? 1 : -1,
//       comparer = this[comparison + 'Comparison'];
//     // if (propertyName === undefined)
//     //   return array.sort((a, b) => comparer(a, b) * directionFactor);
//     if (propertyName === undefined)
//       return array;
//      var factor = direction === 'ascending' ? 1 : -1;
//     if (!array || array.length < 1 || (!propertyName || propertyName.length < 1)) {
//       // console.log('1 ') ;
//       return array;
//     }
//
//
//     // return array.sort((a, b) => comparer(a[propertyName], b[propertyName]) * directionFactor);
//
//     return array
//       .slice(0)
//       .sort((a, b) => {
//         console.log('ab ', a, b)
//         console.log('pn ', a[propertyName], b[propertyName]);
//         return (a[propertyName] - b[propertyName]) * factor
//       });
//   }
//
//
//   // }
//
//   ordinalIgnoreCaseComparison(a, b) {
//     if ((a === null || a === undefined) && (b === null || b === undefined))
//       return 0;
//     if (a === null || a === undefined)
//       return -1;
//     if (b === null || b === undefined)
//       return 1;
//     a = a.toString().toLowerCase();
//     b = b.toString().toLowerCase();
//     if (a < b)
//       return -1;
//     if (a > b)
//       return 1;
//     return 0;
//   }
//
//   ordinalComparison(a, b) {
//     if ((a === null || a === undefined) && (b === null || b === undefined))
//       return 0;
//     if (a === null || a === undefined)
//       return -1;
//     if (b === null || b === undefined)
//       return 1;
//     a = a.toString();
//     b = b.toString();
//     if (a < b)
//       return -1;
//     if (a > b)
//       return 1;
//     return 0;
//   }
//
//   dateComparison(a, b) {
//     if ((a === null || a === undefined) && (b === null || b === undefined))
//       return 0;
//     if (a === null || a === undefined)
//       return -1;
//     if (b === null || b === undefined)
//       return 1;
//     return moment(b).diff(moment(a));
//   }
//
//   numberComparison(a, b) {
//     if ((a === null || a === undefined) && (b === null || b === undefined))
//       return 0;
//     if (a === null || a === undefined)
//       return -1;
//     if (b === null || b === undefined)
//       return 1;
//     return a - b;
//   }
// }



// export class SortValueConverter {
//   toView(array, propertyName, direction) {
//     var factor = direction === 'ascending' ? 1 : -1;
//     return array
//       .slice(0)
//       .sort((a, b) => {
//         return (a[propertyName] - b[propertyName]) * factor
//       });
//   }
// }


// export class SortValueConverter {
//   toView(array, propertyName,  direction = 'ascending',comparison = 'ordinalIgnoreCase') {
//     var directionFactor = direction === 'ascending' ? 1 : -1,
//         comparer = this[comparison + 'Comparison'];
//     if (propertyName === undefined)
//       return array.sort((a, b) => comparer(a, b) * directionFactor);
//     return array.sort((a, b) => comparer(a[propertyName], b[propertyName]) * directionFactor);
//   }
// }
