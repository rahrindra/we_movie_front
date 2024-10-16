import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react";
import LoginTemplate from './components/templates/loginTemplate.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage.tsx';
import RegisterPage from './components/pages/RegisterPage.tsx';
import { AuthContextProvider } from './contexts/AuthContext.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Homepage from './components/pages/Homepage.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "we-movie",
    element: <LoginTemplate />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "",
    element: <Homepage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ChakraProvider resetCSS>
          <RouterProvider router={router} />
        </ChakraProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
