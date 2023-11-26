# Scrabble Dictionary Api

Uses official scrabble dictionary

## Usage

- /check/:word - checks if word is valid (example: /check/hello)

> returns: {msg: "valid word"} or {msg: "invalid word"}

- /includes/:letters - returns a list of words given a set of letters (example: /includes/hlo)

> returns: {msg: ["HALO", "HELLO", ...]}
> 
> capped at top 50 words sorted by increasing length (this will ensure words with non repeated letters to be first)


## Demo
[scrabble.adelbeit.com/check/never](https://scrabble.adelbeit.com/check/never)

[scrabble.adelbeit.com/check/gonna](https://scrabble.adelbeit.com/check/gonna)

[scrabble.adelbeit.com/check/give](https://scrabble.adelbeit.com/check/give)

[scrabble.adelbeit.com/check/you](https://scrabble.adelbeit.com/check/you)

[scrabble.adelbeit.com/check/up](https://scrabble.adelbeit.com/check/up)

[scrabble.adelbeit.com/includes/lho](https://scrabble.adelbeit.com/includes/lho)
