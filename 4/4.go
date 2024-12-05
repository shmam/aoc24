package main

import (
	"aoc24/utils"
	"strings"
)

var count int = 0
var fileContent = utils.ReadFileReturnArray("./inputs/day4-input.txt")
var matrix = make([][]string, len(fileContent))

func main() {

	for idx, row := range fileContent {
		matrix[idx] = strings.Split(row, "")
	}

	for y, _ := range matrix {
		for x, eachChar := range matrix[y] {
			if eachChar == "X" {
				search(x, y, 1, 0)   // right
				search(x, y, -1, 0)  // left
				search(x, y, 0, -1)  // up
				search(x, y, 0, 1)   // down
				search(x, y, 1, -1)  // top right
				search(x, y, -1, -1) // top left
				search(x, y, 1, 1)   // bottom right
				search(x, y, -1, 1)  // bottom left
			}
		}
	}

	utils.Solution(count, "A")
}

func search(x int, y int, traverseX int, traverseY int) {
	letters := []string{"X", "M", "A", "S"}
	tx := x
	ty := y

	for _, letter := range letters {
		if !inRange(tx, ty) || matrix[tx][ty] != letter {
			return
		}

		tx += traverseX
		ty += traverseY
	}

	// if we didnt return then we found an instance
	count += 1
}

func inRange(x int, y int) bool {
	return (x >= 0 && x < 140 && y >= 0 && y < 140)
}
