import { useContext } from "react";

import { AuthContext } from '../context/AuthContext';

export const useGlobalContext = () => {
    return useContext(AuthContext);
};