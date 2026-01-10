import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Users, Calendar, Clock, TrendingUp } from 'lucide-react';

const ageGroupData = [
  { age: '0-10', enrolled: 145000, total: 180000, coverage: 80.5 },
  { age: '11-20', enrolled: 198000, total: 220000, coverage: 90.0 },
  { age: '21-30', enrolled: 234000, total: 250000, coverage: 93.6 },
  { age: '31-40', enrolled: 189000, total: 210000, coverage: 90.0 },
  { age: '41-50', enrolled: 156000, total: 180000, coverage: 86.7 },
  { age: '51-60', enrolled: 123000, total: 150000, coverage: 82.0 },
  { age: '60+', enrolled: 98000, total: 160000, coverage: 61.2 },
];

const genderData = [
  { category: 'Male', value: 620000, color: '#3B82F6' },
  { category: 'Female', value: 580000, color: '#EC4899' },
  { category: 'Other', value: 43000, color: '#8B5CF6' },
];

const seasonalData = [
  { month: 'Jan', enrolments: 89000 },
  { month: 'Feb', enrolments: 92000 },
  { month: 'Mar', enrolments: 145000 }, // School admission period
  { month: 'Apr', enrolments: 178000 }, // Exam season
  { month: 'May', enrolments: 134000 },
  { month: 'Jun', enrolments: 98000 },
  { month: 'Jul', enrolments: 102000 },
  { month: 'Aug', enrolments: 87000 },
  { month: 'Sep', enrolments: 93000 },
  { month: 'Oct', enrolments: 112000 },
  { month: 'Nov', enrolments: 156000 }, // Festival season
  { month: 'Dec', enrolments: 98000 },
];

const peakHoursData = [
  { hour: '9 AM', count: 12400 },
  { hour: '10 AM', count: 18900 },
  { hour: '11 AM', count: 23400 },
  { hour: '12 PM', count: 19800 },
  { hour: '1 PM', count: 14500 },
  { hour: '2 PM', count: 16700 },
  { hour: '3 PM', count: 21200 },
  { hour: '4 PM', count: 18300 },
  { hour: '5 PM', count: 15600 },
];

const weekdayData = [
  { day: 'Mon', count: 145000 },
  { day: 'Tue', count: 152000 },
  { day: 'Wed', count: 148000 },
  { day: 'Thu', count: 156000 },
  { day: 'Fri', count: 167000 },
  { day: 'Sat', count: 189000 }, // Weekend peak
  { day: 'Sun', count: 123000 },
];

const participationRadar = [
  { category: 'Urban Youth', value: 92 },
  { category: 'Rural Youth', value: 45 },
  { category: 'Urban Women', value: 85 },
  { category: 'Rural Women', value: 38 },
  { category: 'Urban Elderly', value: 68 },
  { category: 'Rural Elderly', value: 28 },
];

