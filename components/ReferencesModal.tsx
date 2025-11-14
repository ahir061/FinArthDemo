import React, { useState, useEffect } from 'react';
import { XIcon, SearchIcon, ExternalLinkIcon } from './Icons';

interface ReferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

const referenceData = {
  id: 'sebi_1996',
  title: 'SEBI (MUTUAL FUNDS) REGULATIONS, 1996',
  subtitle: 'Half-yearly Disclosures',
  category: 'Regulation',
  content: [
    "59.(1) A mutual fund and asset management company shall within one month from the close of each half year, that is on 31stMarch and on 30thSeptember, host a soft copy of its unaudited financial results on their website: Provided that the half-yearly unaudited report referred to in this sub-regulation shall contain details as specified in Twelfth Schedule and such other details as are necessary for the purpose of providing a true and fair view of the operations of the mutual fund.(2) A mutual fund and asset management company, shall publish an advertisement disclosing the hosting of such financial results on their website, in atleast one English daily newspaper having nationwide circulationand in a newspaper having wide circulation published in the language of the region where the Head Office of the mutual fund is situated.[Statement of Portfolio",
    "285[59A. A 286[an asset management company] shall before the expiry of",
    "287[ten days] from the closeof each half-year (i. e., 31st March and 30th September), send to all “Without prejudice to the generality of sub-regulation (1), the mutual fund [ƒ] shall furnish the following periodic reports to the Board, namely:—(a) copiesof the duly audited annual statements of accounts including the balance sheet and the profit and loss account for the fund and in respect of each scheme, once a year;(b) a copy of six monthly unaudited accounts ;(c) a quarterly statement of movements in the net assets for each of the schemes of the fund;(d) a quarterly portfolio statement, including changes from the previous periods, for each scheme.”.[“Words ”and asset management company’ omitted by the SEBI (Mutual Funds) (Amendment) Regulations, 1998, w. e. f. 12-1-1998.]284Substituted by the SEBI (Mutual Funds) (Second Amendment) Regulations, 2012, w. e. f. 01-10-2012 for the existing regulation 59. Prior to its substitution, regulation 59 read as under;“Half-yearly disclosures59. A mutual fund and asset management company shall before the expiry of one month from the close of each half year that is on 31st March and on 30th September, publish its unaudited financial results in one English daily newspaper published in the language of the region where the Head Office of the mutual fund is situated. The half-yearly results must be printed in at least 7 point Times Roman font with proper spacing for easy reading : Providedthat the half-yearly unaudited report referred in this sub-regulation shall contain details as specified in Twelfth Schedule and such other details as are necessary for the purpose of providing a true and fair view of the operations of the mutual fund.”285Inserted by the SEBI (Mutual Funds) (Second Amendment) Regulations, 2000, w. e. f. 14-3-2000.286Substituted for the words “A mutual fund” by the Securities and Exchange Board of India (Mutual Funds) (Amendment) Regulations, 2023 w. e. f. such date as the Board may by notification inthe Official Gazette appoint. unitholders a complete statement of its scheme portfolio",
    "288[, in the manner specified by the Board].",
    "289[ ]",
    "290[Dispute Resolution59B. All claims, differences or disputes between the asset management company and investors arising out of or in relation to the activities of the asset management company in the securities market shall be submitted to a dispute resolution mechanism that includes mediation and/or conciliation and/or arbitration, inaccordance with the procedure specified by the Board.]"
  ]
};

const ReferencesModal: React.FC<ReferencesModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      const timer = setTimeout(() => setShow(true), 20);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
      const timer = setTimeout(() => setIsMounted(false), 500); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-500 ease-in-out ${
            show ? 'bg-opacity-60' : 'bg-opacity-0'
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 p-4 transition-opacity duration-500 ease-in-out ${
            show ? 'opacity-100' : 'opacity-0'
        }`}
        // This is needed to allow clicks on the modal but not the area around it
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
          <header className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
            <h2 className="text-lg font-semibold text-gray-900">References</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800 p-1 rounded-full">
              <XIcon className="w-6 h-6" />
            </button>
          </header>

          <div className="flex-1 flex overflow-hidden">
            {/* Left Pane */}
            <aside className="w-1/3 bg-gray-50 border-r border-gray-200 flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search bar"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
                <ul>
                  <li className="p-4 cursor-pointer bg-blue-100 border-r-4 border-blue-500">
                    <h3 className="font-semibold text-gray-800">{referenceData.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{referenceData.subtitle}</p>
                    <span className="mt-2 inline-block bg-white border border-gray-200 text-gray-500 text-xs font-medium px-2 py-0.5 rounded">
                      {referenceData.category}
                    </span>
                  </li>
                  {/* Add more static items here if needed for a complete list */}
                </ul>
              </div>
            </aside>

            {/* Right Pane */}
            <main className="flex-1 p-6 overflow-y-auto">
              <div className="border-b border-gray-200 pb-4 mb-4">
                <p className="text-sm text-gray-500">{referenceData.subtitle}</p>
                <h1 className="text-xl font-bold text-gray-900 mt-1">{referenceData.title}</h1>
                <button onClick={() => onNavigate('sebi_1996')} className="mt-2 text-sm text-blue-600 hover:underline font-medium flex items-center">
                  View reference <ExternalLinkIcon className="w-4 h-4 ml-1.5" />
                </button>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                {referenceData.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferencesModal;
