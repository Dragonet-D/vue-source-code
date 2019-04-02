import _ from "lodash";

function f(a) {
  switch (a) {
    case 'a':
    case 'b':
      console.log(234);
      break;
    default:
      console.log(123);
  }
}

const data = [
  {
    'capalarm.alarmtype': 'aa',
    'capalarm.state': 'unknown',
    'capevent.severity': '1',
    count: '12'
  },
  {
    'capalarm.alarmtype': 'bb',
    'capalarm.state': 'known',
    'capevent.severity': '2',
    count: '122'
  },
  {
    'capalarm.alarmtype': 'aa',
    'capalarm.state': 'unknown',
    'capevent.severity': '3',
    count: '121'
  }
];
const targetOne = {
  "Alarm Type": ["aa"],
  "Alarm Severity": ["1", "2"],
  "Alarm State": ["unknown"]
};

function f2(data) {
  const resultArr = [];

  function dataFormat(data, keyName) {
    const tempArr = []
    if (data.length) {
      data.forEach(item => {
        tempArr.push({
          [keyName]: item
        });
      });
    }
    resultArr.push(tempArr)
  }

  const AlarmType = "Alarm Type"
  const AlarmSeverity = "Alarm Severity"
  const AlarmState = "Alarm State"

  const alarmTypeData = data[AlarmType];
  const alarmSeverityData = data[AlarmSeverity];
  const alarmStateData = data[AlarmState];

  if (alarmTypeData) {
    dataFormat(alarmTypeData, "capalarm.alarmtype");
  }
  if (alarmSeverityData) {
    dataFormat(alarmSeverityData, "capevent.severity");
  }
  if (alarmStateData) {
    dataFormat(alarmStateData, "capalarm.state");
  }
  return resultArr
}

const target = f2(targetOne);

function find(data, target) {
  let result = [];
  data.forEach(item => {
    target.forEach(itemTarget => {
      const findOne = _.find([item], itemTarget);
      if (findOne) {
        result.push(JSON.stringify(findOne))
      }
    })
  })
  return result
}

handleFind(data, target);

export function handleFind(data, target) {
  const result = [];
  target.forEach(item => {
    result.push(find(data, item))
  });
  console.log(f1(result[0], result[1], result[2]));
  return result
}

function f1(tagert, data1, data2) {
  return [...tagert].filter(x => new Set(data1).has(x)).filter(x => new Set(data2).has(x));
}

