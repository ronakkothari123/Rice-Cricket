export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type FooterGroup = {
  title: string;
  links: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
};

export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type HomepageStat = {
  label: string;
  value: string;
  note: string;
};

export type HomepageHighlight = {
  title: string;
  description: string;
  href: string;
};

export type SeoDefaults = {
  titleTemplate: string;
  defaultTitle: string;
  defaultDescription: string;
};

export type SiteConfig = {
  siteTitle: string;
  siteEyebrow: string;
  siteDescription: string;
  contactEmail: string;
  primaryNav: NavItem[];
  footerGroups: FooterGroup[];
  primaryCtas: Array<{
    label: string;
    href: string;
  }>;
  socialLinks: SocialLink[];
  homepageStats: HomepageStat[];
  homepageHighlights: HomepageHighlight[];
  seo: SeoDefaults;
};

export const siteConfig: SiteConfig = {
  siteTitle: "Rice Cricket Club",
  siteEyebrow: "Official Rice University student organization",
  siteDescription:
    "The official Rice University student organization for cricket, community, competition, and long-term campus growth.",
  // Replace with the club's actual shared inbox before launch.
  contactEmail: "cricket@rice.edu",
  primaryNav: [
    { label: "About", href: "/about" },
    { label: "Join", href: "/join", description: "Email-first path for new members" },
    { label: "Leadership", href: "/leadership" },
    { label: "Matches", href: "/matches" },
    { label: "Stories", href: "/stories" },
    { label: "Gallery", href: "/gallery" },
    { label: "Vision", href: "/vision" }
  ],
  footerGroups: [
    {
      title: "Explore",
      links: [
        { label: "About", href: "/about" },
        { label: "Stories", href: "/stories" },
        { label: "Matches", href: "/matches" },
        { label: "Gallery", href: "/gallery" }
      ]
    },
    {
      title: "Join",
      links: [
        { label: "How to Join", href: "/join" },
        { label: "Email the Club", href: "mailto:cricket@rice.edu", external: true }
      ]
    },
    {
      title: "Contact",
      links: [
        { label: "Leadership", href: "/leadership" },
        { label: "Vision", href: "/vision" }
      ]
    },
    {
      title: "Follow",
      links: [
        { label: "GitHub Repository", href: "https://github.com/ronakkothari123/Rice-Cricket", external: true },
        { label: "Instagram Placeholder", href: "https://instagram.com/ricecricketclub", external: true }
      ]
    }
  ],
  primaryCtas: [
    { label: "Join Rice Cricket", href: "/join" },
    { label: "See the Club in Action", href: "/gallery" },
    { label: "Explore the Vision", href: "/vision" }
  ],
  socialLinks: [
    { label: "Email", href: "mailto:cricket@rice.edu", external: true },
    { label: "GitHub", href: "https://github.com/ronakkothari123/Rice-Cricket", external: true },
    { label: "Instagram", href: "https://instagram.com/ricecricketclub", external: true }
  ],
  homepageStats: [
    { label: "Club focus", value: "Recruit + Compete", note: "Built for students who want both belonging and serious cricket" },
    { label: "Site model", value: "Static + Maintainable", note: "Designed so future officers can keep it current without a heavy backend" },
    { label: "Long-term aim", value: "Nets + Pitch", note: "Support the case for better training and match infrastructure over time" }
  ],
  homepageHighlights: [
    {
      title: "Welcoming path for new players",
      description: "Version 1 is structured to make joining feel clear even for students who have never played organized cricket.",
      href: "/join"
    },
    {
      title: "Visible club momentum",
      description: "Stories, match results, and galleries will show that the club is active, social, and growing.",
      href: "/stories"
    },
    {
      title: "A credible public face",
      description: "Leadership, milestones, and the vision page are designed to help stakeholders understand the club's long-term value.",
      href: "/vision"
    }
  ],
  seo: {
    titleTemplate: "%s | Rice Cricket Club",
    defaultTitle: "Rice Cricket Club",
    defaultDescription:
      "Rice Cricket Club is a student organization at Rice University focused on cricket, community, competition, and long-term campus growth."
  }
};
