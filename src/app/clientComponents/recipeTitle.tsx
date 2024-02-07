"use client";

import React, { useState } from "react";
import useSWR from "swr";

export default function RecipeTitle({ id, name }: { id: string, name: string }) {
    const [toggleEdit, setToggleEdit] = useState(false);
    const [title, setTitle] = useState(name);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setToggleEdit(!toggleEdit);
    };

    const saveChanges = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (title.trim() !== name.trim()) {
            // TODO call api to persist the name
        }
        setToggleEdit(false);
    };

    if (toggleEdit) {
        return (
            <>
                <form>
                    <label htmlFor={`${id}`}>
                        <span>Recipe</span>
                        <input className={`w-0.5`}
                               id={`${id}`}
                               type={"text"}
                               defaultValue={title}
                               onChange={(e) => setTitle(e.target.value)} />
                        <button onClick={(e) => {
                            saveChanges(e);
                        }}>Save
                        </button>
                        <button onClick={(e) => handleClick(e)}>X</button>
                    </label>
                </form>
            </>
        );
    } else {
        return (
            <div id={`${id}`}>
                <span>Recipe</span>
                <div className={`w-0.5`} id={`${id}`}>{title}</div>
                <button onClick={(e) => handleClick(e)}>/</button>
            </div>
        );
    }
}
