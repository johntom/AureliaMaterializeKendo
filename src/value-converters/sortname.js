   
  export class SortnameValueConverter {
  toView(array, propertyName, direction) {
   
   var factor = direction === 'ascending' ? 1 : -1;
   var ans= 0;
    if( !array || array.length < 1 || (!propertyName || propertyName.length < 1)) {
        return array;
    }
    return array

      .sort((a, b) => {
      
        if ( a[propertyName] < b[propertyName] ) {ans= -1;};
    if ( a[propertyName] > b[propertyName] ){ ans= 1;};
    return ans;
        
        
      }).slice(0);
     
  }
}
