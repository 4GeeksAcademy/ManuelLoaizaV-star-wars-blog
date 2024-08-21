import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundView() {
    const navigate = useNavigate();

    return (
        <div className="h-100 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row mb-3">
                    <h1 className="text-white">
                        Oops!
                    </h1>
                </div>
                <div className="row mb-3">
                    <h4 className="text-secondary">
                        We couldn't find the page you were looking for.
                    </h4>
                </div>
                <div className="row mb-3">
                    <div className="col-2">
                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => navigate('/')}
                        >
                            Go home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
