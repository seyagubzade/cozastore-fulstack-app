import React from 'react'
import styled from 'styled-components';
import Products from '../../components/Products';
import SliderHero from '../../components/SliderHero';

const Home = () => {
  return (
    <StyledHome>
        <SliderHero />
        <Products />
    </StyledHome>
  )
}

const StyledHome = styled.div`
padding-top: 70px;
min-height: 100vh;
`

export default Home