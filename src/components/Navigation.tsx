import { Button } from "./ui/button";
import { Globe, Activity, Shield, Users, FileText, Settings } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const sections = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'simulator', label: 'Simulator', icon: Globe },
    { id: 'risk-predictor', label: 'Risk Predictor', icon: Shield },
    { id: 'collaboration', label: 'Collaboration', icon: Users },
    { id: 'esg-insurance', label: 'ESG & Insurance', icon: Settings },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  return (
    <nav className="bg-slate-900/90 backdrop-blur-sm border-b border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Globe className="w-8 h-8 text-teal-400" />
          <span className="text-xl font-bold text-white">RevOps</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "ghost"}
                className={`flex items-center space-x-2 ${
                  activeSection === section.id
                    ? "bg-teal-600 text-white"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
                onClick={() => onSectionChange(section.id)}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden md:inline">{section.label}</span>
              </Button>
            );
          })}
        </div>

        {/* User Menu */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
            <span className="text-white font-semibold">E</span>
          </div>
          <span className="text-slate-300 hidden lg:inline">Enterprise Mode</span>
        </div>
      </div>
    </nav>
  );
}