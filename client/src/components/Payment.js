// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useGlobalContext } from '../globalcontext/useGlobalContext';

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f0f2f5; /* Amazon light gray background color */
// `;

// const Content = styled.div`
//   width: 50%;
//   max-width: 500px;
//   background-color: #ff9900; /* Amazon orange color */
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   border: 2px solid #000; /* Black border */
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   margin-bottom: 20px;
//   color: #000; /* Black text color */
// `;

// const Option = styled.div`
//   margin-bottom: 20px;
//   cursor: pointer;
//   border: 2px solid #000; /* Black border */
//   padding: 10px;
// `;

// const OptionDetails = styled.div`
//   display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
// `;

// const OrderItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const ItemImage = styled.img`
//   width: 50px;
//   height: 50px;
//   object-fit: cover;
//   margin-right: 20px;
// `;

// const ItemDetails = styled.div``;

// const ItemName = styled.p`
//   font-size: 1.2rem;
//   margin-bottom: 5px;
// `;

// const ItemPrice = styled.p`
//   font-size: 1rem;
//   color: #007185; /* Amazon green color */
// `;

// const PaymentPage = () => {
//   const { cart } = useGlobalContext();
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Logic to handle payment submission
//     console.log('Payment submitted!');
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option === selectedOption ? null : option);
//   };

//   return (
//     <Container>
//       <Content>
//         <Title>Payment Details</Title>
//         {/* Payment options */}
//         <Option onClick={() => handleOptionClick('Credit/Debit Card')}>
//           Credit/Debit Card
//           <OptionDetails isSelected={selectedOption === 'Credit/Debit Card'}>
//             {/* Form for Credit/Debit Card */}
//           </OptionDetails>
//         </Option>
//         <Option onClick={() => handleOptionClick('Online Banking')}>
//           Online Banking
//           <OptionDetails isSelected={selectedOption === 'Online Banking'}>
//             {/* Form for Online Banking */}
//           </OptionDetails>
//         </Option>
//         <Option onClick={() => handleOptionClick('UPI')}>
//           UPI
//           <OptionDetails isSelected={selectedOption === 'UPI'}>
//             {/* Form for UPI */}
//           </OptionDetails>
//         </Option>
//         {/* Order summary */}
//         <Title>Order Summary</Title>
//         {cart.map((item) => (
//           <OrderItem key={item.id}>
//             <ItemImage src={item.image} alt={item.name} />
//             <ItemDetails>
//               <ItemName>{item.name}</ItemName>
//               <ItemPrice>{item.price}</ItemPrice>
//             </ItemDetails>
//           </OrderItem>
//         ))}
//       </Content>
//     </Container>
//   );
// };

// export default PaymentPage;


import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../globalcontext/useGlobalContext';
import { useNavigate } from 'react-router-dom';

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
  background-color: #f3f3f3; /* Light gray background color */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd; /* Light gray border */
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333; /* Dark gray text color */
`;

const Option = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
  border: 1px solid #ddd; /* Light gray border */
  padding: 20px;
  border-radius: 5px;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd; /* Light gray border */
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff9900; /* Amazon orange color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff; /* White text color */
`;


const PaymentPage = () => {
  const navigate=useNavigate()

  const { cart,togglealert,setcolo,setalertmsg } = useGlobalContext();
  const [selectedOption, setSelectedOption] = useState(null);

  const pay=()=>{
    console.log('yyy');
      setalertmsg('payment is successful..')
      setcolo(true)
      togglealert()
      navigate('/products')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle payment submission
    pay()
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
            <Form onSubmit={handleSubmit}>
              {/* Credit/Debit Card form fields */}
              <Input type="text" placeholder="Card Number"  />
              <Input type="text" placeholder="Expiry Date"  />
              <Input type="text" placeholder="CVV"  />
              <Button type="submit">Pay</Button>
            </Form>
          </OptionDetails>
        </Option>
        <Option onClick={() => handleOptionClick('Online Banking')}>
          Online Banking
          <OptionDetails isSelected={selectedOption === 'Online Banking'}>
            <Form onSubmit={handleSubmit}>
              {/* Online Banking form fields */}
              <Input type="text" placeholder="Bank Name"  />
              <Input type="text" placeholder="Account Number"  />
              <Input type="password" placeholder="Password"  />
              <Button type="submit">Pay</Button>
            </Form>
          </OptionDetails>
        </Option>
        <Option onClick={() => handleOptionClick('UPI')}>
          UPI
          <OptionDetails isSelected={selectedOption === 'UPI'}>
            <Form onSubmit={handleSubmit}>
              {/* UPI form fields */}
              <Input type="text" placeholder="UPI ID"  />
              <Button type="submit">Pay</Button>
            </Form>
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
