import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../globalcontext/useGlobalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Styled component for the alert
const AlertContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  background-color: ${({ colo }) => (colo ? 'rgba(191, 241, 191, 0.9)' : 'rgba(248, 215, 218, 0.9)')}; /* Change background color based on colo prop */
  color: ${({ colo }) => (colo ? '#155724' : '#721c24')}; /* Change text color based on colo prop */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Close button styled component
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ colo }) => (colo ? '#155724' : '#721c24')}; /* Change close button color based on colo prop */
  font-size: 1rem;
`;

// Alert component
const Alert = () => {
  const { alert, closealert, alertmsg, colo } = useGlobalContext(); // Assuming colo is passed as a prop from the global context

  // Render the alert if it is visible
  return alert ? (
    <AlertContainer colo={colo} onClick={closealert}>
      <p>{alertmsg}</p>
      <CloseButton colo={colo}>
        <FontAwesomeIcon icon={faTimes} />
      </CloseButton>
    </AlertContainer>
  ) : null;
};

export default Alert;
