interface IStep1 {
  title: string;
  description: string;
  type: string;
}

interface IStep2 {
  dev_technologie: string;
  autre: boolean;
}

interface IStep3 {
  duedate: string;
  namedb: string;
  typedb: string;
}

interface IStep4 {
  team_size: string;
  team_name: string;

}

interface ICreateApp extends IStep1, IStep2, IStep3, IStep4 {}

export type { IStep1, IStep2, IStep3, IStep4, ICreateApp };
