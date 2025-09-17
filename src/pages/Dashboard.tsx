import WidgetList from "@/components/WidgetList.tsx";
import EmptyState from "@/components/EmptyState.tsx";
import SectionHeading from "@/components/SectionHeading.tsx";
import Dropdown from "@/components/Dropdown.tsx";

const Dashboard = () => {
  return (
    <>
      <SectionHeading pageName={"Widgets"} action={<Dropdown />} count={3} />
      {false ? <EmptyState /> : <WidgetList />}
    </>
  );
};

export default Dashboard;
