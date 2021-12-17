var arraySort = require('array-sort');

export default function getSortedArray(array){
return arraySort(array);
};

export default function getRandomString(array){
return array[Math.floor(Math.random()*array.length)];
};
