import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HelloWorld from "./hello-world.component";

configure({adapter: new Adapter() });

// step 1

// describe("<HelloWorld />", () => {

//     it("should render a <HelloWorld /> component", () => {
        
//     }); 

//     it("should contain an H1 element ", () => {

//     });

//     it("should contain an H1 element with the text 'Hello World!' ", () => {

//     });

// });

// step 2

describe("<HelloWorld />", () => {

    let component = shallow(<HelloWorld />);

    it("should render a <HelloWorld /> component", () => {
        expect(component).toBeDefined();
    }); 

    it("should contain an H1 element ", () => {
        const h1 = component.find("h1");
        expect(h1.length).toEqual(2);
    });

    it("should contain an H1 element with the text 'Hello World!' ", () => {
        const h1 = component.find("h1");
        const expectedText = "Hello World!";
        expect(h1.at(0).text()).toEqual(expectedText);
    });

    it("should contain an H1 element with the text 'World says hello back :-)' ", () => {
        const h1 = component.find("h1");
        const expectedText = "World says hello back :-)";
        expect(h1.at(1).text()).toEqual(expectedText);
    });



    // World says hello back :-)

});