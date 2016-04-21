import moment from 'moment';

export class DateFormatValueConverter {
  toView(value) {
    // return moment(value).format('M/D/YYYY h:mm:ss a');
    return moment(value).format('M/D/YYYY');
  }
}
// export class DateFormatValueConverter {
//   toView(value, format) {
//     if (value === null)
//       return '';
//     return moment(value).format(format);
//   }

//   fromView(value, format) {
//     if (value === '')
//       return null;
//     return moment(value, format).toDate();
//   }
// }
