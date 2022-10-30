#!/bin/bash -e
test() {
	local counter=3
	for (( i=0; i<$counter; i++ ));
	do
		echo $0
		echo $1
		echo $2
		echo $3
		shift
	done
}

test foo bar baz
