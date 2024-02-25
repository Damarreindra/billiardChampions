import React, { useState } from "react";
import {
  Container,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import BilliardBall from "../lottiefiles/billiardBall.json";
import debounce from "debounce";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../actions/loginAction";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Initialize error state
  const dispatch = useDispatch();
  const debouncedSetEmail = debounce((value) => setEmail(value), 300);
  const debouncedSetPassword = debounce((value) => setPassword(value), 300);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async () => {
    try {
      const res = await dispatch(login(email, password)); // Pass email and password to login function
      if (res) {
        navigate("/home"); // Use navigate function instead of location.replace
      } else {
        setError("Login failed"); // Set error state if login failed
      }
    } catch (error) {
      setError("Login error: " + error.message); // Set error state if login throws an error
    }
  };

  return (
    <Container centerContent p={5} bg="white" rounded="md">
      <Box width={"100px"} height={"100px"}>
        <Lottie animationData={BilliardBall} />
      </Box>
      <img src="/images/billiardChamps.png" className="w-75" alt="" />
      <Box textAlign="center">
        <Text fontSize="2xl" fontWeight="bold">
          Welcome Back!
        </Text>
        <Text>Please enter your details</Text>
      </Box>
      <Box as="form" mt={5} width="100%" maxWidth="md">
        <FormControl id="email" mb={3}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="name@example.com"
            onChange={(e) => debouncedSetEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" mb={3}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => debouncedSetPassword(e.target.value)}
          />
        </FormControl>
        {error && (
          <Alert status="error" mb={3}>
            <AlertIcon />
            {error}
          </Alert>
        )}
        <Button colorScheme="red" mt={3} width="100%" onClick={handleSubmit}>
          Login
        </Button>
      </Box>
      <Text mt={3}>
        Forgot Password ?{" "}
        <Text as="span" fontWeight="bold">
          IDC DICKHEAD
        </Text>
      </Text>
    </Container>
  );
}

export default LoginForm;
