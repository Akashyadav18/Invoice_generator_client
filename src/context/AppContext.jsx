import React, { createContext, useState } from 'react'

export const AppContext = createContext();

export const initialInvoiceData = {
    title: "New Invoice",
    logo: "",
    company: {name:"", phone:"", address:""},
    billing: {name:"", phone:"", address:""},
    shipping: {name:"", phone:"", address:""},
    invoice: {number:"", date:"", dueDate:""},
    items: [
        {name:"", qty:"", amount:"", total:0, description:""}
    ],
    account: {name:"", number:"", ifscCode:""},
    tax:0,
    notes: ""
}

export const AppContextProvider = ({children}) => {

    const [invoiceTitle, setInvoiceTitle] = useState("New Invoice");
    const [invoiceData, setInvoiceData] = useState(initialInvoiceData);
    const [selectedTemplate, setSelectedTemplate] = useState("template1");

    const contextValue = {
        invoiceTitle, setInvoiceTitle,
        invoiceData, setInvoiceData,
        selectedTemplate, setSelectedTemplate,
        initialInvoiceData
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

