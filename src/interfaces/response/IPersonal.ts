export interface IPersonalResponse {
  language?: string;
  about?: About;
  histories?: History[];
  skills?: Skill[];
  socials?: Social[];
}

export interface About {
  name?: string;
  position?: string;
  email?: string;
  phoneNumber?: string;
  country?: string;
  city?: string;
  description?: string;
  birthday?: Date;
  avatarUrl?: string;
  lang?: string;
  Education?: string;
  Military?: string;
}

export interface History {
  id?: number;
  title?: string;
  dateTime?: Date;
  endDateTime?: Date;
  description?: string;
  lang?: string;
}

export interface Skill {
  id?: number;
  title?: string;
  value?: number;
  progressBar?: boolean;
  lang?: string;
}

export interface Social {
  id?: number;
  title?: string;
  iconName?: string;
  link?: string;
  lang?: string;
}
