import React from 'react';

// components
import ServerButton from '../server-button/index.componet';

// styles
import { Container, Separator } from './index.styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton />
      {/* isHome */}
      <Separator />
      <ServerButton />
      <ServerButton /> {/* hasNotification */}
      <ServerButton /> {/* metions={3} */}
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
};

export default ServerList;
