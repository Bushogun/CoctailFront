import { IDrink } from "../../Interfaces/i-drinks";
import drinkData from "../../hooks/drinkData";
// import { useAppDispatch } from "../../redux/hooks";

interface Props {
  product: IDrink;
}

export const Card = ({ product }: Props) => {
  // const dispatch = useAppDispatch();
  return (
    <div className="text-sm bg-slate-400 mb-2 p-4 rounded-md">
      {product.idDrink}
      {product.strDrink}
      {product.strCategory}
      {product.strAlcoholic}
      {product.strInstructions}
      {product.strInstructionsES}
      {product.strDrinkThumb}
    </div>
  );
}
