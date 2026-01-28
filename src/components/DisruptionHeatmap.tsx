import { motion } from "motion/react";
import { AlertTriangle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useMemo } from "react";

interface HotspotData {
  id: string;
  x: number;
  y: number;
  severity: 'low' | 'medium' | 'high';
  location: string;
  type: string;
}

const mockHotspots: HotspotData[] = [
  { id: '1', x: 15, y: 35, severity: 'high', location: 'Suez Canal', type: 'Port Congestion' },
  { id: '2', x: 75, y: 25, severity: 'medium', location: 'Shanghai', type: 'Labor Strike' },
  { id: '3', x: 45, y: 45, severity: 'low', location: 'Mumbai', type: 'Weather Delay' },
  { id: '4', x: 25, y: 55, severity: 'high', location: 'Lagos', type: 'Infrastructure' },
  { id: '5', x: 85, y: 40, severity: 'medium', location: 'Tokyo', type: 'Regulatory' },
];

export function DisruptionHeatmap() {
  const severityConfig = useMemo(() => ({
    high: { color: 'bg-red-500', size: 'w-4 h-4' },
    medium: { color: 'bg-orange-500', size: 'w-3 h-3' },
    low: { color: 'bg-yellow-500', size: 'w-2 h-2' },
  }), []);

  return (
    <div className="relative w-full h-64 bg-slate-800 rounded-lg overflow-hidden">
      {/* World map background */}
      <div className="absolute inset-0 opacity-30">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1723307061004-6e2e087deae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGRpZ2l0YWwlMjBmdXR1cmlzdGljfGVufDF8fHx8MTc1NzQ0NDgzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="World map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Disruption hotspots */}
      {mockHotspots.map((hotspot, index) => (
        <motion.div
          key={hotspot.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${severityConfig[hotspot.severity].color} ${severityConfig[hotspot.severity].size} rounded-full`}
          style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.15, duration: 0.4 }}
        >
          {/* Pulsing effect */}
          <div className={`absolute inset-0 ${severityConfig[hotspot.severity].color} rounded-full animate-ping opacity-75`} />
          
          {/* Tooltip on hover */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white rounded text-xs whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none z-10">
            <div className="flex items-center space-x-1">
              <AlertTriangle className="w-3 h-3" />
              <span>{hotspot.location}</span>
            </div>
            <div className="text-slate-300">{hotspot.type}</div>
          </div>
        </motion.div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-2 right-2 flex space-x-3 text-xs">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-red-500 rounded-full" />
          <span className="text-slate-300">High Risk</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-orange-500 rounded-full" />
          <span className="text-slate-300">Medium Risk</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
          <span className="text-slate-300">Low Risk</span>
        </div>
      </div>

      {/* Title */}
      <div className="absolute top-2 left-2">
        <h3 className="text-white font-semibold">Global Disruption Heatmap</h3>
        <p className="text-slate-400 text-sm">Real-time risk monitoring</p>
      </div>
    </div>
  );
}