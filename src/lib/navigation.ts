// Section ids are shared by the navbar links and the section anchors.
export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export function sectionIndex(id: SectionId) {
  const position = sections.findIndex((section) => section.id === id) + 1;
  return String(position).padStart(2, "0");
}
