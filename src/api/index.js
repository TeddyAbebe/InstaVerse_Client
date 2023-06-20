import axios from "axios";

// const url = "http://localhost:5001/stories";
const url = "https://instaverse-server.onrender.com/stories";


export const fetchStories = async () => axios.get(url);
export const createStory = async (story) => axios.post(url, story);
export const deleteStory = async (id) => axios.delete(`${url}/${id}`);
export const likeStory = async (id) => axios.patch(`${url}/${id}/likeStory`);

export const updateStory = async (id, story) =>
  axios.patch(`${url}/${id}`, story);
