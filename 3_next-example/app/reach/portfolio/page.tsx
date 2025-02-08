import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen">
      <div className="max-w-sm bg-gray-800 rounded-lg shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:bg-amber-900">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
          <h2 className="text-2xl font-bold text-amber-300">John Doe</h2>
          <p className="text-sm text-gray-200">Frontend Developer</p>
        </div>

        <div className="p-6">
          <p className="text-gray-300">
            Passionate about building beautiful and functional user interfaces. Loves Tailwind CSS and modern web technologies.
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-white">Skills</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 bg-gray-700 text-sm text-gray-200 rounded-full">JavaScript</span>
              <span className="px-3 py-1 bg-gray-700 text-sm text-gray-200 rounded-full">React</span>
              <span className="px-3 py-1 bg-gray-700 text-sm text-gray-200 rounded-full">Tailwind CSS</span>
              <span className="px-3 py-1 bg-gray-700 text-sm text-gray-200 rounded-full">Node.js</span>
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-4xl hover:bg-indigo-700 transition-colors duration-300">
              Contact Me
            </button>
          </div>
        </div>
        <div className="bg-gray-700 p-4 text-center">
          <p className="text-sm text-gray-300">Follow me on <a href="#" className="text-indigo-400 hover:text-indigo-300">Twitter</a></p>
        </div>
      </div>
    </div>
  )
}

export default page;