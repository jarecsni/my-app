import React from 'react';
import { inject, observer } from 'mobx-react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from './logo.svg';
import styles from './Home.module.scss';

class HomeComponent extends React.Component {
  render() {
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
  }
}

@inject('uiState')
@observer
class Home extends HomeComponent {}

export { Home, HomeComponent };
