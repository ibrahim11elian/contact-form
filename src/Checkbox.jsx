export function Checkbox({ id, label, checked, onChange, error }) {
  return (
    <div className="flex flex-auto flex-col gap-2">
      <div className="flex gap-4">
        <input
          type="checkbox"
          id={id}
          className="h-4 w-4 cursor-pointer accent-teal-700 hover:accent-teal-900"
          name={id}
          checked={checked}
          onChange={onChange}
        />
        <label
          className="cursor-pointer text-sm font-semibold capitalize text-gray-500"
          htmlFor={id}
        >
          {label} *
        </label>
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
