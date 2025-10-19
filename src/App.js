import React, { useState } from 'react';
import { Home, LayoutDashboard, Users, UserPlus, Building2, DollarSign, Calendar, TrendingUp, Activity, Plus, X, Edit2, Search, Filter } from 'lucide-react';

const HospitalERP = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  const [patients] = useState([
    { id: 1, name: '3alela', doctor: 'Dr. Slimen Labyedh', age: 58, diagnosis: 'Acid reflux', status: 'Discharged', avatar: '👨' },
    { id: 2, name: 'l3angour', doctor: 'Dr. Samir pessiron', age: 45, diagnosis: 'Diabetes', status: 'Active', avatar: '👨' },
    { id: 3, name: 'samara', doctor: 'Dr. Hamdi L3ou9', age: 52, diagnosis: 'Hypertension', status: 'Active', avatar: '👨' },
  ]);

  const [doctors] = useState([
    { id: 1, name: 'Dr. Samir pessiron', specialization: 'Cardiologist', department: 'Cardiology', salary: 300000, status: 'Available', avatar: '👨‍⚕️' },
    { id: 2, name: 'Dr. Slimen Labyedh', specialization: 'General Physician', department: 'General', salary: 250000, status: 'Busy', avatar: '👨‍⚕️' },
    { id: 3, name: 'Dr. Hamdi L3ou9', specialization: 'Orthopedic', department: 'Orthopedics', salary: 280000, status: 'Available', avatar: '👨‍⚕️' },
  ]);

  const [appointments] = useState([
    { id: 1, patient: 'l3angour', doctor: 'Dr. Samir pessiron', date: '04-Jul', time: '01:00 PM', reason: 'Heart Checkup' },
    { id: 2, patient: '3alela', doctor: 'Dr. Hamdi L3ou9', date: '04-Jun', time: '01:00 PM', reason: 'Joint Pain Followup' },
    { id: 3, patient: 'samara', doctor: 'Dr. Slimen Labyedh', date: '04-Oct', time: '01:00 PM', reason: 'General Checkup' },
  ]);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'doctors', label: 'Doctors', icon: Users },
    { id: 'patients', label: 'Patients', icon: UserPlus },
    { id: 'hospital', label: 'Hospital Info', icon: Building2 },
    { id: 'finance', label: 'Finance', icon: DollarSign },
  ];

  const StatCard = ({ icon: Icon, value, label, color = 'blue' }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl bg-${color}-100 flex items-center justify-center`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-800">{value}</div>
          <div className="text-sm text-gray-500">{label}</div>
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={UserPlus} value="17" label="Patients" color="purple" />
        <StatCard icon={DollarSign} value="30" label="Bills" color="blue" />
        <StatCard icon={Users} value="9" label="Doctors" color="green" />
        <StatCard icon={Activity} value="20" label="Staff" color="orange" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Patient Discharge Trend</h3>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-end justify-between gap-4">
            {[4.0, 3.0, 2.0, 2.0, 3.0, 2.0, 1.0].map((height, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-blue-500 rounded-t-lg transition-all hover:bg-blue-600" style={{ height: `${height * 25}%` }}></div>
                <span className="text-xs text-gray-500">
                  {['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'][idx]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Appointments</h3>
          <div className="space-y-3">
            {appointments.slice(0, 3).map(apt => (
              <div key={apt.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-800">{apt.patient}</div>
                    <div className="text-sm text-gray-500">{apt.doctor}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{apt.time}</div>
                  <div className="text-xs text-gray-500">{apt.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Satisfaction Score</h3>
            <p className="text-blue-100 mb-4">Diabetes management advice was helpful.</p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
          </div>
          <div className="text-6xl">👨‍⚕️</div>
        </div>
      </div>
    </div>
  );

  const renderDoctors = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Doctors Management</h2>
        <button 
          onClick={() => { setModalType('doctor'); setShowModal(true); }}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
        >
          <Plus className="w-5 h-5" />
          Add Doctor
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {doctors.map(doctor => (
          <div key={doctor.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                  {doctor.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                  <p className="text-sm text-gray-500">{doctor.specialization}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                doctor.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {doctor.status}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Department:</span>
                <span className="font-medium text-gray-800">{doctor.department}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Salary:</span>
                <span className="font-medium text-gray-800">DT {doctor.salary.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm">
                View Details
              </button>
              <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPatients = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Patients Management</h2>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search patients..." 
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={() => { setModalType('patient'); setShowModal(true); }}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            <Plus className="w-5 h-5" />
            Add Patient
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Patient</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Doctor</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Age</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Diagnosis</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {patients.map(patient => (
              <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                      {patient.avatar}
                    </div>
                    <span className="font-medium text-gray-800">{patient.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{patient.doctor}</td>
                <td className="px-6 py-4 text-gray-600">{patient.age}</td>
                <td className="px-6 py-4 text-gray-600">{patient.diagnosis}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    patient.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {patient.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderFinance = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Finance Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={UserPlus} value="17" label="Patient Count" color="purple" />
        <StatCard icon={Users} value="9" label="Doctor Count" color="blue" />
        <StatCard icon={DollarSign} value="713.8K" label="Total Bill Amount" color="green" />
        <StatCard icon={Activity} value="3.9K" label="Med Sale QTY" color="orange" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Revenue</h3>
          <div className="h-64 flex items-end justify-between gap-3">
            {[382, 889, 786, 768, 647, 556].map((value, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-blue-500 rounded-t-lg hover:bg-blue-600 transition-all" 
                  style={{ height: `${(value / 1000) * 100}%` }}
                ></div>
                <span className="text-xs text-gray-500">
                  {['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'][idx]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Medicine Stock Status</h3>
          <div className="space-y-3">
            {['Paracetamol', 'Ibuprofen', 'Omeprazole', 'Cetirizine', 'Loratadine'].map((med, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{med}</span>
                  <span className="text-gray-400">Stock / Sale</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 h-2 bg-blue-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600" style={{ width: `${80 - idx * 10}%` }}></div>
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-400" style={{ width: `${20 + idx * 10}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderHome = () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="text-8xl mb-8">🏥</div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">BeSafe</h1>
        <p className="text-xl text-gray-600 mb-8">Hospital Analysis Dashboard</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Overview', desc: 'All pages and insights', icon: '' },
            { label: 'Patient', desc: 'Patient information', icon: '' },
            { label: 'Doctor', desc: 'Doctor information', icon: '' },
            { label: 'Hospital', desc: 'Hospital and related info', icon: '' },
            { label: 'Finance', desc: 'Finance insights', icon: '' },
          ].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
              <p className="text-sm text-blue-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                C
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">BeSafe</h1>
                <p className="text-sm text-gray-500">Hospital Management System</p>
              </div>
            </div>

            <nav className="flex gap-2">
              {navItems.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                      currentPage === item.id
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'dashboard' && renderDashboard()}
        {currentPage === 'doctors' && renderDoctors()}
        {currentPage === 'patients' && renderPatients()}
        {currentPage === 'finance' && renderFinance()}
        {currentPage === 'hospital' && (
          <div className="text-center py-20">
            <Building2 className="w-20 h-20 mx-auto text-gray-300 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Hospital Information</h3>
            <p className="text-gray-600">Hospital details and management coming soon...</p>
          </div>
        )}
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Add New {modalType === 'doctor' ? 'Doctor' : 'Patient'}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
              {modalType === 'doctor' && (
                <>
                  <input type="text" placeholder="Specialization" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="text" placeholder="Department" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </>
              )}
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium shadow-lg shadow-blue-200">
                Save {modalType === 'doctor' ? 'Doctor' : 'Patient'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalERP;