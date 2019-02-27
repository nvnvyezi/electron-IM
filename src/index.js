import _ from 'lodash';
const b = 'sss'
let a = () => {
  console.log(b)
}
a()
console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
); 