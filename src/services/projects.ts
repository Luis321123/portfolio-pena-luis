import { Project } from "@/interfaces";
import { v4 as uuid } from "uuid";

export const projects: Project[] = [
  {
    id: uuid(),
    title: "Product Catalog Enrichment Software",
    subTitle: "Enrich product data with intent-driven attributes, automated metadata generation, and image tagging through computer vision, improving discoverability, internal navigation, and external SEO for personalized, context-aware shopping experiences.",
    link: "https://www.discoverist.ai/",
    stack: [
      "python",
      "fastapi",
      "react",
      "typescript",
      "mongodb",
      "aws",
      "RAG",
    ],
    preview: "https://i.imgur.com/8Ntjd2F.png",
  },
  {
    id: uuid(),
    title: "Car dealer page",
    subTitle: "Create the page for attracting potential clients, including its forms, images, and multimedia content.",
    link: "https://premiumcarsfl.com/es/inicio-miami/",
    stack: [
      "laravel",
      "postgresql"
    ],
    preview: "https://i.imgur.com/1qTwiC6.png",
  },
  {
    id: uuid(),
    title: "Application solar panel quotation",
    subTitle: "Document management, for copec-flux, for protocol management, which consisted of login and cache password management, file and image uploading, user and administrator connection through external micro-services.",
    link: "https://fluxsolar.cl/",
    stack: [
      "python",
      "fastapi",
      "postgresql"
    ],
    preview: "https://i.imgur.com/K1e3uxp.jpeg",
  },
  {
    id: uuid(),
    title: "APP for churches",
    subTitle: "Development of an application for church management called SinaiApp, where they had roles, administrators, authentication, user verification, email notification system, login with Google and apple, which were structured with Python, Fastapi, sqlalchemy and Docker with aws connection for file management.",
    link: "https://play.google.com/store/apps/details?id=com.asiserver.iglesiasinai",
    stack: [
      "python",
      "fastapi",
      "postgresql"
    ],
    preview: "https://i.imgur.com/d4HFxeX.png"
  },
];