export function DemographicInsights() {
  const totalEnrolments = genderData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Enrolled</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">1.24M</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-600">
            Across all demographics
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Gender Parity</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">93.5%</p>
            </div>
            <div className="bg-pink-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-pink-600" />
            </div>
          </div>
          <div className="mt-3 text-sm text-green-600">
            Female to Male ratio improving
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Peak Season</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">Apr</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-600">
            178K enrolments (exam season)
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Peak Hours</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">11 AM</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-600">
            23.4K daily average visits
          </div>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Age-wise Coverage */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Age-wise Enrolment Coverage</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ageGroupData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="age" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="enrolled" fill="#10B981" name="Enrolled" radius={[8, 8, 0, 0]} />
              <Bar dataKey="total" fill="#E5E7EB" name="Total Population" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
              <p className="text-xs text-red-600 font-semibold">Gap Alert</p>
              <p className="text-sm text-red-800 mt-1">60+ age group: 38.8% gap</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-xs text-yellow-600 font-semibold">Gap Alert</p>
              <p className="text-sm text-yellow-800 mt-1">0-10 age group: 19.5% gap</p>
            </div>
          </div>
        </div>

        {/* Gender Distribution */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Gender-based Participation</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ category, value }) => `${category}: ${((value / totalEnrolments) * 100).toFixed(1)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [value.toLocaleString(), 'Enrolments']} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {genderData.map((item) => (
              <div key={item.category} className="text-center p-2 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 rounded-full mx-auto mb-2" style={{ backgroundColor: item.color }}></div>
                <p className="text-xs text-gray-600">{item.category}</p>
                <p className="text-sm font-semibold text-gray-900">{item.value.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Patterns */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Seasonal Enrolment Patterns</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={seasonalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                formatter={(value: number) => [value.toLocaleString(), 'Enrolments']}
              />
              <Line 
                type="monotone" 
                dataKey="enrolments" 
                stroke="#8B5CF6" 
                strokeWidth={3}
                dot={{ fill: '#8B5CF6', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 flex gap-3">
            <div className="flex-1 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-xs text-purple-600 font-semibold">Peak Months</p>
              <p className="text-sm text-purple-800 mt-1">Mar-Apr, Nov (Academic & Festivals)</p>
            </div>
          </div>
        </div>

        {/* Participation Radar */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Participation Rate by Segment</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={participationRadar}>
              <PolarGrid stroke="#E5E7EB" />
              <PolarAngleAxis dataKey="category" tick={{ fontSize: 11 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 11 }} />
              <Radar name="Participation %" dataKey="value" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-sm text-orange-800">
              <span className="font-semibold">Key Insight:</span> Rural segments show 50%+ lower participation
            </p>
          </div>
        </div>

        {/* Peak Hours Analysis */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Peak Hours Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={peakHoursData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                formatter={(value: number) => [value.toLocaleString(), 'Visits']}
              />
              <Bar dataKey="count" fill="#F59E0B" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Resource Optimization:</span> Staff 11 AM - 3 PM for peak efficiency
            </p>
          </div>
        </div>

        {/* Weekday Patterns */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Enrolment Pattern</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weekdayData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                formatter={(value: number) => [value.toLocaleString(), 'Enrolments']}
              />
              <Bar dataKey="count" fill="#14B8A6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-xs text-green-600 font-semibold">Peak Day</p>
              <p className="text-sm text-green-800 mt-1">Saturday: 189K enrolments</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-600 font-semibold">Lowest Day</p>
              <p className="text-sm text-gray-800 mt-1">Sunday: 123K enrolments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Demographic Gaps Summary */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Critical Demographic Gaps - Action Required</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border border-red-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-red-900">Elderly Population (60+)</p>
                <p className="text-2xl font-bold text-red-600 mt-2">38.8%</p>
                <p className="text-xs text-red-700 mt-1">Coverage Gap</p>
              </div>
              <TrendingUp className="w-8 h-8 text-red-400 rotate-180" />
            </div>
            <div className="mt-3 pt-3 border-t border-red-200">
              <p className="text-xs text-red-800">
                <span className="font-semibold">Action:</span> Deploy mobile units, home visits, simplified process
              </p>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-orange-900">Children (0-10)</p>
                <p className="text-2xl font-bold text-orange-600 mt-2">19.5%</p>
                <p className="text-xs text-orange-700 mt-1">Coverage Gap</p>
              </div>
              <TrendingUp className="w-8 h-8 text-orange-400 rotate-180" />
            </div>
            <div className="mt-3 pt-3 border-t border-orange-200">
              <p className="text-xs text-orange-800">
                <span className="font-semibold">Action:</span> School camps, parent awareness programs
              </p>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border border-pink-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-pink-900">Rural Women</p>
                <p className="text-2xl font-bold text-pink-600 mt-2">62%</p>
                <p className="text-xs text-pink-700 mt-1">Lower Participation</p>
              </div>
              <TrendingUp className="w-8 h-8 text-pink-400 rotate-180" />
            </div>
            <div className="mt-3 pt-3 border-t border-pink-200">
              <p className="text-xs text-pink-800">
                <span className="font-semibold">Action:</span> Female staff, community centers, flexible hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
