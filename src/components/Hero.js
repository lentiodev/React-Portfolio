import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaJsSquare } from 'react-icons/fa';

const StyledBox = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#eefcfb',
}));

const Circle = styled(Box)(({ theme }) => ({
  width: '300px',
  height: '300px',
  backgroundColor: '#5ce0d8',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
}));

const Icon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '10px',
}));

const Name = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#050720',
}));

const WelcomeText = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  color: '#050720',
  marginTop: '20px',
}));

const Hero = () => {
  return (
    <StyledBox>
      <Name>Lentio Sechou</Name>
      <Circle>
        <Icon><AiFillHtml5 size="2.5rem" color="#050720" /></Icon>
        <Icon><FaCss3Alt size="2.5rem" color="#050720" /></Icon>
        <Icon><FaJsSquare size="2.5rem" color="#050720" /></Icon>
      </Circle>
      <WelcomeText>Welcome to my portfolio!</WelcomeText>
    </StyledBox>
  );
};

export default Hero;
