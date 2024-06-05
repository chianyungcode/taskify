import { Category, Label, Status, Task } from "@/types";
import { ArrowUpCircle, CheckCircle2, Circle } from "lucide-react";
import { nanoid } from "nanoid";

type Data = {
  categories: Category[];
};

export const initialLabelTask: Label[] = [
  {
    id: "A4sEuBWj4oL9L2F",
    value: "PERSONAL",
    name: "Personal",
    color: "#F16D74",
  },
  {
    id: "ja_ZK2tHeC5oRAN",
    value: "SCHOOL",
    name: "School",
    color: "#C3E88D",
  },
  {
    id: "RjDW-Npq6_U_uRU",
    value: "WORK",
    name: "Work",
    color: "#92D5F3",
  },
];

export const initialStatusTask: Status[] = [
  {
    id: "Z2sQObdre6K8Wr9",
    name: "To do",
    value: "TODO",
    icon: Circle,
  },
  {
    id: "sSElqeHe2RIiq-H",
    name: "In progress",
    value: "IN_PROGRESS",
    icon: ArrowUpCircle,
  },
  {
    id: "V9d0KKclDklcHCb",
    name: "Completed",
    value: "COMPLETED",
    icon: CheckCircle2,
  },
];

export const initialTask: Task[] = [
  {
    id: nanoid(),
    title: "Kerjain PR",
    description: "Kerjaaa",
    priority: 2,
    status: initialStatusTask[0],
    labels: [initialLabelTask[0]],
    startDate: new Date("2023-10-01T08:00:00Z"),
    endDate: new Date("2023-10-01T12:00:00Z"),
  },
  {
    id: nanoid(),
    title: "Belajar untuk ujian",
    description: "Pelajari bab 1 sampai 3",
    priority: 1,
    status: initialStatusTask[1],
    labels: [initialLabelTask[1]],
    startDate: new Date("2023-10-02T09:00:00Z"),
    endDate: new Date("2023-10-02T11:00:00Z"),
  },
  {
    id: nanoid(),
    title: "Rapat proyek",
    description: "Diskusikan kemajuan proyek",
    priority: 3,
    status: initialStatusTask[2],
    labels: [initialLabelTask[2]],
    startDate: new Date("2023-10-03T10:00:00Z"),
    endDate: new Date("2023-10-03T11:30:00Z"),
  },
  {
    id: nanoid(),
    title: "Olahraga pagi",
    description: "Jogging di taman",
    priority: 0,
    status: initialStatusTask[0],
    labels: [initialLabelTask[0]],
    startDate: new Date("2023-10-04T06:00:00Z"),
    endDate: new Date("2023-10-04T07:00:00Z"),
  },
];

export const initialCategories: Category[] = [
  {
    id: "JC4XP83ZY6nM_v5",
    name: "To do",
    value: "TODO",
    icon: Circle,
    tasks: initialTask.filter((task) => task.status.value === "TODO"),
  },
  {
    id: "KJ8XP83ZY6nM_v6",
    name: "In progress",
    value: "IN_PROGRESS",
    icon: ArrowUpCircle,
    tasks: initialTask.filter((task) => task.status.value === "IN_PROGRESS"),
  },
  {
    id: "LM9XP83ZY6nM_v7",
    name: "Completed",
    value: "COMPLETED",
    icon: CheckCircle2,
    tasks: initialTask.filter((task) => task.status.value === "COMPLETED"),
  },
];

export const initialData: Data = {
  categories: [...initialCategories],
};

// export const initData: Data = {
//   categories: [
//     {
//       id: nanoid(),
//       name: "To do",
//       value: "TODO",
//       icon: CircleDashed,
//       tasks: [
//         {
//           id: nanoid(),
//           title: "Kerjain PR",
//           description: "Kerjaaa",
//           priority: 2,
//           labels: [
//             {
//               id: "1314",
//               name: "Bug",
//               value: "BUG",
//             },
//           ],
//           status: initialStatusTask[0],
//           startDate: new Date("2023-10-01T08:00:00Z"),
//           endDate: new Date("2023-10-01T12:00:00Z"),
//         },
//       ],
//     },
//     {
//       id: nanoid(),
//       name: "In progress",
//       value: "IN_PROGRESS",
//       icon: CircleDashed,
//       tasks: [
//         {
//           id: nanoid(),
//           title: "Belajar untuk UAS",
//           description: "Belajar materi UAS",
//           priority: 1,
//           labels: [
//             {
//               id: "1315",
//               name: "School",
//               value: "SCHOOL",
//             },
//           ],
//           status: initialStatusTask[1],
//           startDate: new Date("2023-10-02T09:00:00Z"),
//           endDate: new Date("2023-10-02T11:00:00Z"),
//         },
//       ],
//     },
//     {
//       id: nanoid(),
//       name: "Completed",
//       value: "COMPLETED",
//       icon: CircleDashed,
//       tasks: [
//         {
//           id: nanoid(),
//           title: "Menyelesaikan kursus online",
//           description: "Kursus online selesai",
//           priority: 3,
//           labels: [
//             {
//               id: "1316",
//               name: "Personal",
//               value: "PERSONAL",
//             },
//           ],
//           status: initialStatusTask[2],
//           startDate: new Date("2023-10-03T10:00:00Z"),
//           endDate: new Date("2023-10-03T14:00:00Z"),
//         },
//       ],
//     },
//   ],
// };
