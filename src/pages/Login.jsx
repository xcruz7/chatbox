export default function Login() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-xl">
        
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back 👋
        </h1>

        <form className="flex flex-col gap-4">

          <div>
            <label className="block text-gray-300 text-sm mb-1">
              Username
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white 
                         focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white 
                         focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg 
                       font-semibold text-white mt-4 transition-all"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}
