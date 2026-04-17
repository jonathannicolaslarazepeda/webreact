import React, { useState, useEffect, useRef } from 'react'; // IMPORTANTE: Siempre arriba
import CommentsService from '../../services/comments.service';
import ExportExamples from "../../components/export-examples/ExportExamples";
import ImportExamples from "../../components/import-examples/ImportExamples";

function Comment() {
    // 1. Estados
    const [comments, setComments] = useState([]);
    const [editingKey, setEditingKey] = useState(null);
    const refForm = useRef();

    // 2. Cargar comentarios
    const getAllComments = () => {
        CommentsService.getAllComments()
            .then((snapshot) => {
                if (!snapshot.exists()) {
                    setComments([]);
                    return;
                }
                const data = snapshot.val();
                const loadedComments = Object.keys(data).map(key => ({
                    key,
                    ...data[key]
                }));
                setComments(loadedComments);
            })
            .catch(console.error);
    };

    // 3. Efecto inicial
    useEffect(() => {
        getAllComments();
    }, []);

    // 4. Borrar
    const removeComments = (key) => {
        CommentsService.removeComments(key)
            .then(() => {
                setComments(prev => prev.filter(c => c.key !== key));
            })
            .catch(console.error);
    };

    // 5.  Editar
    const prepareEdit = (comment) => {
        setEditingKey(comment.key);
        refForm.current.name.value = comment.user;
        refForm.current.email.value = comment.email;
        refForm.current.subject.value = comment.subject;
        refForm.current.comment.value = comment.comment;
    };

    // 6. Envia
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = e.target.name.value;
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const comment = e.target.comment.value;

        if (editingKey) {
            CommentsService.updateComment(editingKey, { user, email, subject, comment })
                .then(() => {
                    setComments(prev =>
                        prev.map(c => c.key === editingKey ? { key: editingKey, user, email, subject, comment } : c)
                    );
                    setEditingKey(null);
                    refForm.current.reset();
                });
        } else {
            CommentsService.addComment(user, email, subject, comment)
                .then((res) => {
                    const newComment = { key: res.key, user, email, subject, comment };
                    setComments(prev => [...prev, newComment]);
                    refForm.current.reset();
                });
        }
    };

    return (
        <div className="contact">
            <div className="contact-left">
                <h2>{editingKey ? "Editar Mensaje" : "Deja un Comentario"}</h2>
                <form onSubmit={handleSubmit} ref={refForm}>
                    <input name="name" className="name" placeholder="Nombre" required />
                    <input name="email" className="email" placeholder="Email" required />
                    <input name="subject" className="subject" placeholder="Asunto" required />
                    <textarea name="comment" className="comment" placeholder="Comentario" required />

                    <button className="enviar" type="submit">
                        {editingKey ? "Actualizar" : "Enviar"}
                    </button>

                    {editingKey && (
                        <button className="enviar" type="button" onClick={() => { setEditingKey(null); refForm.current.reset(); }}>
                            Cancelar
                        </button>
                    )}
                </form>
                 <div className="home-export-examples">
                    <ExportExamples data={comments}/>
                </div>
                <div className="home-import-examples">
                    <ImportExamples />
                </div>
            </div>

            <div className="contact-right">
                <h2>Listado de Mensajes</h2>
                {comments.map((comment) => (
                    <div key={comment.key}>
                        <p><strong>Remitente:</strong> {comment.user}</p>
                        <p><strong>Email:</strong> {comment.email}</p>
                        <p><strong>Asunto:</strong> {comment.subject}</p>
                        <p><strong>Mensaje:</strong> {comment.comment}</p>

                        <button className="enviar" onClick={() => prepareEdit(comment)}>Editar</button>
                        <button className="enviar" onClick={() => removeComments(comment.key)}>Borrar</button>
                    </div>
                ))}

               
            </div>
        </div>
    );
}

export default Comment;