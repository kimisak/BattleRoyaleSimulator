type SubjectPronoun = 'he' | 'she' | 'they';
type ObjectPronoun = 'him' | 'her' | 'them';
type PossessivePronoun = 'his' | 'her' | 'their';
type ReflexivePronoun = 'himself' | 'herself' | 'themself';

export type PronounType = 'subject' | 'object' | 'possessive' | 'reflexive';

export type Pronouns = {
	subject: SubjectPronoun;
	object: ObjectPronoun;
	possessive: PossessivePronoun;
	reflexive: ReflexivePronoun;
};

type GenderType = 'male' | 'female' | 'non-binary';
export type Gender = {
	gender: GenderType;
	pronouns: Pronouns;
};
