import { BarChart, Bar, LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Activity, Clock, AlertTriangle, CheckCircle, XCircle, TrendingUp } from 'lucide-react';

const centerEfficiency = [
  { center: 'Mumbai Central', processed: 8900, capacity: 10000, efficiency: 89, avgTime: 12, errors: 2.3 },
  { center: 'Delhi Hub', processed: 7800, capacity: 9000, efficiency: 86.7, avgTime: 14, errors: 3.1 },
  { center: 'Bangalore Tech', processed: 9200, capacity: 10000, efficiency: 92, avgTime: 10, errors: 1.8 },
  { center: 'Kolkata Main', processed: 6500, capacity: 9000, efficiency: 72.2, avgTime: 18, errors: 5.2 },
  { center: 'Chennai South', processed: 7900, capacity: 9000, efficiency: 87.8, avgTime: 13, errors: 2.7 },
  { center: 'Hyderabad', processed: 8100, capacity: 9000, efficiency: 90, avgTime: 11, errors: 2.1 },
  { center: 'Rural Unit A', processed: 3400, capacity: 8000, efficiency: 42.5, avgTime: 25, errors: 8.9 },
  { center: 'Rural Unit B', processed: 2900, capacity: 8000, efficiency: 36.2, avgTime: 28, errors: 12.4 },
];
const updateTypeData = [
  { type: 'Biometric', count: 145000, avgTime: 8, successRate: 94.5 },
  { type: 'Address', count: 132000, avgTime: 6, successRate: 97.2 },
  { type: 'Mobile/Email', count: 98000, avgTime: 4, successRate: 98.9 },
  { type: 'Demographic', count: 87000, avgTime: 7, successRate: 96.3 },
  { type: 'Photo', count: 76000, avgTime: 9, successRate: 91.8 },
];

const errorCategories = [
  { category: 'Biometric Mismatch', count: 4200, color: '#EF4444' },
  { category: 'Document Issues', count: 3800, color: '#F59E0B' },
  { category: 'System Errors', count: 2100, color: '#8B5CF6' },
  { category: 'Incomplete Data', count: 2900, color: '#EC4899' },
  { category: 'Network Issues', count: 1800, color: '#6366F1' },
];

const processingTimelineData = [
  { month: 'Jan', avgTime: 14.5 },
  { month: 'Feb', avgTime: 14.2 },
  { month: 'Mar', avgTime: 13.8 },
  { month: 'Apr', avgTime: 15.6 }, // Peak season slowdown
  { month: 'May', avgTime: 13.1 },
  { month: 'Jun', avgTime: 12.8 },
  { month: 'Jul', avgTime: 12.4 },
  { month: 'Aug', avgTime: 11.9 },
];

const efficiencyScatterData = centerEfficiency.map(center => ({
  efficiency: center.efficiency,
  avgTime: center.avgTime,
  name: center.center,
  size: center.processed / 100,
}));

