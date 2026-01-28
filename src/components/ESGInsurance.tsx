import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Leaf, Shield, FileDown, TrendingDown, TrendingUp, Zap, Droplets, Recycle } from "lucide-react";
import { motion } from "motion/react";

export function ESGInsurance() {
  const esgMetrics = {
    carbonFootprint: { current: 2450, target: 2000, reduction: 18 },
    renewableEnergy: { percentage: 65, target: 80 },
    wasteReduction: { percentage: 73, target: 85 },
    waterConservation: { percentage: 58, target: 70 },
  };

  const insuranceMetrics = {
    claimReadiness: 85,
    premiumSavings: 12,
    riskScore: 23,
    complianceScore: 92,
  };

  const complianceReports = [
    { name: 'Carbon Disclosure Report', date: '2025-01-08', status: 'Complete', score: 'A-' },
    { name: 'Supply Chain ESG Audit', date: '2025-01-05', status: 'In Progress', score: 'B+' },
    { name: 'Sustainability Metrics', date: '2025-01-01', status: 'Complete', score: 'A' },
  ];

  const claimHistory = [
    { id: 'INS-001', type: 'Environmental Damage', amount: '$125,000', status: 'Approved', date: '2024-12-15' },
    { id: 'INS-002', type: 'Business Interruption', amount: '$75,000', status: 'Processing', date: '2024-12-10' },
    { id: 'INS-003', type: 'Supply Chain Delay', amount: '$45,000', status: 'Approved', date: '2024-11-28' },
  ];

  return (
    <div className="p-6 space-y-6 bg-slate-950 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">ESG & Insurance Dashboard</h1>
          <p className="text-slate-400">Environmental impact tracking and insurance risk management</p>
        </div>
        <div className="flex space-x-3">
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <FileDown className="w-4 h-4 mr-2" />
            Download ESG Report
          </Button>
          <Button variant="outline" className="border-slate-600 text-slate-300">
            <Shield className="w-4 h-4 mr-2" />
            Generate Claim Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="esg" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-slate-800">
          <TabsTrigger value="esg" className="flex items-center space-x-2">
            <Leaf className="w-4 h-4" />
            <span>ESG Metrics</span>
          </TabsTrigger>
          <TabsTrigger value="insurance" className="flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>Insurance</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="esg" className="space-y-6">
          {/* ESG Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-emerald-700/50">
                <div className="flex items-center justify-between mb-4">
                  <Leaf className="w-8 h-8 text-emerald-400" />
                  <Badge className="bg-emerald-600 text-white">-{esgMetrics.carbonFootprint.reduction}%</Badge>
                </div>
                <h3 className="text-emerald-400 text-sm mb-2">Carbon Footprint</h3>
                <p className="text-2xl font-bold text-white">{esgMetrics.carbonFootprint.current}</p>
                <p className="text-slate-400 text-sm">tons CO2e / Target: {esgMetrics.carbonFootprint.target}</p>
                <Progress 
                  value={(esgMetrics.carbonFootprint.target / esgMetrics.carbonFootprint.current) * 100} 
                  className="mt-2 h-2"
                />
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-700/50">
                <div className="flex items-center justify-between mb-4">
                  <Zap className="w-8 h-8 text-blue-400" />
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-blue-400 text-sm mb-2">Renewable Energy</h3>
                <p className="text-2xl font-bold text-white">{esgMetrics.renewableEnergy.percentage}%</p>
                <p className="text-slate-400 text-sm">Target: {esgMetrics.renewableEnergy.target}%</p>
                <Progress 
                  value={esgMetrics.renewableEnergy.percentage} 
                  className="mt-2 h-2"
                />
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6 bg-gradient-to-br from-teal-900/30 to-teal-800/20 border-teal-700/50">
                <div className="flex items-center justify-between mb-4">
                  <Recycle className="w-8 h-8 text-teal-400" />
                  <TrendingUp className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="text-teal-400 text-sm mb-2">Waste Reduction</h3>
                <p className="text-2xl font-bold text-white">{esgMetrics.wasteReduction.percentage}%</p>
                <p className="text-slate-400 text-sm">Target: {esgMetrics.wasteReduction.target}%</p>
                <Progress 
                  value={esgMetrics.wasteReduction.percentage} 
                  className="mt-2 h-2"
                />
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border-cyan-700/50">
                <div className="flex items-center justify-between mb-4">
                  <Droplets className="w-8 h-8 text-cyan-400" />
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-cyan-400 text-sm mb-2">Water Conservation</h3>
                <p className="text-2xl font-bold text-white">{esgMetrics.waterConservation.percentage}%</p>
                <p className="text-slate-400 text-sm">Target: {esgMetrics.waterConservation.target}%</p>
                <Progress 
                  value={esgMetrics.waterConservation.percentage} 
                  className="mt-2 h-2"
                />
              </Card>
            </motion.div>
          </div>

          {/* ESG Compliance Reports */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 bg-slate-900/50 border-slate-700">
              <h3 className="text-white mb-4">ESG Compliance Reports</h3>
              <div className="space-y-3">
                {complianceReports.map((report, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-slate-800 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{report.name}</h4>
                      <Badge variant={report.status === 'Complete' ? 'default' : 'secondary'}>
                        {report.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400">
                      <span>{report.date}</span>
                      <span className="text-emerald-400">Score: {report.score}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-slate-900/50 border-slate-700">
              <h3 className="text-white mb-4">Carbon Footprint Trends</h3>
              <div className="h-48 bg-slate-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="text-slate-500">Emissions Trend Chart</div>
                {/* Mock trend visualization */}
                <svg className="absolute inset-0 w-full h-full">
                  <polyline
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    points="20,140 60,120 100,100 140,90 180,75 220,70 260,60"
                  />
                  <polyline
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    points="20,60 60,60 100,60 140,60 180,60 220,60 260,60"
                  />
                </svg>
                <div className="absolute bottom-2 right-2 text-xs text-slate-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-0.5 bg-emerald-500" />
                      <span>Actual</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-0.5 bg-red-500 border-dashed" />
                      <span>Target</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insurance" className="space-y-6">
          {/* Insurance Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-700/50">
                <div className="flex items-center justify-between mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-blue-400 text-sm mb-2">Claim Readiness</h3>
                <p className="text-2xl font-bold text-white">{insuranceMetrics.claimReadiness}%</p>
                <p className="text-slate-400 text-sm">Documentation complete</p>
                <Progress 
                  value={insuranceMetrics.claimReadiness} 
                  className="mt-2 h-2"
                />
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-emerald-700/50">
                <div className="flex items-center justify-between mb-4">
                  <TrendingDown className="w-8 h-8 text-emerald-400" />
                  <Badge className="bg-emerald-600 text-white">-{insuranceMetrics.premiumSavings}%</Badge>
                </div>
                <h3 className="text-emerald-400 text-sm mb-2">Premium Savings</h3>
                <p className="text-2xl font-bold text-white">${(insuranceMetrics.premiumSavings * 15000).toLocaleString()}</p>
                <p className="text-slate-400 text-sm">Annual reduction</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6 bg-gradient-to-br from-orange-900/30 to-orange-800/20 border-orange-700/50">
                <div className="flex items-center justify-between mb-4">
                  <TrendingDown className="w-8 h-8 text-orange-400" />
                  <Badge className="bg-orange-600 text-white">Low Risk</Badge>
                </div>
                <h3 className="text-orange-400 text-sm mb-2">Risk Score</h3>
                <p className="text-2xl font-bold text-white">{insuranceMetrics.riskScore}</p>
                <p className="text-slate-400 text-sm">Out of 100 (lower is better)</p>
                <Progress 
                  value={100 - insuranceMetrics.riskScore} 
                  className="mt-2 h-2"
                />
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6 bg-gradient-to-br from-teal-900/30 to-teal-800/20 border-teal-700/50">
                <div className="flex items-center justify-between mb-4">
                  <Shield className="w-8 h-8 text-teal-400" />
                  <Badge className="bg-teal-600 text-white">Excellent</Badge>
                </div>
                <h3 className="text-teal-400 text-sm mb-2">Compliance Score</h3>
                <p className="text-2xl font-bold text-white">{insuranceMetrics.complianceScore}%</p>
                <p className="text-slate-400 text-sm">Regulatory compliance</p>
                <Progress 
                  value={insuranceMetrics.complianceScore} 
                  className="mt-2 h-2"
                />
              </Card>
            </motion.div>
          </div>

          {/* Claims and Risk Management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 bg-slate-900/50 border-slate-700">
              <h3 className="text-white mb-4">Recent Claims History</h3>
              <div className="space-y-3">
                {claimHistory.map((claim, index) => (
                  <motion.div
                    key={claim.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-slate-800 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="text-white font-medium">{claim.id}</h4>
                        <p className="text-slate-400 text-sm">{claim.type}</p>
                      </div>
                      <Badge variant={claim.status === 'Approved' ? 'default' : 'secondary'}>
                        {claim.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-teal-400 font-semibold">{claim.amount}</span>
                      <span className="text-slate-400">{claim.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-slate-900/50 border-slate-700">
              <h3 className="text-white mb-4">Risk Assessment Matrix</h3>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {/* Risk matrix visualization */}
                <div className="h-12 bg-emerald-600/20 border border-emerald-600/40 rounded flex items-center justify-center text-xs text-emerald-400">Low</div>
                <div className="h-12 bg-yellow-600/20 border border-yellow-600/40 rounded flex items-center justify-center text-xs text-yellow-400">Medium</div>
                <div className="h-12 bg-red-600/20 border border-red-600/40 rounded flex items-center justify-center text-xs text-red-400">High</div>
                <div className="h-12 bg-emerald-600/20 border border-emerald-600/40 rounded flex items-center justify-center text-xs text-emerald-400">Low</div>
                <div className="h-12 bg-yellow-600/20 border border-yellow-600/40 rounded flex items-center justify-center text-xs text-yellow-400">Medium</div>
                <div className="h-12 bg-red-600/20 border border-red-600/40 rounded flex items-center justify-center text-xs text-red-400">High</div>
                <div className="h-12 bg-yellow-600/20 border border-yellow-600/40 rounded flex items-center justify-center text-xs text-yellow-400">Medium</div>
                <div className="h-12 bg-red-600/20 border border-red-600/40 rounded flex items-center justify-center text-xs text-red-400">High</div>
                <div className="h-12 bg-red-600/20 border border-red-600/40 rounded flex items-center justify-center text-xs text-red-400">Critical</div>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Impact</span>
                <span>Probability</span>
              </div>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <FileDown className="w-4 h-4 mr-2" />
              Generate Insurance Report
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300">
              Submit New Claim
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300">
              Risk Assessment Tool
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}