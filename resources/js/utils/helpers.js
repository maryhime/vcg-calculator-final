// Reusable Utility Functions
// This section contains functions that can be reused throughout the application.

import toast from "react-hot-toast";

// Keep functions small, focused, and well-documented. Happy coding!

export const handleQuantityChange = (rowIndex, newQuantity, state) => {
    state((prevRows) =>
        prevRows.map((row, index) =>
            index === rowIndex ? { ...row, quantity: newQuantity } : row,
        ),
    );
};

export const calculateSavings = (row) => {
    let savings = row.americaSalary - row.phSalary;

    savings *= row.quantity;

    return savings;
};

export const formatMoney = (amount, currencyCode = "USD", locale = "en-US") => {
    const formatter = new Intl.NumberFormat(locale, {
        style: "currency", // Indicates we want currency formatting
        currency: currencyCode, // Specifies the currency (USD, EUR, etc.)
        minimumFractionDigits: 2, // Always show two decimal places
        maximumFractionDigits: 2, // Ensure only two decimal places are shown
    });
    //If the amount is an array get the sum of the amounts
    if (Array.isArray(amount)) {
        amount = amount.reduce((sum, num) => sum + num, 0);
    }
    return formatter
        .format(amount)
        .replace(formatter.format(0).replace(/[0-9]/g, ""), ""); // Remove the currency symbol
};

export function handleApiErrors(data) {
    if (data && data.errors) {
        for (const field in data.errors) {
            data.errors[field].forEach((errorMessage) => {
                toast.error(errorMessage);
            });
        }
    } else if (data || data.message || data.error) {
        toast.error(data.message ?? data.error);
    } else {
        toast.error("An unexpected error occurred.");
    }
}

export function handleApiErrorsWithMessage(data) {
    if (data && data.errors) {
        for (const field in data.errors) {
            data.errors[field].forEach((errorMessage) => {
                return errorMessage;
            });
        }
    } else if (data || data.message || data.error) {
        return data.message ?? data.error;
    } else {
        return "An unexpected error occurred.";
    }
}