export function OperationalMetrics() {
  const totalProcessed = centerEfficiency.reduce((sum, center) => sum + center.processed, 0);
  const totalCapacity = centerEfficiency.reduce((sum, center) => sum + center.capacity, 0);
  const overallEfficiency = (totalProcessed / totalCapacity * 100).toFixed(1);
  const avgProcessingTime = (centerEfficiency.reduce((sum, center) => sum + center.avgTime, 0) / centerEfficiency.length).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Overall Efficiency</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{overallEfficiency}%</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-3 text-sm text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>3.2% improvement</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Processing Time</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{avgProcessingTime} min</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-3 text-sm text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>18% faster than target</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Success Rate</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">95.7%</p>
            </div>
            <div className="bg-indigo-100 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-3 text-sm text-gray-600">
            <span>4.3% error rate</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Centers</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">8</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-3 text-sm text-orange-600">
            <AlertTriangle className="w-4 h-4" />
            <span>2 underperforming</span>
          </div>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Center Efficiency */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Center-wise Efficiency Score</h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={centerEfficiency} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} />
              <YAxis dataKey="center" type="category" tick={{ fontSize: 11 }} width={120} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                formatter={(value: number) => [`${value}%`, 'Efficiency']}
              />
              <Bar dataKey="efficiency" radius={[0, 8, 8, 0]}>
                {centerEfficiency.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.efficiency >= 80 ? '#10B981' : entry.efficiency >= 60 ? '#F59E0B' : '#EF4444'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Update Types Analysis */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Update Request Types & Success Rate</h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={updateTypeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="type" tick={{ fontSize: 11 }} angle={-20} textAnchor="end" height={80} />
              <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} domain={[90, 100]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
              />
              <Legend />
              <Bar yAxisId="left" dataKey="count" fill="#6366F1" name="Request Count" radius={[8, 8, 0, 0]} />
              <Line yAxisId="right" type="monotone" dataKey="successRate" stroke="#10B981" strokeWidth={3} name="Success Rate %" dot={{ fill: '#10B981', r: 5 }} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Error Categories */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Error/Rejection Categories</h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={errorCategories}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="category" tick={{ fontSize: 11 }} angle={-20} textAnchor="end" height={100} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                formatter={(value: number) => [value.toLocaleString(), 'Errors']}
              />
              <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                {errorCategories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
            <p className="text-sm text-red-800">
              <span className="font-semibold">Action Required:</span> Biometric mismatch training for operators needed
            </p>
          </div>
        </div>

        {/* Processing Time Trend */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Processing Time Trend</h3>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={processingTimelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} domain={[10, 17]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                formatter={(value: number) => [`${value} min`, 'Avg Time']}
              />
              <Line 
                type="monotone" 
                dataKey="avgTime" 
                stroke="#8B5CF6" 
                strokeWidth={3}
                dot={{ fill: '#8B5CF6', r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-800">
              <span className="font-semibold">Improvement:</span> 18% reduction in processing time since January
            </p>
          </div>
        </div>

        {/* Efficiency vs Speed Scatter */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Center Performance: Efficiency vs Processing Time</h3>
          <ResponsiveContainer width="100%" height={320}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                type="number" 
                dataKey="efficiency" 
                name="Efficiency" 
                unit="%" 
                tick={{ fontSize: 12 }}
                label={{ value: 'Efficiency (%)', position: 'insideBottom', offset: -5, fontSize: 12 }}
              />
              <YAxis 
                type="number" 
                dataKey="avgTime" 
                name="Avg Time" 
                unit=" min"
                tick={{ fontSize: 12 }}
                label={{ value: 'Processing Time (min)', angle: -90, position: 'insideLeft', fontSize: 12 }}
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                formatter={(value: number, name: string) => {
                  if (name === 'Avg Time') return [`${value} min`, 'Processing Time'];
                  if (name === 'Efficiency') return [`${value}%`, 'Efficiency'];
                  return [value, name];
                }}
              />
              <Scatter data={efficiencyScatterData} fill="#4F46E5">
                {efficiencyScatterData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={entry.efficiency >= 80 && entry.avgTime <= 15 ? '#10B981' : 
                          entry.efficiency < 50 || entry.avgTime > 20 ? '#EF4444' : '#F59E0B'}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
          <div className="mt-4 flex gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-600">High Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span className="text-xs text-gray-600">Moderate Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-xs text-gray-600">Needs Improvement</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Center Performance Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Detailed Center Performance Metrics</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Center Name</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Processed</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Capacity</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Efficiency</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Avg Time</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Error Rate</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {centerEfficiency
                .sort((a, b) => b.efficiency - a.efficiency)
                .map((center, index) => (
                  <tr key={center.center} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">{center.center}</td>
                    <td className="text-right py-3 px-4 text-sm text-gray-900">{center.processed.toLocaleString()}</td>
                    <td className="text-right py-3 px-4 text-sm text-gray-600">{center.capacity.toLocaleString()}</td>
                    <td className="text-right py-3 px-4 text-sm font-semibold text-gray-900">{center.efficiency}%</td>
                    <td className="text-right py-3 px-4 text-sm text-gray-900">{center.avgTime} min</td>
                    <td className="text-right py-3 px-4 text-sm text-gray-900">{center.errors}%</td>
                    <td className="text-center py-3 px-4">
                      {center.efficiency >= 80 && center.errors < 4 && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                          <CheckCircle className="w-3 h-3" />
                          Excellent
                        </span>
                      )}
                      {center.efficiency >= 60 && center.efficiency < 80 && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                          <Activity className="w-3 h-3" />
                          Good
                        </span>
                      )}
                      {center.efficiency < 60 && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                          <XCircle className="w-3 h-3" />
                          Action Needed
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
          <div className="flex items-start gap-3">
            <div className="bg-red-100 p-2 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h4 className="font-semibold text-red-900 mb-2">Critical: Rural Units Underperforming</h4>
              <p className="text-sm text-red-800 mb-3">
                Rural Unit A (42.5%) and Rural Unit B (36.2%) showing critical efficiency issues with high error rates.
              </p>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Deploy additional trained staff</li>
                <li>• Upgrade biometric equipment</li>
                <li>• Implement intensive training programs</li>
                <li>• Consider infrastructure improvements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-2">Best Practices: Bangalore Tech Center</h4>
              <p className="text-sm text-green-800 mb-3">
                Achieving 92% efficiency with 10-minute avg processing time and only 1.8% error rate.
              </p>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Replicate streamlined workflow</li>
                <li>• Share training materials with other centers</li>
                <li>• Document SOPs for best practices</li>
                <li>• Use as benchmark for performance targets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
