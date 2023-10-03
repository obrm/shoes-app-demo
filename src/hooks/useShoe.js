import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { getShoe } from '../api/api';

import { useGlobalAuthContext, useGlobalShoeContext } from './';

const useShoe = () => {
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
    removeShoe(shoeId);
    navigate('/delete');
  };

  return { user, shoe, handleDelete };
};
export default useShoe;