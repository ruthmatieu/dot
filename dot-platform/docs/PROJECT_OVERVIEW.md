# App MVP

## Data Model

User {
    id: string
    name: string
    email: string
    role: "admin" | "user"
}

AuthState {
    user: User | null
    isAuthenticated: boolean
}

ThemeState {
    mode: "light" | "dark"
}

## Routes
/login (public)
/dashboard (protected)
/dashboard/items