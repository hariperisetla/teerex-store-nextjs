// Import useStore from StoreContext
import { useStore } from "@/context/StoreContext";

const StatusMessage = () => {
  // Import error, success from useStore
  const { error, success } = useStore();

  return (
    <div
      className={`${
        error ? "bg-red-600" : success ? "bg-green-600" : null
      } text-white p-3 rounded-xl fixed z-10 right-5 top-20 text-sm md:text-md text-center pt-3`}
    >
      <span className="font-bold">
        {error ? "Error " : success ? "Success: " : null}{" "}
      </span>
      {error ? error : success}
    </div>
  );
};

// Export StatusMessage
export default StatusMessage;
