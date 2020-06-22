import styled from 'styled-components';

import { Props } from './index.componet';

export const Button = styled.button<Props>`
  /* flex */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  /* size */
  width: 48px;
  height: 48px;
  border-radius: 50%;

  /* margin */
  margin-bottom: 8px;

  /* colors */
  background-color: ${(props) =>
    props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

  /* cursor */
  cursor: pointer;

  /* postition */
  position: relative;

  /* image */
  > img {
    width: 24px;
    height: 24px;
  }

  /* animations */
  &::before {
    width: 9px;
    height: 9px;

    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);

    background-color: var(--white);
    border-radius: 50%;

    content: '';
    display: ${(props) => (props.hasNotification ? 'inline' : 'none')}
  }

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;

    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

  content: '${(props) => props.mentions && props.mentions}';
  display: ${(props) =>
    props.mentions && props.mentions > 0 ? 'inline' : 'none'}
  }

  transition: border-radius .2s, background-color: .2s

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome ? 'var(--rocketseat)' : 'var(--discord)'}
  }
`;
