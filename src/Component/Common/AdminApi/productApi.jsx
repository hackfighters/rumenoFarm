import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_ADMIN;

const ProductData = async (setPrdData) => {
    try {
        const response = await axios.get(`${apiUrl}/get_all_product`);
        setPrdData(response?.data?.products)
        console.log('response?.data: ', response?.data);
        return response?.data?.products
    } catch (error) {
        console.error('Error fetching items:', error);
    }
};

export default ProductData 

