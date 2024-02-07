"use client";

import { useState } from "react";

export default function ProcedureListItem({ id, step, procedure }: { id: number, step: number, procedure: string }) {
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return (
            <li>
                <label className={`procedures`} htmlFor={`${id}`}>
                    <span>{step}: </span>
                    <textarea id={`${id}`} rows={5} cols={70} defaultValue={procedure} />
                </label>
            </li>
        );
    } else {
        return (
            <li>
                <div className={`procedures`} id={`${id}`}>
                    <span>{step}: </span>
                    <div id={`${id}`}>{procedure}</div>
                </div>
            </li>
        );
    }
}
