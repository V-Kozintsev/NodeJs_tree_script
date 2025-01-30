import fs from "node:fs/promises";
import path from "node:path";

async function readFile(myPath, pw) {
  try {
    const absoluteFile = path.resolve(myPath);
    const asb = path.join("file.txt", "file2.txt");
    console.log(asb);
    const data = await fs.readFile(myPath, "utf-8");
    /* console.log("содержимое файла", data); */
  } catch (error) {
    console.error("ошибка чтения", error);
  }
}
readFile("file.txt", "file2.txt");
