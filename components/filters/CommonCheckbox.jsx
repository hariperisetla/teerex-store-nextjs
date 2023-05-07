// Commoncheckbox component
const CommonCheckbox = ({ label, filter, handleFilterCheckbox }) => {
  return (
    <input
      type="checkbox"
      id={label}
      value={label}
      className="w-5 h-5 cursor-pointer border-black mx-2 focus:ring-0 checked:text-black border-2 bg-white rounded"
      onChange={(e) => handleFilterCheckbox(filter.name, e)}
    />
  );
};

// Export Commoncheckbox component
export default CommonCheckbox;
