export default function NextPage({ animate }: { animate: () => void }) {
  return (
    <button
      onClick={animate}
      className="p-2 bg-gray-900 text-white rounded-lg "
    >
      Next Page
    </button>
  );
}
