import { Category } from "@/types";
import { CircleDashed } from "lucide-react";
import { nanoid } from "nanoid";

type Data = {
  categories: Category[];
};

export const initData: Data = {
  categories: [
    {
      id: nanoid(),
      name: "To do",
      value: "TODO",
      icon: CircleDashed,
      tasks: [
        {
          id: nanoid(),
          title: "Kerjain PR",
          description: "Kerjaaa",
          priority: 2,
          labels: [
            {
              id: "1314",
              name: "Bug",
              value: "BUG",
            },
          ],
          status: {
            id: "14142",
            name: "To do",
            value: "TODO",
          },
        },
      ],
    },
    {
      id: nanoid(),
      name: "In progress",
      value: "IN_PROGRESS",
      icon: CircleDashed,
      tasks: [
        {
          id: nanoid(),
          title: "Belajar untuk UAS",
          description: "Belajar materi UAS",
          priority: 1,
          labels: [
            {
              id: "1315",
              name: "School",
              value: "SCHOOL",
            },
          ],
          status: {
            id: "14143",
            name: "In progress",
            value: "IN_PROGRESS",
          },
        },
      ],
    },
    {
      id: nanoid(),
      name: "Completed",
      value: "COMPLETED",
      icon: CircleDashed,
      tasks: [
        {
          id: nanoid(),
          title: "Menyelesaikan kursus online",
          description: "Kursus online selesai",
          priority: 3,
          labels: [
            {
              id: "1316",
              name: "Personal",
              value: "PERSONAL",
            },
          ],
          status: {
            id: "14144",
            name: "Completed",
            value: "COMPLETED",
          },
        },
      ],
    },
  ],
};
