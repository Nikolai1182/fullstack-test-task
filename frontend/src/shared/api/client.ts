const API_BASE_URL = "http://localhost:8000";

export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Не удалось загрузить данные");
  }
  return (await response.json()) as T;
}

export async function apiPostFormData<T>(path: string, formData: FormData): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Не удалось загрузить файл");
  }

  return (await response.json()) as T;
}

export function apiFileDownloadUrl(fileId: string): string {
  return `${API_BASE_URL}/files/${fileId}/download`;
}
