import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

import { componentWithId } from './testing/util/select';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a button', () => {
  const app = shallow(<App />);
  expect(componentWithId(app, 'button-look')).not.toBeNull();
  expect(componentWithId(app, 'button-look')).toHaveLength(1);
  expect(componentWithId(app, 'button-look').text()).toEqual(
    "Look, I'm a button!"
  );
});
