type Screenshot = {
  src: string;
  name: string;
};

export type Project = {
  name: string;
  project: string;
  source?: string;
  description?: string;
  inProgress?: boolean;
  expandedDescription?: string;
  landingPage?: string;
  website?: string;
  github?: string;
  stack?: string[];
  type?: string;
  intent?: string;
  technical?: string;
  screenshots?: Screenshot[];
};
