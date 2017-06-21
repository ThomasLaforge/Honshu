export enum TileType {
    Forest,
    Lake,
    Field,
    City,
    Production,
    Manufacturing
}

export enum ResourceType {
    Gold,
    Stone,
    Iron,
    Fish
}

export enum FaceVersion {
    A,
    B
}

export interface TileInterface {
    type: TileType,
    resource?: ResourceType,
    points?: number
}

export interface PlayableCardInterface {
    value: number,
    tiles: TileInterface[]
}

export interface PlayableCardInterface {
    face: FaceVersion,
    tiles: TileInterface[]
}

export const MIN_PLAYER = 2;
export const MAX_PLAYER = 5;

export const CARD_ROW = 3;
export const CARD_COL = 2;
export const CARD_MAX_DIM = Math.max(CARD_COL, CARD_ROW)
export const CARD_AREA = CARD_ROW * CARD_COL

export const DRAW__DEFAULT_NB_CARD = 6;

export const CHOSE_CARD__NB_CARD_WHEN_SWITCH_HANDS = 3;

export const FINAL_COUNT__FIELD_VALUE   = 0;
export const FINAL_COUNT__CITY_VALUE    = 1;
export const FINAL_COUNT__FOREST_VALUE  = 2;
export const FINAL_COUNT__LAKE_VALUE    = 3;