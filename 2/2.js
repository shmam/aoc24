const {readFileToArray, debug, solution} = require('../utils/util')

const input = './inputs/day2-input.txt'

async function main(){
    const data = await readFileToArray(input)

    debug(data.length)

    const sumA = data.filter((eachRow) => {
        const splitRow = eachRow.split(' ').map((i) => Number(i))
        
        const firstDiff = splitRow[0] - splitRow[1]

        if (Math.abs(firstDiff > 3) || firstDiff === 0) {
            return false
        }

        if (firstDiff > 0) {
        // decreasing
            return splitRow.every((value, idx) => {
                if (idx !== splitRow.length - 1) {
                    const diff = value - splitRow[idx + 1]
                    return (diff > 0 && diff < 4)
                }
                return true
            })
        } else if (firstDiff < 0) {
        //increasing
            return splitRow.every((value, idx) => {
                if (idx !== splitRow.length - 1) {
                    const diff = value - splitRow[idx + 1]
                    return (diff < 0 && diff > -4)
                }
                return true
            })
        }
    }).length

    solution('a', sumA)

    const sumB = data.filter((eachRow) => {
        const splitRow = eachRow.split(' ').map((i) => Number(i))

  
        debug(splitRow.map((value, idx) => {
            if (idx !== splitRow.length - 1) {
                return value - splitRow[idx + 1]
            }
        }))
        
    }).length

    solution('b', sumB)
}

main().catch(console.error)