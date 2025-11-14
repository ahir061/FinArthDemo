import React from 'react';
import AccordionItem from './AccordionItem';
import { TrashIcon, CalendarIcon, HashtagIcon, TagIcon, CheckCircleIcon, PlusIcon, DownloadIcon, PencilIcon, ChevronRightIcon, SparklesIcon, ArrowLeftIcon, LinkIcon, DocumentTextIcon } from './Icons';
import { DateInfo, TagInfo, Circular, View } from '../types';

interface MainContentProps {
    view: View;
    circular: Circular;
    onActionableClick: () => void;
    onChapterClick: () => void;
    onBackToChapters: () => void;
}

const DateInfoCard: React.FC<DateInfo> = ({ label, date, icon: Icon }) => (
    <div>
        <label className="text-xs text-gray-500">{label}</label>
        <div className="mt-1 flex items-center bg-white border border-gray-200 rounded-md px-3 py-2 text-sm">
            <Icon className="w-5 h-5 text-gray-400 mr-2" />
            <span>{date}</span>
        </div>
    </div>
);

const TagInfoRow: React.FC<TagInfo> = ({ label, value, icon: Icon, color }) => (
    <div className="flex items-center space-x-2">
        <Icon className="w-5 h-5 text-gray-400" />
        <span className="text-sm text-gray-600">{label}:</span>
        <span className={`text-sm font-medium px-2.5 py-1 rounded-md ${color}`}>
            {value}
        </span>
    </div>
);

const ClauseItem: React.FC<{ number: number; text: string; onActionableClick: () => void; }> = ({ number, text, onActionableClick }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex items-start gap-6">
            <span className="text-base text-gray-500 font-medium mt-1">{number}</span>
            <div className="flex-1 min-w-0">
                <p className="text-base text-gray-700 leading-relaxed">
                    {text}
                </p>
                <button onClick={onActionableClick} className="mt-4 flex items-center space-x-2 text-sm text-blue-600 font-medium hover:underline">
                    <CheckCircleIcon className="w-5 h-5" />
                    <span>Actionable Found</span>
                </button>
            </div>
        </div>
    </div>
);


