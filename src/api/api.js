import axios from "axios";

const BASE_URL = "https://6508868856db83a34d9c779e.mockapi.io/shoes";

export const getAllShoes = async () => {
    try {
        const res = await axios.get(
            BASE_URL
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getShoe = async (shoeId) => {
    try {
        const res = await axios.get(
            `${BASE_URL}/${shoeId}`
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const updateAPIData = (shoe, shoeId) => {
    axios.put(`${BASE_URL}/${shoeId}`, shoe);
}

export const postData = (shoe) => {
    axios.post(BASE_URL, shoe);
}

export const onDelete = (shoeId) => {
    axios.delete(`${BASE_URL}/${shoeId}`);
}