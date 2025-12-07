import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/components/Layout/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  const { courses = [] } = pageProps;
  
  return (
    <MainLayout courses={courses}>
      <Component {...pageProps} />
    </MainLayout>
  );
}
