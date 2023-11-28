import {
  CoreClasses,
  CoreStack,
  CoreH4,
  CoreImage,
  CoreBox,
  CoreDivider,
} from "@wrappid/core";

import Logo from "../images/logo.png";
import { FlexCenter } from "../StyleConstant";

/**
 * Created a Navbar component for wrappid landing page.
 * @returns
 */
function Navbar() {
  return (
    <>
      <CoreStack
        direction={"row"}
        styleClasses={[
          ...FlexCenter,
          CoreClasses.WIDTH.W_100,
          CoreClasses.BG.BG_SECONDARY_LIGHT,
          CoreClasses.PADDING.PX3,
          CoreClasses.PADDING.PY1,
          CoreClasses.TEXT.TEXT_PRIMARY,
          CoreClasses.SHADOW.SMALL
        ]}
      >
        <CoreBox
          styleClasses={[CoreClasses.WIDTH.W_50, CoreClasses.HEIGHT.H_25]}
        >
          <CoreImage
            styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.HEIGHT.H_25]}
            src={Logo}
            alt="logo"
          />
        </CoreBox>
        <CoreBox
          styleClasses={[
            CoreClasses.WIDTH.W_50,
            CoreClasses.HEIGHT.H_25,
            CoreClasses.COLOR.TEXT_PRIMARY_DARK,
          ]}
        >
          <CoreH4>Welcome to Wrappid</CoreH4>
        </CoreBox>
      </CoreStack>
      <CoreDivider />
    </>
  );
}

export default Navbar;
