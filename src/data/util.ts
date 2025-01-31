export const avatarUriByName = (name: string) => {
  return `https://ui-avatars.com/api/?name=${name.split(' ').join('+')}`;
};

export const unsplashUrl = (width: number, height: number): string => {
  return `https://source.unsplash.com/random/${width}x${height}`;
};

export const random = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min)) + min;
};

export const makeArray = (length: number) => new Array(length).fill(null);
