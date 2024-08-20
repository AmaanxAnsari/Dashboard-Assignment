import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = ({ search, handleSearchChange }) => {
  return (
    <>
      <div className="container-fluid p-0">
        <header
          className="p-3 border-bottom"
          style={{ backgroundColor: "var(--background-blue01)" }}
        >
          <div className="container-fluid">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
              >
                <img src="logo-white.png" width="135" height="30" alt="" />
              </a>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <a href="/" className="nav-link px-2 link-secondary">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/" className="nav-link px-2 link-light">
                    Inventory
                  </a>
                </li>
                <li>
                  <a href="/" className="nav-link px-2 link-light">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="/" className="nav-link px-2 link-light">
                    Products
                  </a>
                </li>
              </ul>

              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input
                  type="text"
                  className="form-control rounded-pill"
                  placeholder="Search Widgets..."
                  aria-label="Search"
                  value={search}
                  onChange={handleSearchChange}
                />
              </form>

              <div className="dropdown text-end">
                <span className="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill">
                  <img
                    className="rounded-circle me-1"
                    width="24"
                    height="24"
                    src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_13.png"
                    alt=""
                  />
                  Amaan Ansari
                </span>
              </div>
              <button className="btn btn-sm btn-light ms-2 rounded-4">
                <span className="me-2">Logout</span>
                <IoLogOutOutline />
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
