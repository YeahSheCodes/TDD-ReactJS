(Beta release: Still a work in progress.)

[http://www.yeahshecodes.com](http://www.yeahshecodes.com)

## Steps for this demo TDD project

1. npx create-react-app my-app
1. cd my-app
1. yarn install

Test the app runs before you start tdd:

1. yarn start

## TDD

# Setup

### React TDD Setup

Add enzyme to test for html elements in the components

1. yarn add enzyme 
1. yarn add enzyme-adapter-react-16

### Documentation links for Jest & Enzyme

Jest documentation:

[https://jestjs.io/docs/en/getting-started.html](https://jestjs.io/docs/en/getting-started.html)

Also review the documentation for information on how to create enzyme tests:

[https://airbnb.io/enzyme/](https://airbnb.io/enzyme/)


# Part 1 - A simple hello world test

### Begin TDD

Start with your first component and test

Create components folder
1. cd src && mkdir components

Create the component hello-world folder
1. mkdir hello-world && cd hello-world

Add the test file and the first failing test:
1. touch hello-world.test.js

Then run your tests:
1. yarn test

This will show 1 failed test, and tell you "Your test suite must contain at least one test.".
This can be our first failing test. The next step is to add in the test script:

Start by adding this to the test file:

    import React from "react";
    import { configure, shallow } from "enzyme";
    import Adapter from "enzyme-adapter-react-16";

    configure({adapter: new Adapter() });

    describe("<HelloWorld />", () => {

        let component = shallow(<HelloWorld />);

        it("should render a <HelloWorld /> component", () => {
            expect(component).toBeDefined();
        }); 

    });

That tests that the <HelloWorld /> component exists. It will fail, because it doesn't exist yet.

    ReferenceError: HelloWorld is not defined

Now add in the component and get the test to pass. 

Add to the folder you create a file called "hello-world.component.js" : /my-app/src/component/hello-world/hello-world.component.js

Inside hello-world.component.js add your empty component declaration:

    import React from "react";

    class HelloWorld extends React.Component {
        render() {

        }
    }

    export default HelloWorld;

And to your test add the correct import statement at the top of the file:

    import HelloWorld from "./hello-world.component";

Your test should now look like this:

    import React from "react";
    import { configure, shallow } from "enzyme";
    import Adapter from "enzyme-adapter-react-16";

    import HelloWorld from "./hello-world.component";

    configure({adapter: new Adapter() });

    describe("<HelloWorld />", () => {

        let component = shallow(<HelloWorld />);

        it("should render a <HelloWorld /> component", () => {
            expect(component).toBeDefined();
        }); 

    });

Add your failing tests. 

### Decide and plan what you want to test:

Write down the steps you want to test.

1. Test that the component contains an H1 element
1. Test that the H1 element has the text "Hello World"

#### Create your failing tests:

    import React from "react";
    import { configure, shallow } from "enzyme";
    import Adapter from "enzyme-adapter-react-16";

    import HelloWorld from "./hello-world.component";

    configure({adapter: new Adapter() });

    describe("<HelloWorld />", () => {

        let component = shallow(<HelloWorld />);

        it("should render a <HelloWorld /> component", () => {
            expect(component).toBeDefined();
        });

        it("should contain an H1 element ", () => {
            const h1 = component.find("H1");
            expect(h1.length).toEqual(1);
        });

        it("should contain an H1 element with the text 'Hello World!' ", () => {
            const h1 = component.find("h1");
            const expectedText = "Hello World!";
            expect(h1.text()).toEqual(expectedText);
        });

    });

#### Write your code to pass the failing tests:

Now you know what you need to add in order for the tests to pass, you now have a step by step guide making sure you write the right code.

1. Add an H1 element.
1. Add the text Hello World! to the H1 element.

Your code will look something like this:

    import React from "react";

    class HelloWorld extends React.Component {
        render() {
            return (
                <h1>Hello World!</h1>
            )
        }
    }

    export default HelloWorld;

#### Your tests should noe be passing.

If your tests are not passing check for any syntax issues and make sure you have followed the right steps.

Common issues:

Make sure you have exported your component:

    export default HelloWorld;

And imported it inside your test file:

    import HelloWorld from "./hello-world.component";

Make sure the extends React.Component part has a capital "C" and not a small "c":

    class ... extends React.Component {
        ...


# Part 2 - Test logic

Lets dig in a little further into TDD and create a new component with some logic. 

Your brief: Create a component that displays a list of user names and emails.

Break down the requirement into steps:

1. Create a component that takes in a list of data, ie an array.
1. The component must use that array to loop over and generate a list.

### TDD - Decide on you tests

A common syntax for tests is to write the tests in an "it should x" syntax, eg:

    it should render a <UserEmails /> component

Using that syntax we can now write out the test's steps using that syntax:

1. it should render a <UserEmails /> component
1. it should be able to accept an array of user details
1. is should be able to use the user details to loop and generate the same number of li elements

#### Setup the test file

In the compoments folder create a new folder called "user-emails".

Inside the folder create a file called "user-emails.test.js".

You should now have a file in this filepath: /my-app/src/component/user-details/user-emails.test.js

Add the initial setup to the file. 

You already know what your 3 tests shuold be, you planned them ahead of time:

1. it should render a <UserEmails /> component
1. it should be able to accept an array of user details
1. is should be able to use the user details to loop and generate the same number of li elements

This translates into this:

    import React from "react";
    import { configure, shallow } from "enzyme";

    import Adapter from "enzyme-adapter-react-16";

    configure({adapter: new Adapter() });

    describe("<UserDetails />", () => {
        let component = shallow(<UserDetails />);
        
        it("should render a <UserEmails /> component", () => {

        });

        it("should be able to accept an array of user details", () => {

        });

        it("should be able to use the user details to loop and generate the same number of li elements", () => {
            
        });
    });

Now add in your expect statements, and start fleshing out your tests:

Tips:
1. Write the minimum test logic to test a single functionality. Don't over complicate what you want to test.

Your tests can be fleshed out similar to this:

    import React from "react";
    import { configure, shallow } from "enzyme";

    import Adapter from "enzyme-adapter-react-16";

    configure({adapter: new Adapter() });

    describe("<UserDetails />", () => {

        const details = [
            {
                "name": "James",
                "email": "james@email.com"
            },
            {
                "name": "Maggie",
                "email": "maggie@email.com"
            },
            {
                "name": "Xolani",
                "email": "xolani@email.com"
            }
        ];
        let component = shallow(<UserDetails details={details} />);
        
        it("should render a <UserEmails /> component", () => {
            expect(component).toBeDefined();
        });

        it("should be able to accept an array of user details", () => {
            expect(component.prop('details')).to.equal(details);
        });

        it("should be able to use the user details to loop and generate the same number of li elements", () => {
            const liElements = component.find('li');
            expect(liElements.length).to.equal(3);
        });
    });

Run your tests:

    yarn test

If you need to, run the test command to start running and watching the tests, you should see this :

    Your test suite must contain at least one test.

#### Code the component

Tip
1. Code only enough to make the tests pass

Insight:
This is how TDD also help keep code lightweight. You know what you need to pass the tests, so you make sure you write only enough to make tests pass. Prevents code bloat. Also help with loose coupling.

Create your file

    user-details.component.js

This will be alongside your test, in the following path:

    /my-app/src/component/user-details/user-details.component.js

Make note of the steps you have to go through to make the tests pass:

1. Create a UserDetails component
1. Use the props variable details to retrieve the user details list and loop over
1. Create a ul and inside it loop (in this case we can use a simple .map method) and generate the li elements displaying the name and email.

Start writing the code:

Step 1

Create a UserDetails component

    import React from "react";

    class UserDetails extends React.Component {
        render() {
        }
    }

    export default UserDetails;

Remember to add the import to your test file so you can start seeing your tests run:

    import UserDetails from "./user-details.component";

**Note: It is important you add the import: import UserDetails from "./user-details.component";**

Step 2

Use the props variable details to retrieve the user details list and loop over
Create a "ul" and inside it loop (in this case we can use a simple .map method) and generate the "li" elements displaying the name and email.

    import React from "react";

    class UserDetails extends React.Component {
        render() {
            return (
                <ul>
                    {
                        this.props.details.map((d, index) => (<li key={index}>{d.name} - {d.email}</li>))
                    }
                </ul>
            )
        }
    }

    export default UserDetails;


#### Review the requirements

Finally review the requirements, make sure you have met them. Then commit the code, push it up to the branch, create your pull request and complete your feature.


## TODO

1. Inversion of control examples
1. Dependency injection examples
1. Mocking examples
1. Integration vs Unit Tests












