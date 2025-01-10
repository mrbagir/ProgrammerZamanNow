package belajar_golang_json

import (
	"encoding/json"
	"os"
	"testing"
)

func TestEncoder(t *testing.T) {
	write, _ := os.Create("CustomerOut.json")
	encode := json.NewEncoder(write)

	customer := Customer{
		FirstName:  "Eko",
		MiddleName: "Kurniawan",
		LastName:   "Khannedy",
	}

	encode.Encode(customer)
}
