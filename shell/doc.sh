#!/bin/bash -e

# Inside a function
# ---
# $1 first argument passed to a script
# $2 second argument
# $n n argument
# $@ all arguments
# $* all arguments as well but doesn't preserve any whitespace. Better use $@
# $? last returned code
# $! returns last run process PID
# $$ returns the current running shell PID
# $# number of arguments
# $0 returns the script name
# shift move done the arguments, meaning that $2 will become $1, $3 will become $2, and so on...

# Inside the Shell
# ---
# $HOME returns the path for user home
# $PATH returns all the pathes where to look for a bin
# $SHELL returns the current shell

# ======================
# VARIABLE
# ======================
# foo=azerty to declare a variable
# ${foo} to call a variable. It is better (though not mandatory) to always call a variable within brackets in order to enable interpolation.
# ${foo:-$bar} to call a variable 'foo' and use '$bar' (could be a variable or just a value) as default in case 'foo' is undefined.

# ======================
# STRING
# ======================
# ${var:2:4} will get 4 characters starting at position 2 of var
# ${var/foo/bar} if 'foo' is found inside 'var' will replace it's first occurence by 'bar'
# ${foo%t*} if 't' is encountered within 'foo' with remove it and everything that's coming after

# ======================
# ARRAY
# ======================
# arr=(x y z) to declare an array
# arr[@] / arr to call the entire array
# echo ${#arr} returns the length of 'arr'

# ======================
# FOR LOOP
# ======================
# for (( i=0; i<$limit; i++ )); do ... done
# for value in array; do ... done

# ======================
# IF CONDITION
# ======================
# if [[ ]]; then
# elif [[ ]]; then
# else
# fi

# ======================
# BRACKETS
# ======================
# Single '[' calls the program '/bin/[' (wierd name for a program...) whereas double '[[' does something similar but is bash built in. It is recommended to use the double '[[' over the single.

# ======================
# PARENTHESIS
# ======================
# Single '()' are used to create a subshell allowing you to perform operation without affecting the environment of the curretn shell
# Double '(())' are used for arithmetic operations (It used to be '$[]' but is now deprecated). ex: echo $((1 + 3 + 5 - 2)) //7

# ======================
# BRACES
# ======================
# single braces are used to call a variable. ex: echo ${foo}
# echo f{oo,ee,a}d with return 'food feed fad'. It's called brace expansions
# {0..8} will return an array of each value between the first and the second argument, e.g 0 1 2 3 4 5 6 7 8
# {0..8..2} will return every step of third argument between first and second argument, e.g 0 2 4 6 8
# {D..T..4} also works with letters, e.g D H L P T
