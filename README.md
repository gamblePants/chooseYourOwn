# Choose Your Own Death
A simple choose your own adventure game. Click on the buttons to choose which path your character takes.

![chooseYour.PNG](https://gamblepants.github.io/img/chooseYour.PNG)

## Purpose
Primary purpose is a game. But also made to help me with learning JavaScript and my story writing. 

## How to run program
Run the program online on JSFiddle here: https://jsfiddle.net/gamblePants/unh0ow84/

- Alternatively click on the "release" tab above
- Download the chooseYourOwn.zip folder and extract to your computer
- Double-click the chooseYourOwn.html file to run in your browser
- Open chooseYourOwn.html and scenes.js files with a text editor to view the code

## Program structure

The scenes.js file is a script creating an array of objects (scenes). Each one of these scenes links to the other by the "name" property. The html file contains basic html labels and buttons for displaying the information. It also holds the displayStory(), moveCharacter() and playAgain() functions.

## Code snippets

the html buttons call the moveCharacter(choice) funtion. This function updates the current scene using the filter method, which looks through the scenes array for the correct scene. 

```C#
if (choice == 1) {
            scene = scenes.filter(function(item) {
              return item.name === scene.result1;
            })[0] || null;
```

## Credits

Special thanks to Amie McKenna for helping me with my words.
