export function getPath(relativePath: string) {
  if (window.location.href.includes("localhost")) {
    return relativePath;
  }

  const isLocal = window.location.href.includes("localhost");

  return isLocal ? `/${relativePath}` : `/willpower/${relativePath}`;
}
