import { useEffect } from 'react';
import { setProducts, setLoading, setError } from '../redux/features/productSlice';
import { fetchDrinks } from '../utils/api-utils';
import { useAppDispatch } from '../redux/hooks';
import { apiUrl } from '../api';

const drinkData = () => {
  const dispatch = useAppDispatch();
  const requestDrinks = apiUrl;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchDrinks(dispatch, requestDrinks);
        dispatch(setProducts(products));
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setError('Hubo un error en la conexión'));
        dispatch(setLoading(false));
      }
    };
    fetchData();
  }, [requestDrinks]);
};


export default drinkData;