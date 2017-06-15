import React from 'react';
import {shallow, mount} from 'enzyme';

import Overall from './overall';

describe('<Overall/>', () => {
    it('Renders without crashing', () => {
        shallow(<Overall />);
    });

    it('Renders the add button initially', () => {
    const wrapper = shallow(<Overall />);
    expect(wrapper.hasClass('overallCont')).toEqual(true);
    });

});

