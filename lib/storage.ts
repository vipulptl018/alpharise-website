import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const dataDir = path.join(process.cwd(), "data");

async function ensureDataDir() {
  await mkdir(dataDir, { recursive: true });
}

export async function readJsonArray<T>(filename: string): Promise<T[]> {
  await ensureDataDir();
  const filePath = path.join(dataDir, filename);
  try {
    const raw = await readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}

export async function writeJsonArray<T>(
  filename: string,
  value: T[]
): Promise<void> {
  await ensureDataDir();
  const filePath = path.join(dataDir, filename);
  await writeFile(filePath, JSON.stringify(value, null, 2), "utf8");
}
