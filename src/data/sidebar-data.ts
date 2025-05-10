import { SettingsIcon } from "lucide-react"

// sidebar data
export const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Getting Started",
        baseUrl: "",
        items: [
          {
            title: "Introduction",
            url: "intro",
          },
        ],
      },
      {
          title: "Data Visualization",
          baseUrl: "",
          items: [
            {
              title: "Dashboard",
              url: "dashboard",
            },
          ],
        },
      {
        title: "Assets",
        baseUrl: "/assets",
        items: [
          {
            title: "Bank Accounts",
            url: "bank-accounts",
          },
          {
            title: "Stocks",
            url: "stocks",
          },
          {
            title: "Crypto",
            url: "crypto",
          },
          {
              title: "Fixed Deposits",
              url: "fixed-deposits",
          },
          {
              title: "KiwiSaver",
              url: "kiwi-saver",
          },    
        ],
      },
    ],
    navSecondary: [
      {
        title: "Settings",
        url: "settings",
        icon: SettingsIcon,
      },
    ],
  }