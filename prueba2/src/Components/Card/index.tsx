import { IDrink } from "../../Interfaces/i-drinks";

interface Props {
  product: IDrink;
}

export const Card = ({ product }: Props) => {
  return (
<div className="max-w-md mx-auto bg-gray-600 p-6 rounded-md shadow-md m-10">
  <div className="flex justify-between">
    <div className="w-3/5">
      <h5 className="text-lg font-semibold mb-2">ID Drink: {product.idDrink}</h5>
      <h5 className="text-lg font-semibold mb-2"> {product.strDrink}</h5>
      <p className="text-sm mb-2">{product.strInstructions}</p>
      <div className="flex space-x-2">
        <div className="inline-block bg-green-700 p-2 rounded-md">
          <span className="text-xs text-white font-semibold">{product.strCategory}</span>
        </div>
        <div className="inline-block bg-red-500 p-2 rounded-md">
          <span className="text-xs text-white font-semibold">{product.strAlcoholic}</span>
        </div>
      </div>
    </div>
    <img src={product.strDrinkThumb} alt={product.strDrink} className="rounded-full w-32 h-32" />
  </div>
</div>

  );
}
