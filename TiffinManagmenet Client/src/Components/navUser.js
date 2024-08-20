import { Link, useNavigate } from 'react-router-dom';

const NavUser = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear(); // Clear all session storage
    navigate('/signin');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#4caf50' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/showTiffin" style={{ fontWeight: 'bold', color: 'white' }}>
          <h2>Tiffin Service</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/address" style={{ color: 'white' }}>
                Add Address
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userProfile" style={{ color: 'white' }}>
                Edit Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders" style={{ color: 'white' }}>
                Order List
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleLogout}
            style={{ width: 100 }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavUser;
