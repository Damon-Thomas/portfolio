export default function NextPage({ changePage }: { changePage: () => void }) {
  return (
    <button
      onClick={changePage}
      className="p-2 bg-gray-900 text-white rounded-lg "
    >
      Next Page
    </button>
  );
}
