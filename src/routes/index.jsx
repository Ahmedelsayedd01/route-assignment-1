import { lazy } from "react";

/* Layouts */
const AppLayout = lazy(() => import("../layouts/app/AppLayout"));
/* Pages */
const LandingPage = lazy(() => import("../pages/landing-page/LandingPage"));
const AboutPage = lazy(() => import("../pages/about-page/AboutPage"));
const PortfolioPage = lazy(
  () => import("../pages/portfolio-page/PortfolioPage")
);
const ContactPage = lazy(() => import("../pages/contact-page/ContactPage"));
export const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
];
