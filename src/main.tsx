import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react";
import LoginTemplate from './components/templates/loginTemplate.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage.tsx';
import RegisterPage from './components/pages/RegisterPage.tsx';

const router = createBrowserRouter([
  {
    // front login
    path: "",
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
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider resetCSS>
      <RouterProvider router={router} />
    </ChakraProvider>
    
  </StrictMode>,
)
