import { formatInvoiceData } from '@/utils/FormatINvoiceData';
import React, { forwardRef } from 'react'

const InvoicePreview = forwardRef (({invoiceData, template}, ref) => {

    const formattedData = formatInvoiceData(invoiceData);

    return (
        <div ref={ref} className='shadow bg-white w-200 h-250 md:m-0 md:p-0 m-2 overflow-hidden'>
            Render tha pdf
        </div>
    )
});

export default InvoicePreview
