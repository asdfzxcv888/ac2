// import React from 'react';
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
//   width: 70%;
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   margin-bottom: 20px;
// `;

// const CartItem = styled.div`
//   border-bottom: 1px solid #ccc;
//   padding: 10px 0;
//   display: flex;
//   align-items: center;
// `;

// const ProductImage = styled.img`
//   width: 100px;
//   height: 100px;
//   object-fit: contain;
// `;

// const ProductInfo = styled.div`
//   flex: 1;
//   padding-left: 20px;
// `;

// const ProductName = styled.p`
//   font-size: 1.2rem;
//   margin-bottom: 5px;
// `;

// const ProductPrice = styled.p`
//   font-size: 1rem;
//   color: #007185; /* Amazon green color */
// `;

// const Quantity = styled.span`
//   margin-right: 10px;
// `;

// const Button = styled.button`
//   padding: 5px 10px;
//   margin-left: 10px;
//   background-color: #ff9900;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s;
  
//   &:hover {
//     background-color: #e68300;
//   }
// `;

// const Cart = () => {
//   const { cart, updateQuantity, removeFromCart ,handleDecreaseQuantity,handleIncreaseQuantity,handleRemoveItem} = useGlobalContext();

 

//   return (
//     <Container>
//       <Content>
//         <Title>{cart.length>0?'Shopping Cart':'You Have not added any items yet...'}</Title>
//         {cart.map(item => (
//           <CartItem key={item.id}>
//             <ProductImage src={item.image} alt={item.name} />
//             <ProductInfo>
//               <ProductName>{item.name}</ProductName>
//               <ProductPrice>{item.price}</ProductPrice>
//             </ProductInfo>
//             <Quantity>{item.quantity}</Quantity>
//             <Button onClick={() => handleIncreaseQuantity(item.id)}>+</Button>
//             <Button onClick={() => handleDecreaseQuantity(item.id)}>-</Button>
//             <Button onClick={() => handleRemoveItem(item.id)}>Remove</Button>
//           </CartItem>
//         ))}
//       </Content>
//     </Container>
//   );
// };

// export default Cart;


import React from 'react';
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
  width: 70%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const ProductName = styled.p`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #007185; /* Amazon green color */
`;

const Quantity = styled.span`
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
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

const TotalPrice = styled.p`
  font-size: 1.2rem;
  margin-top: 20px;
`;

const CheckoutButton = styled(Button)`
  background-color: #ff9900;
  margin-top: 10px;
  font-size: 1rem;
  padding: 10px 20px; /* Adjust padding to increase button height */
`;
const Cart = () => {
  const navigate=useNavigate()
  const { cart, updateQuantity, removeFromCart,handleIncreaseQuantity,handleDecreaseQuantity,handleRemoveItem } = useGlobalContext();

 

  // Calculate total price of all items in the cart
  // Calculate total price of all items in the cart
const totalPrice = cart.reduce((total, item) => total + (item.quantity * parseFloat(String(item.price).slice(1))), 0);


  return (
    <Container>
      <Content>
        <Title>{cart.length > 0 ? 'Shopping Cart' : 'You Have Not Added Any Items Yet...'}</Title>
        {cart.map(item => (
          <CartItem key={item.id}>
            <ProductImage src={item.image} alt={item.name} />
            <ProductInfo>
              <ProductName>{item.name}</ProductName>
              <ProductPrice>{item.price}</ProductPrice>
            </ProductInfo>
            <Quantity>{item.quantity}</Quantity>
            <Button onClick={() => handleIncreaseQuantity(item.id)}>+</Button>
            <Button onClick={() => handleDecreaseQuantity(item.id)}>-</Button>
            <Button onClick={() => handleRemoveItem(item.id)}>Remove</Button>
          </CartItem>
        ))}
        {cart.length > 0 && <TotalPrice>Total Price: ${totalPrice.toFixed(2)}</TotalPrice>}
        <CheckoutButton onClick={()=>navigate('/payment')}>Checkout</CheckoutButton>
      </Content>
    </Container>
  );
};

export default Cart;
