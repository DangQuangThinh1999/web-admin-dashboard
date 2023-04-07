import Layout from "@/components/Layout";
import { ContextProvider } from "@/Contexts/ContextProvider";
import ToggleColorModeProvider from "@/Contexts/ThemeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <ToggleColorModeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToggleColorModeProvider>
    </ContextProvider>
  );
}
