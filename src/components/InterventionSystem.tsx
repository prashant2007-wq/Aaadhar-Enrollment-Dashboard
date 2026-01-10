import { Target, Users, MapPin, Smartphone, Calendar, CheckCircle, TrendingUp, AlertCircle, Megaphone } from 'lucide-react';

const targetedOutreachCampaigns = [
  {
    id: 1,
    title: 'Rural Elderly Awareness Drive',
    target: 'Age 60+ in Rural UP & Bihar',
    population: 62000,
    status: 'active',
    progress: 34,
    channels: ['Home Visits', 'Community Centers', 'Local Leaders'],
    expectedImpact: 'High',
    startDate: '2026-01-15',
    endDate: '2026-03-15',
  },
  {
    id: 2,
    title: 'School Enrolment Campaign',
    target: 'Children 0-10 years',
    population: 35000,
    status: 'planned',
    progress: 0,
    channels: ['School Camps', 'Parent Meetings', 'SMS'],
    expectedImpact: 'High',
    startDate: '2026-02-01',
    endDate: '2026-04-30',
  },
  {
    id: 3,
    title: 'Women Empowerment Initiative',
    target: 'Rural Women (18-45)',
    population: 89000,
    status: 'active',
    progress: 67,
    channels: ['Female Staff', 'SHG Meetings', 'Mobile Units'],
    expectedImpact: 'Very High',
    startDate: '2025-12-01',
    endDate: '2026-02-28',
  },
  {
    id: 4,
    title: 'Festival Season Drive',
    target: 'General Population',
    population: 125000,
    status: 'planned',
    progress: 0,
    channels: ['Festival Camps', 'Social Media', 'Radio'],
    expectedImpact: 'Medium',
    startDate: '2026-10-15',
    endDate: '2026-11-30',
  },
];

const smartInterventions = [
  {
    area: 'Rural UP',
    issue: 'Low Coverage (23.4%)',
    interventions: [
      { action: 'Deploy 8 Mobile Units', priority: 'Critical', cost: '₹12.5L', timeline: '2 weeks', impact: '+15%' },
      { action: 'Train 25 Local Operators', priority: 'High', cost: '₹3.2L', timeline: '1 month', impact: '+8%' },
      { action: 'Awareness Campaign via Local Radio', priority: 'High', cost: '₹1.5L', timeline: '1 month', impact: '+5%' },
      { action: 'Partner with Gram Panchayats', priority: 'Medium', cost: '₹0.8L', timeline: '2 months', impact: '+7%' },
    ],
  },
  {
    area: 'Kolkata Main Center',
    issue: 'Low Efficiency (72.2%)',
    interventions: [
      { action: 'Equipment Upgrade', priority: 'Critical', cost: '₹8.5L', timeline: '1 week', impact: '+12%' },
      { action: 'Staff Retraining Program', priority: 'High', cost: '₹2.1L', timeline: '2 weeks', impact: '+8%' },
      { action: 'Process Optimization', priority: 'Medium', cost: '₹0.5L', timeline: '1 week', impact: '+5%' },
    ],
  },
  {
    area: 'Elderly Population (60+)',
    issue: 'Coverage Gap (38.8%)',
    interventions: [
      { action: 'Home Visit Program', priority: 'Critical', cost: '₹15.2L', timeline: '3 months', impact: '+20%' },
      { action: 'Simplified Enrolment Process', priority: 'High', cost: '₹1.8L', timeline: '2 weeks', impact: '+10%' },
      { action: 'Dedicated Elderly Help Desks', priority: 'High', cost: '₹3.5L', timeline: '1 month', impact: '+8%' },
    ],
  },
];

const mobileUnitSchedule = [
  { unit: 'Mobile Unit 1', location: 'Rural UP - District A', dates: 'Feb 1-15', expectedEnrolments: 2500, status: 'scheduled' },
  { unit: 'Mobile Unit 2', location: 'Rural UP - District B', dates: 'Feb 1-15', expectedEnrolments: 2300, status: 'scheduled' },
  { unit: 'Mobile Unit 3', location: 'Rural Bihar - Zone 1', dates: 'Feb 8-22', expectedEnrolments: 2800, status: 'scheduled' },
  { unit: 'Mobile Unit 4', location: 'Kolkata Outskirts', dates: 'Feb 5-12', expectedEnrolments: 1800, status: 'active' },
  { unit: 'Mobile Unit 5', location: 'Chennai Rural', dates: 'Jan 28 - Feb 8', expectedEnrolments: 1650, status: 'active' },
];

const communicationChannels = [
  { channel: 'SMS Campaigns', reach: 450000, cost: '₹2.5L', effectiveness: 87, status: 'active' },
  { channel: 'Social Media Ads', reach: 320000, cost: '₹4.2L', effectiveness: 72, status: 'active' },
  { channel: 'Local Radio', reach: 280000, cost: '₹3.8L', effectiveness: 91, status: 'active' },
  { channel: 'Community Meetings', reach: 125000, cost: '₹1.9L', effectiveness: 95, status: 'active' },
  { channel: 'WhatsApp Groups', reach: 189000, cost: '₹0.8L', effectiveness: 83, status: 'planned' },
  { channel: 'Door-to-Door', reach: 45000, cost: '₹12.5L', effectiveness: 98, status: 'planned' },
];

