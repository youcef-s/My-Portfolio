"use client";

import { useSyncExternalStore } from "react";

/** The clock never calls us back; the year is read fresh on the client instead. */
const subscribe = () => () => {};
const currentYear = () => new Date().getFullYear();

/**
 * The page is prerendered, so a `new Date()` in a server component freezes at
 * build time and the copyright goes stale on a site that is not redeployed.
 * The build-time year is what the server rendered, so hydration matches on it;
 * React then re-reads the reader's own clock.
 */
export function Year({ fallback }: { fallback: number }) {
  return <>{useSyncExternalStore(subscribe, currentYear, () => fallback)}</>;
}
