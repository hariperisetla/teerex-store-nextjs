// Summary Component
const Summary = ({ total }) => {
  // SummaryDetails array
  const summaryDetails = [
    { label: "Sub-total", value: `Rs. ${total}` },
    { label: "Discount", value: "--" },
    { label: "Delivery", value: "--" },
  ];

  return (
    <div className="rounded-xl bg-white col-span-4 md:col-span-1 p-5 space-y-5 h-80">
      <h4 className="font-playfair text-2xl">Summary</h4>
      <div className="border-b-2"></div>

      {summaryDetails.map((detail, id) => (
        <div key={id} className="flex justify-between">
          <h4 className="text-xl">{detail.value}</h4>
          <h4 className="text-xl">{detail.label}</h4>
        </div>
      ))}
      <div className="border-b-2"></div>
      <div className="flex justify-between font-bold">
        <h4 className="text-xl">Total</h4>
        <h4 className="text-xl">Rs. {total}</h4>
      </div>
    </div>
  );
};

// Export Summary Component
export default Summary;
