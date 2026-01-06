import React, { useState, useEffect } from 'react';

const CodePlayground = ({ initialCode, expectedOutput }) => {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState('');
    const [status, setStatus] = useState('idle'); // idle, success, error

    useEffect(() => {
        setCode(initialCode);
        setOutput('');
        setStatus('idle');
    }, [initialCode]);

    const runCode = () => {
        try {
            let logs = [];
            const originalConsoleLog = console.log;

            // Capture console.log
            console.log = (...args) => {
                logs.push(args.join(' '));
            };

            // Execute code
            // eslint-disable-next-line no-new-func
            new Function(code)();

            // Restore console.log
            console.log = originalConsoleLog;

            const result = logs.join('\n');
            setOutput(result);

            if (expectedOutput && result.trim() === expectedOutput.trim()) {
                setStatus('success');
            } else {
                setStatus('idle');
            }

        } catch (err) {
            setOutput(`Error: ${err.message}`);
            setStatus('error');
        }
    };

    return (
        <div className="playground-container" style={{ marginTop: '2rem' }}>
            <div className="editor-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Live Editor</h3>
                <button className="btn-primary" onClick={runCode} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    Run Code
                </button>
            </div>

            <div className="editor-grid" style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr'
            }}>
                <div style={{ position: 'relative' }}>
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        spellCheck="false"
                        className="glass-panel"
                        style={{
                            width: '100%',
                            minHeight: '250px',
                            fontFamily: 'var(--font-mono)',
                            padding: '1.5rem',
                            background: 'rgba(0,0,0,0.3)',
                            color: '#e2e8f0',
                            border: '1px solid var(--border-color)',
                            resize: 'vertical',
                            fontSize: '0.9rem',
                            lineHeight: '1.5',
                            outline: 'none',
                            boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.2)'
                        }}
                    />
                </div>

                <div className="output-panel glass-panel" style={{
                    background: 'var(--bg-secondary)',
                    padding: '1.5rem',
                    position: 'relative',
                    border: `1px solid ${status === 'success' ? 'var(--success)' : status === 'error' ? 'var(--error)' : 'var(--glass-border)'}`,
                    transition: 'border-color 0.3s'
                }}>
                    <div style={{
                        fontWeight: '600',
                        marginBottom: '0.75rem',
                        color: 'var(--text-muted)',
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Console Output
                    </div>

                    <pre style={{
                        whiteSpace: 'pre-wrap',
                        fontFamily: 'var(--font-mono)',
                        background: 'transparent',
                        padding: 0,
                        border: 'none',
                        color: status === 'error' ? 'var(--error)' : 'var(--text-primary)'
                    }}>{output || <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>// Output will appear here...</span>}</pre>

                    {status === 'success' && (
                        <div style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: 'rgba(16, 185, 129, 0.1)',
                            color: 'var(--success)',
                            padding: '0.3rem 0.8rem',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            border: '1px solid rgba(16, 185, 129, 0.2)'
                        }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Correct
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CodePlayground;
