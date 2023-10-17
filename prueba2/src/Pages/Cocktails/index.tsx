import drinkData from '../../hooks/drinkData';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { IDrink } from '../../Interfaces/i-drinks';
import Layout from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { apiFilterCategory } from '../../api';
import { setSelectCategory } from '../../redux/features/productSlice';

function Cocktails() {
  const dispatch = useAppDispatch();
  drinkData(apiFilterCategory +"Cocktail");
  dispatch(setSelectCategory("Cocktail"));

  const products: IDrink | any = useAppSelector(state => state.productReducer.products);
  const loading = useAppSelector(state => state.productReducer.loading);
  const error = useAppSelector(state => state.productReducer.error);

  return (
    <Layout loading={loading} error={error}>
      {(!products || !Array.isArray(products.drinks)) ? (
        <p>No hay bebidas disponibles.</p>
      ) : (
        <div className='flex flex-col items-center'>
          <div className='w-full max-w-screen-lg'>
            {products.drinks.map((drink: IDrink) => (
              <Card key={drink.idDrink} product={drink} />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Cocktails;