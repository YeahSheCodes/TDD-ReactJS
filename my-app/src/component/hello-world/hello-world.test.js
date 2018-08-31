import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HelloWorld from "./hello-world.component";

configure({adapter: new Adapter() });

describe("<HelloWorld />", () => {

    let component = shallow(<HelloWorld />);

    it("should render a <HelloWorld /> component", () => {
        expect(component).toBeDefined();
    }); 

    it("should contain an H1 element ", () => {
        const h1 = component.find("h1");
        expect(h1.length).toEqual(1);
    });

    it("should contain an H1 element with the text 'Hello World!' ", () => {
        const h1 = component.find("h1");
        const expectedText = "Hello World!";
        expect(h1.text()).toEqual(expectedText);
    });

});