// // Products.js

// import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   padding: 20px;
// `;

// const ProductCard = styled.div`
//   width: 300px;
//   margin: 20px;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   background-color: #fff;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const ProductImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 5px;
// `;

// const ProductTitle = styled.h2`
//   font-size: 1.5rem;
//   margin-top: 10px;
// `;

// const ProductPrice = styled.p`
//   font-size: 1.2rem;
//   color: #888;
//   margin-top: 10px;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 20px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #f0c14b;
//   border: none;
//   border-radius: 3px;
//   color: #111;
//   font-weight: bold;
//   cursor: pointer;
// `;

// const Products = () => {
//   // Dummy data for products
//   const products = [
//     {
//       id: 1,
//       title: 'Product 1',
//       price: '$19.99',
//       image: 'https://via.placeholder.com/300x200',
//     },
//     {
//       id: 2,
//       title: 'Product 2',
//       price: '$29.99',
//       image: 'https://via.placeholder.com/300x200',
//     },
//     {
//       id: 3,
//       title: 'Product 3',
//       price: '$39.99',
//       image: 'https://via.placeholder.com/300x200',
//     },
//     {
//       id: 4,
//       title: 'Product 4',
//       price: '$49.99',
//       image: 'https://via.placeholder.com/300x200',
//     },
//     {
//       id: 5,
//       title: 'Product 5',
//       price: '$59.99',
//       image: 'https://via.placeholder.com/300x200',
//     },
//     {
//       id: 6,
//       title: 'Product 6',
//       price: '$69.99',
//       image: 'https://via.placeholder.com/300x200',
//     },
//     {
//       id: 7,
//       title: 'Product 7',
//       price: '$79.99',
//       image: 'https://via.placeholder.com/300x200',
//     },
//     {
//       id: 8,
//       title: 'Product 8',
//       price: '$89.99',
//       image: 'https://via.placeholder.com/300x200',
//     },
//     {
//       id: 9,
//       title: 'Product 9',
//       price: '$99.99',
//       image: 'https://via.placeholder.com/300x200',
//     },
//     {
//       id: 10,
//       title: 'Product 10',
//       price: '$109.99',
//       image: 'https://via.placeholder.com/300x200',
//     },
//   ];

//   const addToCart = (productId) => {
//     // Implement add to cart functionality
//     console.log(`Added product with ID ${productId} to cart`);
//   };

//   const viewMore = (productId) => {
//     // Implement view more functionality
//     console.log(`View more about product with ID ${productId}`);
//   };

//   return (
//     <Container>
//       {products.map((product) => (
//         <ProductCard key={product.id}>
//           <ProductImage src={product.image} alt={product.title} />
//           <ProductTitle>{product.title}</ProductTitle>
//           <ProductPrice>{product.price}</ProductPrice>
//           <ButtonContainer>
//             <Button onClick={() => addToCart(product.id)}>Add to Cart</Button>
//             <Button onClick={() => viewMore(product.id)}>View More</Button>
//           </ButtonContainer>
//         </ProductCard>
//       ))}
//     </Container>
//   );
// };

// export default Products;
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../globalcontext/useGlobalContext';
import { useNavigate } from 'react-router-dom';
import  { LoadingContainer,LoadingIndicator} from './Loading'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const ProductCard = styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #111;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  margin-top: auto; /* Pushes buttons to the bottom */
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f0c14b;
  border: none;
  border-radius: 3px;
  color: #111;
  font-weight: bold;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;


const SearchResult = styled.div`
  margin-top: 20px;
`;




const Products = () => {
  const{searchedproducts:products,loading,setsp,togglealert,setalertmsg,search,setcolo}=useGlobalContext()
  const navigate=useNavigate()
  const {addtocart}=useGlobalContext()
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);}
  

if(loading){
  return <><LoadingContainer><LoadingIndicator/></LoadingContainer></>
}
  return (<>
   <SearchContainer>
        <Input
          type="text"
          
          onChange={(e) => search(e.target.value)}
          placeholder="Search..."
        />
        <Button onClick={handleSearch}>Search</Button>
      </SearchContainer>
      <SearchResult>
        {/* Search results will be displayed here */}
        {/* For simplicity, let's display a message */}
        {searchTerm && <p>Search results for: {searchTerm}</p>}
      </SearchResult>
    <Container>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductPrice>${product.price}</ProductPrice>
          <ProductImage src={product.image} alt={product.title} />
          <ProductTitle>{product.title}</ProductTitle>
          <ButtonContainer>
            <Button onClick={() => {addtocart(product)
            setalertmsg(`${product.title} has been added to the cart`)
            setcolo(true)
            togglealert()
            }}>Add to Cart</Button>
            <Button onClick={() => {
            setsp(product.id)
            navigate('/selectedproduct')}
          }>View More</Button>
          </ButtonContainer>
        </ProductCard>
      ))}
    </Container>
    </>
  );
};

export default Products;


