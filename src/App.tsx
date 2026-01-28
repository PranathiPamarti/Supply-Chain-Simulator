import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { Navigation } from './components/Navigation';
import { MainDashboard } from './components/MainDashboard';
import { DisruptionSimulator } from './components/DisruptionSimulator';
import { CollaborationMode } from './components/CollaborationMode';
import { ESGInsurance } from './components/ESGInsurance';
import { ReportsExports } from './components/ReportsExports';

type AppState = 'login' | 'dashboard';
type ActiveSection = 'dashboard' | 'simulator' | 'risk-predictor' | 'collaboration' | 'esg-insurance' | 'reports';

export default function App() {
  const [appState, setAppState] = useState<AppState>('login');
  const [activeSection, setActiveSection] = useState<ActiveSection>('dashboard');

  const handleLogin = (mode: 'enterprise' | 'sme') => {
    setAppState('dashboard');
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <MainDashboard />;
      case 'simulator':
        return <DisruptionSimulator />;
      case 'risk-predictor':
        return <MainDashboard />; // Could be a separate risk predictor component
      case 'collaboration':
        return <CollaborationMode />;
      case 'esg-insurance':
        return <ESGInsurance />;
      case 'reports':
        return <ReportsExports />;
      default:
        return <MainDashboard />;
    }
  };

  if (appState === 'login') {
    return (
      <LoginPage 
        onEnterpriseLogin={() => handleLogin('enterprise')}
        onSMELogin={() => handleLogin('sme')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation 
        activeSection={activeSection}
        onSectionChange={(section) => setActiveSection(section as ActiveSection)}
      />
      {renderActiveSection()}
    </div>
  );
}