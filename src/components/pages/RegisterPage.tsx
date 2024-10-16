import { Box, Center, Heading } from "@chakra-ui/react";
import ConnectedRegisterForm from "../organisms/ConnectedRegisterForm";

function RegisterPage() {
  

  return (
    <Box
      pt="10%"
      background="linear-gradient(90deg, #224D96 0%, #5F92D1 100%)"
      w="100%"
      h="100vh"
    >
      <Box
        w="35%"
        mx="auto"
        bgColor="gray.200"
        py="2%"
        px="4%"
        borderRadius="8px"
      >
        <Center>
          <Heading color="cyan.400">Inscription</Heading>
        </Center>
        <Box mt={6}>
          <ConnectedRegisterForm />
        </Box>
      </Box>
    </Box>
  );
}

export default RegisterPage;