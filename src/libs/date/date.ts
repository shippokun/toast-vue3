import { format, parseISO } from "date-fns";

export const formatDate = (
  value: Date | string | undefined,
  formatType = "yyyy-MM-dd HH:mm:ss"
): string => {
  if (value === undefined) return "";
  if (typeof value === "string") {
    const result = parseISO(value);
    return format(result, formatType);
  }
  return format(value, formatType);
};
