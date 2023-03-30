import { useRouter } from "next/router";

export function useLocale() {
  const router = useRouter();
  return router.locale ?? "en";
}