export function InterventionSystem() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Campaigns</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">2</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Megaphone className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-600">
            2 more planned
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Target Population</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">186K</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-3 text-sm text-green-600">
            51% reached so far
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Mobile Units</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">5</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-600">
            2 active, 3 scheduled
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Expected Impact</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">+28%</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-3 text-sm text-orange-600">
            Coverage improvement
          </div>
        </div>
      </div>

      {/* Targeted Outreach Campaigns */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Targeted Outreach Campaigns</h3>
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            + New Campaign
          </button>
        </div>
        <div className="space-y-4">
          {targetedOutreachCampaigns.map((campaign) => (
            <div key={campaign.id} className="border border-gray-200 rounded-lg p-5 hover:border-indigo-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-gray-900">{campaign.title}</h4>
                    {campaign.status === 'active' ? (
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></div>
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        Planned
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Target:</span> {campaign.target} • {campaign.population.toLocaleString()} people
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Duration:</span> {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-600">{campaign.progress}%</div>
                  <div className="text-xs text-gray-500">Progress</div>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Campaign Progress</span>
                  <span>{campaign.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap mb-3">
                <span className="text-xs text-gray-600">Channels:</span>
                {campaign.channels.map((channel, idx) => (
                  <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-md border border-purple-200">
                    {channel}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    Expected Impact: <span className="font-semibold text-gray-900">{campaign.expectedImpact}</span>
                  </span>
                </div>
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Interventions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI-Recommended Smart Interventions</h3>
        <div className="space-y-6">
          {smartInterventions.map((item, index) => (
            <div key={index} className="border-l-4 border-indigo-600 bg-gradient-to-r from-indigo-50 to-transparent p-5 rounded-r-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{item.area}</h4>
                  <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {item.issue}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Total Cost</div>
                  <div className="text-lg font-bold text-gray-900">
                    ₹{(item.interventions.reduce((sum, int) => sum + parseFloat(int.cost.replace('₹', '').replace('L', '')), 0)).toFixed(1)}L
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {item.interventions.map((intervention, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle className="w-4 h-4 text-gray-400" />
                          <span className="font-medium text-gray-900">{intervention.action}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 ml-6">
                          <span>Timeline: {intervention.timeline}</span>
                          <span>•</span>
                          <span>Cost: {intervention.cost}</span>
                          <span>•</span>
                          <span className="text-green-600 font-medium">Impact: {intervention.impact}</span>
                        </div>
                      </div>
                      <div>
                        {intervention.priority === 'Critical' && (
                          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                            Critical
                          </span>
                        )}
                        {intervention.priority === 'High' && (
                          <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">
                            High
                          </span>
                        )}
                        {intervention.priority === 'Medium' && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                            Medium
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Total Expected Impact:</span> Up to{' '}
                  <span className="text-green-600 font-bold">
                    +{item.interventions.reduce((sum, int) => sum + parseInt(int.impact.replace('+', '').replace('%', '')), 0)}%
                  </span>{' '}
                  coverage improvement
                </div>
                <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                  Implement Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Unit Schedule */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Mobile Unit Deployment Schedule</h3>
          <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
            + Schedule Unit
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Unit</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Location</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Dates</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Expected Enrolments</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {mobileUnitSchedule.map((unit, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">{unit.unit}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{unit.location}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{unit.dates}</td>
                  <td className="text-right py-3 px-4 text-sm font-semibold text-indigo-600">{unit.expectedEnrolments.toLocaleString()}</td>
                  <td className="text-center py-3 px-4">
                    {unit.status === 'active' ? (
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></div>
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        Scheduled
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Total Expected Reach:</span> 11,050 enrolments across 5 mobile units in February
          </p>
        </div>
      </div>

      {/* Communication Channels */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Multi-Channel Communication Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {communicationChannels.map((channel, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <Smartphone className="w-4 h-4 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{channel.channel}</h4>
                </div>
                {channel.status === 'active' ? (
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Active
                  </span>
                ) : (
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                    Planned
                  </span>
                )}
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Reach:</span>
                  <span className="font-semibold text-gray-900">{channel.reach.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Cost:</span>
                  <span className="font-semibold text-gray-900">{channel.cost}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Effectiveness:</span>
                  <span className="font-semibold text-green-600">{channel.effectiveness}%</span>
                </div>
              </div>

              <div className="mb-2">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Effectiveness</span>
                  <span>{channel.effectiveness}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-green-500 h-1.5 rounded-full"
                    style={{ width: `${channel.effectiveness}%` }}
                  ></div>
                </div>
              </div>

              <div className="text-xs text-gray-500 mt-3">
                Cost per 1K reach: ₹{((parseFloat(channel.cost.replace('₹', '').replace('L', '')) * 100000) / channel.reach * 1000).toFixed(0)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
          <div className="flex items-start gap-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Target className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-purple-900 mb-2">Next 30 Days Focus</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Launch School Campaign (Feb 1)</li>
                <li>• Deploy 3 Mobile Units to Rural Areas</li>
                <li>• Complete Women Empowerment Drive</li>
                <li>• Execute SMS Campaign (450K reach)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-2">Expected Outcomes</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• +28% overall coverage increase</li>
                <li>• 186K people reached via campaigns</li>
                <li>• 11K mobile unit enrolments</li>
                <li>• Rural gap reduced by 15%</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200">
          <div className="flex items-start gap-3">
            <div className="bg-orange-100 p-2 rounded-lg">
              <AlertCircle className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h4 className="font-semibold text-orange-900 mb-2">Resource Requirements</h4>
              <ul className="text-sm text-orange-800 space-y-1">
                <li>• Budget: ₹42.3L allocated</li>
                <li>• Staff: 125 additional personnel</li>
                <li>• Equipment: 45 biometric devices</li>
                <li>• Vehicles: 5 mobile units active</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
