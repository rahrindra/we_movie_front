import { register } from "../../api/api";
import { useMutation } from "@tanstack/react-query";
import RegisterForm, { RegisterFormData } from "../molecules/RegisterForm";
import { useToast } from "@chakra-ui/react";


function ConnectedRegisterForm() {
  const toast = useToast();

  const {
    mutateAsync: loginAsync,
    isLoading,
    isError,
  } = useMutation(register);

  const handleSubmit = async (values: RegisterFormData) => {
    const params = {
      ...values,
    };

    try {
      await loginAsync(params);

      toast({
        title: 'compte créée',
        description: "Votre compte est créée avec succès",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })

      
      // eslint-disable-next-line no-empty
    } catch (e) {}
  };
  
  return (
    <RegisterForm 
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isError={isError}
    />
  );
}

export default ConnectedRegisterForm;
