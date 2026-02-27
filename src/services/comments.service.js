import db from "../firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/webreact");

const getAllComments = () => {
  return get(dbRef);
};

const addComment = (User, Email, Subject, Comment) => {
  return push(dbRef, {
    User,
    Email,
    Subject,
    Comment
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