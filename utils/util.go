package utils

import (
	"bufio"
	"log"
	"os"
)

func ReadFileReturnArray(filename string) []string {
	fileContent, err := os.Open(filename)

	if err != nil {
		log.Fatal(err)
	}

	defer fileContent.Close() // will close at the end of the file

	fileScanner := bufio.NewScanner(fileContent)

	var fileContentArray []string
	for fileScanner.Scan() {
		lineText := fileScanner.Text()

		fileContentArray = append(fileContentArray, lineText)
	}

	if err := fileScanner.Err(); err != nil {
		log.Fatal(err)
	}

	return fileContentArray
}

func Solution(solution int, label string) {
	println("[solution]", label, solution)
}
