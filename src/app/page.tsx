import prisma from "../../prisma/prismaClient";

export default async function Home() {
    const recipes = await prisma.recipes.findMany({
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

    console.log(...recipes);

    return (
        <>
            <ul>
                {recipes.map(r => (
                    <li key={r.id}>
                        <form className={`text-black`}>
                            <label htmlFor={`${r.id}`}>
                                Recipe
                                <input id={`${r.id}`} type={"text"} defaultValue={r.name}/>
                            </label>
                            <ul>
                                <h3>Ingredients</h3>
                                {r.ingredient_lists.map((i) => (
                                    <li key={i.ingredient_id}>
                                        <label htmlFor={`${r.id}-${i.ingredient_id}-amount`}>
                                            Amount
                                            <input id={`${r.id}-${i.ingredient_id}-amount`} type={"number"}
                                                   defaultValue={`${i.amount}`} className={`w-1/2`}/>
                                        </label>
                                        <label htmlFor={`${r.id}-${i.ingredient_id}-unit`}>
                                            Unit
                                            <input id={`${r.id}-${i.ingredient_id}-unit`} type={"text"}
                                                   defaultValue={`${i.unit}`}/>
                                        </label>
                                        <label htmlFor={`${r.id}-${i.ingredient_id}-name`}>
                                            Ingredient
                                            <input id={`${r.id}-${i.ingredient_id}-name`} type={"text"}
                                                   defaultValue={i.ingredients.name}/>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                            <ul>
                                <h3>Procedure</h3>
                                {r.procedures.map((p) => {
                                    return (
                                        <li key={p.id}>
                                            <label className={`procedures`} htmlFor={`${p.id}`}>
                                                {p.step}:
                                                <textarea id={`${p.id}`} rows={5} cols={70} defaultValue={p.procedure}/>
                                            </label>
                                        </li>
                                    );
                                })}
                            </ul>
                        </form>
                    </li>
                ))}
            </ul>
        </>
    );
}
