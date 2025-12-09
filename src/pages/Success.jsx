import { CheckCircle2, Star } from "lucide-react";
import '../css/success.css';
import { useNavigate } from "react-router-dom";


function Success() {
  const navigate = useNavigate()
  return (
    <div className="backup-container">
      <div className="backup-card">
        <div className="icon-wrapper">
          <CheckCircle2 className="success-icon" />
        </div>

        <div className="stars-wrapper">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="star-icon" />
          ))}
        </div>

        <h1 className="title">Backup Successful</h1>

        <p className="uid">UID: wu233382872262</p>

        <p className="description">
          Your wallet data has been successfully backed up! We've securely stored your
          information, ensuring your assets remain protected. Feel free to continue managing
          your wallet or explore additional features.
        </p>

        <button className="home-btn" onClick={()=>{navigate("/")}}>Return To Home Page</button>
      </div>
    </div>
  );
}

export default Success;
