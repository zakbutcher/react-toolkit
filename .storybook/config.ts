import { configure } from '@storybook/react';
import '../style-dictionary/dist/main.css';
import './custom.css';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(js|ts)x?$/), module);
