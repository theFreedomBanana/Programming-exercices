#!/bin/bash -e
movie() {
	echo '$0 is: '$0
	echo '$# is: '$#
	echo '$* is: '$*
  local count=0
  local priceWithoutCard=0
  local priceWithCard=$1
  local ticketPriceWithDiscount=$(echo $2*$3 | bc)
  while [ 1 -eq "$(echo "${priceWithoutCard} < ${priceWithCard}" | bc)" ]
  do
    count=$(($count+1))
    priceWithoutCard=$(echo $priceWithoutCard+$2 | bc)
    priceWithCard=$(echo $priceWithCard+$ticketPriceWithDiscount | bc)
    ticketPriceWithDiscount=$(echo $ticketPriceWithDiscount*$3 | bc)
  done

  echo $count
}

movie $1 $2 $3
