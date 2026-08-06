export const getAssetPath = (path) => {
  if (!path) return '';
  // If it's already an HTTP / external URL or data URI, return as-is
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${cleanBase}${cleanPath}`;
};
