import React from 'react';
import CodePlayground from './CodePlayground';

const TopicViewer = ({ topic }) => {
    if (!topic) return (
        <div style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'var(--text-muted)'
        }}>
            Select a topic to start learning!
        </div>
    );

    return (
        <div className="topic-viewer" style={{ paddingBottom: '4rem' }}>
            <header style={{ marginBottom: '3rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '2rem' }}>
                <h1 style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-1px'
                }}>
                    {topic.title} ✨
                </h1>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-secondary)', maxWidth: '65ch' }}>
                    {topic.description}
                </p>
            </header>

            <section style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-secondary)' }}>//</span> Examples
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {topic.examples.map((example, index) => (
                        <div key={index} className="glass-panel hover-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>
                                {example.title}
                            </h3>
                            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                {example.description}
                            </p>
                            <div style={{
                                marginTop: 'auto',
                                position: 'relative',
                                borderRadius: 'var(--radius-md)',
                                overflow: 'hidden',
                                border: '1px solid var(--glass-border)'
                            }}>
                                <pre style={{ margin: 0, padding: '1rem' }}>
                                    <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{example.code}</code>
                                </pre>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="interactive-section glass-panel" style={{ padding: '2rem', borderColor: 'var(--accent-primary)' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                    Interactive Challenge
                </h2>
                <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>{topic.interactiveTask}</p>
                <CodePlayground
                    initialCode={topic.examples[0]?.code} // Use first example as starter
                    expectedOutput={topic.expectedOutput}
                />
            </div>
        </div>
    );
};

export default TopicViewer;
