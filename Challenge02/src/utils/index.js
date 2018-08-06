export const substr = (title, maxLength = 20) =>
  title.length <= maxLength ? title : `${title.substring(0, maxLength)}...`;
