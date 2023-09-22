import { createRouter, createWebHashHistory, } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useConfigStore } from "@/stores/config";
import adminAuth from "@/router/adminAuth";
const routes = [
    {
        path: "/",
        redirect: "/dashboard",
        component: () => import("@/layouts/main-layout/MainLayout.vue"),
        meta: {
            middleware: "auth",
        },
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                component: () => import("@/views/Dashboard.vue"),
                meta: {
                    pageTitle: "Dashboard",
                    breadcrumbs: ["Dashboards"],
                },
            },
            {
                path: "/profile",
                name: "profile",
                component: () => import("@/components/page-layouts/Profile.vue"),
                meta: {
                    breadcrumbs: ["Profile"],
                },
                children: [
                    {
                        path: "overview",
                        name: "profile-overview",
                        component: () => import("@/views/crafted/pages/profile/Overview.vue"),
                        meta: {
                            pageTitle: "Overview",
                        },
                    },
                    {
                        path: "projects",
                        name: "profile-projects",
                        component: () => import("@/views/crafted/pages/profile/Projects.vue"),
                        meta: {
                            pageTitle: "Projects",
                        },
                    },
                    {
                        path: "campaigns",
                        name: "profile-campaigns",
                        component: () => import("@/views/crafted/pages/profile/Campaigns.vue"),
                        meta: {
                            pageTitle: "Campaigns",
                        },
                    },
                    {
                        path: "documents",
                        name: "profile-documents",
                        component: () => import("@/views/crafted/pages/profile/Documents.vue"),
                        meta: {
                            pageTitle: "Documents",
                        },
                    },
                    {
                        path: "connections",
                        name: "profile-connections",
                        component: () => import("@/views/crafted/pages/profile/Connections.vue"),
                        meta: {
                            pageTitle: "Connections",
                        },
                    },
                    {
                        path: "activity",
                        name: "profile-activity",
                        component: () => import("@/views/crafted/pages/profile/Activity.vue"),
                        meta: {
                            pageTitle: "Activity",
                        },
                    },
                ],
            },
            {
                path: "account",
                name: "account",
                component: () => import("@/views/Student/account/Account.vue"),
                meta: {
                    breadcrumbs: ["Compte"],
                },
                children: [
                    {
                        path: "/account/overview",
                        name: "account-overview",
                        component: () => import("@/views/Student/account/Overview.vue"),
                        meta: {
                            pageTitle: "Aperçu du compte",
                        },
                    },
                    {
                        path: "/account/settings",
                        name: "account-settings",
                        component: () => import("@/views/Student/account/Settings.vue"),
                        meta: {
                            pageTitle: "Paramètres du compte",
                        },
                    },
                    {
                        path: "/account/projects",
                        name: "account-projects",
                        component: () => import("@/views/Student/account/Projects.vue"),
                        meta: {
                            pageTitle: "Projets",
                        },
                    },
                    {
                        path: "/account/connections",
                        name: "account-connections",
                        component: () => import("@/views/Student/account/Connections.vue"),
                        meta: {
                            pageTitle: "Connexions de compte",
                        },
                    },
                    {
                        path: "/account/activities",
                        name: "account-activities",
                        component: () => import("@/views/Student/account/Activity.vue"),
                        meta: {
                            pageTitle: "Activités du compte",
                        },
                    },
                    {
                        path: "/account/calendar",
                        name: "apps-calendar",
                        component: () => import("@/views/apps/Calendar.vue"),
                        meta: {
                            pageTitle: "Calendar",
                            breadcrumbs: ["Apps"],
                        },
                    },
                    {
                        path: "/account/invitations",
                        name: "account-invitations",
                        component: () => import("@/views/Student/account/Invitations.vue"),
                        meta: {
                            pageTitle: "Invitations du compte",
                        },
                    },
                ],
            },
            {
                path: "/account/chat",
                name: "account-chat",
                component: () => import("@/views/Student/chat/Chat.vue"),
                meta: {
                    breadcrumbs: ["Chat"],
                    pageTitle: "Chat du compte",
                },
            },
            {
                path: "project",
                name: "project",
                component: () => import("@/views/Student/project/Project.vue"),
                meta: {
                    breadcrumbs: ["Projet"],
                },
                children: [
                    {
                        path: "/project/:slug/overview",
                        name: "project-overview",
                        component: () => import("@/views/Student/project/Overview.vue"),
                        meta: {
                            breadcrumbs: ["Projet", "Aperçu"],
                            pageTitle: "Aperçu du projet",
                        },
                    },
                    {
                        path: "/project/:slug/settings",
                        name: "project-settings",
                        component: () => import("@/views/Student/project/Settings.vue"),
                        meta: {
                            breadcrumbs: ["Projet", "Aperçu"],
                            pageTitle: "Aperçu du projet",
                        },
                    },
                    {
                        path: "/project/:slug/tasks",
                        name: "project-tasks",
                        component: () => import("@/views/Student/project/Tasks.vue"),
                        meta: {
                            breadcrumbs: ["Projet", "Tâches"],
                            pageTitle: "Tâches du projet",
                        },
                    },
                    {
                        path: "/project/:slug/members",
                        name: "project-members",
                        component: () => import("@/views/Student/project/Members.vue"),
                        meta: {
                            breadcrumbs: ["Projet", "Membres"],
                            pageTitle: "Membres du projet",
                        },
                    },
                ],
            },
            {
                path: "task",
                name: "Tâches",
                component: () => import("@/views/Student/project/task/Task.vue"),
                meta: {
                    breadcrumbs: ["Tâche"],
                },
                children: [

                    {
                        path: "/project/:slug/tasks/listing",
                        name: "task-category",
                        component: () => import("@/views/Student/project/task/TaskCategory.vue"),
                        meta: {
                            breadcrumbs: ["Tâches", "Categories"],
                            pageTitle: "Tâches",
                        },
                    },
                    {
                        path: "/project/:slug/task/:id/overview",
                        name: "task-overview",
                        component: () => import("@/views/Student/project/task/Overview.vue"),
                        meta: {
                            breadcrumbs: ["Tâche", "Voir"],
                            pageTitle: "Aperçu de Tâche",
                        },
                    },

                    {
                        path: "/project/:slug/task/:id/update",
                        name: "task-update",
                        component: () => import("@/views/Student/project/task/TaskUpdate.vue"),
                        meta: {
                            breadcrumbs: ["Tâches", "Modifier"],
                            pageTitle: "Modifier la tâche",
                        },
                    },
                ],
            },




            {
                path: "meeting",
                name: "meeting",
                component: () => import("@/views/Student/project/task/Task.vue"),
                meta: {
                    breadcrumbs: ["meeting"],
                },
                children: [

                    {
                        path: "/project/:slug/meetings/listing",
                        name: "meetings-listing",
                        component: () => import("@/views/Student/project/meeting/MeetingList.vue"),
                        meta: {
                            breadcrumbs: ["Project", "Meetings"],
                            pageTitle: "Meetings",
                        },
                    },
                    {
                        path: "/project/:slug/reminders/listing",
                        name: "reminders-listing",
                        component: () => import("@/views/Student/project/reminder/RemindersList.vue"),
                        meta: {
                            breadcrumbs: ["Project", "Reminders"],
                            pageTitle: "Reminders",
                        },
                    },

                    {
                        path: "/project/:slug/reminder/:id/overview",
                        name: "reminder-overview",
                        component: () => import("@/views/Student/project/reminder/Overview.vue"),
                        meta: {
                            breadcrumbs: ["Reminder", "Voir"],
                            pageTitle: "Reminder",
                        },
                    },



                ],
            },

            {
                path: "/account/notifications",
                name: "account-notifications",
                component: () => import("@/views/Student/Notification/NotificationListing.vue"),
                meta: {
                    pageTitle: "Notifications",
                },
            },


            {
                path: "/projects",
                name: "student-all-projects-listing",
                component: () => import("@/views/Student/ProjectsListing/ProjectsListing.vue"),
                meta: {
                    pageTitle: "Projets",
                },
            },
            {
                path: "/projects/create",
                name: "student-create-new-project",
                component: () => import("@/views/Student/ProjectsListing/CreateNewProject.vue"),
                meta: {
                    pageTitle: "Crée Projet",
                },
            },
            {
                path: "/tasks",
                name: "student-all-tasks-listing",
                component: () => import("@/views/Student/TasksListing/TasksListing.vue"),
                meta: {
                    pageTitle: "Tasks",
                },
            },

        ],
    },
    {
        path: "/admin",
        redirect: "/admin/dashboard",
        component: () => import("@/layouts/admin-layout/AdminLayout.vue"),
        beforeEnter: adminAuth,
        meta: {
            middleware: "auth",
        },
        children: [
            {
                path: "/admin/dashboard",
                name: "AdminDashboard",
                component: () => import("@/views/Admin/Dashboard.vue"),
                meta: {
                    pageTitle: "Admin",
                },
            },

            {
                path: "/admin/account",
                name: "admin-account",
                component: () => import("@/views/Admin/account/Account.vue"),
                meta: {
                    breadcrumbs: ["Compte"],
                },
                children: [
                    {
                        path: "/admin/account/overview",
                        name: "admin-account-overview",
                        component: () => import("@/views/Admin/account/Overview.vue"),
                        meta: {
                            pageTitle: "Aperçu du compte",
                        },
                    },
                    {
                        path: "/admin/account/settings",
                        name: "admin-account-settings",
                        component: () => import("@/views/Admin/account/Settings.vue"),
                        meta: {
                            pageTitle: "Paramètres du compte",
                        },
                    },
                    {
                        path: "/admin/account/activities",
                        name: "admin-account-activities",
                        component: () => import("@/views/Admin/account/Activity.vue"),
                        meta: {
                            pageTitle: "Activités du compte",
                        },
                    },

                ],
            },





            {
                path: "/admin/students/listing",
                name: "StudentsListing",
                component: () => import("@/views/Admin/crud-students/StudentsListing.vue"),

                meta: {
                    pageTitle: "Student Listing",
                },
            },
            {
                path: "/admin/students/:id/overview",
                name: "students-overview",
                component: () => import("@/views/Admin/crud-students/StudentDetails.vue"),

                meta: {
                    pageTitle: "Student Details",
                },
            },
            {
                path: "/admin/students/create",
                name: "student-create",
                component: () => import("@/views/Admin/crud-students/CreateStudent.vue"),

                meta: {
                    pageTitle: "Create Student",
                },
            },
            {
                path: "/admin/demandes/listing",
                name: "DemandeListing",
                component: () => import("@/views/Admin/crud-demandes/DemandesListing.vue"),

                meta: {
                    pageTitle: "Demandes Listing",
                },
            },
            {
                path: "/admin/demandes/:id/overview",
                name: "demandes-overview",
                component: () => import("@/views/Admin/crud-demandes/DemandeDetails.vue"),

                meta: {
                    pageTitle: "Demande Details",
                },
            },
            {
                path: "/admin/demandes/create",
                name: "demande-create",
                component: () => import("@/views/Admin/crud-demandes/CreateDemande.vue"),

                meta: {
                    pageTitle: "Create Demande",
                },
            },
            {
                path: "/admin/admins/listing",
                name: "AdminsListing",
                component: () => import("@/views/Admin/crud-admins/AdminsListing.vue"),

                meta: {
                    pageTitle: "Admins Listing",
                },
            },
            {
                path: "/admin/admins/:id/overview",
                name: "admins-overview",
                component: () => import("@/views/Admin/crud-admins/AdminDetails.vue"),

                meta: {
                    pageTitle: "Admin Details",
                },
            },
            {
                path: "/admin/admins/create",
                name: "admin-create",
                component: () => import("@/views/Admin/crud-admins/CreateAdmin.vue"),

                meta: {
                    pageTitle: "Create Admin",
                },
            },
            {
                path: "/admin/invites/listing",
                name: "InvitesListing",
                component: () => import("@/views/Admin/crud-invites/InvitesListing.vue"),

                meta: {
                    pageTitle: "Invites Listing",
                },
            },
            {
                path: "/admin/invites/:id/overview",
                name: "invited-overview",
                component: () => import("@/views/Admin/crud-invites/InviteDetails.vue"),

                meta: {
                    pageTitle: "Invited Details",
                },
            },
            {
                path: "/admin/invites/create",
                name: "invited-create",
                component: () => import("@/views/Admin/crud-invites/CreateInvite.vue"),

                meta: {
                    pageTitle: "Create New Account invited",
                },
            },



            {
                path: "/admin/projects/listing",
                name: "ProjectsListing",
                component: () => import("@/views/Admin/crud-projects/ProjectsListing.vue"),

                meta: {
                    pageTitle: "Projects Listing",
                },
            },
            {
                path: "/admin/projects",
                name: "student-project",
                component: () => import("@/views/Admin/crud-projects/ProjectDetails.vue"),
                meta: {
                    breadcrumbs: ["Projet"],
                },
                children: [
                    {
                        path: "/admin/projects/:id/overview",
                        name: "student-project-overview",
                        component: () => import("@/views/Admin/crud-projects/Overview.vue"),
                        meta: {
                            breadcrumbs: ["Projet", "Aperçu"],
                            pageTitle: "Aperçu du projet",
                        },
                    },
                    {
                        path: "/admin/projects/:id/settings",
                        name: "student-project-settings",
                        component: () => import("@/views/Admin/crud-projects/Settings.vue"),
                        meta: {
                            breadcrumbs: ["Projet", "Aperçu"],
                            pageTitle: "Aperçu du projet",
                        },
                    },
                    {
                        path: "/admin/projects/:id/tasks",
                        name: "student-project-tasks",
                        component: () => import("@/views/Admin/crud-projects/Tasks.vue"),
                        meta: {
                            breadcrumbs: ["Projet", "Tâches"],
                            pageTitle: "Tâches du projet",
                        },
                    },
                    {
                        path: "/admin/projects/:id/members",
                        name: "student-project-members",
                        component: () => import("@/views/Admin/crud-projects/Members.vue"),
                        meta: {
                            breadcrumbs: ["Projet", "Membres"],
                            pageTitle: "Membres du projet",
                        },
                    },
                ],
            },
            {
                path: "/admin/projects/:id/overview",
                name: "projects-overview",
                component: () => import("@/views/Admin/crud-projects/ProjectDetails.vue"),

                meta: {
                    pageTitle: "Project Details",
                },
            },
            {
                path: "/admin/projects/create",
                name: "project-create",
                component: () => import("@/views/Admin/crud-projects/CreateProject.vue"),

                meta: {
                    pageTitle: "Create Project",
                },
            },
        ],
    },
    {
        path: "/",
        component: () => import("@/layouts/AuthLayout.vue"),
        children: [
            {
                path: "/sign-in",
                name: "sign-in",
                component: () => import("@/views/crafted/authentication/basic-flow/SignIn.vue"),
                meta: {
                    middleware: "guest",
                    pageTitle: "Sign In",
                },
            },
            {
                path: "/sign-up",
                name: "sign-up",
                component: () => import("@/views/crafted/authentication/basic-flow/SignUp.vue"),
                meta: {
                    middleware: "guest",
                    pageTitle: "Sign Up",
                },
            },
            {
                path: "/password-reset",
                name: "password-reset",
                component: () => import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
                meta: {
                    middleware: "guest",
                    pageTitle: "Password reset",
                },
            },

        ],
    },
    {
        path: "/inscription",
        name: "inscription",
        component: () => import("@/views/crafted/authentication/MultiStepSignUpInscription.vue"),
        meta: {
            middleware: "guest",
            pageTitle: "Inscription",
        },
    },
    {
        path: "/invitation/:token",
        name: "invitation",
        component: () => import("@/views/Guest/Invitation.vue"),
        meta: {
            middleware: "guest",
            pageTitle: "Invitation",
        },
    },

    {
        path: "/",
        component: () => import("@/layouts/SystemLayout.vue"),
        children: [
            {
                // the 404 route, when none of the above matches
                path: "/404",
                name: "404",
                component: () => import("@/views/crafted/authentication/Error404.vue"),
                meta: {
                    pageTitle: "Error 404",
                },
            },
            {
                path: "/500",
                name: "500",
                component: () => import("@/views/crafted/authentication/Error500.vue"),
                meta: {
                    pageTitle: "Error 500",
                },
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const configStore = useConfigStore();
    // current page view title
    document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;
    // reset config to initial state
    configStore.resetLayoutConfig();
    // verify auth token before each page change
    authStore.verifyAuth();
    // before page access check
    if (to.meta.middleware == "guest") {
        if (!authStore.isAuthenticated) {
            next();
        }
        else {
            next({ name: "dashboard" });
        }
    }
    // before page access check if page requires authentication
    if (to.meta.middleware == "auth") {
        if (authStore.isAuthenticated) {
            next();
        }
        else {
            next({ name: "sign-in" });
        }
    }
    else {
        next();
    }
    // Scroll page to top on every route change
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
export default router;
