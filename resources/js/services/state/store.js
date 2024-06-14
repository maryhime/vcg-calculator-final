import { create } from "zustand";

export const useUserInfoStore = create((set) => ({
    email: "",
    token: localStorage.getItem("token") || null,

    addEmail: (email) => set({ email }),

    addToken: (token) => {
        set({ token });
        localStorage.setItem("token", token);
    },

    clearToken: () => {
        set({ token: "" });
        localStorage.removeItem("token");
    },
}));

export const useModifyRolesStore = create((set) => ({
    id: null,
    tableRows: [],
    info: [],

    setId: (id) => set({ id }),
    clearId: () => set({ id: null }),

    setEditInfo: (info) => set({ info }),

    setTableRows: (tableRows) => set({ tableRows }),
}));

export const useRequestQuotation = create((set) => ({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    mobileNumber: "",
    concern: "",

    setFirstName: (firstName) => set(() => ({ firstName: firstName })),
    setLastName: (lastName) => set(() => ({ lastName: lastName })),
    setEmail: (email) => set(() => ({ email: email })),
    setCompanyName: (companyName) => set(() => ({ companyName: companyName })),
    setMobileNumber: (mobileNumber) =>
        set(() => ({ mobileNumber: mobileNumber })),
    setConcern: (concern) => set(() => ({ concern: concern })),
}));
