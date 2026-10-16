import React, { useState, useEffect } from 'react';
import { X, Upload, RotateCcw, Image as ImageIcon, Check } from 'lucide-react';
import { ImageKey } from '../context/ImageContext';

interface ImageEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageKey: ImageKey | null;
  imageTitle: string;
  currentImageSrc: string;
  onSaveImage: (key: ImageKey, newUrl: string) => void;
  onResetImage: (key: ImageKey) => void;
}

export const ImageEditorModal: React.FC<ImageEditorModalProps> = ({
  isOpen,
  onClose,
  imageKey,
  imageTitle,
  currentImageSrc,
  onSaveImage,
  onResetImage,
}) => {
  const [previewSrc, setPreviewSrc] = useState(currentImageSrc);
  const [urlInput, setUrlInput] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    setPreviewSrc(currentImageSrc);
    setUrlInput('');
    setSaveSuccess(false);
  }, [currentImageSrc, isOpen]);

  if (!isOpen || !imageKey) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setPreviewSrc(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = () => {
    if (urlInput.trim()) {
      setPreviewSrc(urlInput.trim());
    }
  };

  const handleSave = () => {
    onSaveImage(imageKey, previewSrc);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 600);
  };

  const handleReset = () => {
    onResetImage(imageKey);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ImageIcon className="w-5 h-5 text-blue-400" />
            <div>
              <h3 className="font-bold text-sm sm:text-base">Replace / Edit Image</h3>
              <p className="text-xs text-slate-400">{imageTitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Preview box */}
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 h-48 flex items-center justify-center relative">
            <img
              src={previewSrc}
              alt="Preview"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-2 left-2 px-2 py-1 bg-slate-900/70 text-white text-[11px] font-semibold rounded">
              Current Preview
            </div>
          </div>

          {/* Option 1: Upload from device */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
              Option 1: Upload from Device (Phone/PC)
            </label>
            <label className="flex items-center justify-center gap-2 p-3 border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl cursor-pointer bg-slate-50 hover:bg-blue-50/30 transition-colors text-xs font-semibold text-slate-700">
              <Upload className="w-4 h-4 text-blue-600" />
              <span>Choose photo from your gallery or files</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Option 2: Image URL */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
              Option 2: Paste Web Image URL
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://example.com/photo.jpg"
                className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-600"
              />
              <button
                type="button"
                onClick={handleApplyUrl}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Apply URL
              </button>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-red-600 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Default</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex items-center gap-1.5 px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
              >
                {saveSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <span>Save Image</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
