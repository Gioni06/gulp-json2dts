export interface Example {
  glossary?: {
    title?: string;
    GlossDiv?: {
      title?: number;
      GlossList?: {
        GlossEntry?: {
          ID?: string;
          SortAs?: string;
          GlossTerm?: string;
          Acronym?: string;
          Abbrev?: string;
          GlossDef?: {
            para?: string;
            GlossSeeAlso?: string[];
            [k: string]: any;
          };
          GlossSee?: string;
          [k: string]: any;
        };
        [k: string]: any;
      };
      [k: string]: any;
    };
    [k: string]: any;
  };
  [k: string]: any;
}