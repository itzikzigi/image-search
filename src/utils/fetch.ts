import axios from "axios";

const key = import.meta.env.VITE_API_KEY;
const apiURL = "https://api.unsplash.com/search/photos";
const maxImagesPerPage = 20;

const fetchIMages = async (inputValue: string) => {
  try {
    const { data } = await axios.get(
      `${apiURL}?query=${inputValue}&page=1&per_page=${maxImagesPerPage}&client_id=${key}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default fetchIMages;
