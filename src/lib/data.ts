import fs from "fs";
import path from "path";
import { Player, JourneyItem, FilmCategory } from "./types";

const dataDir = path.join(process.cwd(), "src/data");

export async function getPlayerBySlug(slug: string): Promise<Player | null> {
  try {
    const filePath = path.join(dataDir, "players", `${slug}.json`);
    const fileContents = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    return null;
  }
}

export async function getAllPlayers(): Promise<Player[]> {
  try {
    const playersDir = path.join(dataDir, "players");
    const files = await fs.promises.readdir(playersDir);
    const players: Player[] = [];

    for (const file of files) {
      if (file.endsWith(".json")) {
        const fileContents = await fs.promises.readFile(path.join(playersDir, file), "utf8");
        players.push(JSON.parse(fileContents));
      }
    }
    return players;
  } catch (error) {
    return [];
  }
}

export async function getJourney(): Promise<JourneyItem[]> {
  try {
    const filePath = path.join(dataDir, "journey.json");
    const fileContents = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    return [];
  }
}

export async function getFilmCategories(): Promise<FilmCategory[]> {
  try {
    const filePath = path.join(dataDir, "film.json");
    const fileContents = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    return [];
  }
}
