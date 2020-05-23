import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { SubPage } from './SubPage';

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/subpage">Subpage</Link>
                    </li>
                </ul>

                <Route path="/" component={Home} exact />
                <Route path="/subpage" component={SubPage} />
            </div>
        );
    }
}

export { App };
