import { create } from "apisauce";

export const api = create({
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
});

const authorizationHeader = (params) => {
    const headers = {
        headers: {
            Authorization: `Bearer ${params}`,
        },
    };

    return headers;
};

export const authenticate = (params) =>
    api.get("/api/auth/authenticate", {}, authorizationHeader(params));
export const userDetails = (params) =>
    api.get("/api/auth/user-info", {}, authorizationHeader(params));

// Authentication
export const login = (params) => api.post("/api/auth/login", params);
export const logout = (params) =>
    api.post("/api/auth/logout", {}, authorizationHeader(params));

// Calculator Roles
export const servicesList = (params) => api.get(`/api/service?${params}`);

// Settings
export const updatePassword = (params, token) =>
    api.put(
        "/api/settings/update-password",
        params,
        authorizationHeader(token),
    );
export const updateEmail = (params, token) =>
    api.put("/api/settings/update-email", params, authorizationHeader(token));

// Modify Roles
export const addService = (params, token) =>
    api.post("/api/service", params, authorizationHeader(token));
export const editService = (params, id, token) =>
    api.put(`/api/service/${id}`, params, authorizationHeader(token));
export const deleteService = (id, token) =>
    api.delete(`/api/service/${id}`, {}, authorizationHeader(token));

// Request Quotation
export const requestQuotation = (params) =>
    api.post("/api/invoice/send-email", params);
