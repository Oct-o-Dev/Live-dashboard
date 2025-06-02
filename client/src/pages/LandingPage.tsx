export const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to EventDash</h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        EventDash helps developers and teams monitor live events from their system in real-time.
        Track events like API calls, user interactions, or sensor signals.
      </p>

      <div className="bg-gray-100 p-6 rounded-xl w-full max-w-3xl mb-6">
        <h2 className="text-2xl font-semibold mb-2">🔍 Try Our Dashboard</h2>
        <p className="mb-4 text-gray-600">
          Get real-time insights instantly.
        </p>
        <a
          href="/dashboard"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          Go to Dashboard
        </a>
        <p className="mt-4 text-gray-500 text-sm">Please <a href="/login" className="text-blue-500 underline">log in</a> or <a href="/signup" className="text-blue-500 underline">create an account</a> to continue.</p>
      </div>
    </div>
  );
};
