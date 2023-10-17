import { Card } from '../../Components/Card';
import drinkData from '../../hooks/drinkData';
import { useAppSelector } from '../../redux/hooks';
import { IDrink } from '../../Interfaces/i-drinks';
import Loading from '../../Components/loading';
import Error from '../../Components/error';

function Home() {
  drinkData();
  const products: IDrink | any = useAppSelector(state => state.productReducer.products);
  const loading = useAppSelector(state => state.productReducer.loading);
  const error = useAppSelector(state => state.productReducer.error);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!products || !Array.isArray(products.drinks)) {
    return <p>No hay bebidas disponibles.</p>;
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='w-full max-w-screen-lg'>
        {products.drinks.map((drink: IDrink) => (
          <Card key={drink.idDrink} product={drink} />
        ))}
      </div>
    </div>
  );
}

export default Home;
