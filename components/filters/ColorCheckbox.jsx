// ColorCheckbox Component
const ColorCheckbox = ({ label, filter, handleFilterCheckbox }) => {
  return (
    <input
      type="checkbox"
      id={label}
      value={label}
      style={{ background: label }}
      className={`w-8 h-8 m-2 color-check-box border-black cursor-pointer checked:border-none focus:border-none focus:outline-none checked:outline-none focus:shadow-none focus:ring-offset-none backdrop:scale-100 focus:scale-x-100 focus:scale-y-100 backdrop:ring-0 outline-none focus:ring-0 rounded ring-0 hover:ring-0 hover:scale-110 checked:ring-0`}
      onChange={(e) => handleFilterCheckbox(filter.name, e)}
    />
  );
};

// Export ColorCheckbox
export default ColorCheckbox;
