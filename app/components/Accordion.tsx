import { ReactNode } from "react";

interface AccordionProps {
    children: ReactNode;
  }
  
const Accordion: React.FC<AccordionProps> = ({ children }) => {
    return (
        <div className="w-full mx-auto mt-8">
            {children}
        </div>
    )
}

export default Accordion