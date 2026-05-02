import { FiExternalLink, FiFileText, FiImage } from "react-icons/fi";
import {
  getDocumentViewerUrl,
  getFileUrl,
  getPdfImagePreviewUrl,
  isBlockedCloudinaryDocument,
  isDocumentFile,
  isImageFile,
} from "../../utils/filePreview";

function ChatAttachments({ attachments = [] }) {
  if (!attachments.length) return null;

  return (
    <div className="mt-3 flex flex-col gap-2">
      {attachments.map((attachment, index) => {
        const url = getFileUrl(attachment.file);
        if (!url) return null;

        const isImage = isImageFile(attachment.file);
        const isDocument = isDocumentFile(attachment.file);
        const isBlockedDocument = isBlockedCloudinaryDocument(attachment.file);
        const viewerUrl = getDocumentViewerUrl(attachment.file);
        const pdfPreviewUrl = getPdfImagePreviewUrl(attachment.file);
        const label =
          {
            evaluation: "Avaliação",
            task: "Tarefa",
            file: "Ficheiro",
          }[attachment.type] || "Ficheiro";
        const fileName = attachment.file?.originalName || "Abrir ficheiro";

        if (isBlockedDocument && !pdfPreviewUrl) {
          return (
            <div
              key={`${attachment.type}-${index}`}
              className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900 shadow-sm dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-100"
            >
              <span className="flex items-center gap-2">
                <FiFileText className="shrink-0" />
                <span className="min-w-0 flex-1">
                  <span className="font-semibold">{label}: </span>
                  <span className="break-all">{fileName}</span>
                </span>
              </span>
              <span className="mt-1 block">
                Este documento foi bloqueado pelo Cloudinary. Envie novamente o
                ficheiro.
              </span>
            </div>
          );
        }

        if (pdfPreviewUrl) {
          return (
            <div
              key={`${attachment.type}-${index}`}
              className="overflow-hidden rounded-xl border border-white/30 bg-white/80 text-gray-900 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            >
              <a href={url} target="_blank" rel="noreferrer">
                <img
                  src={pdfPreviewUrl}
                  alt={fileName}
                  className="max-h-72 w-full object-contain bg-white"
                />
              </a>
              <span className="flex items-center gap-2 px-3 py-2 text-xs">
                <FiFileText />
                <span className="min-w-0 flex-1">
                  <span className="font-semibold">{label}: </span>
                  <span className="break-all">{fileName}</span>
                </span>
              </span>
            </div>
          );
        }

        if (!isImage && isDocument && viewerUrl) {
          return (
            <div
              key={`${attachment.type}-${index}`}
              className="overflow-hidden rounded-xl border border-white/30 bg-white/80 text-gray-900 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            >
              <iframe
                src={viewerUrl}
                title={fileName}
                className="h-52 w-full border-0 bg-white"
              />
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-xs"
              >
                <FiFileText />
                <span className="min-w-0 flex-1">
                  <span className="font-semibold">{label}: </span>
                  <span className="break-all">{fileName}</span>
                </span>
                <FiExternalLink className="shrink-0" />
              </a>
            </div>
          );
        }

        return (
          <a
            key={`${attachment.type}-${index}`}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="block overflow-hidden rounded-xl border border-white/30 bg-white/80 text-gray-900 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            {isImage && (
              <img
                src={url}
                alt={fileName}
                className="max-h-48 w-full object-cover"
              />
            )}
            <span className="flex items-center gap-2 px-3 py-2 text-xs">
              {isImage ? <FiImage /> : <FiFileText />}
              <span className="min-w-0 flex-1">
                <span className="font-semibold">{label}: </span>
                <span className="break-all">{fileName}</span>
              </span>
              <FiExternalLink className="shrink-0" />
            </span>
          </a>
        );
      })}
    </div>
  );
}

export default ChatAttachments;
