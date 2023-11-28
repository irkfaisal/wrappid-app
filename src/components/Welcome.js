import {
  CoreClasses,
  CoreBox,
  CoreStack,
  CoreImage,
  CoreH1,
  CoreH4,
  CoreH5,
  CoreButton,
  CoreRating
} from "@wrappid/core";
import Navbar from "./Navbar";
import Logo from "../images/logo_dark.png";
import {
  FlexCenter,
  FlexStart,
  FullHeight_50Width,
  FullWidthHeight,
  WidthHeight_50,
} from "../StyleConstant";

/**
 * @todo
 * Create an initial static home page.
 * Wrappid logo will be at the center of the page.
 * Below the logo, there will be 3 buttons:
 * 1. Components
 * 2. Styles
 * 3. Github Wrappid Documentation
 *
 * @returns
 */
function Welcome() {
  return (
    <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]}>
      <Navbar />

      <CoreBox styleClasses={[...FlexCenter, ...FullWidthHeight]}>
        <CoreBox
          direction={"column"}
          styleClasses={[...FullHeight_50Width, CoreClasses.PADDING.P5]}
        >
           <CoreRating />
          <CoreH1>Wrappid Framework</CoreH1>

          <CoreH4>
            Wrappid framework is wrapper framework built to enable rapid
            developemnt of application based on React, React Native, Node,
            Express etc
          </CoreH4>

          <CoreBox styleClasses={[...FlexStart,CoreClasses.GAP.GAP_2]}>
            <CoreButton size="medium">Wrappid</CoreButton>

            <CoreButton size="medium">Components</CoreButton>

            <CoreButton size="medium">Style</CoreButton>
          </CoreBox>
        </CoreBox>

        <CoreBox styleClasses={[...FullHeight_50Width, ...FlexCenter]}>
          <CoreImage
            src={Logo}
            alt="logo"
            styleClasses={[...WidthHeight_50, CoreClasses.PADDING.PB3]}
          />
        </CoreBox>
      </CoreBox>
    </CoreStack>
    // <CoreStack direction={"column"} styleClasses={[ ...FlexCenter ,CoreClasses.WIDTH.W_100 ]}>

    // <CoreBox>
    // <CoreImage
    //       styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.HEIGHT.H_25]}
    //       src={Logo}
    //       alt="logo"
    //     />
    // </CoreBox>
    // <CoreBox>
    //   <CoreH1>Wrappid Framework</CoreH1>
    // </CoreBox>

  // </CoreStack>
  );
}

export default Welcome;
