import { useState } from 'react';
import { Database, Download, Upload, Trash2, Plus, Edit, Search, Filter } from 'lucide-react';
import { database, EnrolmentRecord } from '../lib/database';

export function DatabaseManagement() {
  const [records, setRecords] = useState<EnrolmentRecord[]>(database.getAllEnrolmentRecords());
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'Completed' | 'Pending' | 'Rejected'>('all');
  const [selectedRecord, setSelectedRecord] = useState<EnrolmentRecord | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.aadhaarNumber.includes(searchTerm) ||
                         record.district.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || record.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      database.deleteEnrolmentRecord(id);
      setRecords(database.getAllEnrolmentRecords());
    }
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(records, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `aadhaar-records-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const stats = {
    total: records.length,
    completed: records.filter(r => r.status === 'Completed').length,
    pending: records.filter(r => r.status === 'Pending').length,
    rejected: records.filter(r => r.status === 'Rejected').length,
    avgProcessingTime: (records.reduce((sum, r) => sum + r.processingTime, 0) / records.length).toFixed(1),
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-600">Total Records</p>
          <p className="text-2xl font-semibold text-gray-900 mt-1">{stats.total}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-600">Completed</p>
          <p className="text-2xl font-semibold text-green-600 mt-1">{stats.completed}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-2xl font-semibold text-orange-600 mt-1">{stats.pending}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-600">Rejected</p>
          <p className="text-2xl font-semibold text-red-600 mt-1">{stats.rejected}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-600">Avg Time (min)</p>
          <p className="text-2xl font-semibold text-indigo-600 mt-1">{stats.avgProcessingTime}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-[300px]">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, Aadhaar, or district..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
              >
                <option value="all">All Status</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export Data
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Record
            </button>
          </div>
        </div>
      </div>

      {/* Records Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Aadhaar</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Age</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Gender</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">District</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Center</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Time (min)</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.slice(0, 50).map((record) => (
                <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900 font-mono">{record.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-900 font-mono">{record.aadhaarNumber}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{record.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{record.age}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{record.gender}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{record.district}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{record.centerName}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {new Date(record.enrolmentDate).toLocaleDateString()}
                  </td>
                  <td className="text-center py-3 px-4">
                    {record.status === 'Completed' && (
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        Completed
                      </span>
                    )}
                    {record.status === 'Pending' && (
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
                        Pending
                      </span>
                    )}
                    {record.status === 'Rejected' && (
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                        Rejected
                      </span>
                    )}
                  </td>
                  <td className="text-right py-3 px-4 text-sm text-gray-900">{record.processingTime}</td>
                  <td className="text-center py-3 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => setSelectedRecord(record)}
                        className="p-1 text-indigo-600 hover:bg-indigo-50 rounded transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(record.id)}
                        className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredRecords.length > 50 && (
          <div className="p-4 bg-gray-50 border-t border-gray-200 text-center text-sm text-gray-600">
            Showing 50 of {filteredRecords.length} records. Use search or filters to narrow results.
          </div>
        )}
      </div>

      {/* Database Info */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
        <div className="flex items-start gap-3">
          <div className="bg-indigo-100 p-2 rounded-lg">
            <Database className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h4 className="font-semibold text-indigo-900 mb-2">Database Information</h4>
            <div className="text-sm text-indigo-800 space-y-1">
              <p>• Storage: Browser LocalStorage (for demo purposes)</p>
              <p>• All data is stored locally in your browser</p>
              <p>• Can export data as JSON for backup or migration</p>
              <p>• Ready to integrate with Supabase/PostgreSQL for production</p>
              <p>• Current database size: ~{(JSON.stringify(records).length / 1024).toFixed(2)} KB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
