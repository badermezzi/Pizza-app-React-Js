import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuatity,
  getCurrentQuantityById,
  increaceItemQuatity,
} from "./cartSlice";

function UpdatePizzaQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  const quantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className="flex gap-3 items-center">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuatity(pizzaId))}
      >
        -
      </Button>
      {quantity}
      <Button
        type="round"
        onClick={() => dispatch(increaceItemQuatity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdatePizzaQuantity;
