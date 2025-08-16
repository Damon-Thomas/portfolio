export default function Page2({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-1 flex-col rounded-4xl bg-amber-100 p-4 gap-2 justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Page 2</h1>
        <p>This is the content of Page 2.</p>
        {children}
      </div>
    </div>
  );
}
