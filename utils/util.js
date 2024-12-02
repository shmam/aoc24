const { readFileSync } = require('node:fs');

async function readFileToArray(inputPath) {
    const fileContent = readFileSync(inputPath, 'utf-8', (e, d) => {
        if (e) throw e
        return d
    })

    const splitLines = fileContent.split("\n")
    return splitLines.filter(line => line !== '')
}

function debug(...params) {
    if (process.env.NODE_ENV === 'dev') {
        console.debug('[🛠️ debug]', ...params)
    }
}

function solution(...params) {
    console.log('[solution]', ...params)
}

module.exports = {
    readFileToArray,
    debug, 
    solution
} 