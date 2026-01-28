import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Building2, Users, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LoginPageProps {
  onEnterpriseLogin: () => void;
  onSMELogin: () => void;
}

export function LoginPage({ onEnterpriseLogin, onSMELogin }: LoginPageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1723307061004-6e2e087deae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGRpZ2l0YWwlMjBmdXR1cmlzdGljfGVufDF8fHx8MTc1NzQ0NDgzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Digital world map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated logistics routes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Logo and Branding */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Globe className="w-12 h-12 text-teal-400 mr-3" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-teal-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              RevOps
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl">
            Dynamic Recovery Supply Chain Simulator
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Navigate disruptions like a flight simulator for supply chains
          </p>
        </div>

        {/* Login Options */}
        <div className="flex gap-8 max-w-4xl">
          <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <Building2 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl mb-4 text-white">Enterprise Mode</h3>
              <p className="text-slate-300 mb-6 max-w-xs">
                Full-scale supply chain resilience simulation for large organizations
              </p>
              <Button 
                onClick={onEnterpriseLogin}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Enter Enterprise Dashboard
              </Button>
            </div>
          </Card>

          <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <Users className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl mb-4 text-white">SME Mode</h3>
              <p className="text-slate-300 mb-6 max-w-xs">
                Streamlined simulation tools for small and medium enterprises
              </p>
              <Button 
                onClick={onSMELogin}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Enter SME Dashboard
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-center text-slate-500">
          <p>© 2025 RevOps - Resilient Operations Simulator</p>
        </div>
      </div>
    </div>
  );
}