import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

import {componentWithId} from './testing/util/select';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the default text', () => {
  const app = shallow(<App/>);
  expect(componentWithId(app, 'welcome-text')).not.toBeNull();
  expect(componentWithId(app, 'welcome-text')).toHaveLength(1);
  expect(componentWithId(app, 'welcome-text').text()).toEqual('Edit src/App.tsx and save to reload.');
});