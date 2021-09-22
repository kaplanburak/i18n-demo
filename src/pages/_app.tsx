import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";

import theme from "@styled-components/theme";
import { store } from "@redux";
import "antd/dist/antd.less";
import "@styles/global.css";

import TR from "../../content/locales/tr.json";
import EN from "../../content/locales/en.json";

function CustomApp({ Component, pageProps }: AppProps) {
    const { locale } = useRouter();
    const [shortLocale] = locale ? locale.split("-") : ["en"];

    const getMessages = () => {
        switch (shortLocale) {
            case "tr":
                return TR;
            default:
                return EN;
        }
    };

    return (
        <Provider store={store}>
            <IntlProvider
                locale={shortLocale}
                defaultLocale="en"
                messages={getMessages()}
                onError={() => null}
            >
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </IntlProvider>
        </Provider>
    );
}

export default CustomApp;
