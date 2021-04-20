import { css } from '@emotion/react';
import { Link } from '@reach/router';
import { useEffect } from 'react';

const styles = css`
  a {
    display: block;
  }

  #main-content {
    margin: 1rem auto;
    padding-top: 1rem;
    border-top: 1px solid #eee;
  }
`;

export default function Root(props) {
  useEffect(() => {
    console.log('HUD mounted!');
    return () => {
      console.log('HUD unmounted!');
    };
  }, []);

  return (
    <section css={styles}>
      <div>{props.name} is mounted!</div>
      <header>
        <nav>
          <h2>React Router Navigation</h2>
          <Link to="/oms">OMS Home</Link>
          <Link to="/atlas">Atlas Home</Link>
          <Link to="/atlas/something">Atlas Something</Link>
        </nav>
      </header>
      <div id="main-content">Loading...</div>
    </section>
  );
}
