import type {Player} from "./PlayerTypes";

export type Team = {
    logo: TeamLogo,
    name: string,
    motto: string,
    players: Player[],
    leader: Player,
    status: TeamStatus,
}

export type TeamLogo = {
    name: string,
    url: string,
    alt: string,
}

export type TeamStatus = {
    status: "active" | "eliminated" | "disqualified",
}