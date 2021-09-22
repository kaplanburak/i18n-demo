import axios from "axios";

import { IAuthService } from "@interface";

export const AuthService = {
    Login: async (payload: IAuthService.LoginPayload): Promise<IAuthService.LoginResponse> => {
        interface Data {
            [key: string]: string;
        }

        const data: Data = {
            ...payload,
            "Content-Type": "application/x-www-form-urlencoded",
            grant_type: "password",
        };

        const esc = encodeURIComponent;
        const query = Object.keys(data)
            .map((k) => esc(k) + "=" + esc(data[k]))
            .join("&");

        return axios.post("/api/login/token", query).then((response) => response.data);
    },
};
