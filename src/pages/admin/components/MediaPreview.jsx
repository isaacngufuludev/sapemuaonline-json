import { FiExternalLink, FiFileText } from "react-icons/fi";
import {
  getDocumentViewerUrl,
  getFileUrl,
  getPdfImagePreviewUrl,
  isBlockedCloudinaryDocument,
  isDocumentFile,
  isImageFile,
} from "../../../utils/filePreview";

function MediaPreview({ file, title }) {
  const url = getFileUrl(file);
  const isImage = isImageFile(file);
  const isDocument = isDocumentFile(file);
  const isBlockedDocument = isBlockedCloudinaryDocument(file);
  const viewerUrl = getDocumentViewerUrl(file);
  const pdfPreviewUrl = getPdfImagePreviewUrl(file);

  return (
    <div className="flex flex-col gap-2 border-b-[0.1px] border-slate-200 px-5 py-3 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:gap-10">
      <p className="text-sm sm:w-56">{title}</p>
      {!url ? (
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Não carregado
        </p>
      ) : pdfPreviewUrl ? (
        <div className="flex w-full max-w-xl flex-col gap-2">
          <a href={url} target="_blank" rel="noreferrer">
            <img
              src={pdfPreviewUrl}
              alt={title}
              className="max-h-96 w-full rounded-md border border-slate-200 bg-white object-contain dark:border-gray-700"
            />
          </a>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-blue-700 px-3 py-2 text-sm text-white"
          >
            <FiFileText />
            <span>{file?.originalName || "Abrir documento PDF"}</span>
          </a>
        </div>
      ) : isBlockedDocument ? (
        <div className="flex w-full max-w-xl flex-col gap-2 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-100">
          <span className="inline-flex items-center gap-2 font-semibold">
            <FiFileText />
            {file?.originalName || "Documento"}
          </span>
          <span>
            Este documento foi bloqueado pelo Cloudinary. Envie novamente o
            ficheiro para gerar um link válido.
          </span>
        </div>
      ) : isImage ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit flex-col gap-2 text-sm text-blue-700 dark:text-blue-300"
        >
          <img
            src={url}
            alt={title}
            className="h-28 w-28 rounded-md border border-slate-200 object-cover dark:border-gray-700"
          />
          <span className="inline-flex items-center gap-1">
            Abrir imagem <FiExternalLink />
          </span>
        </a>
      ) : isDocument && viewerUrl ? (
        <div className="flex w-full max-w-xl flex-col gap-2">
          <iframe
            src={viewerUrl}
            title={title}
            className="h-72 w-full rounded-md border border-slate-200 bg-white dark:border-gray-700"
          />
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-blue-700 px-3 py-2 text-sm text-white"
          >
            <FiFileText />
            <span>{file?.originalName || "Abrir documento"}</span>
            <FiExternalLink />
          </a>
        </div>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-md bg-blue-700 px-3 py-2 text-sm text-white"
        >
          <FiFileText />
          <span>{file?.originalName || "Abrir ficheiro"}</span>
          <FiExternalLink />
        </a>
      )}
    </div>
  );
}

export default MediaPreview;
