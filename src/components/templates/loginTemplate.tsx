import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function LoginTemplate() {
  

  return (
    <Box
      h="100%"
      bgColor="gray.200"
    >
      <Outlet />
    </Box>
  );
}

export default LoginTemplate;
