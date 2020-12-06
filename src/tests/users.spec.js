import React from "react";
import {shallow} from 'enzyme'
import Users from "../components/Users";

describe('Testing users', () => {
    it('users have rendered correctly', () => {
        const users = shallow(<Users/>)
        expect(users).toMatchSnapshot()
    })

})