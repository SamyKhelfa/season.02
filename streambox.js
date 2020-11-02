const readStream = fs.createReadStream(filename)
const writeStream = fs.createWriteStream('${name}.copy${ext}')