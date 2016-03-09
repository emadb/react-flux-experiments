import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import {assert} from 'chai'

import Home from '../../fe/js/Home'

describe('<Home />', () => {
  it('renders three <div /> components', () => {
    const wrapper = shallow(<Home />);
    assert.isTrue(wrapper.contains(<div className="view">Welcome!</div> ))
  });
});
