const MainMenuConfig = [
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
        heading: "Apps",
        route: "/projects",
        pages: [
            {
                sectionTitle: "Projets",
                route: "/projects",
                keenthemesIcon: "element-plus",
                bootstrapIcon: "bi-archive",
                sub: [
                    {
                        heading: "Overview",
                        route: "/projects",
                    },
                    {
                        heading: "Create",
                        route: "projects/create",
                    },
                ],
            },
            {
                sectionTitle: "Tàches",
                route: "/tasks",
                keenthemesIcon: "element-plus",
                bootstrapIcon: "bi-list-task",
                sub: [
                    {
                        heading: "Overview",
                        route: "/tasks",
                    },
                    // {
                    //     heading: "Create",
                    //     route: "tasks/create",
                    // },
                ],
            },
            {
                heading: "calendarApp",
                route: "/account/calendar",
                keenthemesIcon: "calendar-8",
                bootstrapIcon: "bi-calendar3-event",
            },
            {
                sectionTitle: "chat",
                route: "/account/chat",
                keenthemesIcon: "message-text-2",
                bootstrapIcon: "bi-chat-left",
                sub: [
                    {
                        heading: "groupChat",
                        route: "/account/chat",
                    },
                    {
                        heading: "Create",
                        route: "/account/chat/new",
                    },
                ],
            },
        ],
    },
];
export default MainMenuConfig;
