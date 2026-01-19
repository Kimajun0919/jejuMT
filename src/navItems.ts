export type NavItem = {
  path: string
  label: string
}

export const navItems: NavItem[] = [
  { path: '/', label: 'Intro' },
  { path: '/info', label: 'Info' },
  { path: '/schedule', label: 'Schedule' },
  { path: '/notice', label: 'Notice' },
  { path: '/packing', label: 'Packing' },
  { path: '/ending', label: 'Ending' },
]
