import React from 'react';
import ReactDOM from 'react-dom';
import ManagePage from '../ManagePage';
import { shallow } from 'enzyme';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ManagePage></ManagePage>, div)
})

it('when button clicked, the page should go to next', () => {
    let pageNum = 0;
    const setPageNum = (prev) =>{
        pageNum = prev + 1;
    }

    const wrapper = shallow(<ManagePage pageNum={pageNum} setPageNum={setPageNum} />);

    const button = wrapper.find('#previous-page');
    button.simulate('click');
    expect(pageNum).toBe(1);
});
