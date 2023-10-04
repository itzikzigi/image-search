import axios from "axios";

// const key = import.meta.env.VITE_API_KEY;
const key = "Ksy1s7IlgZp4qTRlIN1EOD0Jb-0IholZq_FuNc8Pgo0";
const apiURL = "https://api.unsplash.com/search/photos";
const maxImagesPerPage = 20;

const fetchIMages = async (inputValue: string, page: number) => {
  try {
    const { data } = await axios.get(
      `${apiURL}?query=${inputValue}&page=${page}&per_page=${maxImagesPerPage}&client_id=${key}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default fetchIMages;
