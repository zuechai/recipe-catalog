"use client";

import { useState } from "react";

export default function RecipeTitle({ id, name }: { id: string, name: string }) {
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return (
            <label htmlFor={`${id}`}>
                <span>Recipe</span>
                <input className={`w-0.5`} id={`${id}`} type={"text"} defaultValue={name} />
            </label>
        );
    } else {
        return (
            <div id={`${id}`}>
                <span>Recipe</span>
                <div className={`w-0.5`} id={`${id}`}>{name}</div>
            </div>
        );
    }
}
