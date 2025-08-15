import NextPage from "../NextPage";

export default function Page2({ changePage }: { changePage: () => void }) {
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-1 flex-col bg-amber-100 p-4 gap-2 justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Page 2</h1>
        <p>This is the content of Page 2.</p>
        <NextPage changePage={changePage}></NextPage>
      </div>
    </div>
  );
}
