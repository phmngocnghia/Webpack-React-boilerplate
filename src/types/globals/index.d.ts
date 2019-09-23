declare var tw:any
declare module "*.svg"

declare module "*.jpg" {
  export var preSrc: string;
  export var src: string;
}

declare module "*.png" {
  export var preSrc: string;
  export var src: string;
}

