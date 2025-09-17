import React, { useState } from "react";
import { Prism } from "react-syntax-highlighter";
import { copyStringToClipboard } from "../src/utils/clipboard";

type TypescriptCodeBlockProps = {
    children: string | string[];
}

const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="20,6 9,17 4,12"></polyline>
    </svg>
);

export const TypescriptCodeBlock: React.FC<TypescriptCodeBlockProps> = (props) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const codeText = Array.isArray(props.children) 
            ? props.children.join('\n') 
            : props.children;
        
        copyStringToClipboard(codeText);
        setCopied(true);
        
        // Reset the copied state after 2 seconds
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    const radius = '24px'
    return (
        <div style={{ 
            position: 'relative',
            borderRadius: radius,
            overflow: 'hidden',
            border: '1px solid rgba(229, 231, 235, 0.2)'
        }}>
            <button
                onClick={handleCopy}
                style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: copied ? '#10b981' : '#6b7280',
                    transition: 'all 0.2s ease',
                    zIndex: 10,
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                title={copied ? 'Copied!' : 'Copy code'}
            >
                {copied ? <CheckIcon /> : <CopyIcon />}
            </button>
            <div style={{ borderRadius: radius, overflow: 'hidden' }}>
                <Prism language="typescript">
                    {props.children}
                </Prism>
            </div>
        </div>
    );
}