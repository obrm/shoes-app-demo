import { useParams } from 'react-router';
import { updateAPIData } from '../api/api';
import { Form } from '../components';

const EditProduct = () => {
    const { shoeId } = useParams();

    return (
        <div className="single-shoe-container">
            <h2>Edit Product</h2>
            <Form shoeId={shoeId} apiMethod={updateAPIData} btnText='Update' />
        </div>);
};

export default EditProduct;