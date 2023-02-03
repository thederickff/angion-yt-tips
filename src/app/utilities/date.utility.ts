export class DateUtil {
  static monthsMMMM = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
  ];

  static monthsMMM = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec'
  ];

  static weekDaysDDDD = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];

  static weekDaysDDD = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'
  ];

  static Format(value: Date, type?: string) {
    const year = `${value.getFullYear()}`;
    const month = DateUtil.Lpad(value.getMonth() + 1);
    const day = DateUtil.Lpad(value.getDate());
    const [hour, minute, second] = value.toTimeString().split(' ')[0].split(':')

    if (!type) {
      return `${month}/${day}/${year} ${hour}:${minute}:${second}`;
    }

    return type.replace('DDDD', DateUtil.weekDaysDDDD[value.getDay()])
    .replace('DDD', DateUtil.weekDaysDDD[value.getDay()])
    .replace('dd', day)
    .replace('MMMM', DateUtil.monthsMMMM[+month - 1])
    .replace('MMM', DateUtil.monthsMMM[+month - 1])
    .replace('MM', month)
    .replace('yyyy', year)
    .replace('HH', hour)
    .replace('mm', minute)
    .replace('ss', second);
  }

  private static Lpad(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }
}