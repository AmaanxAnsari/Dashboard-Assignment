const categories = [
  {
    id: 1,
    categoryName: "CSPM Executive",
    widgets: [
      {
        id: 1,
        title: "Cloud Accounts",
        description:
          "A widget showing an overview of Cloud Accounts over time.",
        isChecked: true,
      },
      {
        id: 2,
        title: "Cloud Account Risk Assessment",
        description:
          "A widget displaying the Risk Assessment of Cloud Accounts.",
        isChecked: true,
      },
    ],
  },
  {
    id: 2,
    categoryName: "CWPP",
    widgets: [
      {
        id: 1,
        title: "Namespace Specific Alerts",
        description: "A widget analyzing the Namespace Specific Alerts.",
        isChecked: true,
      },
      {
        id: 2,
        title: "Workload Alerts",
        description: "A widget listing the most Workload Alerts.",
        isChecked: true,
      },
    ],
  },
  {
    id: 2,
    categoryName: "Registery Scan",
    widgets: [
      {
        id: 1,
        title: "Image Risk Assessment",
        description: "A widget analyzing the Image Risk Assessment.",
        isChecked: true,
      },
      {
        id: 2,
        title: "Image Security Issue",
        description: "A widget listing Image Security Issue.",
        isChecked: true,
      },
    ],
  },
];
export default categories;
