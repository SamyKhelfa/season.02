const { empty, withArgs } = require('./eventbox')
const { duplicate, transform } = require('./streambox')

console.log('----- Eventbox')
// eventbox
empty()
withArgs([
  'Luffy',
  'Zoro',
  'Usopp',
  'Robin',
  'Nami',
  'Sanji',
  'Ch0pper',
])