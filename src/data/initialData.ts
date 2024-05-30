import { TaskType } from "@/types/task";
import { BadgeCheckIcon, CircleDashed, TrendingUp } from "lucide-react";

type ColumnType = {
  id: string;
  name: string;
  icon: React.ElementType;
  taskItems: TaskType[];
};

export const columns: ColumnType[] = [
  {
    id: "114d",
    name: "To do",
    icon: CircleDashed,
    taskItems: [
      {
        id: "n1k4Jd9s0",
        taskName: "Kerjain PR",
        status: "To do",
        label: "School",
        startDate: new Date("2024-05-23"),
        endDate: new Date("2024-05-25"),
      },
      {
        id: "n2k5Jd9s1",
        taskName: "Belajar untuk UAS",
        status: "To do",
        label: "School",
        startDate: new Date("2024-05-26"),
        endDate: new Date("2024-05-30"),
      },
      {
        id: "n3k6Jd9s2",
        taskName: "Menulis esai",
        status: "To do",
        label: "School",
        startDate: new Date("2024-05-31"),
        endDate: new Date("2024-06-02"),
      },
    ],
  },
  {
    id: "115e",
    name: "In progress",
    icon: TrendingUp,
    taskItems: [
      {
        id: "n4k7Jd9s3",
        taskName: "Mengerjakan proyek kelompok",
        status: "In progress",
        label: "College",
        startDate: new Date("2024-05-26"),
        endDate: new Date("2024-06-01"),
      },
      {
        id: "n5k8Jd9s4",
        taskName: "Membuat aplikasi mobile",
        status: "In progress",
        label: "College",
        startDate: new Date("2024-06-02"),
        endDate: new Date("2024-06-15"),
      },
      {
        id: "n6k9Jd9s5",
        taskName: "Penelitian lapangan",
        status: "In progress",
        label: "College",
        startDate: new Date("2024-06-16"),
        endDate: new Date("2024-06-20"),
      },
    ],
  },
  {
    id: "116f",
    name: "Completed",
    icon: BadgeCheckIcon,
    taskItems: [
      {
        id: "n7k0Jd9s6",
        taskName: "Membaca buku",
        status: "Completed",
        label: "Personal",
        startDate: new Date("2024-05-20"),
        endDate: new Date("2024-05-22"),
      },
      {
        id: "n8k1Jd9s7",
        taskName: "Menyelesaikan kursus online",
        status: "Completed",
        label: "Personal",
        startDate: new Date("2024-05-10"),
        endDate: new Date("2024-05-19"),
      },
    ],
  },
];
