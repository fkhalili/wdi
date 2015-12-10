# Homework

## Part One: Refactory

Refactor your custom template from the state census exercise earlier today to use EJS instead of string concatenation.
Save your new template to an external EJS file.
Save each page to a new HTML file.

## Part Two: The X readFiles
```
            .-""""-.       .-""""-.
           /        \     /        \
          /_        _\   /_        _\
         // \      / \\ // \      / \\
         |\__\    /__/| |\__\    /__/|
          \    ||    /   \    ||    /
           \        /     \        /
            \  __  /       \  __  /
    .-""""-. '.__.'.-""""-. '.__.'.-""""-.
   /        \ |  |/        \ |  |/        \
  /_        _\|  /_        _\|  /_        _\
 // \      / \\ // \      / \\ // \      / \\
 |\__\    /__/| |\__\    /__/| |\__\    /__/|
  \    ||    /   \    ||    /   \    ||    /
   \        /     \        /     \        /
    \  __  /       \  __  /       \  __  /
     '.__.'         '.__.'         '.__.'
      |  |           |  |           |  |
      |  |           |  |           |  |
```
*Use the `sightings.json` file for these exercises.*

1. Write an application which counts the total number of UFO sightings on the 4th of July. **Bonus:** Try to use Regular Expressions!

2. Write an application which iterates through each UFO sighting and renders its location as an item in an unordered list. You *MUST* use an external EJS file and the output must be saved to an HTML document! **Bonus:** Arrange the sightings in order of the most UFO-visited locations

3. Write a command line application which takes a location as an argument, finds all of the sightings that happened at that location, and then renders each sighting shape, date, and time in an unordered list. If the user submits a location that is not on the list, log `"No aliens here!"`. You *MUST* use EJS an external EJS file and the output must be saved to an HTML document!
```
$ node xfiles.js "Henderson, NV"
```
