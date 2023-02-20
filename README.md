# Ben Armstrong - Object Oriented Programming: Team Profile Generator

## Your Task
Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 
Because this Challenge will require the use of the `Inquirer` package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: `npm i inquirer@8.2.4`.
Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.
Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.
> **Note**: There is no starter code for this assignment.

## User Story
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./images/10-object-oriented-programming-homework-demo.png)

The styling in the image is just an example, so feel free to add your own.

## Getting Started
This Challenge will combine many of the skills we've covered so far. In addition to the User Story and Acceptance Criteria, we’ve provided some guidelines to help get started.

Because this Challenge will require a video submission, refer to the [Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

Your application should use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user. The application will be invoked by using the following command:

```bash
node index.js
```

It is recommended that you start with a directory structure that looks like the following example:

```md
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
```

**Important**: Make sure that you remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to your application's repository.

The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

The first class is an `Employee` parent class with the following properties and methods:
* `name`
* `id`
* `email`
* `getName()`
* `getId()`
* `getEmail()`
* `getRole()`&mdash;returns `'Employee'`
The other three classes will extend `Employee`.
In addition to `Employee`'s properties and methods, `Manager` will also have the following:
* `officeNumber`
* `getRole()`&mdash;overridden to return `'Manager'`
In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
* `github`&mdash;GitHub username
* `getGithub()`
* `getRole()`&mdash;overridden to return `'Engineer'`
In addition to `Employee`'s properties and methods, `Intern` will also have the following:
* `school`
* `getSchool()`
* `getRole()`&mdash;overridden to return `'Intern'`
Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

## Grading Requirements
* A sample HTML file generated using the application must be submitted.
* Your GitHub repository containing your application code.
* A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.
* The walkthrough video must show all four tests passing from the command line.
* The walkthrough video must demonstrate how a user would invoke the application from the command line.
* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.
* The walkthrough video must demonstrate a generated HTML file that matches the user input.
* Satisfies all of the preceding acceptance criteria plus the following:
  * Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).
  * Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.
  * The application must have `Employee`, `Manager`, `Engineer`, and `Intern` classes.
* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains a high-quality readme with description and a link to a walkthrough video.

## Review
You are required to submit the following for review:
* A walkthrough video that demonstrates the functionality of the application and passing tests.
* A sample HTML file generated using your application.
* The URL of the GitHub repository, with a unique name and a readme describing the project.

## What I Learned
We had a great introduction to Node.js last week which we build up on with a focus on OOP (Object Oriented Programming). Modules included but not limited to Constructors, Prototypes, Promises, Tests, Classes and much more. 

## What Problems Did we Solve?
We started with nothing and I had to create a index.js file that used Node.js to create a HTML file from scratch that would be generated up on user input. The user input was captured using Inquirer. We also used 'tests'to ensure our code was built solidly and reducing bugs. 

# Installation
N/A

# Usage
To use and view this challenge you will need to fork or clone this repo to your machine. Then using intergrated terminal you can launch "npm start", fill in the information as prompted and the HTML file will be generated. You can then right click on the generated HTML file (located in the "dist" folder) and view in the web browser :-)

The follwing link will show a walk through of the working application:
https://drive.google.com/file/d/1E04gktboB8i2qC0lqeUQJiMkUaqC16wZ/view?usp=sharing

The following image's shows the web application's A) Working Console which includes User Input and all Tests passing, B) Deployed HTML file within the Browser:

![My Web Development Portfolio webpage includes a navigation bar, a professional head shot image, multiple links (placeholders at this stage) to projects completed within the UniSA Full Stack Web Development course, and working links to contact me - even download an updated resume.](./images/Ben_Armstrong_OOP_TeamProfileGenerator_ScreenShot_WorkingConsole.PNG)
![My Web Development Portfolio webpage includes a navigation bar, a professional head shot image, multiple links (placeholders at this stage) to projects completed within the UniSA Full Stack Web Development course, and working links to contact me - even download an updated resume.](./images/Ben_Armstrong_OOP_TeamProfileGenerator_ScreenShot_DeployedHTML.PNG)

# Credits
With special thanks to the UniSA Full Stack Web Development Class.

# License

Please refer to the LICENSE in the repo.
