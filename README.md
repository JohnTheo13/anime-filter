anime-filter
================


## Demo
Check out the live [demo](http://anime-filter.ksulourgeio.gr)

## Project setup
1. Clone the project and checkout your specified branch
1. In a terminal type ```yarn``` install dependencies
1. In a terminal type ```yarn start``` to run the project
1. A new browser window will be opene to the port specified in your .env
1. In a terminal type ```yarn test``` to run your tests
1. In a terminal type ```yarn lint``` to check for lint mistakes
1. In a terminal type ```yarn build``` to make a production ready build

## Project's Stack
This project was created with Create React apps with no build configuration
Uses Redux for the project's state management, Styled-Components for the styling,
Font Awesome for ui and Flow for Type checking:

- [Creating an App](https://github.com/facebook/create-react-app/) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.
## Project's Best Practices and Architect
#### Motivations
- React's context API, to handle all the business logic (state), same logic with different components just by using the created reducer (reusability, refactoring, maintainace)
- Create React App to have a PWA ready project

### Best Practices
1. Single responsibility
1. Small Stateless Components instead of big Classes
1. Composable Components
1. Reusable
1. Meaningful
1. Declarative FP with Pure or Almost-Pure functions
1. Try to keep the Component's methods styles in the same folder

## ESLint
Yes, we lint our files.   
Lint will ensure that so best practices are followed. Search the error messages and learn with that.   
Make sure that all your .js files are passing the lint check before open a PR.      
There is pre-commit hook that won't allow you to commit without fixing the lint alerts.

## Unit Test
Following TDD you need first to write a small story, with an empty component and the unit tests and then we develop the component.   
Test stack consist of [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) 
The test are attached with an addon to the component story. You can follow the tests results directly through Storybook at the right panel under the specification tab.