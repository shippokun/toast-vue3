import { format } from "date-fns";

export const formatDate = (
  value: Date | undefined,
  formatType = "yyyy-MM-dd HH:mm:ss"
): string => {
  if (value === undefined) return "";
  return format(value, formatType);
};
