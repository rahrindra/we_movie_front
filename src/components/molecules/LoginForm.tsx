import { Alert, AlertDescription, AlertIcon, Button, FormControl, FormLabel, Input, InputGroup, VStack } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import PasswordInput from "../atoms/PasswordInput";
import { z } from "zod";

const loginSchema = z.object({
  username: z.string().email(),
  password: z.string().min(4),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export type LoginFormProps = {
  onSubmit: any;
  isLoading?: boolean,
  isError?: boolean;
};

function LoginForm({
  onSubmit,
  isLoading,
  isError,
}: LoginFormProps) {

  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: { username: "", password: "" },
  });
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} align="start">
      {isError && (
          <Alert status="error">
            <AlertIcon />
            <AlertDescription>Email ou mot de passe invalide</AlertDescription>
          </Alert>
        )}
        <Controller
          render={({ field: { ...props }, fieldState: { error } }) => {
            return (
              <FormControl isInvalid={!!error}>
                <FormLabel>
                  Email
                </FormLabel>
                <InputGroup>
                  <Input bgColor="white" type="text" isRequired {...props} />
                </InputGroup>
              </FormControl>
            );
          }}
          name="username"
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
      <Button mt={6} w="100%" type="submit"  colorScheme="teal" variant="outline" isLoading={isLoading} >
        Sign In
      </Button>
    </form>
  );
}

export default LoginForm;
