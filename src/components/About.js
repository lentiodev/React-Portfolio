import React from 'react';
import { Grid, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import profilePic from '../images/lentio-avatar.png';

const AboutContainer = styled(Grid)({
  minHeight: '100vh',
});

const ImageContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
});

const Image = styled(Avatar)({
  width: '20rem',
  height: '20rem',
  borderRadius: '50%',
});

const TextContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
});

const Title = styled(Typography)({
  fontSize: '5rem',
  marginBottom: '1rem',
});

const Paragraph = styled(Typography)({
  fontSize: '2rem',
  textAlign: 'center',
});

const About = () => {
  return (
    <AboutContainer container>
      <ImageContainer item xs={12} sm={6}>
        <Image alt="Profile picture" src={profilePic} />
      </ImageContainer>
      <TextContainer item xs={12} sm={6}>
        <Title variant="h1">About Me</Title>
        <Paragraph variant="body1">
          Hi, my name is Lentio Sechou and I'm a frontend web developer with 2 years of experience. I specialize in HTML, CSS, JavaScript, Node.js, and React.js.
        </Paragraph>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
