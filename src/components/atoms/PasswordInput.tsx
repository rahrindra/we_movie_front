import {
  FormControl,
  FormLabel,
  forwardRef,
  Input,
  InputGroup,
  InputProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

type PasswordType = {
  label: string;
  error?: FieldError;
} & Omit<InputProps, "type">;

const PasswordInput = forwardRef(
  ({ label, error, ...rest }: PasswordType, ref) => {

    return (
      <FormControl isInvalid={!!error}>
        <FormLabel>
          {label} 
        </FormLabel>

        <InputGroup>
          <Input ref={ref} type="password" {...rest} />
        </InputGroup>
      </FormControl>
    );
  }
);

export default PasswordInput;
