const MainSecondMenuConfig = [
    {
        pages: [
            {
                heading: "dashboard",
                route: "/dashboard",
                keenthemesIcon: "element-11",
                bootstrapIcon: "bi-app-indicator",
            },
        ],
    },
    {
        heading: "projects",
        route: "/admin/projects/listing",
        pages: [
            {
                sectionTitle: "projects",
                route: "/admin/projects/listing",
                keenthemesIcon: "element-plus",
                bootstrapIcon: "bi-archive",
                sub: [
                    {
                        heading: "projects Listing",
                        route: "/admin/projects/listing",
                    },
                    {
                        sectionTitle: "profile",
                        route: "/profile",
                        sub: [
                            {
                                heading: "profileOverview",
                                route: "/crafted/pages/profile/overview",
                            },
                            {
                                heading: "projects1",
                                route: "/crafted/pages/profile/projects",
                            },
                            {
                                heading: "campaigns",
                                route: "/crafted/pages/profile/campaigns",
                            },
                            {
                                heading: "documents",
                                route: "/crafted/pages/profile/documents",
                            },
                            {
                                heading: "connections",
                                route: "/crafted/pages/profile/connections",
                            },
                            {
                                heading: "activity",
                                route: "/crafted/pages/profile/activity",
                            },
                        ],
                    },
                    {
                        sectionTitle: "wizards",
                        route: "/wizard",
                        sub: [
                            {
                                heading: "horizontal",
                                route: "/crafted/pages/wizards/horizontal",
                            },
                            {
                                heading: "vertical",
                                route: "/crafted/pages/wizards/vertical",
                            },
                        ],
                    },
                ],
            },
        ],
    },

];
export default MainSecondMenuConfig;
