import { AppProps } from "next/app";
import { Header } from "../components/Header";
import '../../styles/global.scss'
import { RemoveContextProvider } from "../hooks/useRemoveContent";

export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <>
            <RemoveContextProvider>
                <>
                <Header />
                <Component {...pageProps} />
                </>
            </RemoveContextProvider>
        </>

    )
}