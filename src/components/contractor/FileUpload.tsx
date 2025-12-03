import { Upload, X, FileText, Image as ImageIcon } from 'lucide-react';
import { useState, useRef, ChangeEvent } from 'react';

interface FileUploadProps {
    label: string;
    accept?: string;
    multiple?: boolean;
    files: string[];
    onFilesChange: (files: string[]) => void;
    maxFiles?: number;
}

export default function FileUpload({
    label,
    accept = 'image/*,.pdf',
    multiple = true,
    files,
    onFilesChange,
    maxFiles = 10
}: FileUploadProps) {
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        handleFiles(droppedFiles);
    };

    const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            handleFiles(selectedFiles);
        }
    };

    const handleFiles = (newFiles: File[]) => {
        // In a real app, you'd upload these files and get URLs back
        // For demo, we'll just use the file names
        const fileNames = newFiles.map(f => f.name);
        const updatedFiles = [...files, ...fileNames].slice(0, maxFiles);
        onFilesChange(updatedFiles);
    };

    const removeFile = (index: number) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        onFilesChange(updatedFiles);
    };

    const isImage = (filename: string) => {
        return /\.(jpg|jpeg|png|gif|webp)$/i.test(filename);
    };

    return (
        <div>
            <label className="block text-sm font-medium text-purple-900 mb-2">{label}</label>

            {/* Drop Zone */}
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-200 ${isDragging
                        ? 'border-purple-500 bg-purple-50 scale-105'
                        : 'border-purple-300 bg-white/50 hover:border-purple-400 hover:bg-white'
                    }`}
            >
                <Upload className="mx-auto mb-3 text-purple-600" size={32} />
                <p className="text-purple-900 font-medium mb-1">
                    Click to upload or drag and drop
                </p>
                <p className="text-sm text-purple-600">
                    {accept.includes('image') ? 'Images' : 'Files'} up to 10MB
                </p>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept={accept}
                    multiple={multiple}
                    onChange={handleFileInput}
                    className="hidden"
                />
            </div>

            {/* File List */}
            {files.length > 0 && (
                <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-white rounded-xl border border-purple-200 hover:shadow-md transition-all"
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                {isImage(file) ? (
                                    <ImageIcon size={20} className="text-purple-600" />
                                ) : (
                                    <FileText size={20} className="text-purple-600" />
                                )}
                            </div>
                            <span className="flex-1 text-sm text-purple-900 font-medium truncate">{file}</span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile(index);
                                }}
                                className="p-1.5 hover:bg-red-50 rounded-lg transition-colors group"
                            >
                                <X size={18} className="text-purple-400 group-hover:text-red-600" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
