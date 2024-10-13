import { Moon, Star, Sun } from 'lucide-react'
import { FcGoogle } from "react-icons/fc";

const Login = () => {

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto overflow-hidden ">
        <div className="flex-1 p-8 space-y-6 my-16 py-24">
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-gray-500" />
            <span className="text-2xl font-bold">Wiko</span>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Been a while? Ready to dive back in? Let's get you signed in and back to business!
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium leading-none">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-md transition duration-200"
            >
              Sign In
            </button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-gray-900 px-2 text-gray-600 dark:text-gray-400">or</span>
            </div>
          </div>
          <button
            className="w-full py-2 px-4 border border-gray-300 dark:border-gray-700 font-semibold rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200"
          >
            {/* <img src="/google-logo.svg" alt="Google logo" className="w-5 h-5 mr-2" /> */}
            <FcGoogle className="w-5 h-5 mr-2"/>
            <span>Sign In With Google</span>
          </button>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <a href="#" className="underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-400">
              Sign Up
            </a>
          </p>
        </div>
        <div className="relative flex-1 hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-500 to-gray-600">
            <div className="p-8 text-white h-full flex flex-col justify-between">
              <h2 className="text-2xl font-bold">Empower Your HR Workflow</h2>
              <p className="mt-2">
                Discover the transformative capabilities of our cutting-edge HR Dashboard. Dive into a world where you can effortlessly manage every aspect of your workforce's journey. Seamlessly navigate through comprehensive employee data, effortlessly track performance metrics.
              </p>
              <div className="flex justify-between text-sm mt-8">
                <div>
                  <p className="font-bold text-3xl">125K</p>
                  <p>Has been used by</p>
                </div>
                <div>
                  <p className="font-bold text-3xl">79K</p>
                  <p>Reviewed by</p>
                </div>
                <div>
                  <p className="font-bold text-3xl">53K</p>
                  <p>Subscribe Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="fixed bottom-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
    
      >
        <Sun className="h-5 w-5 text-gray-800 dark:text-gray-200 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 text-gray-800 dark:text-gray-200 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
       
      </button>
    </div>
  )
}

export default Login