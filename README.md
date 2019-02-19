# Angular Workshop

**To use the angular-cli, you need to have Node.js & npm installed on your machine.**
* https://nodejs.org/en/
* https://docs.npmjs.com/about-npm/index.html

**You can then install the cli using *npm*, by typing the following command into your command line:**

`npm install -g @angular/cli`

:boom: Follow the TODO's in the code :boom:

## :trollface: Task 1
* Use `angular-cli` to generate a new project.
* Create one component which displays `Hello World` in the browser.

## :trollface: Task 2
* Checkout `task-2-initial` branch. Then run `npm install` in order to get all packages.
* To run the project use `ng serve` command.
* In the branch you will find an already generated component and a sample data file, containing JSON objects.
* Your task is be to populate a table with the entities from the images array defined in **home** component.
* Use *ngFor to display the images and their titles.
* Your goal is to show and hide the **Images** column from the table. In order to do that:
    1. Define a boolean flag variable in the component.
    2. Add an event listener to the already created button belowlo the table.
    3. On click of the button change the value of the defined variable and the button label.
    4. Use **ngIf** to show and hide the table heading and the table cell containing the image.
* Use **ngClass** to set the background color of the odd table rows to gray.
