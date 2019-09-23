import { configure } from '@storybook/react';
import "@/styles/index.css";
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';


// Addon viewport
const newViewports = {
  Desktop: {
    name: 'Desktop',
    styles: {
      width: '1140px',
      height: '100%',
    },
  },
  Mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '100%',
    },
  },
};

addParameters({
  viewport: { viewports: newViewports },
});

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.tsx$/), module);

