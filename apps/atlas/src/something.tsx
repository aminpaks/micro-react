import { FC } from 'react';
import { css } from '@emotion/react';
import { RouteComponentProps } from '@reach/router';

const styles = css`
  background-color: red;
`;

export const Something: FC<RouteComponentProps> = ({ path }) => {
  console.log('current route', path);
  return <div css={styles}>Something</div>;
};

export default Something;
