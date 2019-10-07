import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import logo from './logo.svg';
import styles from './App.module.scss';

export const Home: React.FC = () => {
  return (
    <Container>
      <img src={logo} className={styles.AppLogo} alt="logo" />
      <Row className="row">
        <Col xs={10}>
          <a
            className={styles.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Col>
      </Row>
      <Row className="row">
        <Col xs={10}>
          <h1>My New React Bootstrap SPA</h1>
          <Button data-testid="button-look">Look, I'm a button!</Button>
        </Col>
      </Row>
    </Container>
  );
};

const Subpage: React.FC = () => <div>This is an example subpage</div>;

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
        <Route path="/subpage" component={Subpage} />
      </div>
    );
  }
}

export default App;
