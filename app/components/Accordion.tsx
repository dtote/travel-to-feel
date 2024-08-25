import { ReactNode } from "react";

interface AccordionProps {
    children: ReactNode;
  }
  
const Accordion: React.FC<AccordionProps> = ({ children }) => {
    return (
        <div className="w-full lg:w-3/4 mx-auto mt-12">
            {children}
        </div>
    )
}

export default Accordion