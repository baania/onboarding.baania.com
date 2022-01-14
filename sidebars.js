module.exports = {
    docs: [
        "docs/first-day-aml",
        "docs/onboarding-plan",
        "docs/git-flow",
        {
            type: "category",
            label: "Platform",
            collapsed: false,
            items: [
                "docs/platform/git",
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
            items: [
                "docs/misc/aws",
                "docs/misc/terraform",
                "docs/misc/unix",
            ],
        },
    ],
    // references: [










    // ]


};
