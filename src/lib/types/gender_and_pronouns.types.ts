type SubjectPronoun = 'he' | 'she' | 'they';
type ObjectPronoun = 'him' | 'her' | 'them';
type PossessivePronoun = 'his' | 'her' | 'their';
type ReflexivePronoun = 'himself' | 'herself' | 'themself';

export type Pronouns = SubjectPronoun | ObjectPronoun | PossessivePronoun | ReflexivePronoun;
export type PronounType = 'subject' | 'object' | 'possessive' | 'reflexive';

// This type could probably be moved, but it's only used in the following function.
export type PronounRegexStrings = {
	subject: string;
	object: string;
	possessive: string;
	reflexive: string;
};

export type GenderPronouns = {
	subject: SubjectPronoun;
	object: ObjectPronoun;
	possessive: PossessivePronoun;
	reflexive: ReflexivePronoun;
};

type GenderType = 'male' | 'female' | 'non-binary';
export type Gender = {
	gender: GenderType;
	pronouns: GenderPronouns;
};
