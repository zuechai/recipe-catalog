export default function ProcedureListItem({ id, step, procedure }: { id: number, step: number, procedure: string }) {
    return (
        <li key={id}>
            <label className={`procedures`} htmlFor={`${id}`}>
                <span>{step}: </span>
                <textarea id={`${id}`} rows={5} cols={70} defaultValue={procedure} />
            </label>
        </li>
    );
}
