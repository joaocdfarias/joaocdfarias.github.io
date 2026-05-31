import { queryOptions } from "@tanstack/react-query";
import { z } from "zod";
import { fetchJson } from "./fetchJson";

const stackItemSchema = z.object({
  name: z.string(),
});

const siteContentSchema = z.object({
  home: z.object({
    headingPrefix: z.string(),
    headingName: z.string(),
    subtitle: z.string(),
  }),
  experience: z.object({
    title: z.string(),
    subtitle: z.string(),
    role: z.string(),
    company: z.string(),
    period: z.string(),
    description: z.string(),
  }),
  stack: z.object({
    title: z.string(),
    subtitle: z.string(),
    items: z.array(stackItemSchema),
  }),
});

export type SiteContent = z.infer<typeof siteContentSchema>;

async function getSiteContent(): Promise<SiteContent> {
  const payload = await fetchJson<unknown>("/content/site-content.json");
  return siteContentSchema.parse(payload);
}

export const siteContentQueryOptions = queryOptions({
  queryKey: ["site-content"],
  queryFn: getSiteContent,
  staleTime: 5 * 60 * 1000,
});
