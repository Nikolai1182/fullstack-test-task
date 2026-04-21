import { FileItem } from "@/entities/file";
import { apiFileDownloadUrl, apiGet, apiPostFormData } from "@/shared/api/client";

export async function fetchFiles(): Promise<FileItem[]> {
  return apiGet<FileItem[]>("/files");
}

export async function uploadFile(title: string, file: File): Promise<FileItem> {
  const formData = new FormData();
  formData.append("title", title.trim());
  formData.append("file", file);
  return apiPostFormData<FileItem>("/files", formData);
}

export { apiFileDownloadUrl };
