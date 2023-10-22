type SubjectPronoun = 'he' | 'she' | 'they';
type ObjectPronoun = 'him' | 'her' | 'them';
type PossessivePronoun = 'his' | 'her' | 'their';
type ReflexivePronoun = 'himself' | 'herself' | 'themself';

export type Pronouns = SubjectPronoun | ObjectPronoun | PossessivePronoun | ReflexivePronoun;
export type PronounType = 'subject' | 'object' | 'possessive' | 'reflexive';

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
