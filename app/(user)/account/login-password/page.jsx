'use client';
import { useForm } from 'react-hook-form';

const inputFields = [
  {
    id: 'currentPassword',
    label: 'Current Password',
    placeholder: 'Enter your current password',
    type: 'password',
  },
  {
    id: 'newPassword',
    label: 'New Password',
    placeholder: 'Enter your new password',
    type: 'password',
  },
  {
    id: 'confirmPassword',
    label: 'Confirm New Password',
    placeholder: 'Confirm your new password',
    type: 'password',
  },
];

export default function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // এখানে API কল বা অন্য লজিক হবে
  };

  // Confirm password মিলেছে কি না চেক করার জন্য
  const newPassword = watch('newPassword');

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-16 flex items-center gap-4">
            <a
              href="/account"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-gray-700"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </a>
            <h1 className="text-xl font-semibold text-gray-800">
              Change Login Password
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg p-6 ring-1 ring-black ring-opacity-5">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {inputFields.map(({ id, label, placeholder, type }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  {...register(id, {
                    required: `${label} is required`,
                    ...(id === 'confirmPassword' && {
                      validate: (value) =>
                        value === newPassword || 'Passwords do not match',
                    }),
                  })}
                  className={`border rounded-md w-full px-3 py-1 text-base outline-none focus:ring-2 focus:ring-primary ${
                    errors[id]
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-blue-500'
                  }`}
                />
                {errors[id] && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors[id].message}
                  </p>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-white rounded-lg font-medium hover:bg-yellow-500 transition-colors cursor-pointer"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
