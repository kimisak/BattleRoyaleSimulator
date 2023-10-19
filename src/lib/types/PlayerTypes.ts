import type { Team } from "./TeamTypes";

export type Player = {
    givenName: string,
    familyName?: string,
    nickname?: string,
    gender: Gender,
    team?: Team,
    image: string,
    status: "alive" | "dead",
}

type Gender = {
    name: "male" | "female" | "non-binary",
    pronouns: GenderPronoun,
}

type GenderPronoun = {
    subject: "he" | "she" | "they";
    object: "him" | "her" | "them";
    possessive: "his" | "her" | "their";
    reflexive: "himself" | "herself" | "themself"; 
};