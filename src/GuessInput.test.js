import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessInput from './GuessInput';

describe('<GuessInput/>', () => {
    it('Renders without crashing', () => {
        shallow(<GuessInput />);
    });

    it('automatically create a computer guess initially', () => {
    const wrapper = shallow(<GuessInput />);
    expect(wrapper.hasClass('numberGenerator')).toEqual(true);
    });

  }