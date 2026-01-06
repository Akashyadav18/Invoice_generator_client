import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
export const Template1 = ({ data }) => {
    return (
        <div className=" border border-gray-300 rounded my-5 mx-2 py-3 px-4">
            {/* Header Section */}
            <div className=" flex justify-between">
                <div className="">
                    {data.logo && (
                        <div className=" mb-2">
                            <img src={data.logo} alt="Company Logo" className=" w-20 rounded-full" />
                        </div>
                    )}
                    <h2 className=" text-2xl font-bold template1-color">{data.companyName}</h2>
                    <p className=" font-semibold m-1">{data.companyAddress}</p>
                    <p className="font-semibold">Phone: {data.companyPhone}</p>
                </div>
                <div className=" text-end">
                    <h1 className=" text-2xl font-bold template1-color">Invoice</h1>
                    <div>
                        <div>
                            <p>
                                <strong>Invoice#: </strong>{data.invoiceNumber}
                            </p>
                            <p className="m-1">
                                <strong>Invoice Date: </strong>{data.invoiceDate}
                            </p>
                            <p>
                                <strong>Due Date: </strong>{data.paymentDueDate}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className=" my-3 border-orange-300 border" />
            {/* Billing Section */}
            <div className=" md:flex justify-between gap-4 mb-3">
                {data.shippingName && data.shippingAddress && data.shippingPhone && (
                    <div className=" bg-orange-100 rounded p-2 w-full">
                        <h3 className="text-xl font-bold template1-color">Shipped To</h3>
                        <p>
                            <strong>{data.shippingName}</strong>
                        </p>
                        <p>{data.shippingAddress}</p>
                        <p>Phone: {data.shippingPhone}</p>
                    </div>
                )}
                <div className=" bg-orange-100 rounded p-2 w-full">
                    <h3 className="text-xl font-bold template1-color">Billed To</h3>
                    <p>
                        <strong>{data.billingName}</strong>
                    </p>
                    <p>{data.billingAddress}</p>
                    <p>Phone: {data.billingPhone}</p>
                </div>
            </div>
            {/* <hr className=" mt-5 border-orange-300 border" /> */}
            {/* Items Section */}
            <div className=" mt-5">
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow className=" bg-orange-600 text-white">
                            <TableHead>Item #/Item description</TableHead>
                            <TableHead>Qty.</TableHead>
                            <TableHead>Rate</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        {data.items?.length > 0 && (
                            data.items.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.name}</TableCell>
                                    <TableCell>{item.qty}</TableCell>
                                    <TableCell>₹ {Number(item.amount || 0).toFixed(2)}</TableCell>
                                    <TableCell className="text-right">₹ {(Number(item.qty) * Number(item.amount)).toFixed(2)}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
            <hr className=" mb-3 border-orange-300 border" />
            {/* Total Section */}
            <div className=" text-end bg-orange-100 p-3 rounded ml-auto w-1/2">
                <div className="font-bold flex justify-between">
                    <span>Sub Total: </span>
                    <span>₹ {data.subTotal?.toFixed(2)}</span>
                </div>
                <div className="">
                    {data.tax > 0 && (
                        <div className="py-1 font-bold flex justify-between">
                            <span>Tax ({data.tax}%): </span>
                            <span>₹ {data.taxAmount.toFixed(2)}</span>
                        </div>
                    )}
                </div>
                <div className="font-bold text-lg text-orange-600 flex justify-between">
                    <span>Total: </span>
                    <span>₹ {data.total.toFixed(2)}</span>
                </div>
            </div>
            {/* <hr className=" my-3 border-orange-300 border" /> */}
            {/* Bank Section */}
            {(data.accountName || data.accountNumber || data.accountIfscCode) && (
                <div className="my-3">
                    <h3 className=" text-lg font-bold template1-color">Bank Account Details</h3>
                    {data.accountName && (
                        <p className="mb-1">
                            <strong>Account Holder: </strong>{data.accountName}
                        </p>
                    )}
                    {data.accountNumber && (
                        <p className="mb-1">
                            <strong>Account Number: </strong>{data.accountNumber}
                        </p>
                    )}
                    {data.accountIfscCode && (
                        <p>
                            <strong>Ifsc/Branch Code: </strong>{data.accountIfscCode}
                        </p>
                    )}
                </div>
            )}
            {/* Notes Section */}
            {data.notes && (
                <div className="mt-4 text-center">
                    <h3 className=" font-bold template1-color">Remarks</h3>
                    <p>{data.notes}</p>
                </div>
            )}
        </div>
    )
}