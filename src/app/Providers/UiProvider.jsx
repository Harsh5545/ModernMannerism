"use client";

import { Provider } from 'react-redux'; // Import the Redux Provider
import store from '@/store/store';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <Provider store={store}> {/* Wrap with Redux Provider */}
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme='light'>
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </Provider>
  );
}