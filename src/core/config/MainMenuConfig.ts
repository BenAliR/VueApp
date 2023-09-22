export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  pages?: Array<MenuItem>;
  keenthemesIcon?: string;
  bootstrapIcon?: string;
  sub?: Array<MenuItem>;
}

const MainMenuConfig: Array<MenuItem> = [
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
    route: "/account/projects",
    pages: [
      {
        sectionTitle: "Projets",
        route: "/account/projects",
        keenthemesIcon: "element-plus",
        bootstrapIcon: "bi-archive",
        sub: [
          {
            heading: "Overview",
            route: "/account/projects",
          },
          {
            heading: "Create",
            route: "/apps/customers/customers-listing",
          },
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
