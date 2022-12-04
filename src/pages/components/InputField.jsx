export default function InputField({
  placeholderValue,
  type,
  valueTyped,
  lengthMax,
}) {
  return (
    <div>
      <input
        required
        maxLength={lengthMax}
        type={type}
        placeholder={placeholderValue}
        className="input input-bordered w-72 max-w-screen"
        onChange={(e) => {
          valueTyped(e.target.value);
        }}
      />
    </div>
  );
}
