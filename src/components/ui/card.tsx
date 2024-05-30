import { TaskType } from "@/types/task";
import { CalendarClock } from "lucide-react";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";

dayjs.extend(calendar);

type CardProps = TaskType & {
  icon: React.ElementType;
  openModal: (id: string) => void;
};

const Card: React.FC<CardProps> = ({
  id,
  icon: Icon,
  taskName,
  // status,
  label,
  startDate,
  endDate,
  openModal,
}) => {
  const dateDisplayFormats = {
    sameDay: "h:mm A",
    nextDay: "[Tomorrow]",
    nextWeek: "dddd",
    lastDay: "[Yesterday]",
    lastWeek: "[Last] dddd",
    sameElse: "DD/MM/YYYY",
  };

  const formattedDate = {
    startDate: dayjs(startDate).calendar(null, dateDisplayFormats),
    endDate: dayjs(endDate).calendar(null, dateDisplayFormats),
  };

  return (
    <div
      className="bg-white rounded-md px-4 py-3 space-y-4 hover:bg-gray-50 transition-colors ease-out duration-1000"
      onClick={() => openModal(id)}
    >
      <header id="card-header" className="flex justify-between items-center">
        <h1 className="text-gray-400 text-sm">DEV-45</h1>
        <div className="rounded-full w-8 h-8 flex items-center justify-center bg-orange-50">
          P
        </div>
      </header>
      <section className="flex gap-x-2 items-center">
        <Icon className="w-4 h-4 text-gray-400" />
        <p>{taskName}</p>
      </section>
      <section className="flex gap-x-2 items-center">
        <div className="border border-gray-200 rounded-md px-2 py-1 flex gap-x-1 items-center text-gray-500">
          <CalendarClock className="w-3.5 h-3.5" />
          <time className="text-xs">
            {formattedDate.startDate}
            {formattedDate.endDate === "Invalid Date"
              ? ""
              : ` - ${formattedDate.endDate}`}
          </time>
        </div>
        <div className="border border-gray-200 rounded-md px-2 py-1 flex gap-x-1 items-center text-gray-500">
          <div className="rounded-full bg-rose-300 w-3 h-3"></div>
          <p className="text-xs">{label}</p>
        </div>
      </section>
    </div>
  );
};

export default Card;
