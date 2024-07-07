export function TextArea({ id, label, value, onChange, error }) {
  return (
    <div className="flex flex-auto flex-col gap-2">
      <label
        className="text-sm font-semibold capitalize text-gray-500"
        htmlFor={id}
      >
        {label} *
      </label>
      <textarea
        className="input h-44 resize-none py-2 md:h-36"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
