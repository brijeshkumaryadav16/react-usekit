import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://www.reactusekit.dev",
      images: [],
      siteName: "ReactUseKit",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "",
      ...override.twitter,
    },
    alternates: {
      ...override.alternates,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL("https://www.reactusekit.dev");
