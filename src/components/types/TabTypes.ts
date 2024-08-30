// src/types/TabTypes.ts
export interface TabProps { ... }

export interface TabsProps {
  activeTabIndex: number;
  children: ReactElement<TabItemProps> | ReactElement<TabItemProps>[];
}