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

export const MIN_PLAYER = 2;
export const MAX_PLAYER = 5;

export const CARD_ROW = 3;
export const CARD_COL = 2;

export const FINAL_COUNT__FIELD_VALUE   = 0;
export const FINAL_COUNT__CITY_VALUE    = 1;
export const FINAL_COUNT__FOREST_VALUE  = 2;
export const FINAL_COUNT__LAKE_VALUE    = 3;