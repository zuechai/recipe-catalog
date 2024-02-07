import IngredientListItem from "@/app/clientComponents/ingredientListItem";
import ProcedureListItem from "@/app/clientComponents/procedureListItem";
import RecipeTitle from "@/app/clientComponents/recipeTitle";
import prisma from "../../prisma/prismaClient";

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
                            {r.ingredient_lists.map((i) => (
                                <IngredientListItem key={r.id}
                                                    id={r.id}
                                                    ingredient_id={i.ingredient_id}
                                                    amount={i.amount}
                                                    unit={i.unit}
                                                    ingredients={i.ingredients} />
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
