import { CoreClasses } from "@wrappid/core";

/**
 * Style classe for display flex, justify content center and align items center
 */
export const FlexCenter = [
  CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
  CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
];

/**
 * Style classe for display flex, justify content start and align items center
 */
export const FlexStart = [
    CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_START,
    CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
  ];

/**
 *  style class for width 100% and height 100%
 */
export const FullWidthHeight = [
  CoreClasses.WIDTH.W_100,
  CoreClasses.HEIGHT.H_100,
];

/**
 * style class for width 50% and height 100%
 */

export const FullHeight_50Width = [
  CoreClasses.WIDTH.W_50,
  CoreClasses.HEIGHT.H_100,
];

/**
 * style class for width and height 50%
 */

export const WidthHeight_50 = [CoreClasses.WIDTH.W_50, CoreClasses.HEIGHT.H_50];
