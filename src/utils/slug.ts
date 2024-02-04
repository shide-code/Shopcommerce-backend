export function createSlug(input: string): string {
  return input
    .trim() // Remove leading and trailing whitespaces
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9\-]/g, '') // Remove non-alphanumeric characters except hyphens
    .replace(/\-{2,}/g, '-') // Replace consecutive hyphens with a single hyphen
    .substring(0, 64); // Limit the length of the slug (optional)
}
