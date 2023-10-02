import { useEffect, useState } from 'react';

import useForm from '../hooks/useForm';

import Input from './Input';
import { getShoe } from '../api/api';

const Form = ({ shoeId, btnText, apiMethod }) => {
    const [shoe, setShoe] = useState({
        name: '',
        brand: '',
        image: '',
        price: '',
    });
    const [errors, setErrors] = useState({
        name: null,
        brand: null,
        image: null,
        price: null
    });

    useEffect(() => {
        if (shoeId) {
            const fetchShoe = async () => {
                const shoeData = await getShoe(shoeId);
                setShoe(shoeData);
            };

            fetchShoe();
        }
    }, [shoeId]);

    const { handleChange, handleSubmit } = useForm(shoe, setShoe, setErrors, apiMethod);

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