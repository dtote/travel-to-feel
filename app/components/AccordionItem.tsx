"use client"

import React, { ReactNode, useState } from "react"

interface AccordionItemProps {
    title: string
    children: ReactNode
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-full border-t border-t2fPrimary">
            <div 
            className="w-full uppercase flex justify-between items-center bg-t2fSecondary bg-opacity-50 p-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}>
                <h2 className="text-xl md:text-3xl font-bold text-black">{title}</h2>
                <span className="text-2xl font-bold text-black">{isOpen ? '-' : '+'}</span>
            </div>
        {isOpen && (
            <div>
                <p>{children}</p>
            </div>
        )}
        </div>
    )
}

export default AccordionItem