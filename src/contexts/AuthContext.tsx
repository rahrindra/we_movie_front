import { createContext, useMemo, useState } from "react";

import {
  clearStoredAuthToken,
  readStoredAuthToken,
  setStoredAuthToken,
} from "../utils/storage";

type AuthContextData = {
  hasToken?: boolean;
  setToken: (token: string) => void;
  removeToken: () => void;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

type AuthContextProviderProps = {
  children?: React.ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [token, setToken] = useState<string | undefined>(readStoredAuthToken());
  const hasToken = useMemo(() => !!token, [token]);

  function removeToken() {
    clearStoredAuthToken();
    setToken(undefined);
  }
  function storeToken(tokenParams: string) {
    setStoredAuthToken(tokenParams);
    setToken(tokenParams);
  }

  const authData: AuthContextData = useMemo(
    () => ({
      hasToken,
      setToken: storeToken,
      removeToken
    }),
    [hasToken]
  );

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}
