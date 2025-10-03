import React from 'react';

export default function Contact() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="text-center mb-4">
                        <h1>📥Contact Us</h1>
                        <p>Send us a message</p>
                    </div>

                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text"className="form-control"/>


                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text"className="form-control"/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <input type="text"className="form-control"/>
                        </div>

                        <div className="d-grid">
                            <button className="btn btn-primary">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
