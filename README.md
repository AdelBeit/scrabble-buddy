# scrabble dictionary api
uses official scrabble dictionary
## Usage
/check/:word - checks if word is valid (example: /check/hello)
returns: {msg: "valid word"} or {msg: "invalid word"}
/includes/:letters - returns a list of words given a set of letters (example: /includes/hlo)
returns: {msg: ["low", "hello", ...]} capped at top 50 words sorted by increasing length (this will allow for words with non duplicate letters to show up on top)