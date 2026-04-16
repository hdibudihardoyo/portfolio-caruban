import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("locale")?.value;
  const resolvedLocale = cookieLocale === "id" ? "id" : "en";

  return {
    locale: resolvedLocale,
    messages: (
      await import(`../messages/${resolvedLocale}/${resolvedLocale}.json`)
    ).default,
  };
});
