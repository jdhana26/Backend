import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="btn theme-toggle"
            style={{
                background: 'transparent',
                fontSize: '1.5rem',
                padding: '0.5rem',
                color: 'var(--text-primary)'
            }}
            title="Toggle Theme"
        >
            {theme === 'light' ? '☕' : '🧁'}
        </button>
    );
};

export default ThemeToggle;
