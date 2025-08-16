export default function Page1({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex  h-full w-full ">
      <div className="flex flex-1 flex-col bg-cyan-100 rounded-4xl p-4 gap-2 justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Page 1</h1>
        <p>This is the content of Page 1.</p>
        {children}{" "}
      </div>
    </div>
  );
}
