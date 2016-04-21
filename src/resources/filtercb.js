export class FiltercbValueConverter {
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
