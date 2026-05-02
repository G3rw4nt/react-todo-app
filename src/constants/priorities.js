export const PRIORITIES = {
  HIGH: "High",
  NORMAL: "Normal",
  LOW: "Low",
};

export const priorityOptions = [
  {
    value: PRIORITIES.HIGH,
    label: "Wysoki",
    order: 1,
    formClassName: "peer-checked:bg-red-500 peer-checked:border-red-500",
    badgeClassName: "bg-red-100 text-red-700",
  },
  {
    value: PRIORITIES.NORMAL,
    label: "Normalny",
    order: 2,
    formClassName:
      "peer-checked:bg-yellow-400 peer-checked:border-yellow-400 peer-checked:text-slate-900",
    badgeClassName: "bg-yellow-100 text-yellow-800",
  },
  {
    value: PRIORITIES.LOW,
    label: "Niski",
    order: 3,
    formClassName: "peer-checked:bg-green-500 peer-checked:border-green-500",
    badgeClassName: "bg-green-100 text-green-700",
  },
];

export function getPriorityOption(priority) {
  return priorityOptions.find((option) => option.value === priority);
}
