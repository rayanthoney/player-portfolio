import fs from "fs";
import path from "path";
import { Player } from "./types";

const DATA_DIRECTORY = path.join(process.cwd(), "src/data/players");

export async function getAllPlayers(): Promise<Player[]> {
  try {
    const files = fs.readdirSync(DATA_DIRECTORY);
    const playerFiles = files.filter((file) => file.endsWith(".json"));

    const players = playerFiles.map((file) => {
      const filePath = path.join(DATA_DIRECTORY, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      return JSON.parse(fileContent) as Player;
    });

    // Sort players so aaliyah-chavez is always the first player (featured)
    return players.sort((a, b) => {
      if (a.slug === "aaliyah-chavez") return -1;
      if (b.slug === "aaliyah-chavez") return 1;
      return a.displayName.localeCompare(b.displayName);
    });
  } catch (error) {
    console.error("Error loading players from data directory:", error);
    return [];
  }
}

export async function getPlayerBySlug(slug: string): Promise<Player | undefined> {
  try {
    const filePath = path.join(DATA_DIRECTORY, `${slug}.json`);
    if (!fs.existsSync(filePath)) {
      return undefined;
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContent) as Player;
  } catch (error) {
    console.error(`Error loading player with slug ${slug}:`, error);
    return undefined;
  }
}
