import React, { useState, useEffect, useRef } from 'react';
import CommentsService from "../../services/comments.service";
import Map from '../../components/map/Map';

function CommentsList() {

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

        const User = e.target.User.value;
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
                <h6>Contact & Location</h6>
                <Map />

                <form onSubmit={addComment} ref={refForm}>

                    <input name="User" placeholder="Nombre" />
                    <input name="Email" placeholder="Email" />
                    <input name="Subject" placeholder="Asunto" />
                    <textarea name="Comment" placeholder="Comentario" />

                    <button type="submit">Enviar</button>
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

                        <button onClick={() => removeComments(comment.key)}>
                            Borrar
                        </button>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default CommentsList;
