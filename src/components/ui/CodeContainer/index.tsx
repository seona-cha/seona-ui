import React, { useState } from 'react';
import './code-container.scss';
import Button from '../Button';

const CodeContainer = ({ children, title = 'Example', className }: { children: React.ReactNode, title?: string, className?: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            const textContent = typeof children === 'string' ? children : '';
            await navigator.clipboard.writeText(textContent);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('복사 실패:', err);
        }
    };

    return (
        <div className={`sui-code-container ${className}`}>
            <div className="sui-code-container__header">
                <p className="sui-code-container__title">
                    {title}
                </p>
                <Button 
                    size="sm"
                    variant="text"
                    btnColor="#b9bbf0"
                    hoverColor="#6366F1"
                    onClick={handleCopy}
                    aria-label="코드 복사"
                >
                    {copied ? 'Copied!' : 'Copy'}
                </Button>
            </div>
            <pre>
                <code>
                    {children}
                </code>
            </pre>
        </div>
    );
};

export default CodeContainer;