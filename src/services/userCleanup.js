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
  const userFiles = files.filter(
    (file) => String(file.senderId) === String(userId),
  );

  await Promise.all([
    ...userMessages.map((message) => remove("messages", message.id)),
    ...userFiles.map((file) => remove("files", file.id)),
  ]);
}
