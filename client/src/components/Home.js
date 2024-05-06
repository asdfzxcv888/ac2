// Home.js

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff9900;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #e68300;
  }
`;

const Home = () => {
  return (
    <Container>
      <Content>
        <Title>Welcome to Amazon Clone</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere
          gravida turpis, vitae posuere neque venenatis at.
        </Description>
        <Button>Start Shopping</Button>
      </Content>
    </Container>
  );
};

export default Home;
