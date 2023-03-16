import { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

const StyledForm = styled("form")({
  "& .MuiTextField-root": {
    marginBottom: "16px",
  },
});

const StyledButton = styled(Button)({
  marginTop: "16px",
});

const StyledContactInfo = styled(Typography)({
  marginTop: "32px",
});

const StyledLink = styled("a")({
  display: "flex",
  alignItems: "center",
  marginBottom: "8px",
  textDecoration: "none",
  color: "inherit",
  "& svg": {
    marginRight: "8px",
  },
});

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="100vh"
      padding="32px"
      boxSizing="border-box"
    >
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" gutterBottom >
          Contact Me
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Please fill out the form below and we'll get back to you as soon as possible.
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={form.name}
            onChange={handleFormChange}
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={form.email}
            onChange={handleFormChange}
            required
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={form.message}
            onChange={handleFormChange}
            required
            multiline
            rows={4}
          />
          <StyledButton type="submit" variant="contained" color="primary">
            Send
          </StyledButton>
        </StyledForm>
        <StyledContactInfo variant="h6" gutterBottom>
          Contact Information
        </StyledContactInfo>
        <Typography variant="body1" gutterBottom>
          Email address: lentiodev@gmail.com
        </Typography>
        <StyledLink href="https://docs.google.com/document/d/e/2PACX-1vRt4s_Lo3Kz79YrPz-ky54MfYpP530PX2w8tA4hEP3C5payxraevH5jA1zimS0rcU2T0fi3sNDbe8u2/pub" target="_blank" rel="noreferrer">
          <FiDownload />
          <Typography variant="body1">Download CV</Typography>
        </StyledLink>
        <StyledLink href="https://github.com/lentiodev" target="_blank" rel="noreferrer">
          <FiGithub />
          <Typography variant="body1">GitHub</Typography>
        </StyledLink>
        <StyledLink href="https://www.linkedin.com/in/lentio-sechou-b2a73a269/" target="_blank" rel="noreferrer">
          <FiLinkedin />
          <Typography variant="body1">LinkedIn</Typography>
        </StyledLink>
      </Container>
    </Box>
  );
};

export default Contact;
