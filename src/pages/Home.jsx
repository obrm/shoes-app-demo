import { Link } from 'react-router-dom';

import { useGlobalShoeContext } from '../hooks';

const Home = () => {
    const {
        shoes,
        isLoading,
    } = useGlobalShoeContext();

    if (isLoading) {
        return <div className='loading'>Loading...</div>
    }

    return (
        <section className='shoes-container'>
            {shoes && shoes.map(shoe => {
                return (
                    <div key={shoe.id} className='shoe-container'>
                        <h3 className='shoe-name'>
                            <Link to={`/products/${shoe.id}`}>
                                {shoe.name}
                            </Link>
                        </h3>
                        <h2 className='shoe-brand'>{shoe.brand}</h2>
                        <img className='shoe-img' src={shoe.image} alt='shoe-img' />
                        <h2 className='shoe-price'>{`${shoe.price}$`}</h2>
                    </div>
                )
            })}
        </section>
    )
}

export default Home