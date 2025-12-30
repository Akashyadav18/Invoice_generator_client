import { assets } from '@/assets/assets'
import React, { useContext } from 'react'
import { Trash2 } from 'lucide-react'
import { AppContext } from '@/context/AppContext'

const InvoiceForm = () => {

    const { invoiceData, setInvoiceData } = useContext(AppContext);

    const addItem = () => {
        setInvoiceData((prev) => ({
            ...prev,
            items: [
                ...prev.items,
                {name:"", qty:"", amount:"", total:0, description:""},
            ]
        }))
    }

    const deleteItem = (index) => {
        const items = invoiceData.items.filter((_, i) => i !== index);
        setInvoiceData((prev) => ({...prev, items}))
    }

    return (
        <div className=''>
            {/* company logo */}
            <div className=' flex-col justify-center items-center px-2'>
                <h5 className=' font-semibold mb-1'>Company logo</h5>
                <div className=''>
                    <label htmlFor='img' className=''>
                        <img src={assets.upload} alt='upload' className=' w-20 cursor-pointer' />
                    </label>
                    <input type='file' name='logo' id='img' hidden accept='image/*' />
                </div>
            </div>
            {/* company info */}
            <div className=' p-2'>
                <h5 className=' font-semibold mb-1'>Your Company</h5>
                <div className=' md:flex gap-13 mb-3'>
                    <input type='text' placeholder='Company name' className=' border w-full md:w-2xs p-1' />
                    <input type='text' placeholder='Company Phone no.' className=' border w-full md:w-2xs p-1' />
                </div>
                <input type='text' placeholder='Company address' className=' border w-full p-1' />
            </div>
            {/* bill to */}
            <div className=' p-2'>
                <h5 className=' font-semibold mb-1'>Bill To</h5>
                <div className=' md:flex gap-13 mb-3'>
                    <input type='text' placeholder='Name' className=' border w-full md:w-2xs p-1' />
                    <input type='text' placeholder='Phone no.' className=' border w-full md:w-2xs p-1' />
                </div>
                <input type='text' placeholder='Billing Address' className=' border w-full p-1' />
            </div>
            {/* ship to */}
            <div className=' p-2'>
                <div className=' md:flex justify-between items-center'>
                    <h5 className=' font-semibold mb-1'>Ship To</h5>
                    <div className=''>
                        <input type='checkbox' id='sameAsBilling' />
                        <label htmlFor='sameAsBilling'>Same As Billing</label>
                    </div>
                </div>
                <div className=' md:flex gap-13 mb-3'>
                    <input type='text' placeholder='Name' className=' border w-full md:w-2xs p-1' />
                    <input type='text' placeholder='Phone no.' className=' border w-full md:w-2xs p-1' />
                </div>
                <input type='text' placeholder='Shipping Address' className=' border w-full p-1' />
            </div>
            {/* invoice info */}
            <div className=' p-2'>
                <h5 className=' font-semibold mb-1'>Invoice Information</h5>
                <div className=' md:flex justify-between items-center'>
                    <div className=' flex-col'>
                        <label htmlFor='invoiceNumber'>Invoice Number</label>
                        <input type='text' disabled placeholder='Invoice Number' className=' border  p-1' />
                    </div>
                    <div>
                        <label htmlFor='invoiceDate'>Invoice Date</label>
                        <input type='date' placeholder='Company Phone no.' id='invoiceDate' className=' border  p-1' />
                    </div>
                    <div>
                        <label htmlFor='invoiceDueDate'>Invoice DueDate</label>
                        <input type='date' placeholder='Company address' id='invoiceDueDate' className=' border  p-1' />
                    </div>
                </div>
            </div>
            {/* item detail */}
            <div className=' p-2'>
                <h5 className=' font-semibold mb-1'>Item Detail</h5>
                {invoiceData.items.map((item, index) => (
                    <div key={index} className=' border border-gray-400 py-2 p-0.5 mb-2'>
                        <div className=' md:flex gap-12 mb-1.5'>
                            <input type='text' placeholder='Item Name' className=' border p-1 w-full md:w-2xs' />
                            <input type='number' placeholder='qty' className=' border p-1 w-full md:w-2xs' />
                        </div>
                        <div className=' md:flex gap-12 mb-1.5'>
                            <input type='number' placeholder='Amount' className='  border p-1 w-full md:w-2xs' />
                            <input type='number' placeholder='Total' className='  border p-1 w-full md:w-2xs' />
                        </div>
                        <div className=' md:flex justify-between items-center'>
                            <textarea placeholder='Description' rows={3} cols={5} className=' border p-1 w-full md:w-xl'></textarea>
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
                    <input type='text' placeholder='Account Name' className=' border  p-1' />
                    <input type='number' placeholder='Account Number' className=' border  p-1' />
                    <input type='text' placeholder='Branch/IFSC Code' className=' border  p-1' />
                </div>
            </div>
            {/* total */}
            <div className=' p-2'>
                <h5 className=' font-semibold mb-1'>Total</h5>
                <div className=' md:flex justify-between items-center mb-1'>
                    <span>SubTotal</span>
                    <span>₹{1000.00}</span>
                </div>
                <div className='md:flex justify-between'>
                    <label htmlFor='taxInput'>Tax Rate (%)</label>
                    <input type='text' id='taxInput' placeholder='2' className=' border md:w-md p-1 px-3 text-end' />
                </div>
                <div className=' md:flex justify-between items-center mb-1'>
                    <span>Tax Amount</span>
                    <span>₹{1000.00}</span>
                </div>
                <div className=' md:flex justify-between items-center font-semibold mb-1'>
                    <span>Grand Total</span>
                    <span>₹{1000.00}</span>
                </div>
            </div>
            {/* Note */}
            <div className=' p-2'>
                <h5 className=' font-semibold mb-1'>Notes</h5>
                <textarea placeholder='Notes' rows={2} cols={4} className=' border p-1 w-full'></textarea>

            </div>
        </div>
    )
}

export default InvoiceForm
