import { motion } from "motion/react";
import { useMemo } from "react";

interface ResilienceGaugeProps {
  score: number;
  size?: number;
}

export function ResilienceGauge({ score, size = 200 }: ResilienceGaugeProps) {
  const gaugeData = useMemo(() => {
    const radius = size / 2 - 20;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (score / 100) * circumference;
    
    const getColor = (score: number) => {
      if (score >= 80) return "#10b981"; // emerald-500
      if (score >= 60) return "#f59e0b"; // amber-500
      if (score >= 40) return "#f97316"; // orange-500
      return "#ef4444"; // red-500
    };

    return {
      radius,
      circumference,
      strokeDasharray,
      strokeDashoffset,
      color: getColor(score)
    };
  }, [score, size]);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={gaugeData.radius}
          stroke="rgb(51 65 85)" // slate-600
          strokeWidth="8"
          fill="transparent"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={gaugeData.radius}
          stroke={gaugeData.color}
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={gaugeData.strokeDasharray}
          strokeDashoffset={gaugeData.strokeDashoffset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: gaugeData.circumference }}
          animate={{ strokeDashoffset: gaugeData.strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="text-center"
        >
          <div className="text-3xl font-bold text-white">{score}</div>
          <div className="text-sm text-slate-400">Resilience Index</div>
        </motion.div>
      </div>
      
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-full blur-xl opacity-20"
        style={{ 
          background: `conic-gradient(from 0deg, transparent, ${gaugeData.color}, transparent)`,
        }}
      />
    </div>
  );
}