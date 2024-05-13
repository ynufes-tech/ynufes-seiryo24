// 1: A
// 2: B
// 3: C
// 4: D
// 5: Y
// 6: 経済
// 7: 経営
// 8: 都市
// 9: 理工
// 10: 教育
// 11: 特別な場所
export enum Area {
  A = 1,
  B = 2,
  C = 3,
  D = 4,
  E = 5,
  F = 6,
  Y = 7,
  BUSINESS = 8,
  CITY = 9,
  SCIENCE = 10,
  EDUCATION = 11,
  SPECIAL = 12,
}

export function placeToString(place: Area): string {
  switch (place) {
    case Area.A:
      return "A";
    case Area.B:
      return "B";
    case Area.C:
      return "C";
    case Area.D:
      return "D";
    case Area.E:
      return "E";
    case Area.F:
      return "F";
    case Area.Y:
      return "Y";
    case Area.BUSINESS:
      return "経済・経営";
    case Area.CITY:
      return "都市";
    case Area.SCIENCE:
      return "理工";
    case Area.EDUCATION:
      return "教育";
    case Area.SPECIAL:
      return "特別な場所";
  }
}
