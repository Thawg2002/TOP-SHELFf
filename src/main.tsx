import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/style.scss";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <GoogleOAuthProvider clientId="951396984022-ll6096ii0981fqi8f411dsq6bjvo98jd.apps.googleusercontent.com">
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </GoogleOAuthProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
