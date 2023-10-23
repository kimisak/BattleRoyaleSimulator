# Battle Royale Simulator

## Developing

Once you've created a project and installed dependencies with `pnpm install` (or `npm install` or `yarn`), start a development server:

```bash
pnpm run dev
# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Documentation

## Placeholders, Regexes, Genders, and Pronouns

### A contentful GameEvent.text

`type` [GameEvent](./src/lib/types/game.types.ts) has a `text`, which describes what happens in the simulator.
This text may include placeholders for players and their pronouns, such as `(Player#)`, and `(Pronouns#)`, which I refer to as the whole pronoun placeholder, including `dividers`.

> `(Player1)` discovered `(Player2)` and `(Player3)` conspiring against `(him/her/them1)`. `(he/she/they1)` fought back and eliminated `(Player2)` and `(Player3)`.

The player and pronoun placeholders are indexed and should correspond. If `(Player1)` was a `FEMALE` named `"Katniss"`, the `(Pronouns#)` in the sentence would be `"her"` and `"she"`.

### "Replacement of Placeholders"-helpers

There are multiple [helpers](./src/lib/helper.ts) that are responsible for the replacements of placeholders.

- `createContentfulGameEventText(text, players)` works as the `main` of placeholder replacements where
- `(Player#)` placeholders are replaced with `replacePlayerNamePlaceholders(text, players)`.
- `(Pronouns#)` placeholders are replaced with `replaceMultiplePronounTypePlaceholders(text, players)` which
- finds all pronoun types with `getPronounsInText(text)` used in the `text` and iterates through them, calling `replaceSingularPronounTypePlaceholders(text, players, regex, divider)` to replace each pronoun type match with the corresponding player's pronoun.

In short:

```
createContentfulGameEventText(...)
|-- replacePlayerNamePlaceholders(...)
|-- replaceMultiplePronounTypePlaceholders(...)
|   |-- getPronounsInText(...)
|   |-- replaceSingularPronounTypePlaceholders(...)
|---|
|---(sentence capitalization, Player name html and css styling, etc.)
|
returns text with player names and pronouns instead of placeholders.
```

### Static and Dynamic Regexes

Regexes are used to capture and replace the placeholders within the helpers above.
The regexes are stored in [./src/lib/constants](./src/lib/constants.ts) and are generated by the [helper](./src/lib/helper.ts) `generatePronounRegExpStrings(GENDERS)`.
These three constants define the regex rules:

1. `GAME_EVENT_TEXT_PLAYER_REGEX` decides how to capture the player placeholders. This is static.
2. `GAME_EVENT_TEXT_PRONOUN_DYNAMIC_REGEX` decides how to capture the player pronoun placeholders. It is dynamic, and is used in `generatePronounRegExpStrings(...)` to generate the capture groups for all pronoun type values for all genders, divided by the
3. `GAME_EVENT_TEXT_PRONOUN_DIVIDER`, which divides the pronoun type values for all genders in the same helper, `generatePronounRegExpStrings(...)`.

I insist you keep the placeholder format as is, and only change the `GAME_EVENT_TEXT_PRONOUN_DIVIDER`. However, if the format of the player or pronoun placeholders used in `GameEvent.text` changes, these regexes must reflect that change and be updated.

### Genders and Pronouns

`Gender` and `Pronoun` `types` are defined in [gender_and_pronouns.types.ts](/src/lib/types/gender_and_pronouns.types.ts). These types are used for gender and pronoun `const`s in [/src/lib/constants](/src/lib/constants). The `const GENDERS` is used as an argument in `generatePronounRegExpStrings(GENDERS)` to dynamically generate the regex strings, and the `const PRONOUNS` is used within it.

If you would like to add more genders, your only concerns are adding a string to `type GenderType`, create a new `const` of `type Gender` fill in its values. Then you add it to the `const GENDERS` list. That's it. There's no more things to do. No regexes to update. No nothing. Nada. It just works.

The same goes if you'd like to add more pronouns. Define a new `type`, add it to the existing `type Pronouns`, add a `key` to the existing `type Pronouns` in [/src/lib/constants](/src/lib/constants), create a `const` for the pronoun `key`, add it to the existing `const PRONOUNS`. Finally, create a new `RegExp` with `const NEW_PRONOUN_REGEX = new RegExp(PRONOUN_REGEX_STRINGS[NEW_PRONOUN], 'g');`

#### Personal commentary:

I think this awesome, and I realize that it may be over-engineered and too many CONSTANTS. At first, the regexes were hard-coded, and it worked. But then I thought it was annoying to manually update the regexes for each pronoun value for each gender, especially considering the divider.
I realize now that with some Editor functions of redefining words or variables, or using find and replace could also replace dividers and pronoun values. I find value in this that your only concerns now are Gender and Pronoun Types and Constants, and not the regexes and dividers themselves... unless you want to update the format.
Still, if you were to update the `GameEvent.text` placeholder formats, your only concern would be the two regex patterns and the divider described in _Static and Dynamic Regexes_. I think..!

The point of this intricate solution to replace placeholders by dynamically creating regexes based on these types and constants, for each gender and pronoun type, was to reduce the matter of concerns:
"If I want to change something, don't tell me I have to update all of these values, variables, and types?", I won't. My claim is that this way, you only have to define new types and consts once, and if you want to update the regex pattern, you do that in one place too.

---
