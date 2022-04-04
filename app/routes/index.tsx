import { useFetcher } from "@remix-run/react";

export default function Index() {
  const fetcher = useFetcher();

  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
       <div className="flex flex-col mb-4 items-center">
         <h1 className="text-lg font-bold">Message</h1>
         <p>{ fetcher.data ? fetcher.data.message : "none"}</p>
       </div>
        <div className="flex w-full flex-row justify-center">
          <fetcher.Form method="post" action="/api/new" reloadDocument={false}>
            <input type="hidden" name="country" value={"japan"} />
            <button className="border rounded-md px-2 py-1" type="submit">Submit</button>
          </fetcher.Form>
        </div>
      </div>
    </main>
  );
}
