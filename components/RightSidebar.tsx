import React from 'react';
import { ClockIcon, CalendarIcon, DocumentIcon, LinkIcon, ChevronLeftIcon, TagIcon } from './Icons';
import { Task, Circular } from '../types';
import AccordionItem from './AccordionItem';

interface RightSidebarProps {
    circular: Circular;
    onReferenceClick: () => void;
}

const tasks: Task[] = [
  { status: 'Compliant', count: 5, color: 'bg-green-500' },
  { status: 'Noted for Compliance', count: 2, color: 'bg-orange-400' },
  { status: 'Partially Compliant', count: 4, color: 'bg-yellow-400' },
  { status: 'Non-Compliant', count: 1, color: 'bg-red-500' },
  { status: 'Unassigned', count: 12, color: 'bg-gray-400' },
];

const totalTasks = tasks.reduce((sum, task) => sum + task.count, 0);
const completedTasks = tasks.find(t => t.status === 'Compliant')?.count || 0;
const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

const TaskProgressBar: React.FC = () => (
    <div className="flex h-2 rounded-full overflow-hidden my-2">
        {tasks.map((task) => (
            <div
                key={task.status}
                className={task.color}
                style={{ width: `${(task.count / totalTasks) * 100}%` }}
                title={`${task.status}: ${task.count}`}
            ></div>
        ))}
    </div>
);

const TaskItem: React.FC<Task> = ({ status, count, color }) => (
    <div className="flex justify-between items-center text-sm">
        <div className="flex items-center">
            <span className={`w-2.5 h-2.5 rounded-full mr-2 ${color}`}></span>
            <span className="text-gray-600">{status}</span>
        </div>
        <span className="font-medium text-gray-800">{count}</span>
    </div>
);

const RightSidebar: React.FC<RightSidebarProps> = ({ circular, onReferenceClick }) => {
    if (circular.id === 'sebi_1996') {
        return (
            <aside className="w-80 bg-white border-l border-gray-200 flex flex-shrink-0">
                <div className="flex-1 p-6 overflow-y-auto relative">
                    <button className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-1 shadow-md hover:bg-gray-100">
                        <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
                    </button>
                    
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center mb-6">
                        <h3 className="font-semibold text-gray-800">No tasks assigned</h3>
                    </div>
        
                    <div className="space-y-2 mb-8">
                        <button className="w-full text-center py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-50">Download Template (.xlsx)</button>
                        <button className="w-full text-center py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-50">Import Actionables (.xlsx)</button>
                    </div>
        
                    <div className="bg-white rounded-lg">
                        <h3 className="font-semibold flex items-center mb-4">
                            <LinkIcon className="w-5 h-5 mr-2 text-gray-500"/>
                            References
                        </h3>
                        <button onClick={onReferenceClick} className="text-blue-600 hover:underline text-sm">
                            {circular.referencesCount}
                        </button>
                    </div>
                </div>
        
                <div className="w-12 border-l border-gray-200 flex flex-col items-center py-4 space-y-4 bg-gray-50">
                    <button className="p-2 rounded-md hover:bg-gray-200 text-gray-600"><ClockIcon className="w-5 h-5"/></button>
                    <button className="p-2 rounded-md hover:bg-gray-200 text-gray-600"><CalendarIcon className="w-5 h-5"/></button>
                    <button className="p-2 rounded-md hover:bg-gray-200 text-gray-600 bg-gray-200"><DocumentIcon className="w-5 h-5"/></button>
                    <button className="p-2 rounded-md hover:bg-gray-200 text-gray-600"><TagIcon className="w-5 h-5"/></button>
                </div>
            </aside>
        );
    }
  
  return (
    <aside className="w-96 bg-white border-l border-gray-200 flex flex-shrink-0">
        <div className="flex-1 p-6 overflow-y-auto relative">
            <button className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-1 shadow-md hover:bg-gray-100">
                <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
            </button>
            <div className="bg-white rounded-lg mb-6">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Tasks</h3>
                    <span className="text-sm text-gray-500">{completionPercentage}% ({completedTasks}/{totalTasks})</span>
                </div>
                <TaskProgressBar />
                <div className="space-y-2 mt-4">
                    {tasks.map(task => <TaskItem key={task.status} {...task} />)}
                </div>
                <div className="mt-6 space-y-2">
                    <button className="w-full text-center py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-50">Download Actionables (.xlsx)</button>
                    <button className="w-full text-center py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-50">Import Actionables (.xlsx)</button>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 mb-6">
                <AccordionItem title="Organization Impact">
                    <p className="px-5 text-gray-600 text-sm">Content for Organization Impact...</p>
                </AccordionItem>
                <AccordionItem title="Technical Changes">
                    <p className="px-5 text-gray-600 text-sm">Content for Technical Changes...</p>
                </AccordionItem>
                <AccordionItem title="Operational Changes">
                    <p className="px-5 text-gray-600 text-sm">Content for Operational Changes...</p>
                </AccordionItem>
                <AccordionItem title="Disclosure Areas">
                    <p className="px-5 text-gray-600 text-sm">Content for Disclosure Areas...</p>
                </AccordionItem>
            </div>

            <div className="bg-white rounded-lg">
                <h3 className="font-semibold flex items-center mb-4">
                    <LinkIcon className="w-5 h-5 mr-2 text-gray-500"/>
                    References
                </h3>
                <div className="space-y-3 text-sm">
                    <button onClick={onReferenceClick} className="block text-blue-600 hover:underline text-left">SEBI (MUTUAL FUNDS) REGULATIONS, 1996 (Half-yearly Disclosures)</button>
                    <button onClick={onReferenceClick} className="block text-blue-600 hover:underline text-left">SEBI (MUTUAL FUNDS) REGULATIONS, 1996 (Half-yearly Disclosures)</button>
                    <button onClick={onReferenceClick} className="block text-blue-600 font-medium hover:underline text-left">View all references ({circular.referencesCount})</button>
                </div>
            </div>
        </div>

        <div className="w-12 border-l border-gray-200 flex flex-col items-center py-4 space-y-4 bg-gray-50">
            <button className="p-2 rounded-md hover:bg-gray-200 text-gray-600 bg-gray-200"><ClockIcon className="w-5 h-5"/></button>
            <button className="p-2 rounded-md hover:bg-gray-200 text-gray-600"><CalendarIcon className="w-5 h-5"/></button>
            <button className="p-2 rounded-md hover:bg-gray-200 text-gray-600"><DocumentIcon className="w-5 h-5"/></button>
            <button className="p-2 rounded-md hover:bg-gray-200 text-gray-600"><TagIcon className="w-5 h-5"/></button>
        </div>
    </aside>
  );
};

export default RightSidebar;