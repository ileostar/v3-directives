export default function getNavs() {
  return [
    { text: "Guide", link: "/en/guide" },
    { text: "All Directives", link: "/en/api" },
    {
      text: "About",
      items: [
        {
          text: "Team",
          link: "/en/examples/about/team",
          activeMatch: "/about/team",
        },
        {
          text: "FAQ",
          link: "/en/examples/about/problem",
          activeMatch: "/about/problem",
        },
      ],
      activeMatch: "/en/examples/about/",
    },
  ]
};
