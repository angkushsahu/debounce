"use client";

import { useCallback, useRef, type ChangeEvent } from "react";

export function useDebounce(callback: (e: ChangeEvent<HTMLInputElement>) => void, delay: number) {
   let timeoutRef = useRef<NodeJS.Timeout | null>(null);

   return useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
         if (timeoutRef.current) clearTimeout(timeoutRef.current);
         timeoutRef.current = setTimeout(() => {
            callback(e);
         }, delay);
      },
      [callback, delay]
   );
}
