import { useForm } from '../hooks';

import Input from './Input';

const Form = ({ shoeId, btnText }) => {
    const { shoe, errors, handleChange, handleSubmit } = useForm(shoeId);

    const fields = [
        {
            id: 1,
            name: 'name',
            value: shoe.name,
            type: 'text',
            error: errors.name
        },
        {
            id: 2,
            name: 'brand',
            value: shoe.brand,
            type: 'text',
            error: errors.brand
        },
        {
            id: 3,
            name: 'image',
            value: shoe.image,
            type: 'text',
            error: errors.image
        },
        {
            id: 4,
            name: 'price',
            value: shoe.price,
            type: 'text',
            error: errors.price
        },
    ];

    return (
        <form onSubmit={handleSubmit}>
            {fields.map(field => (
                <Input key={field.id} {...field} handleChange={handleChange} />
            ))}
            <button className="btn update-btn" type="submit">{btnText}</button>
        </form>
    );
};

export default Form;