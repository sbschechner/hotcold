import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessInput from '../GuessInput';

describe('<GuessInput/>', () => {
    it('Renders without crashing', () => {
        shallow(<GuessInput />);
    });

  });