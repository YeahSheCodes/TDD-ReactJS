import React from "react";
import { configure, shallow, mount } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import UserDetails from "./user-details.component";

configure({adapter: new Adapter() });

describe("<UserDetails />", () => {

    let details = [
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
    let component = mount(<UserDetails details={details} />);
    
    it("should render a <UserEmails /> component", () => {
        expect(component).toBeDefined();
    });

    it("should be able to accept an array of user details", () => {
        expect(component.prop('details')).toEqual(details);
    });

    it("should be able to use the user details to loop and generate the same number of li elements", () => {
        const liElements = component.find('li');
        expect(liElements.length).toEqual(3);
    });

});