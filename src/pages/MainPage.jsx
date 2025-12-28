import { Button } from '@/components/ui/button';
import { AppContext } from '@/context/AppContext';
import { Pencil } from 'lucide-react';
import React, { useContext, useState } from 'react'

const MainPage = () => {

  const [isEditingTitle, setIsEditingTitle] = useState(false);

  // const [invoiceTitle, setInvoiceTitle] = useContext(AppContext);

  return (
    <div>
      <div className=' py-3 px-20'>
        {/* Title bar */}
        <div className=' flex justify-start items-center border-2 border-gray-200 p-3 mb-3'>
          <div>
            {isEditingTitle ? (
              <input type='text' autoFocus className=' border w-[450px] font-semibold p-2' />
            ) : (
              <div className=' flex justify-center items-center gap-1.5'>
                <h5 className=' font-medium'>Invoice</h5>
                <Button className=' text-sky-500 font-bold cursor-pointer'>
                  <Pencil size={20} />
                </Button>
              </div>
            )}
          </div>
        </div>
        {/* Invoice form and title bar */}
        <div className=' flex gap-3'>
          {/* Invoice form */}
          <div className='border-2 border-gray-200 p-3 w-full'>
            <div>
              Invoice form
            </div>
          </div>
          {/* Title form */}
          <div className='border-2 border-gray-200 p-3 w-full'>
            <div>
              Title form
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
