import Greeting from "../components/Greeting";
import React from "react";
import {shallow} from 'enzyme'

describe('Testing greeting', () => {
    it('greeting have rendered correctly', () => {
        const greeting = shallow(<Greeting/>)
        expect(greeting).toMatchSnapshot()
    })
})