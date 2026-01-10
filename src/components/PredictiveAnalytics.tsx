import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, AlertCircle, Calendar, MapPin, Zap } from 'lucide-react';
const demandForecastData = [
  { month: 'Sep', actual: 93000, predicted: null, confidence: null },
  { month: 'Oct', actual: 112000, predicted: null, confidence: null },
  { month: 'Nov', actual: 156000, predicted: null, confidence: null },
  { month: 'Dec', actual: 98000, predicted: null, confidence: null },
  { month: 'Jan', actual: 89000, predicted: null, confidence: null },
  { month: 'Feb', actual: null, predicted: 95000, confidence: 92 },
  { month: 'Mar', actual: null, predicted: 142000, confidence: 88 }, // School admission season
  { month: 'Apr', actual: null, predicted: 175000, confidence: 85 }, // Exam season
  { month: 'May', actual: null, predicted: 128000, confidence: 87 },
  { month: 'Jun', actual: null, predicted: 96000, confidence: 90 },
];
const anomalyDetectionData = [
  { center: 'Mumbai Central', normalRange: '8000-9000', current: 8900, anomalyScore: 0, status: 'normal' },
  { center: 'Delhi Hub', normalRange: '7500-8500', current: 7800, anomalyScore: 0, status: 'normal' },
  { center: 'Bangalore Tech', normalRange: '8800-9500', current: 9200, anomalyScore: 0, status: 'normal' },
  { center: 'Kolkata Main', normalRange: '7000-8000', current: 6500, anomalyScore: 35, status: 'warning' },
  { center: 'Chennai South', normalRange: '7500-8500', current: 7900, anomalyScore: 0, status: 'normal' },
  { center: 'Hyderabad', normalRange: '7800-8800', current: 8100, anomalyScore: 0, status: 'normal' },
  { center: 'Rural Unit A', normalRange: '3000-4000', current: 1200, anomalyScore: 78, status: 'critical' },
  { center: 'Rural Unit B', normalRange: '2800-3800', current: 980, anomalyScore: 82, status: 'critical' },
];

const accessibilityScoreData = [
  { district: 'Mumbai', score: 87, mobileUnitsNeeded: 2, population: 320000 },
  { district: 'Delhi NCR', score: 82, mobileUnitsNeeded: 3, population: 280000 },
  { district: 'Bangalore', score: 85, mobileUnitsNeeded: 2, population: 250000 },
  { district: 'Kolkata', score: 68, mobileUnitsNeeded: 5, population: 230000 },
  { district: 'Chennai', score: 79, mobileUnitsNeeded: 3, population: 210000 },
  { district: 'Rural UP', score: 28, mobileUnitsNeeded: 15, population: 380000 },
  { district: 'Rural Bihar', score: 22, mobileUnitsNeeded: 18, population: 340000 },
  { district: 'Hyderabad', score: 81, mobileUnitsNeeded: 3, population: 190000 },
];

const resourceForecastData = [
  { month: 'Feb', staff: 145, equipment: 89, space: 78 },
  { month: 'Mar', staff: 178, equipment: 112, space: 95 },
  { month: 'Apr', staff: 212, equipment: 134, space: 108 },
  { month: 'May', staff: 165, equipment: 98, space: 82 },
  { month: 'Jun', staff: 148, equipment: 91, space: 79 },
];

const lifeEventPredictions = [
  { event: 'School Admissions', month: 'Mar-Apr', expectedIncrease: 78, impactedCenters: 12 },
  { event: 'Exam Season', month: 'Apr-May', expectedIncrease: 95, impactedCenters: 15 },
  { event: 'Festivals (Diwali)', month: 'Nov', expectedIncrease: 62, impactedCenters: 18 },
  { event: 'Tax Filing Season', month: 'Jul-Aug', expectedIncrease: 34, impactedCenters: 8 },
  { event: 'Govt Scheme Launch', month: 'Jan', expectedIncrease: 45, impactedCenters: 10 },
];

const fraudRiskData = [
  { week: 'Week 1', riskScore: 12, flaggedCases: 23 },
  { week: 'Week 2', riskScore: 15, flaggedCases: 28 },
  { week: 'Week 3', riskScore: 45, flaggedCases: 89 }, // Spike detected
  { week: 'Week 4', riskScore: 18, flaggedCases: 31 },
  { week: 'Week 5', riskScore: 14, flaggedCases: 25 },
  { week: 'Week 6', riskScore: 38, flaggedCases: 67 }, // Another spike
  { week: 'Week 7', riskScore: 16, flaggedCases: 29 },
  { week: 'Week 8', riskScore: 13, flaggedCases: 24 },
];

