export default function Customize() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-amber-900">🔮 Coming Soon</h1>
          <p className="text-xl text-gray-600">The Customize Feature</p>
        </div>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-8 space-y-4">
          <p className="text-lg text-gray-700 italic">
            Ah yes, the magical world of customization... where you could theoretically design your perfect glass creation without leaving your couch. 
          </p>
          
          <p className="text-gray-600">
            ✨ Imagine it: Real-time mirrors, custom carving previews, augmented reality that actually works... 
            <span className="font-semibold text-amber-900">
              {" "}All coming to a screen near you! (Eventually™)
            </span>
          </p>

          <p className="text-sm text-gray-500 font-medium">
            Currently, our developers are polishing the mirrors* of innovation.
            <br />
            <span className="text-xs italic">*Both literally and figuratively</span>
          </p>
        </div>

        <div className="text-center">
          <a
            href="/"
            className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            ← Back to Reality
          </a>
        </div>
      </div>
    </div>
  );
}
