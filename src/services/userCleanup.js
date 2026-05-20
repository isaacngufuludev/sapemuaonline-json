import { get, remove } from "./api";

export async function removeUserChatData(userId) {
  if (!userId) return;

  const [messages, files] = await Promise.all([
    get("messages", { forceFresh: true }),
    get("files", { forceFresh: true }),
  ]);

  const userMessages = messages.filter(
    (message) => String(message.senderId) === String(userId),
  );
  const attachedFileIds = new Set(
    userMessages.flatMap((message) =>
      (message.attachments || [])
        .map((attachment) => attachment.fileId || attachment.file?.id)
        .filter(Boolean)
        .map(String),
    ),
  );
  const userFiles = files.filter(
    (file) =>
      String(file.senderId) === String(userId) ||
      attachedFileIds.has(String(file.id)),
  );

  await Promise.all([
    ...userMessages.map((message) => remove("messages", message.id)),
    ...userFiles.map((file) => remove("files", file.id)),
  ]);
}
