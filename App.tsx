
import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import ClauseActionablesPanel from './components/ClauseActionablesPanel';
import ActionableDetails from './components/ActionableDetails';
import AIChatPanel from './components/AIChatPanel';
import ReferencesModal from './components/ReferencesModal';
import SmartAudit from './components/SmartAudit';
import AuditDetails from './components/AuditDetails';
import UploadEvidenceModal from './components/UploadEvidenceModal';
import ControlDetailsModal from './components/ControlDetailsModal';
import { View } from './types';
import { circulars } from './data';

const App: React.FC = () => {
  const [appMode, setAppMode] = useState<'compliance' | 'audit'>('audit');
  const [auditView, setAuditView] = useState<'list' | 'details'>('details');
  const [selectedAuditId, setSelectedAuditId] = useState<string | null>('internal_audit_mt13');
  
  const [isClausePanelOpen, setIsClausePanelOpen] = useState(false);
  const [isAIChatPanelOpen, setIsAIChatPanelOpen] = useState(false);
  const [isReferencesModalOpen, setIsReferencesModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isControlDetailsModalOpen, setIsControlDetailsModalOpen] = useState(false);
  const [selectedControlId, setSelectedControlId] = useState<string | null>(null);

  const [currentView, setCurrentView] = useState<View>('circularDetails');
  const [currentCircularId, setCurrentCircularId] = useState('disclosure_2024');
  const mainContentRef = useRef<HTMLElement>(null);

  const currentCircular = circulars[currentCircularId];

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [currentView, currentCircularId]);

  const handleOpenClausePanel = () => setIsClausePanelOpen(true);
  const handleCloseClausePanel = () => setIsClausePanelOpen(false);
  
  const handleOpenAIChatPanel = () => setIsAIChatPanelOpen(true);
  const handleCloseAIChatPanel = () => setIsAIChatPanelOpen(false);

  const handleOpenReferencesModal = () => setIsReferencesModalOpen(true);
  const handleCloseReferencesModal = () => setIsReferencesModalOpen(false);
  
  const handleOpenUploadModal = () => setIsUploadModalOpen(true);
  const handleCloseUploadModal = () => setIsUploadModalOpen(false);

  const handleOpenControlDetails = (controlId: string) => {
    setSelectedControlId(controlId);
    setIsControlDetailsModalOpen(true);
  };
  
  const handleCloseControlDetails = () => {
    setIsControlDetailsModalOpen(false);
    setSelectedControlId(null);
  };

  const handleNavigateToRegulation = (id: string) => {
    setCurrentCircularId(id);
    setCurrentView('circularDetails');
    handleCloseReferencesModal();
  };

  const handleNavigateToActionableDetails = () => {
    setCurrentView('actionableDetails');
    setIsClausePanelOpen(false);
  };

  const handleNavigateToSubClause = () => {
    setCurrentView('subClauseDetails');
  };

  const handleBackToChapters = () => {
    setCurrentCircularId('sebi_1996');
    setCurrentView('circularDetails');
  };

  const handleModeChange = (mode: 'compliance' | 'audit') => {
    setAppMode(mode);
    if (mode === 'audit') {
      setAuditView('list');
      setSelectedAuditId(null);
    } else if (mode === 'compliance') {
        setCurrentView('circularDetails');
        setCurrentCircularId('disclosure_2024');
        setIsClausePanelOpen(false);
        setIsAIChatPanelOpen(false);
        setIsReferencesModalOpen(false);
    }
  };
  
  const handleSelectAudit = (auditId: string) => {
    setSelectedAuditId(auditId);
    setAuditView('details');
  };

  const handleBackToAuditList = () => {
    setSelectedAuditId(null);
    setAuditView('list');
  };


  return (
    <div className="bg-gray-50 min-h-screen flex text-gray-800">
      <Sidebar currentMode={appMode} onModeChange={handleModeChange} />
      <div className="flex-1 flex flex-col">
        <div className="h-1.5 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400"></div>
        {appMode === 'compliance' ? (
          <div className="flex flex-1 overflow-hidden">
            <main ref={mainContentRef} className="flex-1 flex flex-col p-6 overflow-y-auto">
              {currentView !== 'subClauseDetails' && <Header view={currentView} breadcrumbs={currentCircular.breadcrumbs} />}
              
              {(currentView === 'circularDetails' || currentView === 'subClauseDetails') && (
                <MainContent 
                  view={currentView}
                  circular={currentCircular} 
                  onActionableClick={handleOpenClausePanel}
                  onChapterClick={handleNavigateToSubClause}
                  onBackToChapters={handleBackToChapters}
                />
              )}
              {currentView === 'actionableDetails' && <ActionableDetails onEditClick={handleOpenAIChatPanel} />}
            </main>
            {currentView === 'circularDetails' && <RightSidebar circular={currentCircular} onReferenceClick={handleOpenReferencesModal} />}
          </div>
        ) : (
            <div className="flex flex-1 overflow-hidden">
                {auditView === 'list' ? (
                    <>
                        <SmartAudit onAuditClick={handleSelectAudit} />
                        <RightSidebar circular={circulars['sebi_1996']} onReferenceClick={() => {}} />
                    </>
                ) : (
                    <AuditDetails auditId={selectedAuditId!} onBack={handleBackToAuditList} onOpenUploadModal={handleOpenUploadModal} onOpenControlDetails={handleOpenControlDetails} />
                )}
            </div>
        )}
      </div>
      {appMode === 'compliance' && (
        <>
          <ClauseActionablesPanel 
            isOpen={isClausePanelOpen} 
            onClose={handleCloseClausePanel} 
            onNavigate={handleNavigateToActionableDetails} 
          />
          <AIChatPanel 
            isOpen={isAIChatPanelOpen}
            onClose={handleCloseAIChatPanel}
          />
          <ReferencesModal 
            isOpen={isReferencesModalOpen}
            onClose={handleCloseReferencesModal}
            onNavigate={handleNavigateToRegulation}
          />
        </>
      )}
      {appMode === 'audit' && selectedAuditId && (
        <>
          <UploadEvidenceModal 
            isOpen={isUploadModalOpen} 
            onClose={handleCloseUploadModal}
            auditId={selectedAuditId}
          />
          <ControlDetailsModal
            isOpen={isControlDetailsModalOpen}
            onClose={handleCloseControlDetails}
            auditId={selectedAuditId}
            controlId={selectedControlId}
          />
        </>
      )}
    </div>
  );
};

export default App;
