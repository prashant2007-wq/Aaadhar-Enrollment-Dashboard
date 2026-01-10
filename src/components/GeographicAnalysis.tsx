import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MapPin, TrendingDown, TrendingUp, Users } from 'lucide-react';

const districtData = [
  { district: 'Mumbai', enrolments: 245000, population: 320000, coverage: 76.5, trend: 'up' },
  { district: 'Delhi NCR', enrolments: 198000, population: 280000, coverage: 70.7, trend: 'up' },
  { district: 'Bangalore', enrolments: 176000, population: 250000, coverage: 70.4, trend: 'stable' },
  { district: 'Kolkata', enrolments: 142000, population: 230000, coverage: 61.7, trend: 'down' },
  { district: 'Chennai', enrolments: 156000, population: 210000, coverage: 74.3, trend: 'up' },
  { district: 'Rural UP', enrolments: 89000, population: 380000, coverage: 23.4, trend: 'down' },
  { district: 'Rural Bihar', enrolments: 67000, population: 340000, coverage: 19.7, trend: 'down' },
  { district: 'Hyderabad', enrolments: 134000, population: 190000, coverage: 70.5, trend: 'stable' },
];

const urbanRuralData = [
  { category: 'Urban', enrolments: 1200000, target: 1400000 },
  { category: 'Semi-Urban', enrolments: 780000, target: 950000 },
  { category: 'Rural', enrolments: 456000, target: 1200000 },
];

const migrationData = [
  { month: 'Jan', addressUpdates: 12400 },
  { month: 'Feb', addressUpdates: 13200 },
  { month: 'Mar', addressUpdates: 15800 },
  { month: 'Apr', addressUpdates: 18900 },
  { month: 'May', addressUpdates: 16700 },
  { month: 'Jun', addressUpdates: 14300 },
  { month: 'Jul', addressUpdates: 21500 },
  { month: 'Aug', addressUpdates: 19800 },
];

const stateDistribution = [
  { name: 'Maharashtra', value: 245000, color: '#4F46E5' },
  { name: 'Delhi', value: 198000, color: '#7C3AED' },
  { name: 'Karnataka', value: 176000, color: '#2563EB' },
  { name: 'West Bengal', value: 142000, color: '#0891B2' },
  { name: 'Tamil Nadu', value: 156000, color: '#059669' },
  { name: 'Others', value: 283000, color: '#64748B' },
];

export function GeographicAnalysis() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Enrolments</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">1.2M+</p>
            </div>
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-3 text-sm text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>12% from last quarter</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Coverage Rate</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">68.4%</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-3 text-sm text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>5.2% increase</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Underserved Areas</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">47</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <TrendingDown className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-3 text-sm text-orange-600">
            <TrendingDown className="w-4 h-4" />
            <span>Priority intervention needed</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Migration Updates</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">132K</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-3 text-sm text-blue-600">
            <TrendingUp className="w-4 h-4" />
            <span>Address changes YTD</span>
          </div>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* District Coverage Analysis */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">District-wise Coverage Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={districtData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="district" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                formatter={(value: number) => [`${value}%`, 'Coverage']}
              />
              <Bar dataKey="coverage" fill="#4F46E5" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
            <p className="text-sm text-red-800">
              <span className="font-semibold">Alert:</span> Rural UP and Bihar showing critical coverage gaps (&lt;25%)
            </p>
          </div>
        </div>

        {/* State Distribution */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">State-wise Enrolment Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stateDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {stateDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [value.toLocaleString(), 'Enrolments']} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Urban vs Rural Analysis */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Urban vs Rural Enrolment Gap</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={urbanRuralData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis dataKey="category" type="category" tick={{ fontSize: 12 }} width={100} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                formatter={(value: number) => value.toLocaleString()}
              />
              <Legend />
              <Bar dataKey="enrolments" fill="#10B981" name="Current Enrolments" radius={[0, 8, 8, 0]} />
              <Bar dataKey="target" fill="#E5E7EB" name="Target" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {urbanRuralData.map((item) => (
              <div key={item.category} className="text-center p-2 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600">{item.category} Gap</p>
                <p className="text-sm font-semibold text-gray-900">
                  {((1 - item.enrolments / item.target) * 100).toFixed(1)}%
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Migration Patterns */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Migration Trends (Address Updates)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={migrationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                formatter={(value: number) => [value.toLocaleString(), 'Updates']}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="addressUpdates" 
                stroke="#7C3AED" 
                strokeWidth={3}
                name="Address Updates"
                dot={{ fill: '#7C3AED', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Peak Period:</span> July shows highest migration activity (21.5K updates)
            </p>
          </div>
        </div>
      </div>

      {/* Priority Districts Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Priority Intervention Districts</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">District</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Enrolments</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Population</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Coverage</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Trend</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Priority</th>
              </tr>
            </thead>
            <tbody>
              {districtData
                .sort((a, b) => a.coverage - b.coverage)
                .map((district, index) => (
                  <tr key={district.district} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">{district.district}</td>
                    <td className="text-right py-3 px-4 text-sm text-gray-900">{district.enrolments.toLocaleString()}</td>
                    <td className="text-right py-3 px-4 text-sm text-gray-900">{district.population.toLocaleString()}</td>
                    <td className="text-right py-3 px-4 text-sm text-gray-900">{district.coverage}%</td>
                    <td className="text-center py-3 px-4">
                      {district.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-600 mx-auto" />}
                      {district.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-600 mx-auto" />}
                      {district.trend === 'stable' && <div className="w-4 h-0.5 bg-gray-400 mx-auto" />}
                    </td>
                    <td className="text-center py-3 px-4">
                      {district.coverage < 30 && (
                        <span className="inline-flex px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                          Critical
                        </span>
                      )}
                      {district.coverage >= 30 && district.coverage < 60 && (
                        <span className="inline-flex px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
                          High
                        </span>
                      )}
                      {district.coverage >= 60 && district.coverage < 75 && (
                        <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                          Medium
                        </span>
                      )}
                      {district.coverage >= 75 && (
                        <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                          Low
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
