import WidgetList from "@/components/WidgetList.tsx";
import EmptyState from "@/components/EmptyState.tsx";
import SectionHeading from "@/components/SectionHeading.tsx";
import Dropdown from "@/components/Dropdown.tsx";
import PageHeading from "@/components/PageHeading.tsx";

const Dashboard = () => {
  const widgets = [
    {
      id: 1,
      name: "Tuple",
      imageUrl: "https://tailwindcss.com/plus-assets/img/logos/48x48/tuple.svg",
      lastInvoice: {
        date: "December 13, 2022",
        dateTime: "2022-12-13",
        amount: "$2,000.00",
        status: "Overdue",
      },
    },
    {
      id: 2,
      name: "SavvyCal",
      imageUrl:
        "https://tailwindcss.com/plus-assets/img/logos/48x48/savvycal.svg",
      lastInvoice: {
        date: "January 22, 2023",
        dateTime: "2023-01-22",
        amount: "$14,000.00",
        status: "Paid",
      },
    },
    {
      id: 3,
      name: "Reform",
      imageUrl:
        "https://tailwindcss.com/plus-assets/img/logos/48x48/reform.svg",
      lastInvoice: {
        date: "January 23, 2023",
        dateTime: "2023-01-23",
        amount: "$7,600.00",
        status: "Paid",
      },
    },
  ];

  return (
    <>
      <PageHeading pageName={"Dashboard"} />
      <SectionHeading pageName={"Widgets"} action={<Dropdown />} count={3} />
      {false ? <EmptyState /> : <WidgetList widgets={widgets} />}
    </>
  );
};

export default Dashboard;
