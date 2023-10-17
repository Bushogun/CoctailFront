import { setLoading } from '../redux/features/productSlice';
import type { AppDispatch } from "../redux/store";

const fetchData = async (url: string, dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch(`${url}`);
    if (!response.ok) {
      throw new Error(`Error al cargar datos desde ${url}`);
    }
    const data = await response.json();
    dispatch(setLoading(false));
    return data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const fetchDrinks = async (dispatch: AppDispatch, requestDrinks: string) => {
  return fetchData(requestDrinks, dispatch);
};
