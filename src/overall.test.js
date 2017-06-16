import React from 'react';
import {shallow, mount} from 'enzyme';

import Overall from './Overall';

describe('<Overall/>', () => {
    it('Renders without crashing', () => {
        shallow(<Overall />);
    });
});

