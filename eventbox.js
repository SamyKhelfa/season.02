const EventEmitter = require('events')


function empty(){
    const emitter = new EventEmitter()

    const emitter('hi', () = > {
        console.log('Ch0oooooper')
    })

    emitter.emit('hi')
}

// Correction de Dylan
function withArgs(names){
    const emitter = new EventEmitter()
    for (let i = 0; i < names.length; i++){

    }
}

module.exports = {
    empty,
    withArgs
} 