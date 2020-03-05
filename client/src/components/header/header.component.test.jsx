import React from 'react';
import { shallow } from 'enzyme';
import Header from './header.component';

it('should render Header component', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
});