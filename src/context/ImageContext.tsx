import React, { createContext, useContext, useState, useEffect } from 'react';
import defaultHero from '../assets/images/hero_fintech_merchant_1792018317160.jpg';
import defaultPos from '../assets/images/pos_terminal_showcase_1792018318370.jpg';
import defaultLoan from '../assets/images/business_loan_growth_1792018318895.jpg';
import defaultMoniebook from '../assets/images/moniebook_digital_ledger_1792018318150.jpg';

export type ImageKey = 'hero' | 'pos' | 'loan' | 'moniebook';

interface ImageContextType {
  images: Record<ImageKey, string>;
  updateImage: (key: ImageKey, newUrl: string) => void;
  resetImage: (key: ImageKey) => void;
  openImageEditor: (key: ImageKey, title: string) => void;
}

const DEFAULT_IMAGES: Record<ImageKey, string> = {
  hero: defaultHero,
  pos: defaultPos,
  loan: defaultLoan,
  moniebook: defaultMoniebook,
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{
  children: React.ReactNode;
  onOpenEditor: (key: ImageKey, title: string) => void;
}> = ({ children, onOpenEditor }) => {
  const [images, setImages] = useState<Record<ImageKey, string>>(() => {
    try {
      const saved = localStorage.getItem('kenny_olu_custom_images');
      if (saved) {
        return { ...DEFAULT_IMAGES, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_IMAGES;
  });

  useEffect(() => {
    try {
      localStorage.setItem('kenny_olu_custom_images', JSON.stringify(images));
    } catch (e) {
      console.error('Failed to save custom images to localStorage', e);
    }
  }, [images]);

  const updateImage = (key: ImageKey, newUrl: string) => {
    setImages((prev) => ({ ...prev, [key]: newUrl }));
  };

  const resetImage = (key: ImageKey) => {
    setImages((prev) => ({ ...prev, [key]: DEFAULT_IMAGES[key] }));
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        updateImage,
        resetImage,
        openImageEditor: onOpenEditor,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useAppImages = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useAppImages must be used within an ImageProvider');
  }
  return context;
};
