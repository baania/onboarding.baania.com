module.exports = {
  docs: [
    "docs/about",
    "docs/onboarding-plan",
    {
      type: "category",
      label: "First-day",
      collapsed: false,
      items: ["docs/first-day/first-day-aml", "docs/first-day/first-day-dev"],
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
      collapsed: false,
      items: [
        "docs/platform/sops",
        "docs/platform/pre-commit",
        "docs/platform/pyenv-pipenv",
        "docs/platform/docker",
        "docs/platform/kubernetes",
      ],
    },
    {
      type: "category",
      label: "Data science",
      collapsed: false,
      items: [
        "docs/data-science/gis",
        "docs/data-science/postgis",
        "docs/data-science/postgres",
        "docs/data-science/pyspark",
      ],
    },
    {
      type: "category",
      label: "Misc",
      collapsed: false,
      items: ["docs/misc/aws", "docs/misc/terraform", "docs/misc/unix"],
    },
  ],
  // references: [

  // ]
};
