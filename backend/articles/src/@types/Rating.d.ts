export interface Rating {
  id?: string
  rating: string
  name: string //randomly generated if not provided
  ipAddress: string // for tracking spams
}
