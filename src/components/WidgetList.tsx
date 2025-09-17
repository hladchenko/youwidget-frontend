import BarChartWidget from "@/components/widgets/BarChartWidget.tsx";
import LineChartWidget from "@/components/widgets/LineChartWidget.tsx";
import TextWidget from "@/components/widgets/TextWidget.tsx";

const WidgetList = () => {
  const client = {
    id: 1,
    name: "Tuple",
    imageUrl: "https://tailwindcss.com/plus-assets/img/logos/48x48/tuple.svg",
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      amount: "$2,000.00",
      status: "Overdue",
    },
  };

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
    >
      <LineChartWidget client={client} />
      <BarChartWidget client={client} />
      <TextWidget client={client} />
    </ul>
  );
};
export default WidgetList;
