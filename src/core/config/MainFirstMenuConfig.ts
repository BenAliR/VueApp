export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  pages?: Array<MenuItem>;
  keenthemesIcon?: string;
  bootstrapIcon?: string;
  sub?: Array<MenuItem>;
}

const MainFirstMenuConfig: Array<MenuItem> = [
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
    heading: "Profile",
    route: "/account",
    pages: [
      {
        sectionTitle: "account",
        route: "/account/overview",
        keenthemesIcon: "profile-circle",
        bootstrapIcon: "bi-person",
        sub: [
          {
            heading: "Overview",
            route: "/account/overview",
          },
          {
            heading: "Connections",
            route: "/account/connections",
          },
          {
            heading: "Activities",
            route: "/account/activities",
          },
          {
            heading: "Invitations",
            route: "/account/invitations",
          },
          {
            heading: "settings",
            route: "/account/settings",
          },
        ],
      },

    ],
  },
];

export default MainFirstMenuConfig;
