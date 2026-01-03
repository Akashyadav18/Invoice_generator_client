import { templates } from '@/assets/assets'
import React from 'react'

const TemplateGrid = ({onTemplateClick}) => {
    return (
        <div className='grid md:grid-cols-2 gap-5'>
            {templates.map(template => (
                <div key={template.id} title={template.label} className=' mb-3 cursor-pointer border border-gray-400'
                    onClick={() => onTemplateClick(template.id)}
                >
                    <img src={template.image} alt={template.label} className='transition-transform duration-300 transform group-hover:scale-125'/>
                    <div className=' text-center'>{template.label}</div>
                </div>
            ))}
        </div>
    )
}

export default TemplateGrid
