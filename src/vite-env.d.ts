/// <reference types="vite/client" />

declare module 'maath/random/dist/maath-random.esm';

declare module './components' {
  import { FC } from 'react';

  export const About: FC;
  export const Contact: FC;
  export const Experience: FC;
  export const Feedbacks: FC;
  export const Hero: FC;
  export const Navbar: FC;
  export const Tech: FC;
  export const Works: FC;
  export const StarsCanvas: FC;
}

declare module './canvas' {
  import { FC } from 'react';

  export const ComputersCanvas: FC;
  export const EarthCanvas: FC;
}

declare module 'styles' {
  const styles: {
    paddingX: string;
    paddingY: string;
    padding: string;
    heroHeadText: string;
    heroSubText: string;
    sectionHeadText: string;
    sectionSubText: string;
  };
  export { styles };
}

// Declaration file for assets
declare module '*.png' {
  const value: string;
  export default value;
}

declare module './SectionWrapper' {
  import { FC } from 'react';

  interface SectionWrapperProps {
    idName: string;
    Component: FC;
  }

  const SectionWrapper: FC<SectionWrapperProps>;
  export default SectionWrapper;
}

declare module '*.svg' {
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.bmp' {
  const value: string;
  export default value;
}

declare module '*.tiff' {
  const value: string;
  export default value;
}

declare module 'react-tilt';
