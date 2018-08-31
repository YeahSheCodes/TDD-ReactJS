import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import FilterUsers from "./filter-users.component.js";

// Acceptance criteria:
// - Filter a list of users

// Ask Questions:
// Break out of the silo, no more throwing over the wall & communicate
// - filter by a specific field?
// - filter by 

/*
// Step 1: define the funtionality you expect

describe("<FilterUsers />", () => {

    // This is the lowest hanging fruit test, if you at least test all your classes/components run 
    //      you already have more freedom to know when your code breaks another class/component
    it("should be able to initiate <FilterUsers />", () => {
        
    });
    it("should accept a list of users", () => {

    });
    it("should provide a search box to filter the user list by", () => {

    });
    it("should be able to set a search field when the search box is changed", () => {

    });
    // Reactive behavior - helps with loose coupling & modular code
    it("should take the list and filter values then trigger a callback", () => {

    });
});
*/

// Step 2: write just enough to make the tests fail

describe("<FilterUsers />", () => {

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

    const search = "Xolani";
    // const 
    let component = shallow(<FilterUsers userlist={details} filtercallback={} />);

    // let component = FilterUsers

    // This is the lowest hanging fruit test, if you at least test all your classes/components run 
    //      you already have more freedom to know when your code breaks another class/component
    it("should be able to initiate <FilterUsers />", () => {
        expect(component).toBeDefined();
    });
    it("should accept a list of users", () => {
        expect(component.props.userlist).toEqual(details);
    });
    it("should accept a filtercallback value", () => {
        expect(component.props.filtercallback).toEqual(search);
    });
    it("should take that list and filterby values and return the filtered list", () => {
        const callback = jest.fn();
        const spy = jest.spyOn(SearchData.prototype, 'trigger');
        const localComponent = mount(<SearchData data={data} callback={callback} />);

        let expectedData = [
            {
                "name": "Xolani",
                "email": "xolani@email.com"
            }
        ];
        let search = "twoname";
        let el = localComponent.find('input');
        el
            .at(0)
            .props()
            .onChange(search);


        expect()
    });
});