const MainContent: React.FC<MainContentProps> = ({ view, circular, onActionableClick, onChapterClick, onBackToChapters }) => {

    if (view === 'subClauseDetails') {
        return (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                    <div>
                        <button onClick={onBackToChapters} className="flex items-center text-sm text-blue-600 hover:underline mb-2 font-medium">
                            <ArrowLeftIcon className="w-4 h-4 mr-2" />
                            Back to Chapters
                        </button>
                        <h1 className="text-2xl font-semibold text-gray-800">Sub Clauses</h1>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="flex items-center text-sm font-medium bg-gray-800 text-white px-3 py-1.5 rounded-md hover:bg-gray-700">
                            <SparklesIcon className="w-4 h-4 mr-2" />
                            Generate Actionables
                        </button>
                        <button className="flex items-center text-sm font-medium bg-white text-gray-700 border border-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-50">
                            <PlusIcon className="w-4 h-4 mr-2" />
                            Add Subclause
                        </button>
                    </div>
                </div>

                <div className="mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-start justify-between">
                        <div className="flex items-start">
                            <span className="text-gray-500 font-medium mt-1">47.0</span>
                            <div className="ml-4">
                                <h2 className="text-lg font-semibold text-gray-800">Valuation of investments.</h2>
                                <p className="mt-2 text-gray-600 leading-relaxed max-w-3xl">
                                    The asset management company shall compute and carry out valuation of investments made by the scheme(s) of the mutual fund in accordance with the investment valuation norms specified in the Eighth Schedule and publish the same
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1">
                            <button className="p-2 text-blue-600 bg-blue-100 rounded-md hover:bg-blue-200">
                                <PencilIcon className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-600 bg-red-100 rounded-md hover:bg-red-200">
                                <TrashIcon className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="flex items-center font-semibold text-gray-800 mb-4">
                        <LinkIcon className="w-5 h-5 mr-2 text-gray-500" />
                        Referenced Documents
                    </h3>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <DocumentTextIcon className="w-8 h-8 text-blue-600" />
                            <div className="ml-4">
                                <p className="font-semibold text-gray-800">Master Circular for Mutual Funds</p>
                                <p className="text-sm text-gray-500 flex items-center mt-1">
                                    <CalendarIcon className="w-4 h-4 mr-1.5" />
                                    Issued: 27 Jun 2024
                                </p>
                            </div>
                        </div>
                        <button className="flex items-center text-sm font-medium bg-white text-gray-700 border border-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-50">
                            <DocumentTextIcon className="w-4 h-4 mr-2" />
                            View Full Master Circular
                        </button>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-800 mb-4">CHAPTER 9: VALUATION</h3>
                    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                        <p><span className="font-semibold text-gray-700">9.1 Definitions</span></p>
                        <p><span className="font-semibold text-gray-700">9.1.1 Non Traded Securities</span></p>
                        <p><span className="font-semibold text-gray-700">9.1.1.1</span></p>
                        <p>When a security (other than Government Securities, money market and debt securities) is not traded on any Stock Exchange for a period of thirty days prior to the valuation date, the scrip shall be treated as a non-traded security.</p>
                        <p><span className="font-semibold text-gray-700">9.1.1.2</span></p>
                        <p className="ml-4">(b) In case of trades after the valuation price is computed by the valuation agencies and where the traded price is lower than such computed price, such traded price shall be considered for valuation.</p>
                        <p className="ml-4">iv. Treatment of accrued interest, future interest accrual, and future recovery:</p>
                        <p className="ml-8">(a) The indicative haircut applied to the principal should be applied to any accrued interest.</p>
                        <p className="ml-8">(b) Any recovery shall first be adjusted against outstanding interest recognized in the NAV and any balance shall be adjusted against the value of principal recognized in the NAV.</p>
                        
                        <div className="inline-block">
                            <div className="flex items-center bg-yellow-50 border border-yellow-200 rounded-md px-2 py-1">
                                <LinkIcon className="w-4 h-4 text-yellow-600 mr-2" />
                                <a href="#" className="text-sm text-yellow-800 font-medium hover:underline">Valuation of repurchase (repo) transactions by Mutual Funds.</a>
                            </div>
                        </div>
                        
                        <p className="pt-4"><span className="font-semibold text-gray-700">9.3 Valuation of securities with Put/Call Options:</span></p>
                        <p className="ml-4"><span className="font-semibold text-gray-700">9.3.1</span></p>
                        <p className="ml-8"><span className="font-semibold text-gray-700">9.3.1.1 Securities with call option</span></p>
                        <p className="ml-8">The option embedded securities would be valued as follows: a. The securities with call option shall be valued at the lower of the value as obtained by valuing the security to final maturity and valuing the security to call option. In case there are multiple call options, the lowest value obtained by valuing to the various call dates and valuing to the maturity date is to be taken as the value of the instrument.</p>
                        
                        <div className="inline-block ml-8">
                            <div className="flex items-center bg-yellow-50 border border-yellow-200 rounded-md px-2 py-1">
                                <LinkIcon className="w-4 h-4 text-yellow-600 mr-2" />
                                <a href="#" className="text-sm text-yellow-800 font-medium hover:underline">Valuation of Additional Tier 1 Bonds ("AT-1 Bonds")</a>
                            </div>
                        </div>

                        <p className="ml-8 pt-4"><span className="font-semibold text-gray-700">9.3.1.2 Securities with Put option</span></p>
                        <p className="ml-8">a. The securities with put option shall be valued at the higher of the value as obtained by valuing the security to final maturity and valuing the security to put option. In case there are multiple put options, the highest value obtained by valuing to the various put dates and valuing to the maturity date is to be taken as the value of the instruments.</p>

                        <p className="ml-8 pt-4"><span className="font-semibold text-gray-700">9.3.1.3 Securities with both Put and Call option on the same day</span></p>
                        <p className="ml-8">a. Only securities with put / call options on the same day and having the same put and call option price, shall be deemed to mature on such put / call date and shall be valued accordingly. In all other cases, the cash flow of each put / call option shall be evaluated and the security shall be valued on the following basis: 1. Identify a ‘Put Trigger Date’, a date on</p>

                    </div>
                </div>
            </div>
        );
    }
    
    if (circular.id === 'sebi_1996') {
        const chapters = circular.chapters || [];

        return (
            <>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h1 className="text-2xl font-semibold text-gray-800 max-w-4xl mb-6">
                  {circular.title}
                </h1>
        
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <DateInfoCard label="Issue Date" date={circular.issueDate} icon={CalendarIcon} />
                  <DateInfoCard label="Due Date" date={circular.dueDate} icon={CalendarIcon} />
                  <DateInfoCard label="Effective Date" date={circular.effectiveDate} icon={CalendarIcon} />
                </div>
        
                <div className="flex items-center space-x-2 mb-8">
                    <TagIcon className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Common Tag:</span>
                    <span className={`text-sm font-medium px-2.5 py-1 rounded-md ${circular.tagColor}`}>
                        {circular.commonTag}
                    </span>
                </div>
                
                <AccordionItem title="Summary" initiallyOpen={true}>
                    <div className="p-4 bg-gray-50 rounded-lg text-gray-600 text-sm leading-relaxed">
                        {circular.summary}
                    </div>
                </AccordionItem>
                <AccordionItem title="Organization Impact">
                    <div className="p-4 text-gray-600">Content for Organization Impact...</div>
                </AccordionItem>
                <AccordionItem title="Technical Changes">
                    <div className="p-4 text-gray-600">Content for Technical Changes...</div>
                </AccordionItem>
                <AccordionItem title="Operational Changes">
                    <div className="p-4 text-gray-600">Content for Operational Changes...</div>
                </AccordionItem>
                <AccordionItem title="Disclosure Areas">
                    <div className="p-4 text-gray-600">Content for Disclosure Areas...</div>
                </AccordionItem>
              </div>
        
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">Chapters</h2>
                    <div className="flex items-center space-x-2">
                        <button className="text-gray-600 hover:bg-gray-100 p-2 rounded-md">
                            <DownloadIcon className="w-5 h-5" />
                        </button>
                        <button className="flex items-center text-sm font-medium bg-white text-gray-700 border border-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-50">
                            <PlusIcon className="w-4 h-4 mr-2" />
                            Add Chapter
                        </button>
                    </div>
                </div>
                <div className="space-y-3">
                    {chapters.map((chapter, index) => (
                        <div key={chapter.number} onClick={onChapterClick} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
                            <div className="flex items-center">
                                <span className="text-gray-600 font-medium mr-4">{chapter.number}</span>
                                <span className="text-gray-800">{chapter.title}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button onClick={(e) => e.stopPropagation()} className="p-2 text-blue-600 bg-blue-100 rounded-md hover:bg-blue-200">
                                    <PencilIcon className="w-4 h-4" />
                                </button>
                                <button onClick={(e) => e.stopPropagation()} className={`p-2 rounded-md ${index === 0 ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-gray-200 text-gray-500 hover:bg-gray-300'}`}>
                                    <TrashIcon className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-md">
                                    <ChevronRightIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
              </div>
            </>
        );
    }
    
    // Default layout for 'disclosure_2024'
    const clauses = [
        {
            number: 1,
            text: "Under the current regulatory framework for Mutual Funds, various disclosure requirements have been mandated, which include disclosures by Mutual Funds with respect to expenses and risks pertaining to schemes. In order to facilitate enhanced transparency, ease of comprehension by investors and a standardised approach towards disclosures by the Mutual Fund industry, based on the recommendation of Mutual Fund Advisory Committee, following has been decided: A. Disclosure of expenses, half yearly returns and yield of a scheme"
        },
        {
            number: 2,
            text: "Investments under direct plan of a mutual fund scheme, which was introduced vide circular dated September 13, 2012 and came into effect from January 01, 2013, are investments which are not routed through distributors of Mutual Funds. As distribution expenses and commission cannot be charged to investors of a direct plan, the expense ratio of direct plan of any scheme is lower than that of the regular plan of the same scheme and hence the returns of the direct and regular plans also differ."
        }
    ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 max-w-4xl">
          {circular.title}
        </h1>
        <button className="p-2 text-red-500 bg-red-50 rounded-md hover:bg-red-100">
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DateInfoCard label="Issue Date" date={circular.issueDate} icon={CalendarIcon} />
        <DateInfoCard label="Due Date" date={circular.dueDate} icon={CalendarIcon} />
        <DateInfoCard label="Effective Date" date={circular.effectiveDate} icon={CalendarIcon} />
      </div>

      <div className="flex flex-col space-y-3 mb-8">
          {circular.circularNo && <TagInfoRow label="Circular No" value={circular.circularNo} icon={HashtagIcon} color="bg-blue-100 text-blue-800" />}
          <TagInfoRow label="Common Tag" value={circular.commonTag} icon={TagIcon} color={circular.tagColor} />
      </div>

      <AccordionItem title="Summary" initiallyOpen={true}>
        <div className="p-4 bg-gray-50 rounded-lg text-gray-600 text-sm leading-relaxed">
          {circular.summary}
        </div>
      </AccordionItem>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Clauses</h2>
        <div className="space-y-4">
            {clauses.map(clause => (
                <ClauseItem key={clause.number} number={clause.number} text={clause.text} onActionableClick={onActionableClick} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;