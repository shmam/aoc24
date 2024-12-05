const {readFileToArray, debug, solution} = require('../utils/util')

const input = './inputs/day1-input.txt'


async function main() {
    const data = await readFileToArray(input)

    debug('input length: ', data.length)

    let left = [], right = []

    for (eachRow of data) {
        const split = eachRow.split("   ")

        if (split.length !== 2) {
            debug('split length is not 2', split)
            continue
        }

        if (!isNaN(Number(split[0]))) {left.push(Number(split[0]))}
        if (!isNaN(Number(split[1]))) {right.push(Number(split[1]))}
    }

    debug(left.length, right.length)

    left = left.sort()
    right = right.sort()


    const sumDistance = left
        .flatMap((v, i) => Math.abs(v - right[i]))


    solution('a', sumDistance.reduce((acc, curr) => acc + curr, 0))

    const rightMap = {}
    right.forEach((v) => {
        if (!rightMap[v]) {
            rightMap[v] = 1
        } else {
            rightMap[v] = rightMap[v] + 1
        }
    })


    solution('b', left.reduce((acc, curr) => {
        if (!rightMap[curr]) {
            return acc
        } else {
            return acc + (curr * rightMap[curr])
        }
    }, 0))
}

main().catch(console.error)