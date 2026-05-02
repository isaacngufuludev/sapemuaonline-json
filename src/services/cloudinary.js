import { toast } from "react-toastify";
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
} from "../utils/constants";

function getCloudinaryUploadUrl(resourceType = "auto") {
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
    throw new Error(
      "Configure VITE_CLOUDINARY_CLOUD_NAME e VITE_CLOUDINARY_UPLOAD_PRESET no ficheiro .env",
    );
  }

  return `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`;
}

function getFileExtension(file) {
  return file?.name?.split(".").pop()?.toLowerCase() || "";
}

function getUploadResourceType(file) {
  if (file?.type?.startsWith("image/")) return "image";
  if (file?.type === "application/pdf" || getFileExtension(file) === "pdf") {
    return "image";
  }
  if (file?.type?.startsWith("video/")) return "video";
  return "raw";
}

export async function uploadToCloudinary(file, folder = "sapemua") {
  if (!file) return null;
  const resourceType = getUploadResourceType(file);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  formData.append("folder", folder);

  const res = await fetch(getCloudinaryUploadUrl(resourceType), {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    toast.error("Erro ao enviar ficheiro para o Cloudinary");
    throw new Error("Cloudinary upload failed");
  }

  const data = await res.json();

  return {
    url: data.secure_url,
    publicId: data.public_id,
    resourceType: data.resource_type,
    format: data.format || getFileExtension(file),
    originalName: file.name,
    bytes: data.bytes,
  };
}

export async function uploadOptionalFile(file, currentFile, folder) {
  if (!file) return currentFile || null;
  return uploadToCloudinary(file, folder);
}
