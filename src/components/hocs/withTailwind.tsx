import * as React from "react";
import { StyledComponent } from "@emotion/styled";

export const withEmotionTailwind = (
  Component: StyledComponent<any, any, any> | React.SFC<any>,
  passedClassName = ""
) => {
  const hocComponent: React.SFC<{ className?: string }> = ({
    className,
    children = null
  }) => (
    <Component className={`${passedClassName} ${className}`}>
      {children}
    </Component>
  );
  hocComponent.displayName = Component.displayName;

  return hocComponent;
};
