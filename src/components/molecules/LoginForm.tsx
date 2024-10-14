import { Button, FormControl, FormLabel, Input, InputGroup, Text, VStack } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import PasswordInput from "../atoms/PasswordInput";
import { z } from "zod";

const loginSchema = z.object({
  login: z.string().min(1, { message: "Login Required" }),
  password: z.string().min(6),
});

export type LoginFormData = z.infer<typeof loginSchema>;

function LoginForm() {

  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: { login: "", password: "" },
  });
  
  return (
    <form onSubmit={handleSubmit(() => {})}>
      <VStack spacing={4} align="start">
        <Controller
          render={({ field: { ...props }, fieldState: { error } }) => {
            return (
              <FormControl isInvalid={!!error}>
                <FormLabel>
                  Login
                </FormLabel>
                <InputGroup>
                  <Input bgColor="white" type="text" isRequired {...props} />
                </InputGroup>
              </FormControl>
            );
          }}
          name="login"
          control={control}
        />

        <Controller
          render={({ field: { ...props }, fieldState: { error } }) => {
            return (
              <PasswordInput
                bgColor="white"
                label="Password"
                error={error}
                data-testid="input-password"
                isRequired
                {...props}
              />
            );
          }}
          name="password"
          control={control}
        />
      </VStack>
      <Button mt={6} w="100%" type="submit"  colorScheme="teal" variant="outline" >
        Sign In
      </Button>
    </form>
  );
}

export default LoginForm;
