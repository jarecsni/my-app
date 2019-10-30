import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { App } from './App';
import { Home } from './Home';

import { componentWithId } from '../testing/util/select';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a button', () => {
  const home = shallow(<Home />);
  expect(componentWithId(home, 'button-look')).not.toBeNull();
  expect(componentWithId(home, 'button-look')).toHaveLength(1); // this returns 2 for some reason when inside a router
  expect(componentWithId(home, 'button-look').text()).toEqual(
    "Look, I'm a button!"
  );
});
