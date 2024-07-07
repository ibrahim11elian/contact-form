export function InputField({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <div className="flex flex-auto flex-col gap-2">
      <label
        className="text-sm font-semibold capitalize text-gray-500"
        htmlFor={id}
      >
        {label} *
      </label>
      <input
        type={type}
        className="input w-full"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
