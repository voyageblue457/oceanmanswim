import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
              JOIN <span className="text-blue-400">OCEANMAN</span> FAMILY
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-300 whitespace-nowrap">
                Join us!
              </button>
            </div>
          </div>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 text-blue-400">OCEANMAN</h4>
            <ul className="space-y-3">
              {['HOME', 'RACES FINDER', 'NEWS', 'BARBINGS', 'HISTORICAL RESULTS', 'FIVE ISLAND BANGING', 'MAGAZINE', 'SHOP', 'CAMPS', 'NET', 'HIRE A COACH', 'BECOME A COACH', 'CONTACT'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 text-blue-400">STAY CONNECTED</h4>
            <ul className="space-y-3">
              {[
                { name: 'INSTAGRAM', icon: '📷' },
                { name: 'FACEBOOK', icon: '👥' },
                { name: 'YOUTUBE', icon: '🎥' },
                { name: 'STRAVA', icon: '🏃' }
              ].map((item) => (
                <li key={item.name}>
                  <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

      
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 text-blue-400">COMPANY</h4>
            <ul className="space-y-3">
              {['ABOUT US', 'PARTNERS', 'NEWS'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

 
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 OCEANMAN. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer