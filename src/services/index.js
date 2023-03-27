import { api } from "../api";

export const loadPosts = async ({ postsSet }) => {
  try {
    const response = await api.get(`/posts`);

    if (response) {
      postsSet(response.data);
    }
  } catch (err) {
    console.log(err);
  }
};

export const loadComments = async ({ id, commentsSet }) => {
  try {
    const response = await api.get(`/posts/${id}/comments`);

    if (response) {
      commentsSet(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const loadUsers = async ({ usersSet }) => {
  const response = await api.get(`/users`);

  if (response) {
    usersSet(response.data);
  }
  try {
  } catch (err) {
    console.log(err);
  }
};

export const userDetails = async ({ id, userDataSet }) => {
  const response = await api.get(`/users/${id}`);

  if (response) {
    userDataSet(response.data);
  }
  try {
  } catch (err) {
    console.log(err);
  }
};
