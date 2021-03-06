import { StyleSheet } from "react-native";

const FONT_FAMILY = "System";

const DEFAULT_PARAGRAPH_SIZES = {
  p1: 18,
  p2: 16,
  p3: 14,
  p4: 12,
  p5: 10,
  p6: 8,
};

const DEFAULT_HEADER_SIZES = {
  h1: 30,
  h2: 26,
  h3: 22,
  h4: 20,
  h5: 18,
  h6: 16,
};

const DEFAULT_H_FONT_WEIGHT = "300";
const DEFAULT_P_FONT_WEIGHT = "300";

const createFontStyleObj = ({
  fontSizesObj,
  fontFamily,
  fontWeight,
  applyLetterSpacing,
}) => {
  const headerStyles = {};

  Object.keys(fontSizesObj).forEach(key => {
    const fontSize = fontSizesObj[key];

    headerStyles[key] = {
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight: fontSize * 1.65,
    };

    if (applyLetterSpacing) {
      headerStyles[key].letterSpacing = fontSize / 12;
    }
  });

  return headerStyles;
};

const ExampleTextStyles = StyleSheet.create({
  ...createFontStyleObj({
    fontSizesObj: DEFAULT_HEADER_SIZES,
    fontWeight: DEFAULT_H_FONT_WEIGHT,
    fontFamily: FONT_FAMILY,
    applyLetterSpacing: true,
  }),
  ...createFontStyleObj({
    fontSizesObj: DEFAULT_PARAGRAPH_SIZES,
    fontWeight: DEFAULT_P_FONT_WEIGHT,
    fontFamily: FONT_FAMILY,
  }),
});

export { ExampleTextStyles };
