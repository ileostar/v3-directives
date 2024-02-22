import { getFirstLevelFiles } from '../utils'

const directoryPath = './docs/en/directives'
const subdirectories = getFirstLevelFiles(directoryPath).map((dirs: string) => {
  return {
    text: dirs.slice(0, -3),
    link: `/en/directives/${dirs.slice(0, -3)}`,
  }
})

export const sidebar = {
  '/en/': [
    {
      text: 'Guide',
      items: [
        { text: 'Introduction', link: '/en/guide/introduce', activeMatch: '/en/guide/' },
        { text: 'Start', link: '/en/guide/start' },
        { text: 'Directives Preview', link: '/en/guide/directives' },
      ],
    },
    {
      text: 'Directives',
      items: subdirectories,
    },
  ],
  '/en/about/': [
    {
      text: 'Contribute',
      items: [
        { text: 'Developer Guide', link: '/en/about/contribution' },
      ],
    },
    {
      text: 'Concerning',
      items: [
        { text: 'Development Team', link: '/en/about/team' },
      ],
    },
  ],
}
