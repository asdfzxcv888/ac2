import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../globalcontext/useGlobalContext';
import  { LoadingContainer,LoadingIndicator} from './Loading'

// Styled components


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ProductInfo = styled.div`
  text-align: center;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #888;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const ProductRating = styled.div`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const StarIcon = styled.i`
  color: #ffc107;
  margin-right: 5px;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #f0c040;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
// ProductDetailsPage component

const ProductDetailsPage = () => {
  const{loading,selectedproduct,addtocart,setalertmsg,togglealert}=useGlobalContext()
  // Generate an arbitrary rating for the product
  const [rating] = useState(Math.floor(Math.random() * 5) + 1);

  // Function to render star icons based on the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i}>
          {i <= rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };
  if(loading ||!selectedproduct){
    return (<><LoadingContainer><LoadingIndicator/></LoadingContainer></>)

  }

  return (
    <Container>
      <ProductImage src={selectedproduct.image} alt={selectedproduct.title} />
      <ProductInfo>
        <ProductName>{selectedproduct.title}</ProductName>
        <ProductPrice>${selectedproduct.price}</ProductPrice>
        <ProductDescription>{selectedproduct.description}</ProductDescription>
        <ProductRating>
          Rating: {renderStars()}
        </ProductRating>
        <AddToCartButton onClick={()=>{addtocart(selectedproduct)
        
        setalertmsg(`${selectedproduct.title} has been added to the cart`)
            togglealert()}}>Add to Cart</AddToCartButton>
      </ProductInfo>
    </Container>
  );
};

export default ProductDetailsPage;
