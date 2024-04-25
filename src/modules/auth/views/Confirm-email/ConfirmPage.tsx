const ConfirmationPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="p-8 bg-orange-500 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-white mb-4">
          Confirm Your Email
        </h1>
        <p className="text-white mb-6">
          Please confirm your email by clicking the link in the email we sent to
          you.
        </p>
        <button className="bg-white text-orange-500 px-4 py-2 rounded-md font-semibold hover:bg-orange-400 hover:text-white">
          Resend Confirmation Email
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
