import { User } from '../User'

export {}

// Extending Request!
declare global {
    namespace Express {
        export interface Request {
            user: User
        }
    }
}
