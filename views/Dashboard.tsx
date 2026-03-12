
import React from 'react';
import { CURRICULUM } from '../constants';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  onResume: () => void;
}

const data = [
  { name: 'Ch 1', score: 85 },
  { name: 'Ch 2', score: 78 },
  { name: 'Ch 3', score: 92 },
  { name: 'Ch 4', score: 70 },
];

const Dashboard: React.FC<DashboardProps> = ({ onResume }) => {
  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-3xl font-bold text-slate-900">Welcome back, Scholar!</h2>
        <p className="text-slate-500">Mastering Larson 2007: California Edition</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            <span className="text-sm font-medium text-indigo-600">Current Chapter</span>
            <h3 className="text-xl font-bold mt-1">Ch 4: Trigonometry</h3>
          </div>
          <button 
            onClick={onResume}
            className="mt-4 text-left w-full p-3 bg-indigo-50 rounded-lg text-indigo-700 text-sm font-semibold hover:bg-indigo-100 transition-colors"
          >
            Resume Lesson 4.2 →
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <span className="text-sm font-medium text-emerald-600">Mastery Points</span>
          <div className="flex items-end space-x-2 mt-1">
            <span className="text-3xl font-bold">1,450</span>
            <span className="text-slate-400 mb-1 text-sm">/ 3,000</span>
          </div>
          <p className="text-xs text-slate-500 mt-2">Top 15% in California Classrooms</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <span className="text-sm font-medium text-amber-600">Next Major Milestone</span>
          <h3 className="text-lg font-bold mt-1">Quarter 1 Review</h3>
          <p className="text-xs text-slate-500 mt-1">Cumulative Test (Ch 1-3) • 3 Days Away</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold mb-4">Quiz Performance History</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis hide domain={[0, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#4f46e5" strokeWidth={3} dot={{ r: 6, fill: '#4f46e5' }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold mb-4">CA Standards Progress</h3>
          <div className="space-y-4">
            {[
              { label: 'F-IF.7: Graphing Functions', p: 85 },
              { label: 'N-CN.7: Complex Roots', p: 60 },
              { label: 'F-TF.1: Radian Measures', p: 40 },
            ].map(std => (
              <div key={std.label}>
                <div className="justify-between flex text-xs font-medium mb-1">
                  <span>{std.label}</span>
                  <span>{std.p}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full" style={{ width: `${std.p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
