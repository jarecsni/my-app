import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter as Router, Route } from 'react-router-dom';

import App, { Home } from './App';

import { componentWithId } from './testing/util/select';

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

it.skip('renders a button', done => {
  const wrapper = mount(
    <Router initialEntries={['/']} initialIndex={0}>
      <Route path="/" render={() => <Home />} />
    </Router>
  );
  process.nextTick(() => {
    const home = wrapper.find(Home);
    console.log(home.html());
    expect(componentWithId(home, 'button-look')).not.toBeNull();
    expect(componentWithId(home, 'button-look')).toHaveLength(1); // this returns 2 for some reason
    expect(componentWithId(home, 'button-look').text()).toEqual(
      "Look, I'm a button!"
    );
    done();
  });
});
