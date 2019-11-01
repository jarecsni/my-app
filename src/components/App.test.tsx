import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { shallow } from 'enzyme';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { App } from './App';
import { HomeComponent } from './Home';

import { componentWithId } from '../testing/util/select';

describe('App', () => {
  const mockUiState = {};
  let stores = {
    uiState: mockUiState
  };
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Provider {...stores}>
          <App />
        </Provider>
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a button', () => {
    console.log(mockUiState);
    const home = shallow(<HomeComponent {...stores} />);
    expect(componentWithId(home, 'button-look')).not.toBeNull();
    expect(componentWithId(home, 'button-look')).toHaveLength(1); // this returns 2 for some reason when inside a router
    expect(componentWithId(home, 'button-look').text()).toEqual(
      "Look, I'm a button!"
    );
  });
});
