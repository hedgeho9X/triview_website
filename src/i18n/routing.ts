import { defaultLocale, isLocale, type Locale } from "./locales";

export function getLocaleFromUrl(pathname: string): Locale {
  const seg = pathname.split("/").filter(Boolean)[0] || "";
  if (isLocale(seg)) return seg;
  return defaultLocale;
}

export function stripLocaleFromUrl(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0] ?? "";
  if (first && isLocale(first)) segments.shift();
  const stripped = `/${segments.join("/")}`;
  return stripped === "/" ? "/" : stripped.replace(/\/+$/, "");
}

export function withLocale(locale: Locale, path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return locale === defaultLocale ? p : `/${locale}${p}`;
}

export const localizedBasePaths = new Set<string>([
  "/",
  "/products",
  "/solutions",
  "/resources",
  "/capabilities",
  "/about",
  "/contact",
  "/faq",
  "/interface-summary",
  "/applications",
  "/industries",
  "/use-cases"
]);
