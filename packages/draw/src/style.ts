import { GraphStyleConfig } from './types';

export function getStyles(styleConfig: Partial<GraphStyleConfig> | undefined) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const deviceScale = window.devicePixelRatio;

  return {
    ...default_styles,
    ...styleConfig,
    width,
    height,
    deviceScale,
  };
}

export function generateUniqueColors(colorCount: number) {
  // https://stackoverflow.com/questions/15804149/rgb-color-permutation/15804183#15804183
  return [...Array(colorCount).keys()].map((i) =>
    convertRgbArrayToStyle([
      (i + 1) & 0xff,
      ((i + 1) & 0xff00) >> 8,
      ((i + 1) & 0xff0000) >> 16,
    ]),
  );
}

export function convertRgbArrayToStyle(rgbArray: number[]) {
  if (rgbArray[3] && rgbArray[3] !== 255) return '';
  return `rgb(${rgbArray.slice(0, 3).join(',')})`;
}

const default_styles: GraphStyleConfig = {
  nodeColor: 'red',
  activeNodeColor: 'white',
  linkColor: 'blue',
  activeLinkColor: 'white',
  titleColor: 'green',
  nodeTitlePadding: 12,
  nodeScaleFactor: 0.96,
  minimumNodeSize: 4,
};
