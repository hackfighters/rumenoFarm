import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_ADMIN;

const BlogApi = async (setBlogData) => {
    try {
        const response = await axios.get(`${apiUrl}/get_all_blog`);
        setBlogData(response?.data?.blog)
        console.log('response?.data?.blog: ', response?.data?.blog);
        return response?.data?.blog
    } catch (error) {
        console.error('Error fetching items:', error);
    }
};

export default BlogApi 

