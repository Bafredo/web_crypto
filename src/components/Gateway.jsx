import { X, Link2 } from 'lucide-react';

function Gateway() {
  

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-slate-700/50">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Connect Wallet</h2>
          <p className="text-slate-400 text-lg">Gateway to Web3</p>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-500 rounded-lg p-3 flex-shrink-0">
              <Link2 size={32} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-white text-xl font-semibold">
              Automatic/Manual backup
            </h3>
          </div>

          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-green-500/30">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gateway;
