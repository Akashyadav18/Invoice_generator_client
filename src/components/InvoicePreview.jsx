import { Template1 } from '@/templates/Template1';
import { Template2 } from '@/templates/Template2';
import { formatInvoiceData } from '@/utils/FormatINvoiceData';
import React, { forwardRef } from 'react'

const InvoicePreview = forwardRef (({invoiceData, template}, ref) => {

    const formattedData = formatInvoiceData(invoiceData);

    return (
        <div ref={ref} className="bg-white w-[210mm] min-h-[297mm] p-3">
            <Template1 data={formattedData}/>
            <Template2 data={formattedData} />
        </div>
    )
});

export default InvoicePreview
