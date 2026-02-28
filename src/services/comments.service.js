import db from "../firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/webreact");

const getAllComments = () => {
  return get(dbRef);
};

const addComment = (user, email, subject, comment) => {
  return push(dbRef, {
    user,
    email,
    subject,
    comment
  });
};

const removeComments = (key) => {
  const dbRefComment = ref(db, `/webreact/${key}`);
  return remove(dbRefComment);
};

export default {
  getAllComments,
  addComment,
  removeComments,
};