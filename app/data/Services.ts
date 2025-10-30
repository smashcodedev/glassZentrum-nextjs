export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const services: Service[] = [
  {
    id: 1,
    title:
      "Our glass showers, shower walls and shower cubicles: elegant and transparent",
    description:
      "Individual design. Professional assembly. Maximum transparency..",
    image: "/images/services/services-1.jpg",
    href: "/services/showers",
  },
  {
    id: 2,
    title: "We repair glass panes in Hamburg and the surrounding area!",
    description:
      "Our experts measure and replace defective glass panes for you!..",
    image: "/images/services/services-2.jpg",
    href: "/services/repairs",
  },
  {
    id: 3,
    title: "Glass partitions",
    description:
      "We can do even more! Find out more about the services we offer!.....",
    image: "/images/services/services-3.jpg",
    href: "/services/partitions",
  },
  {
    id: 4,
    title: "Custom made mirrors with some extras...",
    description:
      "Individual design. Professional assembly. Maximum transparency. Professional assembly. Professtioanl Glass. Individual design.",
    image: "/images/services/services-4.jpg",
    href: "/services/mirrors",
  },
  {
    id: 5,
    title: "Man looking for routes glass with the urge of buying",
    description:
      "Individual design. Professional assembly. Maximum transparency. Professional assembly. Professtioanl Glass. Individual design.",
    image: "/images/services/services-5.jpg",
    href: "/services/inspection",
  },
  {
    id: 6,
    title: "Glass care of office cleaning",
    description:
      "Individual design. Professional assembly. Maximum transparency. Professional assembly. Professtioanl Glass. Individual design.",
    image: "/images/services/services-6.jpg",
    href: "/services/cleaning",
  },
];
