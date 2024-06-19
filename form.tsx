"use client";

import type { ChangeEvent } from "react";
import { useDebounce } from "@/hooks";

export function Form() {
   const debounce = useDebounce(async (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      console.log(value); // do the deed
   }, 750);

   return (
      <section className="size-96 bg-zinc-900 rounded-md p-10 flex items-center justify-center flex-col gap-6">
         <input type="text" className="bg-zinc-700 text-white p-2" onChange={debounce} />
         <button type="button" className="px-6 py-2 bg-blue-700 hover:bg-blue-800 active:scale-95">
            Click me daddy !!!!
         </button>
      </section>
   );
}
