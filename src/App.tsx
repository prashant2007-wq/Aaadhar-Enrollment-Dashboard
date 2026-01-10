import { useState } from 'react';
import { BarChart3, Users, MapPin, TrendingUp, AlertCircle, Target, LogOut, User as UserIcon, Database } from 'lucide-react';
import { AuthProvider, useAuth } from './components/AuthContext';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { GeographicAnalysis } from './components/GeographicAnalysis';
import { DemographicInsights } from './components/DemographicInsights';
import { OperationalMetrics } from './components/OperationalMetrics';
import { PredictiveAnalytics } from './components/PredictiveAnalytics';
import { InterventionSystem } from './components/InterventionSystem';
import { DatabaseManagement } from './components/DatabaseManagement';

type Tab = 'geographic' | 'demographic' | 'operational' | 'predictive' | 'intervention' | 'database';

function Dashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>('geographic');

  const tabs = [
    { id: 'geographic' as Tab, label: 'Geographic Patterns', icon: MapPin },
    { id: 'demographic' as Tab, label: 'Demographics', icon: Users },
    { id: 'operational' as Tab, label: 'Operations', icon: BarChart3 },
    { id: 'predictive' as Tab, label: 'Predictive Analytics', icon: TrendingUp },
    { id: 'intervention' as Tab, label: 'Smart Interventions', icon: Target },
    { id: 'database' as Tab, label: 'Database Management', icon: Database },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Aadhaar Analytics Platform</h1>
                <p className="text-sm text-gray-500">Strategic Solution Framework for Enrolment & Updates</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">Live Analytics</span>
              </div>
              {/* User Menu */}
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                </div>
                <div className="bg-indigo-100 p-2 rounded-full">
                  <UserIcon className="w-5 h-5 text-indigo-600" />
                </div>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'geographic' && <GeographicAnalysis />}
        {activeTab === 'demographic' && <DemographicInsights />}
        {activeTab === 'operational' && <OperationalMetrics />}
        {activeTab === 'predictive' && <PredictiveAnalytics />}
        {activeTab === 'intervention' && <InterventionSystem />}
        {activeTab === 'database' && <DatabaseManagement />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <p>© 2026 Aadhaar Analytics Platform - Social Innovation Hackathon</p>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>Data updated: {new Date().toLocaleString()}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AuthWrapper() {
  const { user, isLoading } = useAuth();
  const [showSignup, setShowSignup] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    if (showSignup) {
      return <SignupPage onSwitchToLogin={() => setShowSignup(false)} />;
    }
    return <LoginPage onSwitchToSignup={() => setShowSignup(true)} />;
  }

  return <Dashboard />;
}

export default function App() {
  return (
    <AuthProvider>
      <AuthWrapper />
    </AuthProvider>
  );
}