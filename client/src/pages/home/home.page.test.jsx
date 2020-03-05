import React from 'react';
import { shallow } from 'enzyme';
import Home from './home.page';

it('should render Home component', () => {
    expect(shallow(<Home />)).toMatchSnapshot();
});