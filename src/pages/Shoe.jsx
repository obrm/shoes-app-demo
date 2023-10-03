import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { getShoe } from '../api/api';

import { useGlobalAuthContext, useGlobalShoeContext } from "../hooks";


const Shoe = () => {
    const { shoeId } = useParams();
    const navigate = useNavigate();

    const [shoe, setShoe] = useState({});

    const { user } = useGlobalAuthContext();
    const { removeShoe } = useGlobalShoeContext();


    useEffect(() => {
        const fetchShoe = async () => {
            const shoeData = await getShoe(shoeId);
            setShoe(shoeData);
        };

        fetchShoe();
    }, [shoeId]);

    const handleDelete = () => {
        removeShoe(shoe.id);
        navigate('/delete');
    };

    return (
        <main className='single-shoe-container'>
            <div className='shoe-container'>
                <h3 className='shoe-name'>
                    {shoe.name}
                </h3>
                <h2 className='shoe-brand'>{shoe.brand}</h2>
                <img className='shoe-img' src={shoe.image} alt='shoe-img' />
                <h2 className='shoe-price'>{`${shoe.price}$`}</h2>
                {user && user.isAdmin && (
                    <>
                        <Link to={`/products/${shoe.id}/edit`} className="btn">Edit</Link>
                        <button onClick={handleDelete} className="btn">Delete</button>
                    </>
                )
                }
            </div>
        </main>

    );


};

export default Shoe;