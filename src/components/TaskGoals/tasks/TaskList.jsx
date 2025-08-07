
export default function TasksList({title, tasks}) {


  return (
    <>
    <p>{title}</p>
      {tasks.map((t) => (
        <label key={t.id} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={t.done}
            readOnly   /* tik skaitymui, kol nekursim toggle */
          />
          <span className={t.done ? "line-through text-gray-400" : ""}>
            {t.title}
          </span>
        </label>
      ))}
    </>
   
  );
}
