const fs = require('fs')
const path = require('path')
const { Transform } = require 

const {name, ext} = path.parse(filename) 

const readStream = fs.createReadStream(filename)
const writeStream = fs.createWriteStream('${name}.copy${ext}')