export function RadioGroup({ label, name, options, value, onChange, error }) {
  return (
    <div className="flex flex-auto flex-col gap-2">
      <span className="text-sm font-semibold capitalize text-gray-500">
        {label} *
      </span>
      <div className="flex flex-col gap-4 sm:flex-row">
        {options.map((option) => (
          <div
            key={option.value}
            className="input flex cursor-pointer items-center gap-2"
          >
            <input
              id={option.value}
              className="h-4 w-4 accent-teal-700"
              name={name}
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            <label
              className="grow cursor-pointer text-sm font-semibold capitalize text-gray-500"
              htmlFor={option.value}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
