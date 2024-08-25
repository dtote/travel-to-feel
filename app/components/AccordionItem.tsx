"use client"

import React, { ReactNode, useState } from "react"

interface AccordionItemProps {
    title: string
    children: ReactNode
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-full border-t lg:border border-t2fPrimary">
            <div 
            className="w-full uppercase flex justify-between lg:justify-center items-center bg-t2fSecondary bg-opacity-50 p-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}>
                <h2 className="font-custom text-xl md:text-3xl font-bold text-black flex-grow lg:text-center">{title}</h2>
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