import { X } from 'lucide-react';
import '../css/connect_modal.css';

export default function Connect({ onClose, wallet, onConnect }) {
  return (
    <div className="launchpad-modal-overlay">
      <div className="connect-modal">
        <button
          onClick={onClose}
          className="modal-close-button"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="modal-content">
          <div className="modal-wallet-icon-container">
            <img src={wallet.image} alt={wallet.name} className="modal-wallet-icon" />
          </div>

          <h2 className="modal-wallet-name">
            {wallet.name}
          </h2>

          <p className="modal-description">
            A Web3 wallet is a versatile and significant piece of technology that is set to revolutionize the way our online identity is presented and accessed. Exodus wallet can go here.
          </p>

          <button
            onClick={onConnect}
            className="modal-connect-button"
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}
