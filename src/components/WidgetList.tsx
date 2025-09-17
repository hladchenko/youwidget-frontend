import BarChartWidget from "@/components/widgets/BarChartWidget.tsx";
import LineChartWidget from "@/components/widgets/LineChartWidget.tsx";
import TextWidget from "@/components/widgets/TextWidget.tsx";

const WidgetList = () => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
    >
      <LineChartWidget />
      <BarChartWidget />
      <TextWidget />
    </ul>
  );
};
export default WidgetList;
