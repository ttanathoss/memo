import { BackStyle } from './constants';

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
  backStyle: BackStyle;
  backContent: string;
  handleChoice: HandleChoice;
  disabled: boolean;
};

export type GameSettings = {
  category: string;
  pairCount: number;
  flipTimeout: number;
  backStyle: BackStyle;
  backContent: string;
};

export type MemoGameProps = GameSettings & {
  backToSettings: () => void;
};

export type SettingsProps = {
  gameSettings: GameSettings;
  handleSettings: (newGameSettings: GameSettings) => void;
};

export interface TranslationObject extends Record<string, string | TranslationObject> {}

export type GetTranslationFun = (
  translationKey: string,
  props?: Record<string, string | number>
) => string;

export type ContextProps = {
  language: string;
  getTranslation: GetTranslationFun;
  updateLanguage: (newLanguage: string) => void;
};

export type HeaderProps = {
  language: string;
  handleUpdateLanguage: (value: string) => void;
};

export type AvailableLang = {
  label: string;
  value: string;
  flagCode: string;
};
