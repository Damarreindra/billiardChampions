import React from "react";
import {
  Container,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import BilliardBall from "../lottiefiles/billiardBall.json";

function LoginForm() {
  return (
    <Container centerContent p={5} bg="white" rounded="md">
      <Box width={"100px"} height={"100px"} >
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
          <Input type="email" placeholder="name@example.com" />
        </FormControl>
        <FormControl id="password" mb={3}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Password" />
        </FormControl>
        <Button colorScheme="red" mt={3} width="100%">
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