export function PredictiveAnalytics() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Forecast Accuracy</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">88.4%</p>
            </div>
            <div className="bg-indigo-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-600">
            ML model confidence
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Next Peak</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">Mar-Apr</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-3 text-sm text-orange-600">
            +95% demand expected
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Anomalies Detected</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">4</p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <div className="mt-3 text-sm text-red-600">
            2 critical, 2 warnings
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Mobile Units Needed</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">51</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-600">
            For underserved areas
          </div>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Demand Forecasting */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Enrolment Demand Forecast (6 Months)</h3>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={demandForecastData}>
              <defs>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                formatter={(value: number | null, name: string) => {
                  if (value === null) return null;
                  return [value.toLocaleString(), name === 'actual' ? 'Actual' : 'Predicted'];
                }}
              />
              <Legend />
              <Area type="monotone" dataKey="actual" stroke="#4F46E5" fillOpacity={1} fill="url(#colorActual)" strokeWidth={2} />
              <Area type="monotone" dataKey="predicted" stroke="#10B981" fillOpacity={1} fill="url(#colorPredicted)" strokeWidth={2} strokeDasharray="5 5" />
            </AreaChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-xs text-purple-600 font-semibold">Mar Forecast</p>
              <p className="text-sm text-purple-900 mt-1">142K (+59% from Feb)</p>
              <p className="text-xs text-purple-600 mt-1">School admissions peak</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-xs text-orange-600 font-semibold">Apr Forecast</p>
              <p className="text-sm text-orange-900 mt-1">175K (+23% from Mar)</p>
              <p className="text-xs text-orange-600 mt-1">Exam season rush</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs text-blue-600 font-semibold">Model Confidence</p>
              <p className="text-sm text-blue-900 mt-1">85-92%</p>
              <p className="text-xs text-blue-600 mt-1">High accuracy</p>
            </div>
          </div>
        </div>

        {/* Anomaly Detection */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Anomaly Detection Score</h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={anomalyDetectionData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} />
              <YAxis dataKey="center" type="category" tick={{ fontSize: 11 }} width={120} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                formatter={(value: number) => [`${value}`, 'Risk Score']}
              />
              <Bar dataKey="anomalyScore" radius={[0, 8, 8, 0]}>
                {anomalyDetectionData.map((entry, index) => (
                  <div key={`cell-${index}`}>
                    {entry.status === 'critical' && <rect fill="#EF4444" />}
                    {entry.status === 'warning' && <rect fill="#F59E0B" />}
                    {entry.status === 'normal' && <rect fill="#10B981" />}
                  </div>
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            <div className="p-2 bg-red-50 rounded-lg border border-red-200 text-xs text-red-800">
              <span className="font-semibold">Critical:</span> Rural units showing 70%+ deviation from normal patterns
            </div>
          </div>
        </div>

        {/* Accessibility Scoring */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Accessibility Score by District</h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={accessibilityScoreData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="district" tick={{ fontSize: 11 }} angle={-20} textAnchor="end" height={80} />
              <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
              />
              <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                {accessibilityScoreData.map((entry, index) => (
                  <rect 
                    key={`cell-${index}`}
                    fill={entry.score >= 70 ? '#10B981' : entry.score >= 50 ? '#F59E0B' : '#EF4444'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Resource Requirements Forecast */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Resource Requirements Forecast</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={resourceForecastData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
              />
              <Legend />
              <Line type="monotone" dataKey="staff" stroke="#6366F1" strokeWidth={3} name="Staff Required" dot={{ r: 5 }} />
              <Line type="monotone" dataKey="equipment" stroke="#EC4899" strokeWidth={3} name="Equipment Units" dot={{ r: 5 }} />
              <Line type="monotone" dataKey="space" stroke="#10B981" strokeWidth={3} name="Space Needed (sq ft x100)" dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-800">
              <span className="font-semibold">Planning Alert:</span> Apr requires 212 staff (+46% from baseline), 134 equipment units
            </p>
          </div>
        </div>

        {/* Fraud Risk Monitoring */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Fraud Risk Pattern Detection</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={fraudRiskData}>
              <defs>
                <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="week" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
              />
              <Legend />
              <Area type="monotone" dataKey="riskScore" stroke="#EF4444" fillOpacity={1} fill="url(#colorRisk)" strokeWidth={2} name="Risk Score" />
              <Line type="monotone" dataKey="flaggedCases" stroke="#8B5CF6" strokeWidth={2} name="Flagged Cases" dot={{ r: 4 }} />
            </AreaChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
            <p className="text-sm text-red-800">
              <span className="font-semibold">Spikes Detected:</span> Week 3 & 6 show unusual patterns requiring investigation
            </p>
          </div>
        </div>
      </div>

      {/* Life Event Predictions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Life Event-Based Demand Predictions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Life Event</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Expected Period</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Expected Increase</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Impacted Centers</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Preparedness</th>
              </tr>
            </thead>
            <tbody>
              {lifeEventPredictions.map((event, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900">{event.event}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{event.month}</td>
                  <td className="text-right py-3 px-4 text-sm font-semibold text-orange-600">+{event.expectedIncrease}%</td>
                  <td className="text-right py-3 px-4 text-sm text-gray-900">{event.impactedCenters}</td>
                  <td className="text-center py-3 px-4">
                    {event.expectedIncrease >= 70 ? (
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                        <Zap className="w-3 h-3" />
                        High Priority
                      </span>
                    ) : event.expectedIncrease >= 50 ? (
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
                        <AlertCircle className="w-3 h-3" />
                        Medium
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                        Monitor
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Underserved Areas Prediction */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Mobile Unit Deployment Recommendations</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">District</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Accessibility Score</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Population</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Mobile Units Needed</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Priority</th>
              </tr>
            </thead>
            <tbody>
              {accessibilityScoreData
                .sort((a, b) => a.score - b.score)
                .map((district, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">{district.district}</td>
                    <td className="text-right py-3 px-4 text-sm font-semibold text-gray-900">{district.score}/100</td>
                    <td className="text-right py-3 px-4 text-sm text-gray-900">{district.population.toLocaleString()}</td>
                    <td className="text-right py-3 px-4 text-sm font-semibold text-indigo-600">{district.mobileUnitsNeeded}</td>
                    <td className="text-center py-3 px-4">
                      {district.score < 40 ? (
                        <span className="inline-flex px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                          Critical
                        </span>
                      ) : district.score < 70 ? (
                        <span className="inline-flex px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
                          High
                        </span>
                      ) : (
                        <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                          Moderate
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
