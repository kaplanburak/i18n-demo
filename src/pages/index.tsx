import { NextPage } from "next";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const router = useRouter();
    const { locale, locales, defaultLocale } = router;

    return (
        <div>
            <div>
                <h1>Index page</h1>
                <p>Current locale: {locale}</p>
                <p>Default locale: {defaultLocale}</p>
                <p>Configured locales: {JSON.stringify(locales)}</p>
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        router.push("/", "/", { locale: "tr" });
                    }}
                >
                    TR
                </button>
                <button
                    type="button"
                    onClick={() => {
                        router.push("/", "/", { locale: "en" });
                    }}
                >
                    EN
                </button>
                <FormattedMessage id="VcwrfF" />
            </div>
        </div>
    );
};

export default Home;
