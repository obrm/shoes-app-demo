import { useParams } from 'react-router';
import { Form } from '../components';

const ManageShoe = () => {
    const { shoeId } = useParams();

    const details = {
        title: shoeId ? 'Edit Shoe' : 'Add Shoe',
        btnText: shoeId ? 'Update' : 'Update',
    };

    const { title, btnText } = details;

    return (
        <div className="single-shoe-container">
            <h2>{title}</h2>
            <Form shoeId={shoeId} btnText={btnText} />
        </div>);
};

export default ManageShoe;