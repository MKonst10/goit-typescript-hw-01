type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TopParams = Pick<AllType, "name" | "color">;
type BottomParams = Pick<AllType, "position" | "weight">;

function compare<T extends TopParams, U extends BottomParams>(
  top: T,
  bottom: U
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
