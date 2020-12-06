import React from "react";
import {shallow} from 'enzyme'
import Modal from "../components/Modal";

describe('Testing modal', () => {
    it('modal have rendered correctly', () => {
        const modal = shallow(<Modal/>)
        expect(modal).toMatchSnapshot()
    })

    it('modal rendered if props true', () => {
        const modal = shallow(<Modal modalVisible={true}/>)
        const opened = modal.find('.open')
        expect(opened).toHaveLength(1)
    })
    it('modal not reneder if props false', () => {
        const modal = shallow(<Modal modalVisible={false}/>)
        const closed = modal.find('.open')
        expect(closed).toHaveLength(0)
    })
})