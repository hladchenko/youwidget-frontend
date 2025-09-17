import { DocumentTextIcon } from "@heroicons/react/20/solid";
import Widget from "@/components/widgets/Widget.tsx";

interface ILineChartWidgetProps {}

const LineChartWidget = () => {
  const Text = (
    <div className="m-2 text-sm">
      So I started to walk into the water. I won't lie to you boys, I was
      terrified. But I pressed on, and as I made my way past the breakers a
      strange calm came over me. I don't know if it was divine intervention or
      the kinship of all living things but I tell you Jerry at that moment, I
      was a marine biologist.
    </div>
  );

  return <Widget icon={DocumentTextIcon} content={Text} />;
};

export default LineChartWidget;
