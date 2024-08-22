"use client"

import { MouseEvent } from "react"

interface ScrollLinkProps {
    targetId: string
    className?: string
    children: React.ReactNode
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ targetId, className, children }) => {
    const handleScroll = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        const section = document.getElementById(targetId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <a href={`#${targetId}`} onClick={handleScroll} className={className}>
            {children}
        </a>
    )
}

export default ScrollLink