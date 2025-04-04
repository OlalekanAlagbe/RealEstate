// // import React, { useState } from 'react';
// // import { X } from 'lucide-react';
// // import { supabase } from '../lib/supabase';
// // import toast from 'react-hot-toast';

// // interface PaymentModalProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// //   propertyId: number;
// //   propertyTitle: string;
// //   propertyPrice: string;
// // }

// // const PaymentModal: React.FC<PaymentModalProps> = ({
// //   isOpen,
// //   onClose,
// //   propertyId,
// //   propertyTitle,
// //   propertyPrice,
// // }) => {
// //   const [selectedBank, setSelectedBank] = useState('');
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const bankAccounts = [
// //     {
// //       name: 'Zenith Bank',
// //       accountNumber: '2020672034',
// //       accountName: 'Olalekan Joshua Alagbe'
// //     },
// //     {
// //       name: 'Kuda Bank',
// //       accountNumber: '2027167302',
// //       accountName: 'Olalekan Joshua Alagbe'
// //     }
// //   ];

// //   const handlePaymentSubmission = async () => {
// //     if (!selectedBank) {
// //       toast.error('Please select a bank account');
// //       return;
// //     }

// //     setIsSubmitting(true);
// //     try {
// //       const { data: { user } } = await supabase.auth.getUser();
      
// //       if (!user) {
// //         toast.error('Please login to make a payment');
// //         return;
// //       }

// //       const { error } = await supabase.from('payments').insert({
// //         user_id: user.id,
// //         property_id: propertyId,
// //         amount: parseFloat(propertyPrice.replace(/[^0-9.]/g, '')),
// //         bank_name: selectedBank,
// //         status: 'pending'
// //       });

// //       if (error) throw error;

// //       toast.success('Payment submitted successfully! Awaiting confirmation.');
// //       onClose();
// //     } catch (error) {
// //       console.error('Error submitting payment:', error);
// //       toast.error('Failed to submit payment. Please try again.');
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// //       <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
// //         <button
// //           onClick={onClose}
// //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
// //         >
// //           <X className="w-6 h-6" />
// //         </button>

// //         <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
        
// //         <div className="mb-6">
// //           <h3 className="font-semibold mb-2">Property Information:</h3>
// //           <p className="text-gray-600">{propertyTitle}</p>
// //           <p className="text-green-600 font-semibold">{propertyPrice}</p>
// //         </div>

// //         <div className="mb-6">
// //           <h3 className="font-semibold mb-2">Select Bank Account:</h3>
// //           <div className="space-y-3">
// //             {bankAccounts.map((bank) => (
// //               <div
// //                 key={bank.name}
// //                 className={`p-4 border rounded-lg cursor-pointer transition-colors ${
// //                   selectedBank === bank.name
// //                     ? 'border-green-500 bg-green-50'
// //                     : 'border-gray-200 hover:border-green-300'
// //                 }`}
// //                 onClick={() => setSelectedBank(bank.name)}
// //               >
// //                 <p className="font-medium">{bank.name}</p>
// //                 <p className="text-gray-600">Account: {bank.accountNumber}</p>
// //                 <p className="text-gray-600">Name: {bank.accountName}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="space-y-4">
// //           <button
// //             onClick={handlePaymentSubmission}
// //             disabled={isSubmitting}
// //             className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed"
// //           >
// //             {isSubmitting ? 'Submitting...' : 'Confirm Payment Made'}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default PaymentModal;




// import React, { useState } from 'react';
// import { X } from 'lucide-react';
// import toast from 'react-hot-toast';

// interface PaymentModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   propertyId: number;
//   propertyTitle: string;
//   propertyPrice: string;
// }

// const PaymentModal: React.FC<PaymentModalProps> = ({
//   isOpen,
//   onClose,
//   propertyId,
//   propertyTitle,
//   propertyPrice,
// }) => {
//   const [selectedBank, setSelectedBank] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const bankAccounts = [
//     {
//       name: 'Zenith Bank',
//       accountNumber: '2020672034',
//       accountName: 'Olalekan Joshua Alagbe'
//     },
//     {
//       name: 'Kuda Bank',
//       accountNumber: '2027167302',
//       accountName: 'Olalekan Joshua Alagbe'
//     }
//   ];

//   const handlePaymentSubmission = async () => {
//     if (!selectedBank) {
//       toast.error('Please select a bank account');
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       // Get user token (assuming you're using JWT)
//       const token = localStorage.getItem('token'); // or your auth token storage method
//       console.log(token)
//       if (!token) {
//         toast.error('Please login to make a payment');
//         return;
//       }

//       const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/payments`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           property_id: propertyId,
//           amount: parseFloat(propertyPrice.replace(/[^0-9.]/g, '')),
//           bank_name: selectedBank,
//           status: 'pending'
//         })
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Failed to submit payment');
//       }

//       toast.success('Payment submitted successfully! Awaiting confirmation.');
//       onClose();
//     } catch (error) {
//       console.error('Error submitting payment:', error);
//       toast.error(error.message || 'Failed to submit payment. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//         >
//           <X className="w-6 h-6" />
//         </button>

//         <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
        
//         <div className="mb-6">
//           <h3 className="font-semibold mb-2">Property Information:</h3>
//           <p className="text-gray-600">{propertyTitle}</p>
//           <p className="text-green-600 font-semibold">{propertyPrice}</p>
//         </div>

//         <div className="mb-6">
//           <h3 className="font-semibold mb-2">Select Bank Account:</h3>
//           <div className="space-y-3">
//             {bankAccounts.map((bank) => (
//               <div
//                 key={bank.name}
//                 className={`p-4 border rounded-lg cursor-pointer transition-colors ${
//                   selectedBank === bank.name
//                     ? 'border-green-500 bg-green-50'
//                     : 'border-gray-200 hover:border-green-300'
//                 }`}
//                 onClick={() => setSelectedBank(bank.name)}
//               >
//                 <p className="font-medium">{bank.name}</p>
//                 <p className="text-gray-600">Account: {bank.accountNumber}</p>
//                 <p className="text-gray-600">Name: {bank.accountName}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="space-y-4">
//           <button
//             onClick={handlePaymentSubmission}
//             disabled={isSubmitting}
//             className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed"
//           >
//             {isSubmitting ? 'Submitting...' : 'Confirm Payment Made'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PaymentModal;
































import React, { useState } from 'react';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyId: number; // Matches your schema's property_id (number)
  propertyTitle: string;
  propertyPrice: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  propertyId,
  propertyTitle,
  propertyPrice,
}) => {
  const [selectedBank, setSelectedBank] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bankAccounts = [
    {
      name: 'Zenith Bank',
      accountNumber: '2020672034',
      accountName: 'Olalekan Joshua Alagbe'
    },
    {
      name: 'Kuda Bank',
      accountNumber: '2027167302',
      accountName: 'Olalekan Joshua Alagbe'
    }
  ];

  const handlePaymentSubmission = async () => {
    if (!selectedBank) {
      toast.error('Please select a bank account');
      return;
    }

    setIsSubmitting(true);
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        toast.error('Please login to make a payment');
        return;
      }

      // Prepare data exactly matching your schema
      const paymentData = {
        propertyId: propertyId, // Number as expected
        amount: parseFloat(propertyPrice.replace(/[^0-9.]/g, '')), // Convert to number
        bankName: selectedBank, // String as expected
        // status will be defaulted to 'pending' by your backend
      };

      console.log(paymentData)

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/payments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit payment');
      }

      toast.success('Payment submitted successfully! Awaiting confirmation.');
      onClose();
    } catch (error) {
      console.error('Error submitting payment:', error);
      toast.error(error.message || 'Failed to submit payment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Property Information:</h3>
          <p className="text-gray-600">{propertyTitle}</p>
          <p className="text-green-600 font-semibold">{propertyPrice}</p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Select Bank Account:</h3>
          <div className="space-y-3">
            {bankAccounts.map((bank) => (
              <div
                key={bank.name}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedBank === bank.name
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
                onClick={() => setSelectedBank(bank.name)}
              >
                <p className="font-medium">{bank.name}</p>
                <p className="text-gray-600">Account: {bank.accountNumber}</p>
                <p className="text-gray-600">Name: {bank.accountName}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={handlePaymentSubmission}
            disabled={isSubmitting}
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Confirm Payment Made'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;