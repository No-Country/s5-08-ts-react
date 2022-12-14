export {};

declare global {
  namespace Express {
    export interface Request {
      user: {
        id: string;
        name: string;
        role: string;
        institutionId: string;
      };
      token: string;
    }
  }
}
