import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

import { getShoe } from '../api/api';

import { useGlobalShoeContext } from './';

const useShoe = () => {
  const { shoeId } = useParams();

  const navigate = useNavigate();

  const [shoe, setShoe] = useState({});

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

    toast.success('Shoe deleted successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });

    navigate('/');
  };

  return { shoe, handleDelete };
};
export default useShoe;