import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ResilienceGauge } from "./ResilienceGauge";
import { DisruptionHeatmap } from "./DisruptionHeatmap";
import { AlertTriangle, TrendingUp, Clock, DollarSign, Truck, Ship, Plane } from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";

export function MainDashboard() {
  const alerts = useMemo(() => [
    { id: 1, severity: 'high', title: 'Port Congestion Alert', location: 'Shanghai Port', time: '2 mins ago' },
    { id: 2, severity: 'medium', title: 'Weather Disruption', location: 'Atlantic Route', time: '15 mins ago' },
    { id: 3, severity: 'low', title: 'Supplier Delay', location: 'Mumbai Facility', time: '1 hour ago' },
  ], []);

  const severityStyles = useMemo(() => ({
    high: 'text-red-400 bg-red-500/10 border-red-500/20',
    medium: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    low: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20'
  }), []);

  const metrics = useMemo(() => [
    { label: 'Active Routes', value: '247', icon: Truck, color: 'text-teal-400', delay: 0.1 },
    { label: 'Cost Savings', value: '$2.4M', icon: DollarSign, color: 'text-emerald-400', delay: 0.2 },
    { label: 'Avg Recovery Time', value: '4.2h', icon: Clock, color: 'text-blue-400', delay: 0.3 },
    { label: 'Risk Trend', value: '-12%', icon: TrendingUp, color: 'text-orange-400', delay: 0.4 },
  ], []);

  return (
    <div className="p-6 space-y-6 bg-slate-950 min-h-screen">
      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: metric.delay }}
          >
            <Card className="p-6 bg-slate-900/50 border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">{metric.label}</p>
                  <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                </div>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Content Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Resilience Index */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6 bg-slate-900/50 border-slate-700">
            <div className="text-center">
              <h3 className="text-white mb-4">Resilience Index</h3>
              <ResilienceGauge score={76} size={180} />
              <p className="text-slate-400 text-sm mt-4">
                Your supply chain is performing above average
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Cost vs Time Trade-off */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-6 bg-slate-900/50 border-slate-700">
            <h3 className="text-white mb-4">Cost vs Time Trade-off</h3>
            <div className="relative h-48 bg-slate-800 rounded-lg p-4">
              {/* Mock scatter plot */}
              <div className="absolute bottom-4 left-4 text-xs text-slate-400">High Cost</div>
              <div className="absolute top-4 left-4 text-xs text-slate-400">Low Cost</div>
              <div className="absolute bottom-4 right-4 text-xs text-slate-400">Fast</div>
              <div className="absolute bottom-4 left-4 text-xs text-slate-400">Slow</div>
              
              {/* Mock data points */}
              <div className="absolute top-8 right-12 w-3 h-3 bg-teal-400 rounded-full" />
              <div className="absolute top-16 right-20 w-3 h-3 bg-blue-400 rounded-full" />
              <div className="absolute bottom-12 left-12 w-3 h-3 bg-emerald-400 rounded-full" />
              <div className="absolute bottom-16 right-8 w-3 h-3 bg-orange-400 rounded-full" />
            </div>
          </Card>
        </motion.div>

        {/* Quick Alerts */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="p-6 bg-slate-900/50 border-slate-700">
            <h3 className="text-white mb-4">Real-time Alerts</h3>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-3 rounded-lg border ${severityStyles[alert.severity]}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className={`w-4 h-4 mt-0.5 ${alert.severity === 'high' ? 'text-red-400' : alert.severity === 'medium' ? 'text-orange-400' : 'text-yellow-400'}`} />
                      <div>
                        <p className="text-white text-sm font-medium">{alert.title}</p>
                        <p className="text-slate-400 text-xs">{alert.location}</p>
                      </div>
                    </div>
                    <span className="text-slate-500 text-xs">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-slate-800 hover:bg-slate-700 text-white">
              View All Alerts
            </Button>
          </Card>
        </motion.div>
      </div>

      {/* Disruption Heatmap */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="p-6 bg-slate-900/50 border-slate-700">
          <DisruptionHeatmap />
        </Card>
      </motion.div>

      {/* Transportation Icons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex justify-center space-x-8 text-slate-400"
      >
        <div className="flex flex-col items-center">
          <Truck className="w-8 h-8 mb-2" />
          <span className="text-xs">Land</span>
        </div>
        <div className="flex flex-col items-center">
          <Ship className="w-8 h-8 mb-2" />
          <span className="text-xs">Sea</span>
        </div>
        <div className="flex flex-col items-center">
          <Plane className="w-8 h-8 mb-2" />
          <span className="text-xs">Air</span>
        </div>
      </motion.div>
    </div>
  );
}