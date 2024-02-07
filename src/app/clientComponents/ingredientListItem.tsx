"use client";

import { useState } from "react";

export default function IngredientListItem(
    { id, ingredient_id, amount, unit, ingredients }:
        {
            id: string,
            ingredient_id: number,
            amount: number | null,
            unit: string | null,
            ingredients: { name: string }
        }) {
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return (
            <li>
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
    } else {
        return (
            <li>
                <div id={`${id}-${ingredient_id}-amount`}>
                    <span>Amount</span>
                    <div id={`${id}-${ingredient_id}-amount`} className={`w-1/2`}>{`${amount}`}</div>
                </div>
                <div id={`${id}-${ingredient_id}-unit`}>
                    <span>Unit</span>
                    <div id={`${id}-${ingredient_id}-unit`}>{`${unit}`}</div>
                </div>
                <div id={`${id}-${ingredient_id}-name`}>
                    <span>Ingredient</span>
                    <div id={`${id}-${ingredient_id}-name`}>{ingredients.name}</div>
                </div>
            </li>
        );
    }
}
