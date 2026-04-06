export type FaqItem = {
  question: string;
  answer: string;
};

export const aboutFaqs: FaqItem[] = [
  {
    question: "Do you need previous cricket experience to be involved?",
    answer:
      "No. The club should feel open to curious beginners, returning players, and experienced cricketers alike. Version 1 of the site is intentionally designed to make that welcome clear."
  },
  {
    question: "Is Rice Cricket focused only on competition?",
    answer:
      "Competition matters, but the club also offers community, shared identity, and a way for students to stay connected to the sport in a student-led setting."
  }
];

export const joinFaqs: FaqItem[] = [
  {
    question: "What should a new student do first?",
    answer:
      "Start by emailing the club. The v1 join flow is intentionally lightweight so interested students have a direct, approachable first step."
  },
  {
    question: "What if I am interested but cannot commit every week?",
    answer:
      "The club should communicate expectations clearly while still welcoming students whose schedules vary across the semester."
  },
  {
    question: "Do I need equipment on day one?",
    answer:
      "No. Early join communication should explain what is helpful to bring and what can be borrowed or introduced gradually."
  }
];
