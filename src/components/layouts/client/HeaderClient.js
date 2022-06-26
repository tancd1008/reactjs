import { NavLink } from 'react-router-dom';
import NavClient from './NavClient';

function HeaderClient() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img
                            className="img-fluid logo"
                            src="https://res.cloudinary.com/tancd/image/upload/v1645505246/z5pmobhhdd8bveprd6sp.jpg"
                            alt=""
                        />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="float-end col-6">
                            <NavClient />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default HeaderClient;
