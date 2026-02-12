import React, { useState, useEffect } from 'react';
import Map from '../../components/map/Map';

const Contact = () => {
    const [contacts, setContacts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        content: ''
    });
    const [errors, setErrors] = useState({});
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem("contacts");
        if (stored) {
            try {
                setContacts(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse contacts", e);
            }
        }
    }, []);

    const saveContacts = (newContacts) => {
        setContacts(newContacts);
        localStorage.setItem("contacts", JSON.stringify(newContacts));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: false }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = true;
        if (!formData.email.trim()) newErrors.email = true;
        if (!formData.subject.trim()) newErrors.subject = true;
        if (!formData.content.trim()) newErrors.content = true;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const newContacts = [...contacts];
        if (editingIndex !== null) {
            newContacts[editingIndex] = formData;
            setEditingIndex(null);
        } else {
            newContacts.push(formData);
        }
        saveContacts(newContacts);
        setFormData({ name: '', email: '', subject: '', content: '' });
    };

    const handleEdit = (index) => {
        setFormData(contacts[index]);
        setEditingIndex(index);
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleDelete = (index) => {
        const newContacts = contacts.filter((_, i) => i !== index);
        saveContacts(newContacts);
        if (editingIndex === index) {
            setEditingIndex(null);
            setFormData({ name: '', email: '', subject: '', content: '' });
        }
    };

    return (
        <div className="contact">
            <div className="contact-left">
                <div>
                    <h6 id="text2">Contact & Location</h6>
                </div>

                {/* Map Component Added Here */}
                <Map />

                <div className="contact-text">
                    <p>
                        Si necesitas más información o quieres ponerte en contacto para cualquier consulta, utiliza el siguiente
                        formulario.
                    </p>
                </div>
                <div className="form">
                    <form id="contact-form" onSubmit={handleSubmit}>

                        <div className="form-field">
                            <label htmlFor="contact-name">Nombre</label>
                            <p>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </p>
                            <div>
                                <span id="contact-name-required-error" style={{ visibility: errors.name ? 'visible' : 'hidden' }}>
                                    *campo requerido
                                </span>
                            </div>
                        </div>

                        <div className="form-field">
                            <label htmlFor="contact-email">Email</label>
                            <p>
                                <input
                                    type="text"
                                    id="contact-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </p>
                            <div>
                                <span id="contact-email-required-error" style={{ visibility: errors.email ? 'visible' : 'hidden' }}>
                                    *campo requerido
                                </span>
                            </div>
                        </div>

                        <div className="form-field">
                            <label htmlFor="contact-subject">Asunto</label>
                            <p>
                                <input
                                    type="text"
                                    id="contact-subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </p>
                            <div>
                                <span id="contact-subject-required-error" style={{ visibility: errors.subject ? 'visible' : 'hidden' }}>
                                    *campo requerido
                                </span>
                            </div>
                        </div>

                        <div className="form-field">
                            <label htmlFor="contact-content">Comentario</label>
                            <textarea
                                id="contact-content"
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                            />
                            <div>
                                <span id="contact-content-required-error" style={{ visibility: errors.content ? 'visible' : 'hidden' }}>
                                    *campo requerido
                                </span>
                            </div>
                        </div>

                        <input type="submit" id="enviar" value={editingIndex !== null ? "Actualizar" : "Enviar"} />
                    </form>
                </div>
            </div>
            <div className="contact-right">
                <h2>Listado de Mensajes</h2>
                <div id="contact-list">
                    {contacts.map((contact, index) => (
                        <div key={index}>
                            <hr />
                            <p>Remitente: {contact.name}</p>
                            <p>Email: {contact.email}</p>
                            <p>Asunto: {contact.subject}</p>
                            <p>Mensaje: {contact.content}</p>
                            <p>
                                <button className="btn-edit" onClick={() => handleEdit(index)}>Editar</button>
                                <button className="btn-delete" onClick={() => handleDelete(index)}>Borrar</button>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
