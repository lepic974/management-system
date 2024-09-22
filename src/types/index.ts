export interface FilterProps {
  page: number
  limit: number
  search: string
  sort: string
  order: "asc" | "desc"
}

export interface HomeProps {
  isMaintenanceMode: boolean
  isDevMode: boolean
}
