export const matrix = (mat: number[][], decimal: number = 0): string => {
  const text: string = mat
    .map((array: number[]) => {
      return array.map((val: number) => val.toFixed(decimal)).join('&');
    })
    .join('\\\\');

  return `\\begin{bmatrix}${text}\\end{bmatrix}`;
};
