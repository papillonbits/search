import { version } from '../lerna.json'
import { setStorybookManagerSetup } from '@papillonbits/setup/storybook/managerSetup'

setStorybookManagerSetup({
  panelPosition: 'right',
  theme: {
    base: 'light',
    brandTitle: `Search v${version}`,
    brandUrl: 'https://github.com/papillonbits/search',
    brandImage: 'https://avatars2.githubusercontent.com/u/81188645',
  },
})
