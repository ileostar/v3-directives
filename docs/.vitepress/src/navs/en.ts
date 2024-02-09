export default function getNavs() {
  return [
    { text: "Guide", link: "/en/guide/introduce" },
    {
      text: "All Directives",
      link: '/en/directives/v-copy'
    },
    {
      text: 'Open Source',
      items: [
        {
          text: 'Contribute',
          items: [
            { text: 'Developer Guide', link: '/en/about/contribution' },
          ]
        },
        {
          text: 'Concerning',
          items: [{ text: 'Development Team', link: '/en/about/team' }]
        }
      ]
    }
  ]
};
