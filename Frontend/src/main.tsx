import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider, useTheme } from './components/ui/Theme-provider.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import {  MultisessionAppSupport} from '@clerk/clerk-react/internal'
import { dark} from '@clerk/themes'
import { Toaster } from './components/ui/toaster.tsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

// Function to map the app theme to Clerk themes
const getClerkTheme = (theme: string) => {
  switch (theme) {
    case 'dark':
      return { baseTheme: [dark], variables: { colorPrimary: '#22C55D' } }
    case 'light':
      return { baseTheme: [], variables: { colorPrimary: '#22C55D' } } // light theme without modifications
    case 'system':
    default:
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? '#1B1917' : 'light';
      return systemTheme === '#1B1917'
        ? { baseTheme: [dark], variables: { colorPrimary: '#22C55D' } }
        : { baseTheme: [], variables: { colorPrimary: '#22C55D' } }
  }
}

// A wrapper component that passes the theme to ClerkProvider
const Root = () => {
  const { theme } = useTheme();  // Get the theme from your ThemeProvider

  const clerkTheme = getClerkTheme(theme);  // Get the Clerk theme based on the current app theme

  return (
    <StrictMode>
      <ThemeProvider >
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} appearance={clerkTheme}  >
      <MultisessionAppSupport>
        <App />
      </MultisessionAppSupport>
      </ClerkProvider>
      </ThemeProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="system">
    <Root />
    <Toaster />
  </ThemeProvider>
);
