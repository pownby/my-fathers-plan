/* Merges two objects, including recursively merging own properties */
export default function merge(a: Record<any, any>, b: Record<any, any>) {
  const result = {
    ...a,
    ...b
  };

  Object.keys(result).forEach(key => {
    const aVal = a[key];
    const bVal = b[key];

    if (typeof aVal === 'object' && typeof bVal === 'object') {
      if (Array.isArray(aVal) && Array.isArray(bVal)) {
        result[key] = [...aVal, ...bVal];
      }
      if (!Array.isArray(aVal) && !Array.isArray(bVal)) {
        result[key] = merge(a[key], b[key]);
      }
    }
  });

  return result;
}