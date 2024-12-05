package main

import (
	"aoc24/utils"
	"math"
	"sort"
	"strconv"
	"strings"
)

func main() {
	fileContent := utils.ReadFileReturnArray("./inputs/day1-input.txt")

	var left []int
	var right []int

	for _, line := range fileContent {
		split := strings.Fields(line)

		leftint, _ := strconv.Atoi(split[0])
		rightint, _ := strconv.Atoi(split[1])

		left = append(left, leftint)
		right = append(right, rightint)
	}

	sort.Ints(left)
	sort.Ints(right)

	sum := 0

	for i, leftItem := range left {
		sum += int(math.Abs(float64(leftItem - right[i])))
	}

	utils.Solution(sum, "a")

	rightMap := make(map[int]int)

	for _, rightItem := range right {
		if _, exists := rightMap[rightItem]; !exists {
			rightMap[rightItem] = 1
		} else {
			rightMap[rightItem] = rightMap[rightItem] + 1
		}
	}

	sum2 := 0
	for _, leftItem := range left {
		if val, exists := rightMap[leftItem]; exists {
			sum2 += leftItem * val
		}
	}

	utils.Solution(sum2, "b")
}
