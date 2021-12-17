var slugify = require('slugify');
var capitalize = require('capitalize');

export default function getSlug(string){
return slugify(string);
};

export default function getCapitalize(string){
  return capitalize.words(string);
};
