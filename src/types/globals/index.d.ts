interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
    const value: SvgrComponent;
    export default value;
}

declare module "*.svg?url" {
  const value: string
  export default value
}

declare module "*.jpg" {
  export var preSrc: string;
  export var src: string;
}

declare module "*.png" {
  export var preSrc: string;
  export var src: string;
}

