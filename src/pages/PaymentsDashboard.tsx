import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CheckCircle, Clock, XCircle, RefreshCw, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const PaymentsDashboard = () => {
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshPayments = () => {
    setRefreshKey(prev => prev + 1);
  };

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/payments/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        
        console.log('API Response:', response); // Debug log

        const data = Array.isArray(response.data?.payments) 
          ? response.data.payments 
          : Array.isArray(response.data) 
            ? response.data 
            : [];
        
        setPayments(data);
      } catch (err) {
        console.error('Error fetching payments', err);
        toast.error('Failed to load payments');
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, [refreshKey]);

  const totalAmount = payments.reduce((sum, p) => sum + p.amount, 0);

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case 'success':
      case 'confirmed':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'failed':
      case 'rejected':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  if (loading) return (
    <div className="p-6 flex justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-green-600" />
    </div>
  );

  if (!loading && payments.length === 0) return (
    <div className="p-6 text-center">
      <p className="text-gray-500">No payments found</p>
      <button
        onClick={refreshPayments}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Refresh Payments
      </button>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Payment Dashboard</h1>
        <button
          onClick={refreshPayments}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* ... existing summary cards ... */}
      </div>

      {/* Payments Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-left">
          {/* ... existing table headers ... */}
          <tbody>
            {payments.map((p: any) => (
              <tr key={p._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">₦{p.amount.toLocaleString()}</td>
                <td className="px-4 py-2">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                      p.status
                    )}`}
                  >
                    {['success', 'confirmed'].includes(p.status.toLowerCase()) && <CheckCircle className="w-4 h-4 mr-1" />}
                    {p.status.toLowerCase() === 'pending' && <Clock className="w-4 h-4 mr-1" />}
                    {['failed', 'rejected'].includes(p.status.toLowerCase()) && <XCircle className="w-4 h-4 mr-1" />}
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-2">{p.reference || p._id}</td>
                <td className="px-4 py-2">{new Date(p.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsDashboard;