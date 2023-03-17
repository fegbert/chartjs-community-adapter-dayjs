import {_adapters} from 'chart.js';

import dayjs from 'dayjs/esm';
import isoWeekday from 'dayjs/esm/plugin/isoWeek';
import advancedFormat from 'dayjs/esm/plugin/advancedFormat';

dayjs.extend(isoWeekday);
dayjs.extend(advancedFormat);

const FORMATS = {
  datetime: 'MMM D YYYY, H:mm:ss',
  millisecond: 'H:mm:ss.SSS',
  second: 'H:mm:ss',
  minute: 'H:mm',
  hour: 'H',
  day: 'MMM D',
  week: 'MMM D, YYYY',
  month: 'MMM YYYY',
  quarter: '[Q]Q - YYYY',
  year: 'YYYY'
};

_adapters._date.override({
  _id: 'dayjs', // DEBUG

  formats: function() {
    return FORMATS;
  },

  parse: function(value, format) {
    if (typeof value === 'string' && typeof format === 'string') {
      value = dayjs(value, format);
    } else if (!(value instanceof dayjs)) {
      value = dayjs(value);
    }
    return value.isValid() ? value.valueOf() : null;
  },

  format: function(time, format) {
    return dayjs(time).format(format);
  },

  add: function(time, amount, unit) {
    return dayjs(time).add(amount, unit).valueOf();
  },

  diff: function(max, min, unit) {
    return dayjs(max).diff(min, unit);
  },

  // eslint-disable-next-line complexity
  startOf: function(time, unit, weekday) {
    if (unit === 'isoWeek') {
      return dayjs(time).isoWeekday(weekday).startOf('day').valueOf();
    }
    return dayjs(time).startOf(unit).valueOf();
  },

  endOf: function(time, unit) {
    return dayjs(time).endOf(unit);
  }
});
