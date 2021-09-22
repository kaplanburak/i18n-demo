import { FC, useEffect } from "react";
import axios from "axios";

export const UtilityLayer: FC = () => {
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        }
    }, []);

    return <></>;
};
