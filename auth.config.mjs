import { defineConfig } from "auth-astro";
import Github from "@auth/core/providers/github"
import Google from "@auth/core/providers/google";

export default defineConfig({
    providers: [
        Github({
            clientId: import.meta.env.GITHUB_CLIENT_ID,
            clientSecret: import.meta.env.GITHUB_CLIENT_SECRET, 
        }),
        Google({
            clientId: import.meta.env.GOOGLE_CLIENT_ID,
            clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
});