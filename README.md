# Process I followed to create a to-do list

1. I created a component to display each task individually. This component has an input property that allows it to receive a task and display its content.

2. I created a component to display a list of tasks. This component has the input property that allows it to receive a list of tasks and display each one using the component created in step 1.

3. I created a component to add new tasks. This component has a form with a text field and an "Add Task" button. By clicking the button, the task is added to the task list.

4. Finally, I added a checkbox to each task and a button to delete the task. Clicking the checkbox marks the task as done and clicking the delete button removes the task from the list.

# Framework

- Angular CLI: 15.0.4
- Node: 18.12.1
- Package Manager: npm 8.19.2
- OS: win32 x64

- Boostrap: 5.2.3
- Bootstrap-icons: 1.10.3

# ToDoListANGULAR

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
