export interface Project {
  title: string;
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  employer: string;
  platforms: string[];
  programs: string[];
  description: string;
  link: string;
  video: {
    fields: {
      file: {
        url: string;
      };
    };
  }[];
}
export interface About {
  content: string;
  image: string;
}
