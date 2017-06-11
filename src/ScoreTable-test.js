import React from 'react';
import {shallow, mount} from 'enzyme';

import ScoreTable from './ScoreTable';

describe('<GuessInput/>', () => {
    it('Renders without crashing', () => {
        shallow(<ScoreTable />);
    });

  }