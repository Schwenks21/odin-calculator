# odin-calculator
Odin Project Fundamentals Final Project - Calculator

This is the final project of the TOP fundamentals section. The project is to create a fully functioning basic calculator. This project will require using a wide variety of functions and array methods in order to have the calculator function properly. I'll update with README with issues that I faced and how I overcame them as I work through the project.

Live Preview:

https://schwenks21.github.io/odin-calculator/

Screenshot:
![image](https://user-images.githubusercontent.com/96341179/154159696-20cd6f09-ce5d-457a-bdba-b73fdc99f501.png)

I'm thrilled that this project didn't take as long as I hoped but there were some hangups that I had to work through. There is certainly room to rework and fractor the code. I created global variables to store the number/string in the display, the selected operator, and the second number. It became complicated and confusing when I added the feature of chaining calculations using operators instead of always using the equals sign. The challenge there is that I needed to run the operate function only if there was already a stored number and a stored operator. If so, I needed to input the stored number, the stored operator, and the current display number into the operate function; run the operate function, store the output as the new stored number, and store the most recent operator button clicked. I also encountered a bug where the display number variable would sometimes be a number and sometimes a string, so I added Number() method checkpoints to ensure I was working with a number before all calculations.

I added additional features including +/- button, percentage button, backspace button, and decimal button.

The only feature I have left to add is keyboard functionality. I'm hoping to return to this project and add it as I learn more.
