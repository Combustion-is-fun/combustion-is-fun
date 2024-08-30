import TabItem from "./Tabs/TabItem";
import TabList from "./Tabs/TabList";
import "./App.css";

function Tabs() {
  return (
    <div>
      <TabList activeTabIndex={1}>
        <TabItem label="Tab #1">
          <p>This is Tab #1</p>
        </TabItem>
        <TabItem label="Tab #2">
          <p>Selected by default, this is tab #2.</p>
        </TabItem>
        <TabItem label="Tab #3">
          <p>Tab #3, the last tab.</p>
        </TabItem>
      </TabList>
    </div>
  );
}

export default Tabs;