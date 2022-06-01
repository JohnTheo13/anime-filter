import { get } from "../services/api";

export const getAnime = (): Promise<string[]> => get("available/anime");
