"use client"
export default function ViewToggle({ viewToggle, onToggle }) {
  // const [viewToggle, setViewToggle] = useState(true);

  return (
    <div className="flex justify-start mt-10">
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
        // onClick={() => setViewToggle(!viewToggle)}
        onClick={onToggle}
      >
        {viewToggle ? "Card" : "table"}
      </button>
    </div>
  );
};
