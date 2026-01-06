import { assets } from '@/assets/assets'
import React, { useContext, useEffect } from 'react'
import { Trash2 } from 'lucide-react'
import { AppContext } from '@/context/AppContext'

const InvoiceForm = () => {

    const { invoiceData, setInvoiceData } = useContext(AppContext);

    const addItem = () => {
        setInvoiceData((prev) => ({
            ...prev,
            items: [
                ...prev.items,
                { name: "", qty: "", amount: "", total: 0, description: "" },
            ]
        }))
    }

    const deleteItem = (index) => {
        const items = invoiceData.items.filter((_, i) => i !== index);
        setInvoiceData((prev) => ({ ...prev, items }))
    }
    
// invoiceData ke company object ko update karo uske saare purane fields rakho bas name field ko new value se overwrite karo
    const handleChange = (section, field, value) => {
        setInvoiceData((prev) => ({
            ...prev,
            [section]: { ...prev[section], [field]: value }
        }))
    }

    const handleSameAsBilling = () => {
        setInvoiceData((prev) => ({
            ...prev,
            shipping: { ...prev.billing }
        }))
    }

    const handleItemChange = (index, field, value) => {
        const items = [...invoiceData.items];
        items[index][field] = value;
        if (field === 'qty' || field === 'amount') {
            items[index].total = (items[index].qty || 0) * (items[index].amount);
        }
        setInvoiceData((prev) => ({
            ...prev, items
        }))
    }

    const calculateTotals = () => {
        const subTotal = invoiceData.items.reduce((sum, item) => sum + (item.total || 0), 0);
        const taxRate = Number(invoiceData.tax || 0);
        const taxAmount = (subTotal * taxRate) / 100;
        const grandTotal = subTotal + taxAmount;
        return {subTotal, taxAmount, grandTotal};
    }
    const { subTotal, taxAmount, grandTotal } = calculateTotals();

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = () => {
                setInvoiceData((prev) => ({
                    ...prev,
                    logo: reader.result
                }))
            };
            reader.readAsDataURL(file);
        }
    }

    useEffect(() => {
        if(!invoiceData.invoice.number){
            const randomNumber = `INV-${Math.floor(100000 + Math.random() * 900000)}`;
            setInvoiceData((prev) => ({
                ...prev,
                invoice: {...prev.invoice, number:randomNumber}
            }))
        }
    },[])

    return (
        <div className=''>
            {/* company logo */}
            <div className=' flex-col justify-center items-center px-2'>
                <h5 className=' font-semibold mb-1'>Company logo</h5>
                <div className=''>
                    <label htmlFor='img' className=''>
                        <img src={invoiceData.logo ? invoiceData.logo : assets.upload} alt='upload' className=' w-20 cursor-pointer rounded-full' />
                    </label>
                    <input type='file' name='logo' id='img' hidden accept='image/*' 
                        onChange={handleLogoUpload}
                    />
                </div>
            </div>
            {/* company info */}
            <div className=' p-2'>
                <h5 className=' font-semibold mb-1'>Your Company</h5>
                <div className=' md:flex gap-13 mb-3'>
                    <input type='text' placeholder='Company name' className=' border w-full md:w-2xs p-1'
                        onChange={(e) => handleChange("company", "name", e.target.value)}
                        value={invoiceData.company.name}
                    />
                    <input type='text' placeholder='Company Phone no.' className=' border w-full md:w-2xs p-1'
                        onChange={(e) => handleChange("company", "phone", e.target.value)}
                        value={invoiceData.company.phone}
                    />
                </div>
                <input type='text' placeholder='Company address' className=' border w-full p-1'
                    onChange={(e) => handleChange("company", "address", e.target.value)}
                    value={invoiceData.company.address}
                />
            </div>
            {/* bill to */}
            <div className=' p-2'>
                <h5 className=' font-semibold mb-1'>Bill To</h5>
                <div className=' md:flex gap-13 mb-3'>
                    <input type='text' placeholder='Name' className=' border w-full md:w-2xs p-1'
                        onChange={(e) => handleChange("billing", "name", e.target.value)}
                        value={invoiceData.billing.name}
                    />
                    <input type='text' placeholder='Phone no.' className=' border w-full md:w-2xs p-1'
                        onChange={(e) => handleChange("billing", "phone", e.target.value)}
                        value={invoiceData.billing.phone}
                    />
                </div>
                <input type='text' placeholder='Billing Address' className=' border w-full p-1'
                    onChange={(e) => handleChange("billing", "address", e.target.value)}
                    value={invoiceData.billing.address}
                />
            </div>
            {/* ship to */}
            <div className=' p-2'>
                <div className=' md:flex justify-between items-center'>
                    <h5 className=' font-semibold mb-1'>Ship To</h5>
                    <div className=''>
                        <input type='checkbox' id='sameAsBilling' onChange={handleSameAsBilling} />
                        <label htmlFor='sameAsBilling'>Same As Billing</label>
                    </div>
                </div>
                <div className=' md:flex gap-13 mb-3'>
                    <input type='text' placeholder='Name' className=' border w-full md:w-2xs p-1'
                        onChange={(e) => handleChange("shipping", "name", e.target.value)}
                        value={invoiceData.shipping.name}
                    />
                    <input type='text' placeholder='Phone no.' className=' border w-full md:w-2xs p-1'
                        onChange={(e) => handleChange("shipping", "phone", e.target.value)}
                        value={invoiceData.shipping.phone}
                    />
                </div>
                <input type='text' placeholder='Shipping Address' className=' border w-full p-1'
                    onChange={(e) => handleChange("shipping", "address", e.target.value)}
                    value={invoiceData.shipping.address}
                />
            </div>
            {/* invoice info */}
            <div className=' p-2'>
                <h5 className=' font-semibold mb-1'>Invoice Information</h5>
                <div className=' md:flex justify-between items-center'>
                    <div className=' flex-col'>
                        <label htmlFor='invoiceNumber'>Invoice Number</label>
                        <input type='text' disabled className='p-1 border'
                            onChange={(e) => handleChange("invoice", "number", e.target.value)}
                            value={invoiceData.invoice.number}
                        />
                    </div>
                    <div>
                        <label htmlFor='invoiceDate'>Invoice Date</label>
                        <input type='date' placeholder='Company Phone no.' id='invoiceDate' className=' border  p-1'
                            onChange={(e) => handleChange("invoice", "date", e.target.value)}
                            value={invoiceData.invoice.date}
                        />
                    </div>
                    <div>
                        <label htmlFor='invoiceDueDate'>Invoice DueDate</label>
                        <input type='date' placeholder='Company address' id='invoiceDueDate' className=' border  p-1'
                            onChange={(e) => handleChange("invoice", "dueDate", e.target.value)}
                            value={invoiceData.invoice.dueDate}
                        />
                    </div>
                </div>
            </div>
            {/* item detail */}
            <div className=' p-2'>
                <h5 className=' font-semibold mb-1'>Item Detail</h5>
                {invoiceData.items.map((item, index) => (
                    <div key={index} className=' border border-gray-400 py-2 p-0.5 mb-2'>
                        <div className=' md:flex gap-12 mb-1.5'>
                        {/* handleItemChange(0, "name", "Pen") ->items[0].name update hota hai */}
                            <input type='text' placeholder='Item Name' className=' border p-1 w-full md:w-2xs'
                                onChange={(e) => handleItemChange(index, "name", e.target.value)}
                                value={item.name}
                            />
                            <input type='number' placeholder='qty' className=' border p-1 w-full md:w-2xs'
                                onChange={(e) => handleItemChange(index, "qty", e.target.value)}
                                value={item.qty}
                            />
                        </div>
                        <div className=' md:flex gap-12 mb-1.5'>
                            <input type='number' placeholder='Amount' className='  border p-1 w-full md:w-2xs'
                                onChange={(e) => handleItemChange(index, "amount", e.target.value)}
                                value={item.amount}
                            />
                            <input type='number' placeholder='Total' className='  border p-1 w-full md:w-2xs'
                                disabled
                                value={item.total}
                            />
                        </div>
                        <div className=' md:flex justify-between items-center'>
                            <textarea placeholder='Description' rows={3} cols={5} className=' border p-1 w-full md:w-xl'
                                onChange={(e) => handleItemChange(index, "description", e.target.value)}
                                value={item.description}
                            ></textarea>
                            {invoiceData.items.length > 1 && (
                                <button onClick={() => deleteItem(index)} className=' cursor-pointer hover:text-red-700 p-2 text-red-500'> <Trash2 /> </button>
                            )}
                        </div>
                    </div>
                ))}
                <button onClick={addItem} className=' border mt-2 bg-sky-600 text-white px-2.5 py-1 cursor-pointer'>Add Item</button>
            </div>
            {/* bank account info */}
            <div className=' p-2'>
                <h5 className=' font-semibold mb-1'>Bank Account Detail</h5>
                <div className=' md:flex justify-between items-center'>
                    <input type='text' placeholder='Account Name' className=' border  p-1' 
                        onChange={(e) => handleChange("account", "name", e.target.value)}
                        value={invoiceData.account.name}
                    />
                    <input type='number' placeholder='Account Number' className=' border  p-1' 
                        onChange={(e) => handleChange("account", "number", e.target.value)}
                        value={invoiceData.account.number}
                    />
                    <input type='text' placeholder='Branch/IFSC Code' className=' border  p-1' 
                        onChange={(e) => handleChange("account", "ifscCode", e.target.value)}
                        value={invoiceData.account.ifscCode}
                    />
                </div>
            </div>
            {/* total */}
            <div className=' p-2'>
                <h5 className=' font-semibold mb-1'>Total</h5>
                <div className=' md:flex justify-between items-center mb-1'>
                    <span>SubTotal</span>
                    <span>₹{subTotal.toFixed(2)}</span>
                </div>
                <div className='md:flex justify-between'>
                    <label htmlFor='taxInput'>Tax Rate (%)</label>
                    <input type='text' id='taxInput' placeholder='2' className=' border md:w-md p-1 px-3 text-end' 
                        onChange={(e) => setInvoiceData((prev) => ({...prev, tax: e.target.value}))}
                        value={invoiceData.tax}
                    />
                </div>
                <div className=' md:flex justify-between items-center mb-1'>
                    <span>Tax Amount</span>
                    <span>₹{taxAmount.toFixed(2)}</span>
                </div>
                <div className=' md:flex justify-between items-center font-semibold mb-1'>
                    <span>Grand Total</span>
                    <span>₹{grandTotal.toFixed(2)}</span>
                </div>
            </div>
            {/* Note */}
            <div className=' p-2'>
                <h5 className=' font-semibold mb-1'>Notes</h5>
                <textarea placeholder='Notes' rows={2} cols={4} className=' border p-1 w-full'
                    onChange={(e) => setInvoiceData((prev) => ({...prev, notes: e.target.value}))}
                    value={invoiceData.notes}
                ></textarea>

            </div>
        </div>
    )
}

export default InvoiceForm
