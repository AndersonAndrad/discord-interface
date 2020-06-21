import React from 'react';

// components
import ServerList from '../serverList/index.component';

// styles
import { Grid } from './index.styles';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
    </Grid>
  );
};

export default Layout;
