import { Decimal } from "@prisma/client/runtime/binary";

export default function IngredientListItem(
    { id, ingredient_id, amount, unit, ingredients }:
        {
            id: string,
            ingredient_id: number,
            amount: Decimal | null,
            unit: string | null,
            ingredients: { name: string }
        }) {
    return (
        <li key={ingredient_id}>
            <label htmlFor={`${id}-${ingredient_id}-amount`}>
                <span>Amount</span>
                <input id={`${id}-${ingredient_id}-amount`} type={"number"}
                       defaultValue={`${amount}`} className={`w-1/2`} />
            </label>
            <label htmlFor={`${id}-${ingredient_id}-unit`}>
                <span>Unit</span>
                <input id={`${id}-${ingredient_id}-unit`} type={"text"}
                       defaultValue={`${unit}`} />
            </label>
            <label htmlFor={`${id}-${ingredient_id}-name`}>
                <span>Ingredient</span>
                <input id={`${id}-${ingredient_id}-name`} type={"text"}
                       defaultValue={ingredients.name} />
            </label>
        </li>
    );
}
