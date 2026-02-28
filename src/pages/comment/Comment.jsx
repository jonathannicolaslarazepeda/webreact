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

        const User = e.target.Name.value;
        const Email = e.target.Email.value;
        const Subject = e.target.Subject.value;
        const Comment = e.target.Comment.value;

        CommentsService.addComment(User, Email, Subject, Comment)
            .then((res) => {

                const newComment = {
                    key: res.key,
                    User,
                    Email,
                    Subject,
                    Comment
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
                <h2>Contact & Location</h2>

                <form onSubmit={addComment} ref={refForm}>

                    <input name="Name" className="Name" placeholder="Name" />
                    <input name="Email" className="Email" placeholder="Email" />
                    <input name="Subject" className="Subject" placeholder="Asunto" />
                    <textarea name="Comment" className="Comment" placeholder="Comentario" />

                    <button name="enviar" className="enviar" type="submit">Enviar</button>
                </form>
            </div>

            <div className="contact-right">
                <h2>Listado de Mensajes</h2>

                {comments.map((comment) => (
                    <div key={comment.key}>
                        <hr />
                        <p>Remitente: {comment.User}</p>
                        <p>Email: {comment.Email}</p>
                        <p>Asunto: {comment.Subject}</p>
                        <p>Mensaje: {comment.Comment}</p>

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
