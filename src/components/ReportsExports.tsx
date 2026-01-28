import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { FileDown, FileText, Filter, Calendar, BarChart3, PieChart, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

interface SimulationData {
  id: string;
  date: string;
  scenario: string;
  severity: number;
  duration: number;
  costImpact: number;
  resilienceScore: number;
  status: 'completed' | 'in-progress' | 'draft';
}

const mockSimulations: SimulationData[] = [
  { id: 'SIM-001', date: '2025-01-08', scenario: 'Port Congestion - Shanghai', severity: 7, duration: 5, costImpact: 125000, resilienceScore: 73, status: 'completed' },
  { id: 'SIM-002', date: '2025-01-07', scenario: 'Weather Disruption - Atlantic', severity: 8, duration: 3, costImpact: 95000, resilienceScore: 68, status: 'completed' },
  { id: 'SIM-003', date: '2025-01-06', scenario: 'Cyber Attack - IT Systems', severity: 9, duration: 2, costImpact: 180000, resilienceScore: 45, status: 'completed' },
  { id: 'SIM-004', date: '2025-01-05', scenario: 'Labor Strike - Mumbai', severity: 6, duration: 7, costImpact: 75000, resilienceScore: 78, status: 'in-progress' },
  { id: 'SIM-005', date: '2025-01-04', scenario: 'Supplier Failure - Electronics', severity: 5, duration: 10, costImpact: 65000, resilienceScore: 82, status: 'completed' },
];

const reportTemplates = [
  {
    id: 1,
    name: 'Executive Summary Report',
    description: 'High-level overview of supply chain resilience metrics',
    icon: BarChart3,
    color: 'blue',
    includes: ['Resilience Index', 'Cost Analysis', 'Risk Assessment', 'KPIs']
  },
  {
    id: 2,
    name: 'Detailed Simulation Analysis',
    description: 'Comprehensive analysis of all simulation scenarios',
    icon: PieChart,
    color: 'emerald',
    includes: ['Scenario Details', 'Impact Analysis', 'Recovery Times', 'Recommendations']
  },
  {
    id: 3,
    name: 'Risk Assessment Report',
    description: 'Current risk landscape and mitigation strategies',
    icon: TrendingUp,
    color: 'orange',
    includes: ['Risk Heatmap', 'Vulnerability Analysis', 'Mitigation Plans', 'Trends']
  },
  {
    id: 4,
    name: 'ESG Compliance Report',
    description: 'Environmental, social, and governance metrics',
    icon: FileText,
    color: 'teal',
    includes: ['Carbon Footprint', 'Sustainability Goals', 'Compliance Status', 'Benchmarks']
  }
];

export function ReportsExports() {
  const getSeverityColor = (severity: number) => {
    if (severity >= 8) return 'text-red-400';
    if (severity >= 6) return 'text-orange-400';
    return 'text-yellow-400';
  };

  const getResilienceColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400';
    if (score >= 60) return 'text-blue-400';
    return 'text-orange-400';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed': return <Badge className="bg-emerald-600">Completed</Badge>;
      case 'in-progress': return <Badge className="bg-blue-600">In Progress</Badge>;
      case 'draft': return <Badge variant="outline">Draft</Badge>;
      default: return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6 bg-slate-950 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Reports & Exports</h1>
          <p className="text-slate-400">Generate and download comprehensive supply chain reports</p>
        </div>
        <div className="flex space-x-3">
          <Select>
            <SelectTrigger className="w-40 bg-slate-800 border-slate-600">
              <SelectValue placeholder="Filter by date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-slate-600 text-slate-300">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>
      </div>

      {/* Report Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportTemplates.map((template, index) => {
          const Icon = template.icon;
          return (
            <motion.div
              key={template.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`p-6 bg-slate-900/50 border-slate-700 hover:border-${template.color}-500/30 transition-all cursor-pointer group`}>
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`w-8 h-8 text-${template.color}-400`} />
                  <Button size="sm" className={`bg-${template.color}-600 hover:bg-${template.color}-700 opacity-0 group-hover:opacity-100 transition-opacity`}>
                    <FileDown className="w-4 h-4" />
                  </Button>
                </div>
                <h3 className="text-white font-semibold mb-2">{template.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{template.description}</p>
                <div className="space-y-1">
                  {template.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center text-xs text-slate-500">
                      <div className={`w-1.5 h-1.5 bg-${template.color}-400 rounded-full mr-2`} />
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Simulation History Table */}
      <Card className="bg-slate-900/50 border-slate-700">
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <h3 className="text-white">Simulation History</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                <Calendar className="w-4 h-4 mr-2" />
                Date Range
              </Button>
              <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                <FileDown className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow className="border-slate-700">
              <TableHead className="text-slate-300">Simulation ID</TableHead>
              <TableHead className="text-slate-300">Date</TableHead>
              <TableHead className="text-slate-300">Scenario</TableHead>
              <TableHead className="text-slate-300">Severity</TableHead>
              <TableHead className="text-slate-300">Duration (Days)</TableHead>
              <TableHead className="text-slate-300">Cost Impact</TableHead>
              <TableHead className="text-slate-300">Resilience Score</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockSimulations.map((sim) => (
              <TableRow key={sim.id} className="border-slate-700 hover:bg-slate-800/50">
                <TableCell className="text-white font-mono">{sim.id}</TableCell>
                <TableCell className="text-slate-300">{sim.date}</TableCell>
                <TableCell className="text-slate-300">{sim.scenario}</TableCell>
                <TableCell className={getSeverityColor(sim.severity)}>
                  {sim.severity}/10
                </TableCell>
                <TableCell className="text-slate-300">{sim.duration}</TableCell>
                <TableCell className="text-red-400">
                  ${sim.costImpact.toLocaleString()}
                </TableCell>
                <TableCell className={getResilienceColor(sim.resilienceScore)}>
                  {sim.resilienceScore}%
                </TableCell>
                <TableCell>{getStatusBadge(sim.status)}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                      View
                    </Button>
                    <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                      <FileDown className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-slate-900/50 border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Total Simulations</p>
              <p className="text-2xl font-bold text-white">{mockSimulations.length}</p>
            </div>
            <BarChart3 className="w-8 h-8 text-blue-400" />
          </div>
        </Card>

        <Card className="p-6 bg-slate-900/50 border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Avg Resilience Score</p>
              <p className="text-2xl font-bold text-emerald-400">
                {Math.round(mockSimulations.reduce((acc, sim) => acc + sim.resilienceScore, 0) / mockSimulations.length)}%
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-emerald-400" />
          </div>
        </Card>

        <Card className="p-6 bg-slate-900/50 border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Total Cost Impact</p>
              <p className="text-2xl font-bold text-red-400">
                ${mockSimulations.reduce((acc, sim) => acc + sim.costImpact, 0).toLocaleString()}
              </p>
            </div>
            <PieChart className="w-8 h-8 text-red-400" />
          </div>
        </Card>

        <Card className="p-6 bg-slate-900/50 border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Avg Recovery Time</p>
              <p className="text-2xl font-bold text-orange-400">
                {Math.round(mockSimulations.reduce((acc, sim) => acc + sim.duration, 0) / mockSimulations.length * 1.5)}h
              </p>
            </div>
            <Calendar className="w-8 h-8 text-orange-400" />
          </div>
        </Card>
      </div>

      {/* Bulk Export Options */}
      <Card className="p-6 bg-slate-900/50 border-slate-700">
        <h3 className="text-white mb-4">Bulk Export Options</h3>
        <div className="flex flex-wrap gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <FileDown className="w-4 h-4 mr-2" />
            Export All Reports (PDF)
          </Button>
          <Button variant="outline" className="border-slate-600 text-slate-300">
            <FileDown className="w-4 h-4 mr-2" />
            Export Data (Excel)
          </Button>
          <Button variant="outline" className="border-slate-600 text-slate-300">
            <FileDown className="w-4 h-4 mr-2" />
            Export Charts (PNG)
          </Button>
          <Button variant="outline" className="border-slate-600 text-slate-300">
            <FileDown className="w-4 h-4 mr-2" />
            Custom Report Builder
          </Button>
        </div>
        <p className="text-slate-400 text-sm mt-3">
          Reports include simulation data, resilience metrics, cost analyses, and strategic recommendations.
        </p>
      </Card>
    </div>
  );
}