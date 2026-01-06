export const formatInvoiceData = (invoiceData) => {
    // This is just destructuring (reading), NOT duplicating state.
    //So, instead of writing -> {invoiceData.company.name} in previewPage we can directly write -> {companyName}
    const {
        title,
        company = {},
        invoice = {},
        account = {},
        billing = {},
        shipping = {},
        tax = 0,
        notes = "",
        logo = "",
        items = [],
    } = invoiceData || {}


    const currencySymbol = "₹";
    const subTotal = items.reduce((acc, item) => acc + (item.qty * item.amount), 0);
    const taxAmount = subTotal * (tax / 100);
    const total = subTotal + taxAmount;

    return {
        title,
        logo,
        companyName: company.name,
        companyAddress: company.address,
        companyPhone: company.phone,
        companyLogo: company.logo,

        invoiceNumber: invoice.number,
        invoiceDate: invoice.date,
        paymentDueDate: invoice.dueDate,

        accountName: account.name,
        accountNumber: account.number,
        accountIfscCode: account.ifscCode,

        billingName: billing.name,
        billingAddress: billing.address,
        billingPhone: billing.phone,

        shippingName: shipping.name,
        shippingAddress: shipping.address,
        shippingPhone: shipping.phone,

        currencySymbol,
        tax,
        items,
        notes,
        subTotal,
        taxAmount,
        total
    }
}
