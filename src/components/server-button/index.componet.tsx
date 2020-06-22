import React from 'react';

// styles
import Img from '../../assets/logo.jpeg';
import { Button } from './index.styles';

// interfaces
export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotification?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotification,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotification={hasNotification}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={Img} alt="my photografy" />}
    </Button>
  );
};

export default ServerButton;
