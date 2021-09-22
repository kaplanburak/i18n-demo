import { ILogin } from "@interface/pages/login";

export declare module IAuthService {
    interface LoginPayload {
        UserName: string;
        Password: string;
    }

    interface LoginResponse {
        access_token: string;
        token_type: string;
        expires_in: number;
    }
}
