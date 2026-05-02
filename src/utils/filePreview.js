const IMAGE_FORMATS = ["jpg", "jpeg", "png", "webp", "gif"];
const DOCUMENT_FORMATS = [
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx",
  "txt",
];

export function getFileUrl(file) {
  if (!file) return "";
  if (typeof file === "string") return file;
  const url = file.url || "";

  if (isDocumentLike(file) && file.resourceType === "raw") {
    return url.replace("/image/upload/", "/raw/upload/");
  }

  return url;
}

export function getFileFormat(file) {
  const format = file?.format?.toLowerCase();
  if (format) return format;

  const url = getFileUrl(file).toLowerCase().split("?")[0];
  const extension = url.match(/\.([a-z0-9]+)$/)?.[1];
  return extension || "";
}

export function isImageFile(file) {
  const format = getFileFormat(file);
  const url = getFileUrl(file).toLowerCase();

  return (
    IMAGE_FORMATS.includes(format) ||
    /\.(jpg|jpeg|png|webp|gif)(\?.*)?$/.test(url)
  );
}

export function isPdfFile(file) {
  return getFileFormat(file) === "pdf";
}

export function getPdfImagePreviewUrl(file) {
  const url = getFileUrl(file);
  if (!url || !isPdfFile(file) || !url.includes("res.cloudinary.com")) {
    return "";
  }

  if (url.includes("/image/upload/")) {
    return url.replace(/\.pdf(\?.*)?$/i, ".jpg");
  }

  return "";
}

export function isDocumentFile(file) {
  return DOCUMENT_FORMATS.includes(getFileFormat(file));
}

export function isBlockedCloudinaryDocument(file) {
  const url = getFileUrl(file);

  return (
    isDocumentFile(file) &&
    file?.resourceType === "image" &&
    url.includes("res.cloudinary.com") &&
    url.includes("/image/upload/")
  );
}

export function getDocumentViewerUrl(file) {
  const url = getFileUrl(file);
  if (!url) return "";
  if (isPdfFile(file)) return url;

  return `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(url)}`;
}

function isDocumentLike(file) {
  if (!file) return false;

  const format = file?.format?.toLowerCase();
  if (format) return DOCUMENT_FORMATS.includes(format);

  const url = typeof file === "string" ? file : file.url || "";
  const extension = url
    .toLowerCase()
    .split("?")[0]
    .match(/\.([a-z0-9]+)$/)?.[1];
  return DOCUMENT_FORMATS.includes(extension);
}
