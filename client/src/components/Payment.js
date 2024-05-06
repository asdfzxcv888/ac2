import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../globalcontext/useGlobalContext';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5; /* Amazon light gray background color */
`;

const Content = styled.div`
  width: 50%;
  max-width: 500px;
  background-color: #ff9900; /* Amazon orange color */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #000; /* Black border */
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #000; /* Black text color */
`;

const Option = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
  border: 2px solid #000; /* Black border */
  padding: 10px;
`;

const OptionDetails = styled.div`
  display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 20px;
`;

const ItemDetails = styled.div``;

const ItemName = styled.p`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  color: #007185; /* Amazon green color */
`;

const PaymentPage = () => {
  const { cart } = useGlobalContext();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle payment submission
    console.log('Payment submitted!');
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  return (
    <Container>
      <Content>
        <Title>Payment Details</Title>
        {/* Payment options */}
        <Option onClick={() => handleOptionClick('Credit/Debit Card')}>
          Credit/Debit Card
          <OptionDetails isSelected={selectedOption === 'Credit/Debit Card'}>
            {/* Form for Credit/Debit Card */}
          </OptionDetails>
        </Option>
        <Option onClick={() => handleOptionClick('Online Banking')}>
          Online Banking
          <OptionDetails isSelected={selectedOption === 'Online Banking'}>
            {/* Form for Online Banking */}
          </OptionDetails>
        </Option>
        <Option onClick={() => handleOptionClick('UPI')}>
          UPI
          <OptionDetails isSelected={selectedOption === 'UPI'}>
            {/* Form for UPI */}
          </OptionDetails>
        </Option>
        {/* Order summary */}
        <Title>Order Summary</Title>
        {cart.map((item) => (
          <OrderItem key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price}</ItemPrice>
            </ItemDetails>
          </OrderItem>
        ))}
      </Content>
    </Container>
  );
};

export default PaymentPage;
