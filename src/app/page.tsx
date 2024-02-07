import IngredientListItem from "@/app/clientComponents/ingredientListItem";
import ProcedureListItem from "@/app/clientComponents/procedureListItem";
import RecipeTitle from "@/app/clientComponents/recipeTitle";
import prisma from "../../prisma/prismaClient";

// import { ingredient_lists } from "@prisma/client";
// import { Decimal } from "@prisma/client/runtime/binary";
// type ingredientAmount = Omit<ingredient_lists, "amount"> & {
//     amount: Decimal | number | null;
// }
export default async function Home() {
    const recipes = await prisma.recipes.findMany({
        where: { id: "7fbf6f55-fb4d-4150-93d9-72384bc4f3f8" },
        select: {
            id: true,
            name: true,
            user_id: true,
            ingredient_lists: {
                select: {
                    ingredients: {
                        select: {
                            name: true
                        }
                    },
                    amount: true,
                    unit: true,
                    ingredient_id: true
                }
            },
            procedures: true
        }
    });

    return (
        <ul>
            {recipes.map(r => (
                <li key={r.id}>
                    <form className={`text-black`}>
                        <RecipeTitle id={r.id} name={r.name} />
                        <ul>
                            <h3>Ingredients</h3>
                            {r.ingredient_lists.map(({ ingredient_id, amount, unit, ingredients }) => (
                                <IngredientListItem key={`${r.id}${ingredient_id}`}
                                                    id={r.id}
                                                    ingredient_id={ingredient_id}
                                                    amount={amount as unknown as number | null}
                                                    unit={unit}
                                                    ingredients={ingredients} />
                            ))}
                        </ul>
                        <ul>
                            <h3>Procedure</h3>
                            {r.procedures.map((p) => {
                                return (
                                    <ProcedureListItem key={p.id} id={p.id} step={p.step} procedure={p.procedure} />
                                );
                            })}
                        </ul>
                    </form>
                </li>
            ))}
        </ul>
    );
}
