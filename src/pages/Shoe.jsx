import { Link } from 'react-router-dom';

import { useGlobalAuthContext } from "../hooks";
import { useShoe } from '../hooks';


const Shoe = () => {
    const { user } = useGlobalAuthContext();

    const { shoe, handleDelete } = useShoe();

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