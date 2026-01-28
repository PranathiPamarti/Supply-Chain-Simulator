import { useState, useMemo } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Truck, DollarSign, Shield, MessageSquare, Users, ArrowRight, MapPin } from "lucide-react";
import { motion } from "motion/react";

interface RoleData {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'away' | 'busy';
  icon: any;
  color: string;
}

const roles: RoleData[] = [
  { id: '1', name: 'Sarah Chen', role: 'Logistics Manager', avatar: 'SC', status: 'online', icon: Truck, color: 'teal' },
  { id: '2', name: 'Mike Rodriguez', role: 'Finance Head', avatar: 'MR', status: 'online', icon: DollarSign, color: 'emerald' },
  { id: '3', name: 'Emma Thompson', role: 'Insurance Officer', avatar: 'ET', status: 'away', icon: Shield, color: 'blue' },
];

export function CollaborationMode() {
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [messages] = useState([
    { id: 1, sender: 'Sarah Chen', message: 'Rerouting through Rotterdam port, ETA +2 days', time: '2 min ago', role: 'Logistics Manager' },
    { id: 2, sender: 'Mike Rodriguez', message: 'Additional cost approved: $50K for expedited shipping', time: '5 min ago', role: 'Finance Head' },
    { id: 3, sender: 'Emma Thompson', message: 'Insurance claim pre-approved for weather delays', time: '8 min ago', role: 'Insurance Officer' },
  ]);

  const statusConfig = useMemo(() => ({
    online: 'bg-green-500',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
  }), []);

  const roleData = useMemo(() => ({
    'Logistics Manager': {
      routes: [
        { id: 1, from: 'Shanghai', to: 'Rotterdam', status: 'Active', delay: '+2 days', cost: '$12K' },
        { id: 2, from: 'Mumbai', to: 'Felixstowe', status: 'Delayed', delay: '+5 days', cost: '$18K' },
        { id: 3, from: 'Singapore', to: 'Hamburg', status: 'Normal', delay: 'On time', cost: '$15K' },
      ]
    },
    'Finance Head': {
      costs: [
        { category: 'Rerouting Costs', budgeted: 125000, actual: 145000, variance: '+16%' },
        { category: 'Expedited Shipping', budgeted: 75000, actual: 68000, variance: '-9%' },
        { category: 'Storage & Handling', budgeted: 45000, actual: 52000, variance: '+16%' },
      ]
    },
    'Insurance Officer': {
      claims: [
        { id: 'CL-2025-001', type: 'Weather Delay', amount: '$25,000', status: 'Approved' },
        { id: 'CL-2025-002', type: 'Port Congestion', amount: '$18,500', status: 'Processing' },
        { id: 'CL-2025-003', type: 'Force Majeure', amount: '$45,000', status: 'Under Review' },
      ]
    }
  }), []);

  const onlineCount = useMemo(() => roles.filter(r => r.status === 'online').length, []);

  return (
    <div className="p-6 space-y-6 bg-slate-950 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Collaboration Mode</h1>
          <p className="text-slate-400">Real-time coordination across all supply chain roles</p>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-teal-400" />
          <span className="text-slate-300">{onlineCount} online</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Role Selection */}
        <Card className="p-4 bg-slate-900/50 border-slate-700">
          <h3 className="text-white mb-4">Active Participants</h3>
          <div className="space-y-3">
            {roles.map((role) => {
              const Icon = role.icon;
              const isSelected = selectedRole.id === role.id;
              
              return (
                <motion.div
                  key={role.id}
                  className={`p-3 rounded-lg cursor-pointer transition-all ${
                    isSelected 
                      ? 'bg-teal-600/20 border border-teal-500/30' 
                      : 'bg-slate-800 hover:bg-slate-700'
                  }`}
                  onClick={() => setSelectedRole(role)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-teal-600 text-white">
                          {role.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-slate-900 ${statusConfig[role.status]}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{role.name}</p>
                      <p className="text-slate-400 text-xs truncate">{role.role}</p>
                    </div>
                    <Icon className="w-4 h-4 text-teal-400" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Card>

        {/* Role-Specific Dashboard */}
        <div className="lg:col-span-2">
          <Card className="p-6 bg-slate-900/50 border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white flex items-center">
                <selectedRole.icon className="w-5 h-5 mr-2 text-teal-400" />
                {selectedRole.role} Dashboard
              </h3>
              <Badge variant="outline" className="border-teal-500 text-teal-400">
                {selectedRole.name}
              </Badge>
            </div>

            {selectedRole.role === 'Logistics Manager' && (
              <div className="space-y-4">
                <h4 className="text-slate-300">Active Routes & Status</h4>
                {roleData['Logistics Manager'].routes.map((route) => (
                  <div key={route.id} className="p-4 bg-slate-800 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-teal-400" />
                        <span className="text-white">{route.from}</span>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                        <span className="text-white">{route.to}</span>
                      </div>
                      <Badge variant={route.status === 'Normal' ? 'default' : route.status === 'Active' ? 'secondary' : 'destructive'}>
                        {route.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400">
                      <span>Delay: {route.delay}</span>
                      <span>Cost: {route.cost}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedRole.role === 'Finance Head' && (
              <div className="space-y-4">
                <h4 className="text-slate-300">Cost Breakdown & Variance</h4>
                {roleData['Finance Head'].costs.map((cost, index) => (
                  <div key={index} className="p-4 bg-slate-800 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white">{cost.category}</span>
                      <Badge variant={cost.variance.startsWith('+') ? 'destructive' : 'default'}>
                        {cost.variance}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400">
                      <span>Budgeted: ${cost.budgeted.toLocaleString()}</span>
                      <span>Actual: ${cost.actual.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                      <div 
                        className={`h-2 rounded-full ${cost.variance.startsWith('+') ? 'bg-red-500' : 'bg-emerald-500'}`}
                        style={{ width: `${Math.min((cost.actual / cost.budgeted) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedRole.role === 'Insurance Officer' && (
              <div className="space-y-4">
                <h4 className="text-slate-300">Claims & Risk Assessment</h4>
                {roleData['Insurance Officer'].claims.map((claim) => (
                  <div key={claim.id} className="p-4 bg-slate-800 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-white">{claim.id}</span>
                        <p className="text-slate-400 text-sm">{claim.type}</p>
                      </div>
                      <Badge variant={claim.status === 'Approved' ? 'default' : claim.status === 'Processing' ? 'secondary' : 'outline'}>
                        {claim.status}
                      </Badge>
                    </div>
                    <div className="text-teal-400 font-semibold">{claim.amount}</div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>

        {/* Communication Panel */}
        <Card className="p-4 bg-slate-900/50 border-slate-700">
          <h3 className="text-white mb-4 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-blue-400" />
            Team Chat
          </h3>
          
          <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
            {messages.map((msg) => (
              <div key={msg.id} className="p-3 bg-slate-800 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-sm font-medium">{msg.sender}</span>
                  <span className="text-slate-500 text-xs">{msg.time}</span>
                </div>
                <p className="text-slate-300 text-sm">{msg.message}</p>
                <p className="text-slate-500 text-xs mt-1">{msg.role}</p>
              </div>
            ))}
          </div>

          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Type a message..."
              className="flex-1 bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white text-sm"
            />
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Send
            </Button>
          </div>

          {/* Coordination Flow */}
          <div className="mt-6 pt-4 border-t border-slate-700">
            <h4 className="text-slate-300 text-sm mb-3">Workflow Status</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs text-slate-400">Route optimization complete</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs text-slate-400">Budget approval received</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                <span className="text-xs text-slate-400">Insurance validation pending</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Coordination Flow Arrows */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-4 text-slate-400">
          <div className="flex flex-col items-center">
            <Truck className="w-8 h-8 text-teal-400" />
            <span className="text-xs mt-1">Logistics</span>
          </div>
          <ArrowRight className="w-6 h-6" />
          <div className="flex flex-col items-center">
            <DollarSign className="w-8 h-8 text-emerald-400" />
            <span className="text-xs mt-1">Finance</span>
          </div>
          <ArrowRight className="w-6 h-6" />
          <div className="flex flex-col items-center">
            <Shield className="w-8 h-8 text-blue-400" />
            <span className="text-xs mt-1">Insurance</span>
          </div>
        </div>
      </div>
    </div>
  );
}