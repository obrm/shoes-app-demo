import { useParams } from 'react-router';
import { Form } from '../components';

const EditShoe = () => {
    const { shoeId } = useParams();

    return (
        <div className="single-shoe-container">
            <h2>Edit Shoe</h2>
            <Form shoeId={shoeId} btnText='Update' />
        </div>);
};

export default EditShoe;