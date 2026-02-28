import React, { useState, useEffect, useRef } from 'react';
import CommentsService from "../../services/comments.service";

function Comment() {

    const [comments, setComments] = useState([]);
    const refForm = useRef();

    const getAllComments = () => {
        CommentsService.getAllComments()
            .then((snapshot) => {

                if (!snapshot.exists()) {
                    setComments([]);
                    return;
                }

                const data = snapshot.val();
                const loadedComments = [];

                for (let key in data) {
                    loadedComments.push({
                        key,
                        ...data[key]
                    });
                }

                setComments(loadedComments);
            })
            .catch(console.error);
    };

    const removeComments = (key) => {
        CommentsService.removeComments(key)
            .then(() => {
                setComments(prev => prev.filter(c => c.key !== key));
            });
    };

    const addComment = (e) => {
        e.preventDefault();

        const user = e.target.name.value;
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const comment = e.target.comment.value;

        CommentsService.addComment(user, email, subject, comment)
            .then((res) => {

                const newComment = {
                    key: res.key,
                    user,
                    email,
                    subject,
                    comment
                };

                setComments(prev => [...prev, newComment]);
                refForm.current.reset();
            });
    };

    useEffect(() => {
        getAllComments();
    }, []);

    return (
        <div className="contact">

            <div className="contact-left">
                <h2>Comments</h2>

                <form onSubmit={addComment} ref={refForm}>

                    <input name="name" className="name" placeholder="Nombre" required />
                    <input name="email" className="email" placeholder="Email" required />
                    <input name="subject" className="subject" placeholder="Asunto" required />
                    <textarea name="comment" className="comment" placeholder="Comentario" required />


                    <button name="enviar" className="enviar" type="submit">Enviar</button>
                </form>
            </div>

            <div className="contact-right">
                <h2>Listado de Mensajes</h2>

                {comments.map((comment) => (
                    <div key={comment.key}>
                        <hr />
                        <p>Remitente: {comment.user}</p>
                        <p>Email: {comment.email}</p>
                        <p>Asunto: {comment.subject}</p>
                        <p>Mensaje: {comment.comment}</p>

                        <button name="btn-delete" className="btn-delete" onClick={() => removeComments(comment.key)}>
                            Borrar
                        </button>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Comment;
