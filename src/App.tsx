import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PosServiceSection } from './components/PosServiceSection';
import { LoansServiceSection } from './components/LoansServiceSection';
import { SavingsServiceSection } from './components/SavingsServiceSection';
import { MoniebookSection } from './components/MoniebookSection';
import { MerchantProofSection } from './components/MerchantProofSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { WhatsAppChatModal } from './components/WhatsAppChatModal';
import { PosRequestModal } from './components/PosRequestModal';
import { LoanEnquiryModal } from './components/LoanEnquiryModal';
import { SavingsModal } from './components/SavingsModal';
import { ImageEditorModal } from './components/ImageEditorModal';

import { ImageProvider, ImageKey, useAppImages } from './context/ImageContext';
import { LeadEnquiry } from './types';

function MainAppContent({
  onOpenImageEditor,
}: {
  onOpenImageEditor: (key: ImageKey, title: string) => void;
}) {
  // Modal states
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [whatsAppInitialMessage, setWhatsAppInitialMessage] = useState<string | undefined>(undefined);

  const [isPOSModalOpen, setIsPOSModalOpen] = useState(false);
  const [posInitialModel, setPosInitialModel] = useState<string | undefined>('smart-pos');

  const [isLoanModalOpen, setIsLoanModalOpen] = useState(false);
  const [loanInitialAmount, setLoanInitialAmount] = useState<number | undefined>(2000000);

  const [isSavingsModalOpen, setIsSavingsModalOpen] = useState(false);
  const [savingsTargetAmount, setSavingsTargetAmount] = useState<number | undefined>(1000000);

  // Stored inquiries state
  const [enquiries, setEnquiries] = useState<LeadEnquiry[]>(() => {
    try {
      const saved = localStorage.getItem('kenny_olu_enquiries');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('kenny_olu_enquiries', JSON.stringify(enquiries));
    } catch (e) {
      console.error('Could not save enquiry to localStorage', e);
    }
  }, [enquiries]);

  const handleEnquirySubmitted = (newEnquiry: LeadEnquiry) => {
    setEnquiries((prev) => [newEnquiry, ...prev]);
  };

  // WhatsApp trigger helper
  const handleOpenWhatsApp = (customMsg?: string) => {
    setWhatsAppInitialMessage(
      customMsg || 'Hello Kenny Olu Digital, I want to get started with Moniepoint services for my business.'
    );
    setIsWhatsAppOpen(true);
  };

  // POS Modal trigger
  const handleOpenPOSModal = (modelId?: string) => {
    setPosInitialModel(modelId || 'smart-pos');
    setIsPOSModalOpen(true);
  };

  // Loans Modal trigger
  const handleOpenLoanModal = (amount?: number) => {
    setLoanInitialAmount(amount || 2000000);
    setIsLoanModalOpen(true);
  };

  // Savings Modal trigger
  const handleOpenSavingsModal = (amount?: number) => {
    setSavingsTargetAmount(amount || 1000000);
    setIsSavingsModalOpen(true);
  };

  // Scroll to Moniebook or service
  const handleSelectService = (service: 'pos' | 'loans' | 'savings' | 'moniebook') => {
    const sectionMap = {
      pos: 'pos-section',
      loans: 'loans-section',
      savings: 'savings-section',
      moniebook: 'moniebook-section',
    };
    const targetElement = document.getElementById(sectionMap[service]);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* 3-Zone Top Navigation */}
      <Navbar
        onOpenWhatsApp={handleOpenWhatsApp}
        onSelectService={handleSelectService}
      />

      <main className="flex-1">
        {/* Hero Section with prompt's core text & 5 buttons */}
        <HeroSection
          onOpenPOS={() => handleOpenPOSModal('smart-pos')}
          onOpenLoans={() => handleOpenLoanModal(2000000)}
          onOpenSavings={() => handleOpenSavingsModal(1000000)}
          onOpenMoniebook={() => handleSelectService('moniebook')}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Service 01: Moniepoint POS Terminals */}
        <PosServiceSection
          onOpenOrderModal={handleOpenPOSModal}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Service 02: Business Loans & Working Capital */}
        <LoansServiceSection
          onOpenLoanModal={handleOpenLoanModal}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Service 03: High-Yield Business Savings */}
        <SavingsServiceSection
          onOpenSavingsModal={handleOpenSavingsModal}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Service 04: Moniebook Digital Ledger */}
        <MoniebookSection
          onOpenWhatsApp={handleOpenWhatsApp}
          onOpenContact={() => {
            document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Proof of Impact, Testimonials & FAQs */}
        <MerchantProofSection />

        {/* Direct Contact & Enquiry Desk */}
        <ContactSection
          onEnquirySubmitted={handleEnquirySubmitted}
          recentEnquiries={enquiries}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      </main>

      {/* Quiet Footer */}
      <Footer
        onOpenWhatsApp={handleOpenWhatsApp}
        onSelectService={handleSelectService}
      />

      {/* Interactive Modals */}
      <WhatsAppChatModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        initialMessage={whatsAppInitialMessage}
      />

      <PosRequestModal
        isOpen={isPOSModalOpen}
        onClose={() => setIsPOSModalOpen(false)}
        initialModelId={posInitialModel}
        onEnquirySubmitted={handleEnquirySubmitted}
      />

      <LoanEnquiryModal
        isOpen={isLoanModalOpen}
        onClose={() => setIsLoanModalOpen(false)}
        initialAmount={loanInitialAmount}
        onEnquirySubmitted={handleEnquirySubmitted}
      />

      <SavingsModal
        isOpen={isSavingsModalOpen}
        onClose={() => setIsSavingsModalOpen(false)}
        targetAmount={savingsTargetAmount}
        onEnquirySubmitted={handleEnquirySubmitted}
      />
    </div>
  );
}

export default function App() {
  const [editorState, setEditorState] = useState<{
    isOpen: boolean;
    key: ImageKey | null;
    title: string;
  }>({
    isOpen: false,
    key: null,
    title: '',
  });

  const handleOpenEditor = (key: ImageKey, title: string) => {
    setEditorState({
      isOpen: true,
      key,
      title,
    });
  };

  const handleCloseEditor = () => {
    setEditorState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <ImageProvider onOpenEditor={handleOpenEditor}>
      <AppWithEditorWrapper
        editorState={editorState}
        onCloseEditor={handleCloseEditor}
        onOpenEditor={handleOpenEditor}
      />
    </ImageProvider>
  );
}

function AppWithEditorWrapper({
  editorState,
  onCloseEditor,
  onOpenEditor,
}: {
  editorState: { isOpen: boolean; key: ImageKey | null; title: string };
  onCloseEditor: () => void;
  onOpenEditor: (key: ImageKey, title: string) => void;
}) {
  const { images, updateImage, resetImage } = useAppImages();

  return (
    <>
      <MainAppContent onOpenImageEditor={onOpenEditor} />
      <ImageEditorModal
        isOpen={editorState.isOpen}
        onClose={onCloseEditor}
        imageKey={editorState.key}
        imageTitle={editorState.title}
        currentImageSrc={editorState.key ? images[editorState.key] : ''}
        onSaveImage={updateImage}
        onResetImage={resetImage}
      />
    </>
  );
}
