export interface UserAuthContextType {
    isAuthenticated: boolean
    perviouslyAuthenticated: boolean | undefined
    accountType: 'parent' | 'student' | 'teacher' | any
    checkAuthenticationStatus: () => void
}
