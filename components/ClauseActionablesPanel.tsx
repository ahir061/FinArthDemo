
import React, { useState, useEffect } from 'react';
import { PencilIcon, XIcon } from './Icons';

interface ClauseActionablesPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: () => void;
}

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center bg-blue-50 rounded-md px-2 py-0.5">
        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-1.5"></div>
        <span className="text-sm text-blue-700">{children}</span>
    </div>
);

const SubActionableItem: React.FC<{ text: string, tags: string[], showClose?: boolean }> = ({ text, tags, showClose }) => (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex justify-between items-start">
            <p className="text-gray-700 text-sm leading-6 mr-4">{text}</p>
            {showClose && (
                <button className="text-gray-400 hover:text-gray-600">
                    <XIcon className="w-4 h-4" />
                </button>
            )}
        </div>
        <div className="flex justify-between items-center mt-3">
            <div className="flex items-center space-x-2">
                {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </div>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-sm text-blue-600 font-medium hover:underline">View Details →</a>
        </div>
    </div>
);


const ClauseActionablesPanel: React.FC<ClauseActionablesPanelProps> = ({ isOpen, onClose, onNavigate }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      const timer = setTimeout(() => setShow(true), 20);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
      const timer = setTimeout(() => setIsMounted(false), 300); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
        <div
            className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ease-in-out ${
                show ? 'bg-opacity-30' : 'bg-opacity-0'
            }`}
            onClick={onClose}
        ></div>
        <aside
            className={`fixed top-0 right-0 h-full w-[40rem] bg-gray-50 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
                show ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="flex flex-col h-full">
                <header className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
                    <h2 className="text-lg font-semibold text-gray-900">Clause Actionables</h2>
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center text-sm bg-white border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50">
                            <PencilIcon className="w-4 h-4 mr-2" />
                            Edit Actionable
                        </button>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                            <XIcon className="w-5 h-5" />
                        </button>
                    </div>
                </header>

                <div className="flex-1 p-6 overflow-y-auto">
                    <div className="space-y-6">
                        <div>
                            <h3 onClick={onNavigate} className="font-semibold text-gray-800 cursor-pointer hover:underline">Ensure separate disclosure of recurring expenses for direct and regular plans.</h3>
                            <p className="text-xs font-semibold text-gray-400 mt-3 mb-2 tracking-wider">SUBACTIONABLES</p>
                            <div className="space-y-3">
                                <SubActionableItem 
                                    text="Identify and segregate total recurring expenses for direct and regular plans as per Sl. No. 6.4 of Twelfth Schedule and Regulation 59 of SEBI (Mutual Funds) Regulations, 1996."
                                    tags={['Compliance', 'Accounts']}
                                    showClose={true}
                                />
                                <SubActionableItem 
                                    text="Prepare a detailed report showcasing separate recurring expenses for direct and regular plans along with the total scheme expenses."
                                    tags={['Accounts']}
                                />
                                <SubActionableItem 
                                    text="Review the prepared disclosures to ensure compliance with the Twelfth Schedule and Regulation 59 requirements."
                                    tags={['Compliance']}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </>
  );
};

export default ClauseActionablesPanel;