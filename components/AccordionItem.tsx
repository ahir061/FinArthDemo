
import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  initiallyOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, initiallyOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
    <div className="border-b border-gray-200">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{title}</span>
          <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
        </button>
      </h2>
      {isOpen && (
        <div className="pb-5">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
   