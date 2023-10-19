import type { Player } from "./types/PlayerTypes"

const player1: Player = {
    givenName: 'Kim Isak',
    familyName: 'Olsen',
    nickname: 'Kimmi',
    image: 'https://i.pravatar.cc/75',
    gender: {
        name: "male",
        pronouns: {
            subject: "he",
            object: "him",
            possessive: "his",
            reflexive: "himself",
        }
    },
    status: "alive",
}

const player2: Player = {
    givenName: 'Solveig',
    familyName: 'Langås',
    nickname: 'Sunroad',
    image: 'https://i.pravatar.cc/75',
    gender: {
        name: "female",
        pronouns: {
            subject: "she",
            object: "her",
            possessive: "her",
            reflexive: "herself",
        }
    },
    status: "alive",
}

const player3: Player = {
    givenName: 'Ingrid Amalie',
    familyName: 'Solbjørg',
    nickname: 'IA',
    image: 'https://i.pravatar.cc/75',
    gender: {
        name: "female",
        pronouns: {
            subject: "she",
            object: "her",
            possessive: "her",
            reflexive: "herself",
        }
    },
    status: "alive",
}

export const players = [player1, player2, player3]