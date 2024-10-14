import { useContext } from "react";
import LoginForm, { LoginFormData } from "../molecules/LoginForm";
import { AuthContext } from "../../contexts/AuthContext";
import { login } from "../../api/api";
import { useMutation } from "@tanstack/react-query";


function ConnectedLoginForm() {

  const { setToken } = useContext(AuthContext);

  const {
    mutateAsync: loginAsync,
    isLoading,
    isError,
  } = useMutation(login);

  const handleSubmit = async (values: LoginFormData) => {
    const params = {
      ...values,
    };

    try {
      const { token } = await loginAsync(params);

      if (token) {
        setToken(token);
      }
      // eslint-disable-next-line no-empty
    } catch (e) {}
  };
  
  return (
    <LoginForm 
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isError={isError}
    />
  );
}

export default ConnectedLoginForm;
