# Angular Workshop

**To use the angular-cli, you need to have Node.js & npm installed on your machine.**
* https://nodejs.org/en/
* https://docs.npmjs.com/about-npm/index.html

**You can then install the cli using *npm*, by typing the following command into your command line:**

`npm install -g @angular/cli`

**You also need to install Bootstrap 4**

 `npm install bootstrap`

:boom: Follow the TODO's in the code :boom:

## :trollface: Task 1
* Use `angular-cli` to generate a new project.
* Create one component which displays `Hello World` in the browser.

## :trollface: Task 2
* Checkout `task-2-initial` branch. Then run `npm install` in order to get all packages.
* To run the project use `ng serve` command.
* In the branch you will find an already generated component and a sample data file, containing JSON objects.
* Your task is to populate a table with the entities from the albums array defined in **home** component.
* Use *ngFor to display the album IDs and titles.
* Use **ngClass** to set the background color of the odd table rows to gray.
* Your goal is to show and hide the **Title** column of the table. In order to do that:
    1. Define a boolean flag variable in the component.
    2. Add an event listener to the already created button below the table.
    3. On click of the button change the value of the defined variable and the button label.
    4. Use **ngIf** to show and hide the Title column.
    
## :trollface: Task 3
* Checkout `task-3-initial` branch.
* In this task you have to display the images of the selected album.
* In the branch you will find two new folders in which the child components are extracted.
    1. albums-table - contains a sample data file with the albums.
    2. images-table
* In the Albums Table Component template: 
    1. Add an event listener to the 'Show Images" button, which triggers the function for showing the images of the album. 
    2. Pass the album id as a parameter.
    
* In the Albums Table Component:
    1. Define an event emitter using the Output annotation in order to notify the home component when the 'Show Images' button has              been clicked.
    2. Implement a function in which the event emitter emits the album id.

* In the Home Component template:
    1. Subscribe to the event emitter from the Albums Table Component. 
    2. Pass the emmitted album id to your custom function in the component by using $event argument.
    3. Use property binding to pass the album id to the Images Table Component.
    
* In the Home Component:
    1. Define a variable which will store the value of the currently selected album id.
    2. Implement a function which is subscribed to the event emitter from the Albums Table Component and accepts the emitted album id.   
    3. In the function assign the accepted value to the defined variable.
    
* In the Images Tables Component:
    1. Define a variable using the Input annotation in order to store the accepted album id value from the Home Component.
    2. Define a variable which will store the filtered images which belong to the selected album.
    3. Use the ngOnChanges lifecycle hook to assign value to the filtered images variable.
    4. Get the images which have album id the same as the selected one and asign them to the defined variable.
    
* In the Images Details Component template:
    1. If there is no selected album show 'Select an album to see images!' message otherwise display the table.
    2. Use *ngFor to iterate over the filtered images.
    3. Display the image title.
    4. Pass the image url to the src attribute of the img tag.

## :trollface: Task 4
* Checkout `task-4-initial` branch.
* In this task you have to use HttpClient to load the albums in the table from the previous task.
* Add HttpClientModule to the imports of the AppModule.
* In the Albums Table Component: 
    1. Import HttpClient from '@angular/common/http'.
    2. Inject HttpClient in the constructor.
    3. Implement a function in which you should:  
       3.1. Use the HttpClient to make a GET request for the albums with the following URL:'https://jsonplaceholder.typicode.com/albums'.   
       3.2. Subscribe to the response.  
       3.3. In case of success, assign the received data to the albums array.  
       3.4. In case of an error, log the error.  
    4. Call the function you created for initializing the albums in ngOnInit.

* In the Images Table Component: 
    1. Import HttpClient from '@angular/common/http'.
    2. Inject HttpClient in the constructor.
    3. Implement a function in which you should:  
       3.1. Set loading variable to true before the request is made.   
       3.2. Use the HttpClient to make a GET request for the images with the following URL:'https://jsonplaceholder.typicode.com/photos?albumId=${albumId}'.  
       3.3. Subscribe to the response.  
       3.4. In case of success, assing the received data to the images array and set the loading flag to false.   
       3.5. In case of an error, log the error and set the loading flag to false.
    4. Call the function you created for initializing the images in ngOnChanges.
    
 ## :trollface: Task 5
* Checkout `task-5-initial` branch.
* Create a new folder called 'services' into the 'app' folder
* Create a new file called 'http.service.ts'
* Create a class called HttpService which is Injectable and is singleton (Remember "providedIn : 'root' ? :smile:)
* In the constructor of the newly implemeted HttpService inject the HttpClient
* Create two functions which use the HttpClient to make a GET request for the images and albums.
* Inject the HttpService in the Albums Table and Images Table components.
* Use the functions of the HttpService and subscribe to the returned Observables.

## :trollface: Task 6
* Checkout `task-6-initial` branch.
* In the App Module: 
    1. Import ReactiveFormsModule from '@angular/forms'.
    2. Add ReactiveFormsModule to the imports.
* In the Images Table Component: 
    1. Import FormBuilder, FormGroup and Validators from '@angular/forms'.  
    2. Declare addImageForm variable of type FormGroup.  
    3. Inject FormBuilder in the constructor.  
    4. Initialize addImageForm using the injected form builder.  
       4.1. Add form controls for title and url.  
       4.2. Use the built-in validators to make sure the title and url are required and the title minimum length is 10 characters.  
    5. Implement a function for adding images in which you should:  
       5.1. Set isSubmitted variable to true.   
       5.2. If the form is valid - use the httpService.addImage method and pass addImageForm.value as parameter to make a POST request.  
       5.3. Subscribe to the response.  
       5.4. In case of success, log the received data.  
       5.5. In case of an error, log it.  
* In the Images Table Component template: 
    1. Use property binding to register formGroup to the addImageForm.
    2. Use formControlName attribute in the input tag to set the name of the title form control.
    3. Show appropriate error messages for required and minLength validation errors.
    4. Use formControlName attribute in the input tag to set the name of the url form control.
    5. Show appropriate error message for required validation error.
    6. Add an event listener to the 'Submit" button, which triggers the function for adding images defined in the component.

