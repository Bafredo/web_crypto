import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "../css/admin.css";

function Admin() {
  const [phrases, setPhrases] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch from Supabase
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("main_store")
        .select("id, phrases, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching:", error.message);
      } else {
        setPhrases(data);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await supabase.from("main_store").delete().eq("id", id);
    setPhrases(phrases.filter((p) => p.id !== id));
  };

  // Filtered list
  const filteredPhrases = phrases.filter((p) =>
    p.passphrase.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin">
      <h1 className="admin__title">Passphrase Dashboard</h1>

      {/* Search bar */}
      <div className="admin__search-wrapper">
        <input
          type="text"
          placeholder="Search passphrases..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="admin__search"
        />
      </div>

      {/* Table view for desktop */}
      <div className="admin__table-wrapper">
        <table className="admin__table">
          <thead>
            <tr>
              <th>Passphrase</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPhrases.map((p) => (
              <tr key={p.id}>
                <td>{p.passphrase}</td>
                <td>{new Date(p.created_at).toLocaleString()}</td>
                <td>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="btn btn--danger"
                    type="button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredPhrases.length === 0 && (
              <tr>
                <td colSpan={3} className="admin__empty">
                  No matching passphrases
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Card view for mobile */}
      <div className="admin__cards">
        {filteredPhrases.map((p) => (
          <div key={p.id} className="admin__card">
            <p>
              <span className="font-semibold">Passphrase:</span> {p.passphrase}
            </p>
            <p className="mt-2 muted">
              <span className="font-semibold">Created:</span>{" "}
              {new Date(p.created_at).toLocaleString()}
            </p>

            <div className="mt-3">
              <button
                onClick={() => handleDelete(p.id)}
                className="btn btn--danger"
                type="button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {filteredPhrases.length === 0 && (
          <p className="text-center admin__empty">No matching passphrases</p>
        )}
      </div>
    </div>
  );
}

export default Admin;
