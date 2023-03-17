describe('day.js adapter', function() {
  it('should format correctly using format presets', function() {
    const adapter = new Chart._adapters._date({timeZone: 'UTC'});
    expect(adapter).toBeDefined();

    const formats = adapter.formats();
    expect(formats).toEqual({
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
    });

    const timestamp = adapter.parse('2019-05-28T15:10:27.000');
    expect(adapter.format(timestamp, formats.year)).toEqual('2019');
    expect(adapter.format(timestamp, formats.quarter)).toEqual('Q2 - 2019');
    expect(adapter.format(timestamp, formats.month)).toEqual('May 2019');
    expect(adapter.format(timestamp, formats.week)).toEqual('May 28, 2019');
    expect(adapter.format(timestamp, formats.day)).toEqual('May 28');
    expect(adapter.format(timestamp, formats.hour)).toEqual('15');
    expect(adapter.format(timestamp, formats.minute)).toEqual('15:10');
    expect(adapter.format(timestamp, formats.second)).toEqual('15:10:27');
    expect(adapter.format(timestamp, formats.millisecond)).toEqual('15:10:27.000');
    expect(adapter.format(timestamp, formats.datetime)).toEqual('May 28 2019, 15:10:27');
  });
});
