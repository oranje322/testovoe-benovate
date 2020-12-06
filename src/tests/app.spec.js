import React from "react";
import {shallow} from 'enzyme'
import App from "../App";

describe('Testing app', () => {
    it('app have rendered correctly', () => {
        const app = shallow(<App/>)
        expect(app).toMatchSnapshot()
    })
})