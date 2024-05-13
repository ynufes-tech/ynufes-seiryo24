// 1: 展示・体験・物販
// 2: パフォーマンス
// 3: 食事
export enum Genre {
  EXHIBITION = 1,
  PERFORMANCE = 2,
  FOOD = 3,
}

export function genreToString(genre: Genre): string {
  switch (genre) {
    case Genre.EXHIBITION:
      return "展示・体験・物販";
    case Genre.PERFORMANCE:
      return "パフォーマンス";
    case Genre.FOOD:
      return "食事";
  }
}

export function getTagColor(type: Genre): string {
  switch (type) {
    case Genre.FOOD:
      return "#FFC107";
    case Genre.EXHIBITION:
      return "#FF5722";
    case Genre.PERFORMANCE:
      return "#4CAF50";
  }
  return "#000000";
}
