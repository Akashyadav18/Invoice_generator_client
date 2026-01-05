import { templates } from '@/assets/assets'
import InvoicePreview from '@/components/InvoicePreview';
import { AppContext } from '@/context/AppContext';
import React, { useContext, useRef } from 'react'

const PreviewPage = () => {

    const {selectedTemplate, invoiceData} = useContext(AppContext);

    const previewRef = useRef();

    return (
        <div className=''>
            {/* Action btn */}
            <div className=' flex flex-col items-center gap-2 mb-2'>
                {/* List of template btn */}
                <div className=' flex flex-wrap justify-center gap-3 m-4 '>
                    {templates.map((template) => (
                        <button key={template.id} className={` py-1 px-3 rounded-full cursor-pointer ${selectedTemplate === template.id ? ' bg-emerald-600 text-white' : ' bg-zinc-300'}`}>
                        {template.label}
                        </button>
                    ))}
                </div>
                {/* List of action btn */}
                <div className=' flex flex-wrap justify-center gap-3 '>
                    <button className=' p-1 px-2 rounded cursor-pointer bg-blue-600 text-white'>Save & Exit</button>
                    <button className=' p-1 px-2 rounded cursor-pointer bg-red-600 text-white'>Delete invoice</button>
                    <button className=' p-1 px-2 rounded cursor-pointer bg-amber-600 text-white'>Back To Dashboard</button>
                    <button className=' p-1 px-2 rounded cursor-pointer bg-sky-600 text-white'>Send Email</button>
                    <button className=' p-1 px-2 rounded cursor-pointer bg-green-700 text-white'>Download pdf</button>              
                </div>
            </div>
            <div className=' grow overflow-auto flex justify-center items-center py-4 bg-zinc-200'>
                <div ref={previewRef} className=''>
                    <InvoicePreview invoiceData={invoiceData} template={selectedTemplate}/>
                </div>
            </div>
        </div>
    )
}

export default PreviewPage


// ==============================
// React ref & forwardRef (Notes)
// ==============================

// 1) What is ref?
// ----------------
// - ref ka use React me directly DOM element ko access karne ke liye hota hai
// - Normally React DOM ko khud handle karta hai, but kuch cases me hume direct access chahiye

// Use cases:
// - Print a component
// - Generate PDF
// - Scroll to element
// - Measure height/width
// - Focus input field

// Example:
// const myRef = useRef();

// myRef.current  // actual DOM element

// 2) useRef()
// -----------
// const previewRef = useRef();

// - React ek object banata hai:
//   { current: null }
// - Ye object re-render par reset nahi hota
// - current me DOM element store hota hai

// Attach ref:
// <div ref={previewRef}></div>

// After render:
// previewRef.current → <div> DOM node

// 3) Problem with Functional Components
// -------------------------------------
// - Functional components by default ref accept nahi karte

// ❌ This will NOT work:
// <InvoicePreview ref={previewRef} />

// Reason:
// React ref ko directly function component me pass nahi karta


// 4) forwardRef (Solution)
// ------------------------
// - forwardRef parent ko child ke DOM tak access dene deta hai
// - ref ko component ke andar "forward" karta hai

// Syntax:
// const Component = forwardRef((props, ref) => {
//   return <div ref={ref}>...</div>
// });

// 5) Flow (Important)
// -------------------
// 1. Parent creates ref using useRef()
// 2. Parent passes ref to child
// 3. Child receives ref using forwardRef
// 4. Child attaches ref to a DOM element
// 5. Parent accesses DOM using ref.current


// 6) Accessing DOM from Parent
// ----------------------------
// previewRef.current.innerHTML
// previewRef.current.offsetHeight
// previewRef.current.scrollHeight
