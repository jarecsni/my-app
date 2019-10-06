import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const App: React.FC = () => {
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

    // <div className={styles.App}>
    //   <header className={styles.AppHeader}>
    //
    //     <p data-testid="welcome-text">
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className={styles.AppLink}
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
};

export default App;
