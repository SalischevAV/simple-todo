export type Task = {
    id: string,
    userId: string | undefined,
    title: string,
    summary: string
    dueDate: string,
}

export type User = {
    id: string
    name: string
    avatar: string
  }