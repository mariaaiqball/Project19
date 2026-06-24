export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceCapability = {
  title: string;
  methodology: string;
  benefit: string;
};

export type ServiceHighlight = {
  title: string;
  description: string;
};

export type ServiceTechStackRow = {
  category: string;
  tools: string;
};

export type ServiceContentSection = {
  title: string;
  intro?: string;
  paragraphs?: string[];
  steps?: ServiceProcessStep[];
  capabilities?: ServiceCapability[];
  highlights?: ServiceHighlight[];
  bullets?: ServiceHighlight[];
  techStack?: ServiceTechStackRow[];
};
