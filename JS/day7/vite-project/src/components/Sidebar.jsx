import React from 'react';

// Simple icon for the sidebar
const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

const Sidebar = ({ topics, currentTopicId, onSelectTopic, isOpen, toggleSidebar }) => {
    return (
        <aside
            className={`glass-panel`}
            style={{
                width: '280px',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: isOpen ? 0 : '-100%',
                zIndex: 100,
                transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 0, /* Full height sidebar usually doesn't need radius on the side */
                borderRight: '1px solid var(--glass-border)',
                background: 'var(--bg-secondary)', /* Fallback/Base */
            }}
        >
            <div style={{ padding: '2rem', borderBottom: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.2)' }}>
                <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-primary)' }}>
                    <CodeIcon />
                    <span>JS for everyone
                    </span>
                </h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                    simple and easy to learn
                </p>
            </div>

            <nav style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
                <ul style={{ listStyle: 'none' }}>
                    {topics.map(topic => {
                        const isActive = currentTopicId === topic.id;
                        return (
                            <li key={topic.id} style={{ marginBottom: '0.5rem' }}>
                                <button
                                    onClick={() => {
                                        onSelectTopic(topic.id);
                                        // On mobile, close sidebar after selection
                                        if (window.innerWidth <= 1024) toggleSidebar();
                                    }}
                                    style={{
                                        width: '100%',
                                        textAlign: 'left',
                                        padding: '0.9rem 1.25rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: 'none',
                                        background: isActive ? 'linear-gradient(90deg, var(--accent-primary), transparent)' : 'transparent',
                                        color: isActive ? '#fff' : 'var(--text-secondary)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        fontSize: '0.95rem',
                                        transition: 'all 0.2s ease',
                                        fontWeight: isActive ? 600 : 500,
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                                        if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                                        if (!isActive) e.currentTarget.style.background = 'transparent';
                                    }}
                                >
                                    {/* Active Indicator Line */}
                                    {isActive && (
                                        <div style={{
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            width: '3px',
                                            background: '#fff'
                                        }} />
                                    )}
                                    {topic.title}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)', fontSize: '0.8rem', color: 'var(--text-muted)', background: 'rgba(0,0,0,0.2)' }}>
                <p>&copy; 2026 JS Education</p>
            </div>
        </aside>
    );
};

export default Sidebar;
