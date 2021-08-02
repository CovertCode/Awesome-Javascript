var _ = require('lodash');

var object = {
   "a":1,
   "b":"22",
   "c":3,
   "d":null,
   "e":undefined,
   "x":{
      "q":1,
      "w":null
   }
};

var newObject = _.pickBy(object, _.identity);
console.log(newObject)
for(item in newObject) {
    if(typeof(newObject[item]) == 'object') {
        newObject[item] = _.pickBy(newObject[item], _.identity);
    }
}
console.log('Final')
console.log(newObject);
console.log('END')
