import { Box, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function LoginTemplate() {
  

  return (
    <Box
      h="100%"
      bgColor="gray.200"
    >
      <Outlet />
      <Text>The login template</Text>
    </Box>
  );
}

export default LoginTemplate;
