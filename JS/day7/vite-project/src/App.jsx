import React, { useState, useEffect } from 'react';
import { topics } from './data';
import Sidebar from './components/Sidebar';
import TopicViewer from './components/TopicViewer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [currentTopicId, setCurrentTopicId] = useState(topics[0].id);
  const [theme, setTheme] = useState('dark');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle Theme
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Apply Theme to Document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const currentTopic = topics.find(t => t.id === currentTopicId);

  return (
    <div className="app-container" style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>

      {/* Mobile Menu Button - Visible only on small screens */}
      <div style={{ position: 'fixed', top: '1rem', left: '1rem', zIndex: 50 }}>
        <button
          className="btn-primary"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{
            display: window.innerWidth > 1024 ? 'none' : 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.5rem'
          }}
          aria-label="Toggle Sidebar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Sidebar Component */}
      <Sidebar
        topics={topics}
        currentTopicId={currentTopicId}
        onSelectTopic={(id) => {
          setCurrentTopicId(id);
          if (window.innerWidth <= 1024) setIsSidebarOpen(false); // Close on mobile after select
        }}
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content Area */}
      <main style={{
        flex: 1,
        position: 'relative',
        height: '100%',
        overflowY: 'auto',
        padding: '2rem',
        paddingTop: window.innerWidth <= 1024 ? '4rem' : '2rem'
      }}>

        {/* Theme Toggle in top right */}
        <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 40 }}>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Topic Content */}
        <div className="fade-in" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <TopicViewer topic={currentTopic} />
        </div>
      </main>
    </div>
  );
}

export default App;
