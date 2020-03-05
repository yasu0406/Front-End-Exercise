import React from 'react';
import { mount } from 'enzyme';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import CommunitiesList from './communities-list.component';

describe('CommunitiesList', () => {
    let wrapper;
    let mockFetchCommunities;
    let mockFetchCommunitiesAverage;

    beforeEach(() => {
        mockFetchCommunities = jest.fn();
        mockFetchCommunitiesAverage = jest.fn();
        const mockProps = {
            fetchCommunities: mockFetchCommunities,
            fetchCommunitiesAverage: mockFetchCommunitiesAverage
        };
        wrapper = mount(
            <Provider store={store}>
                <CommunitiesList {...mockProps} />
            </Provider>
        );
    });
    it('should render CommunitiesList component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});