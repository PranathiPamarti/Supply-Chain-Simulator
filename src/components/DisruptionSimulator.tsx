import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Play, RotateCcw, Zap, Timer, MapPin, TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function DisruptionSimulator() {
  const [severity, setSeverity] = useState([5]);
  const [duration, setDuration] = useState([7]);
  const [location, setLocation] = useState("");
  const [disruptionType, setDisruptionType] = useState("");
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 3000);
  };

  const handleReset = () => {
    setSeverity([5]);
    setDuration([7]);
    setLocation("");
    setDisruptionType("");
  };

  const impactMetrics = {
    costIncrease: Math.round(severity[0] * duration[0] * 2.5),
    delayDays: Math.round(severity[0] * 0.8),
    routesAffected: Math.round(severity[0] * 12),
    recoveryTime: Math.round(duration[0] * 1.2),
  };

  return (
    <div className="p-6 space-y-6 bg-slate-950 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Disruption Simulator</h1>
          <p className="text-slate-400">Model supply chain disruptions and test recovery strategies</p>
        </div>
        <div className="flex space-x-3">
          <Button onClick={handleReset} variant="outline" className="border-slate-600 text-slate-300">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          <Button 
            onClick={handleSimulation} 
            className="bg-teal-600 hover:bg-teal-700"
            disabled={isSimulating}
          >
            <Play className="w-4 h-4 mr-2" />
            {isSimulating ? "Simulating..." : "Run Simulation"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Control Panel */}
        <Card className="p-6 bg-slate-900/50 border-slate-700">
          <h3 className="text-white mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-teal-400" />
            Disruption Parameters
          </h3>
          
          <div className="space-y-6">
            {/* Disruption Type */}
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Disruption Type</label>
              <Select value={disruptionType} onValueChange={setDisruptionType}>
                <SelectTrigger className="bg-slate-800 border-slate-600">
                  <SelectValue placeholder="Select disruption type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="port-congestion">Port Congestion</SelectItem>
                  <SelectItem value="weather">Extreme Weather</SelectItem>
                  <SelectItem value="labor-strike">Labor Strike</SelectItem>
                  <SelectItem value="cyber-attack">Cyber Attack</SelectItem>
                  <SelectItem value="pandemic">Pandemic Restrictions</SelectItem>
                  <SelectItem value="geopolitical">Geopolitical Tensions</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Location</label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="bg-slate-800 border-slate-600">
                  <SelectValue placeholder="Select affected region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="suez-canal">Suez Canal</SelectItem>
                  <SelectItem value="shanghai">Shanghai Port</SelectItem>
                  <SelectItem value="los-angeles">Los Angeles Port</SelectItem>
                  <SelectItem value="rotterdam">Rotterdam Port</SelectItem>
                  <SelectItem value="singapore">Singapore Hub</SelectItem>
                  <SelectItem value="panama-canal">Panama Canal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Severity Slider */}
            <div>
              <label className="text-slate-300 text-sm mb-2 block flex items-center justify-between">
                <span>Severity Level</span>
                <Badge variant="outline" className="border-orange-500 text-orange-400">
                  {severity[0]}/10
                </Badge>
              </label>
              <Slider
                value={severity}
                onValueChange={setSeverity}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>Minimal</span>
                <span>Catastrophic</span>
              </div>
            </div>

            {/* Duration Slider */}
            <div>
              <label className="text-slate-300 text-sm mb-2 block flex items-center justify-between">
                <span>Duration (Days)</span>
                <Badge variant="outline" className="border-blue-500 text-blue-400">
                  {duration[0]} days
                </Badge>
              </label>
              <Slider
                value={duration}
                onValueChange={setDuration}
                max={30}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>1 day</span>
                <span>30 days</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Live Impact Visualization */}
        <Card className="p-6 bg-slate-900/50 border-slate-700">
          <h3 className="text-white mb-4 flex items-center">
            <Timer className="w-5 h-5 mr-2 text-blue-400" />
            Real-time Impact Preview
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              animate={isSimulating ? { scale: [1, 1.05, 1] } : {}}
              transition={{ repeat: isSimulating ? Infinity : 0, duration: 1 }}
              className="p-4 bg-slate-800 rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">Cost Increase</span>
                <TrendingUp className="w-4 h-4 text-red-400" />
              </div>
              <div className="text-2xl font-bold text-red-400">+{impactMetrics.costIncrease}%</div>
            </motion.div>

            <motion.div
              animate={isSimulating ? { scale: [1, 1.05, 1] } : {}}
              transition={{ repeat: isSimulating ? Infinity : 0, duration: 1, delay: 0.2 }}
              className="p-4 bg-slate-800 rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">Delay Days</span>
                <Timer className="w-4 h-4 text-orange-400" />
              </div>
              <div className="text-2xl font-bold text-orange-400">+{impactMetrics.delayDays}</div>
            </motion.div>

            <motion.div
              animate={isSimulating ? { scale: [1, 1.05, 1] } : {}}
              transition={{ repeat: isSimulating ? Infinity : 0, duration: 1, delay: 0.4 }}
              className="p-4 bg-slate-800 rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">Routes Affected</span>
                <MapPin className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-yellow-400">{impactMetrics.routesAffected}</div>
            </motion.div>

            <motion.div
              animate={isSimulating ? { scale: [1, 1.05, 1] } : {}}
              transition={{ repeat: isSimulating ? Infinity : 0, duration: 1, delay: 0.6 }}
              className="p-4 bg-slate-800 rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">Recovery Time</span>
                <TrendingDown className="w-4 h-4 text-teal-400" />
              </div>
              <div className="text-2xl font-bold text-teal-400">{impactMetrics.recoveryTime}h</div>
            </motion.div>
          </div>

          {/* Visual Network Effect */}
          <div className="mt-6 h-32 bg-slate-800 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-slate-500">Supply Chain Network Visualization</div>
            </div>
            {isSimulating && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            )}
          </div>
        </Card>
      </div>

      {/* Analysis Tabs */}
      <Card className="bg-slate-900/50 border-slate-700">
        <Tabs defaultValue="impact" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800">
            <TabsTrigger value="impact">Impact Analysis</TabsTrigger>
            <TabsTrigger value="recovery">Recovery Options</TabsTrigger>
          </TabsList>
          
          <TabsContent value="impact" className="p-6">
            <h3 className="text-white mb-4">Impact Analysis Report</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-800 rounded-lg">
                <h4 className="text-teal-400 mb-2">Financial Impact</h4>
                <p className="text-slate-300 text-sm">
                  Estimated additional costs of ${(impactMetrics.costIncrease * 125000).toLocaleString()} 
                  due to rerouting, delays, and alternative sourcing.
                </p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg">
                <h4 className="text-blue-400 mb-2">Operational Impact</h4>
                <p className="text-slate-300 text-sm">
                  {impactMetrics.routesAffected} routes affected with an average delay of {impactMetrics.delayDays} days. 
                  Customer satisfaction may decrease by 15-25%.
                </p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg">
                <h4 className="text-emerald-400 mb-2">Strategic Recommendations</h4>
                <p className="text-slate-300 text-sm">
                  Consider diversifying suppliers and establishing alternative shipping routes 
                  to improve resilience against similar future disruptions.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recovery" className="p-6">
            <h3 className="text-white mb-4">Recovery Strategy Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-800 rounded-lg border border-teal-500/30">
                <h4 className="text-teal-400 mb-2">Quick Response</h4>
                <p className="text-slate-300 text-sm mb-3">
                  Activate backup suppliers and expedited shipping
                </p>
                <div className="text-xs text-slate-400">
                  Cost: High | Time: 2-3 days | Success: 85%
                </div>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-blue-500/30">
                <h4 className="text-blue-400 mb-2">Balanced Approach</h4>
                <p className="text-slate-300 text-sm mb-3">
                  Reroute through alternative ports with moderate cost increase
                </p>
                <div className="text-xs text-slate-400">
                  Cost: Medium | Time: 5-7 days | Success: 95%
                </div>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-emerald-500/30">
                <h4 className="text-emerald-400 mb-2">Cost Optimized</h4>
                <p className="text-slate-300 text-sm mb-3">
                  Wait for disruption to clear while managing inventory
                </p>
                <div className="text-xs text-slate-400">
                  Cost: Low | Time: 10-14 days | Success: 70%
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}