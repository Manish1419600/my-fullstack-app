import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <>
      <aside className="dashboardSidebar">

        <div className="dashboardLogo">
          <img
            src="/logo.png"
            alt="StudyGenie"
          />
        </div>

        <nav className="dashboardMenu">
          <NavLink to="/dashboard"> 🏠 Dashboard </NavLink>
          <NavLink to="/materials"> 📁 Study Materials </NavLink>
          <NavLink to="/notes"> 📝 AI Notes & Summary </NavLink>
          <NavLink to="/doubt-solver"> 🤖 AI Doubt Solver</NavLink>
          <NavLink to="/quiz">❓ Quiz & Assessment </NavLink>
          <NavLink to="/planner">📅 Study Planner </NavLink>
          <NavLink to="/progress"> 📊 Progress Tracking </NavLink>
          <NavLink to="/profile">👤 Profile </NavLink>
          <NavLink to="/settings">⚙️ Settings</NavLink>

        </nav>
        <div className="sidebarProfile">
          <div className="profileAvatar">
            {user?.name
              ? user.name.charAt(0).toUpperCase()
              : "S"}
          </div>
          <div className="profileText">
            <h4>{user?.name || "Student"}</h4>

          </div>
          <button
            className="logoutBtn"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </aside>

      <nav className="mobileBottomNav" aria-label="Mobile Navigation">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
          <span>🏠</span>
          <small>Home</small>
        </NavLink>
        <NavLink to="/materials" className={({ isActive }) => isActive ? "active" : ""}>
          <span>📁</span>
          <small>Files</small>
        </NavLink>
        <NavLink to="/notes" className={({ isActive }) => isActive ? "active" : ""}>
          <span>📝</span>
          <small>Notes</small>
        </NavLink>
        <NavLink to="/doubt-solver" className={({ isActive }) => isActive ? "active" : ""}>
          <span>🤖</span>
          <small>Doubts</small>
        </NavLink>
        <NavLink to="/quiz" className={({ isActive }) => isActive ? "active" : ""}>
          <span>❓</span>
          <small>Quiz</small>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
          <span>👤</span>
          <small>Profile</small>
        </NavLink>
      </nav>
    </>
  );
}

export default Sidebar;