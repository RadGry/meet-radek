import base from "../../content/base.json";
import amPm from "../../content/roles/am-pm.json";

export type Stat = { value: string; label: string };

export type Project = {
  title: string;
  scope: string;
  timeline?: string;
  pnl?: string;
  highlights?: string;
  tags: string[];
};

export type ExperienceEntry = {
  role: string;
  company: string;
  dates: string;
  location?: string;
  summary: string;
};

export type Interest = { name: string; icon: string };

export type Profile = {
  name: string;
  email: string;
  linkedin: string;
  tagline: string;
  headline: string;
  roleTags: string[];
};

export type Content = {
  profile: Profile;
  story: { heading: string; body: string };
  stats: Stat[];
  projects: Project[];
  experience: ExperienceEntry[];
  skills: string[];
  interests: Interest[];
  contact: { heading: string; body: string; email: string; linkedin: string };
};

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    (value.constructor === Object || value.constructor === undefined)
  );
}

function deepMerge<T>(base: T, override: DeepPartial<T> | undefined): T {
  if (override === undefined) return base;
  if (!isPlainObject(base) || !isPlainObject(override)) {
    return (override as unknown as T) ?? base;
  }
  const result: Record<string, unknown> = { ...base };
  for (const key of Object.keys(override)) {
    const baseValue = (base as Record<string, unknown>)[key];
    const overrideValue = (override as Record<string, unknown>)[key];
    if (isPlainObject(baseValue) && isPlainObject(overrideValue)) {
      result[key] = deepMerge(baseValue, overrideValue as DeepPartial<typeof baseValue>);
    } else if (overrideValue !== undefined) {
      result[key] = overrideValue;
    }
  }
  return result as T;
}

const ROLE_OVERRIDES: Record<string, DeepPartial<Content>> = {
  "am-pm": amPm as DeepPartial<Content>,
};

export function getContent(role: string = "am-pm"): Content {
  const override = ROLE_OVERRIDES[role];
  return deepMerge(base as Content, override);
}

export const content: Content = getContent("am-pm");
