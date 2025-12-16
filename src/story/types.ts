export type SceneId = string;

export type Choice = {
  text: string;
  next: SceneId;
};

export type Scene = {
  id: SceneId;
  text: string;
  choices: Choice[];
};
