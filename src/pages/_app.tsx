import App, { AppProps } from "next/app";
import Header from "../components/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>

    )
}