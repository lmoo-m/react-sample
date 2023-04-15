import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname.split("/");

    return (
        <nav>
            <Link to={"/"}>
                <h3>Brand</h3>
            </Link>
            <div>
                <Link
                    to={"/product"}
                    className={`${path[1] === "product" ? "active" : ""}`}
                >
                    Product
                </Link>
                <Link
                    to={"/about"}
                    className={`${path[1] === "about" ? "active" : ""}`}
                >
                    About
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
