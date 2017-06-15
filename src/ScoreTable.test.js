import React from 'react';
import {shallow, mount} from 'enzyme';

import ScoreTable from './ScoreTable';

describe('<ScoreTable/>', () => {
    it('Renders without crashing', () => {
        shallow(<ScoreTable previousGuessesArr ={[3]} />);
    });

  });