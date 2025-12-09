import { X, Link2 } from 'lucide-react';
import '../css/gateway.css';
import { useNavigate } from 'react-router-dom';

function Gateway({setIsManual}) {
  const navigate = useNavigate()

  return (
     <div className="gateway-overlay">
      <div className="gateway-container">
        
        {/* Close button */}
        <button className="gateway-close" onClick={()=>{navigate('/')}} >
          <X size={24} />
        </button>

        <div className="gateway-header">
          <h2>Connect Wallet</h2>
          <p>Gateway to Web3</p>
        </div>

        <div className="gateway-card">
          <div className="gateway-card-head">
            <div className="gateway-icon">
              <Link2 size={32} className="icon-white" strokeWidth={2.5} />
            </div>
            <h3>Automatic/Manual backup</h3>
          </div>

          <button className="gateway-btn" onClick={()=>{setIsManual(true)}}>Continue</button>
        </div>
      </div>
    </div>
  );
}
export default Gateway;
