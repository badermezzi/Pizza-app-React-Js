import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdatePizzaQuantity from "./UpdatePizzaQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 flex items-center justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdatePizzaQuantity quantity={quantity} pizzaId={pizzaId} />
        <DeleteItem pizzaId={pizzaId} type="small" />
      </div>
    </li>
  );
}

export default CartItem;
