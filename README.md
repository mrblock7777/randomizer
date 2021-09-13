# randomizer
Generate randomized list based on file input

You will need to have a file containing list.

Example:

### example.txt
```
Imaan Wilkinson
Lainey Devine
Ameerah Holloway
Justine Farmer
Roosevelt Rees
Elsa Cantrell
Erica Metcalfe
Huseyin Clegg
Selin Winter
Yolanda Mackenzie
```

### Command
```
randomizer -f ./example.txt -d \\n
```
Alternatively, you can simply run:

```
randomizer
```
And it will prompt two inputs for the same parameter. Currently, the delimiter in the prompt only supports line breaks(\n), commas(,), and whitespaces

# Command and Option details

### Available Options
```
-f, --filename <file> - Relative path to the file containing list
-d, --delimiter <delimiter> - The delimiter used to separate the list
```

### Available Commands
```
range <range>  - Generates random number between the range. Accepts the format of "n-n"
```
Example:
```
randomizer range 1-9
```
  
