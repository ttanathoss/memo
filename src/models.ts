export type MemoCardData = {
  id: number;
  img: string;
  matched: boolean;
};

export type PrepareCardsProps = {
  pairCount: number;
  category: string;
};

export type MemoCardDataExt = {
  card: MemoCardData;
  flipBack: () => void;
};

export type HandleChoice = (choice: MemoCardDataExt) => void;

export type MemoCardProps = {
  card: MemoCardData;
  handleChoice: HandleChoice;
  disabled: boolean;
};

export type GameSettings = {
  category: string;
  pairCount: number;
  flipTimeout: number;
};

export type SettingsProps = {
  gameSettings: GameSettings;
  handleSettings: (newGameSettings: GameSettings) => void;
};
