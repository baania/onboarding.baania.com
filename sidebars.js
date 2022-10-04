module.exports = {
  docs: [
    "docs/about",
    "docs/onboarding-plan",
    "docs/first-day",
    {
      type: "category",
      label: "Product Manager",
      collapsed: false,
      items: ["docs/pm/working-methodology"],
    },
    {
      type: "category",
      label: "Developers",
      collapsed: false,
      items: [
        "docs/developers/working-methodology",
        "docs/developers/bug-reports",
      ],
    },
    {
      type: "category",
      label: "Data science",
      collapsed: true,
      items: [
        "docs/data-science/gis",
        "docs/data-science/jupyter",
        "docs/data-science/postgis",
        "docs/data-science/pyspark",
      ],
    },
    {
      type: "category",
      label: "Git",
      collapsed: false,
      items: [
        "docs/git/intro",
        "docs/git/git",
        "docs/git/git-flow",
        "docs/git/git-trunk",
      ],
    },
    {
      type: "category",
      label: "Platform",
      collapsed: true,
      items: [
        "docs/platform/sops",
        "docs/platform/docker",
        "docs/platform/kubernetes",
      ],
    },
    {
      type: "category",
      label: "Misc",
      collapsed: true,
      items: [
        "docs/misc/sql",
        "docs/misc/aws",
        "docs/misc/terraform",
        "docs/misc/unix",
      ],
    },
  ],
  // references: [

  // ]
};
