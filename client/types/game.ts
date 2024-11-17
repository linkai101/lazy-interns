
export type GameState = "game-pre" | "onboarding" | "task-pre" | "task" | "task-complete" | "hr-reports" | "hr-reports-complete" | "hr-meeting" | "hr-meeting-complete" | "game-stats" | "game-over";

export type Task = "news-article" | "group-chat" | "product-failure" | "damage-control" | "severance";

export interface Session {
  gameState?: GameState;
  task?: Task;
  isLazyIntern?: boolean;
  // players: Player[];
}