import { AlertItem } from "@/entities/alert";
import { apiGet } from "@/shared/api/client";

export async function fetchAlerts(): Promise<AlertItem[]> {
  return apiGet<AlertItem[]>("/alerts");
}
