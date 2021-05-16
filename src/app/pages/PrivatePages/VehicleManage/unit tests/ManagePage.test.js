import React from 'react';
import ReactDOM from 'react-dom';
import ManagePage from '../ManagePage';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ManagePage></ManagePage>, div)
})
