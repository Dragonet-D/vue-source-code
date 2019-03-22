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
    a: 'aa',
    b: 'unknown',
    c: '1',
    count: '12'
  },
  {
    a: 'bb',
    b: 'known',
    c: '2',
    count: '122'
  },
  {
    a: 'aa',
    b: 'unknown',
    c: '3',
    count: '121'
  }
]
const target = [
  [
    {
      a: 'aa'
    }
  ],
  [
    {
      b: 'known'
    },
    {
      b: 'unknown'
    }
  ],
  [
    {
      c: '2'
    },
    {
      c: '1'
    }
  ]
]
const target1 = [
  {
    c: '2'
  },
  {
    c: '1'
  }
]

function find(data, target) {
  let result = []
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

export function handleFind() {
  const result = []
  target.forEach(item => {
    result.push(find(data, item))
  })
  console.log(result);
  return result
}

