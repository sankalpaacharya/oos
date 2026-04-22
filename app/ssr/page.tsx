import { getData } from "@/lib/api";
import { Suspense } from "react";
import { Data } from "@/lib/api";

// rsc (out or order streaming)

export default function Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Suspense fallback={<p>loading...</p>}>
        <DataComponent />
      </Suspense>
    </div>
  );
}

async function DataComponent() {
  const data = (await getData()) as Data;
  return (
    <p>
      {data?.message} from {data?.from}
    </p>
  );
}
