type TimeOfDay = 'morning' | 'noon' | 'afternoon' | 'evening' | 'night' | 'midnight';

export type GameEvent = {
	text: string;
	time?: TimeOfDay;
};
