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
    heading: "account",
    route: "/admin/account/overview",
    pages: [
      {
        sectionTitle: "account",
        route: "/admin/account/overview",
        keenthemesIcon: "profile-circle",
        bootstrapIcon: "bi-person",
        sub: [
          {
            heading: "accountOverview",
            route: "/admin/account/overview",
          },
          {
            heading: "Activites",
            route: "/admin/account/activities",
          },
          {
            heading: "settings",
            route: "/admin/account/settings",
          },
        ],
      },

    ],
  },
  {
    heading: "users",
    route: "/admin/students/listing",
    pages: [
      {
        sectionTitle: "Etudiants",
        route: "/admin/students/listing",
        keenthemesIcon: "badge",
        bootstrapIcon: "bi-printer",
        sub: [
          {
            heading: "Etudiants Listing",
            route: "/admin/students/listing",
          },
          // {
          //   heading: "Create",
          //   route: "/admin/students/create",
          // },
        ],
      },
      {
        sectionTitle: "Admins",
        route: "/admin/admins/listing",
        keenthemesIcon: "colors-square",
        bootstrapIcon: "bi-cart",
        sub: [
          {
            heading: "Admins List",
            route: "/admin/admins/listing",
          },
          {
            heading: "create",
            route: "/admin/admins/create",
          },

        ],
      },
      {
        sectionTitle: "Demandes",
        route: "/admin/demandes/listing",
        keenthemesIcon: "questionnaire-tablet",
        bootstrapIcon: "bi-cart",
        sub: [
          {
            heading: "Demandes List",
            route: "/admin/demandes/listing",
          },
          {
            heading: "create",
            route: "/admin/demandes/create",
          },

        ],
      },
      {
        sectionTitle: "Invités",
        route: "/admin/invited/listing",
        keenthemesIcon: "tablet-book",
        bootstrapIcon: "bi-folder-check",
        sub: [
          {
            heading: "invites Listing",
            route: "/admin/invites/listing",
          },
          {
            heading: "Create",
            route: "/admin/invites/create",
          },
        ],
      },
      {
        heading: "calendarApp",
        route: "/apps/calendar",
        keenthemesIcon: "calendar-8",
        bootstrapIcon: "bi-calendar3-event",
      },
      {
        sectionTitle: "chat",
        route: "/chat",
        keenthemesIcon: "message-text-2",
        bootstrapIcon: "bi-chat-left",
        sub: [
          {
            heading: "privateChat",
            route: "/apps/chat/private-chat",
          },
          {
            heading: "groupChat",
            route: "/apps/chat/group-chat",
          },
          {
            heading: "drawerChat",
            route: "/apps/chat/drawer-chat",
          },
        ],
      },
    ],
  },
];
export default MainMenuConfig;
