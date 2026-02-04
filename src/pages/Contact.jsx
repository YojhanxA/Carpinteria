import React, { useState } from 'react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        console.log('Formulario enviado:', formData);
        // Limpiar el formulario
        setFormData({
            nombre: '',
            email: '',
            telefono: '',
            mensaje: ''
        });
        alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
    };

    return (
        <main className="container py-5" style={{ marginTop: '80px' }}>
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h1 className="mb-4 text-center">CONTACTO</h1>

                    <div className="row mb-5">
                        <div className="col-md-6 mb-4">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <i className="bi bi-telephone fs-1 text-dark mb-3"></i>
                                    <h5 className="card-title">Teléfono</h5>
                                    <p className="card-text">+57 (8) 2842121</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <i className="bi bi-envelope fs-1 text-dark mb-3"></i>
                                    <h5 className="card-title">Email</h5>
                                    <p className="card-text">info@carpinteriala16.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card border-0 shadow">
                        <div className="card-body p-4">
                            <h4 className="mb-4">Envíanos tu mensaje</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="telefono"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                    <textarea
                                        className="form-control"
                                        id="mensaje"
                                        name="mensaje"
                                        rows="5"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark w-100">
                                    ENVIAR MENSAJE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
