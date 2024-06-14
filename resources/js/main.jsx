import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./bootstrap";
import { ThemeProvider } from "@material-tailwind/react";
import { theme } from "./services/provider/theme.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <ThemeProvider value={theme}>
            <App />
            <Toaster />
        </ThemeProvider>
    </React.StrictMode>,
);
