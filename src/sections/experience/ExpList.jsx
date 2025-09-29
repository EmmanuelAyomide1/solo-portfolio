import ExpItem from "./ExpItem";

function ExpList() {
  return (
    <div className="group flex flex-col items-center">
      <ExpItem
        job={{
          companyName: "SystemTech",
          duration: "Feb 2024- Jan 2025",
          jobTitle: "UI/UX Designer",
          jobDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
        }}
      />
      <ExpItem
        job={{
          companyName: "Progfams",
          duration: "Feb 2024- Jan 2025",
          jobTitle: "UI/UX Designer",
          jobDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
        }}
      />
      <ExpItem
        job={{
          companyName: "Progfams",
          duration: "Feb 2024- Jan 2025",
          jobTitle: "UI/UX Designer",
          jobDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
        }}
      />
      <ExpItem
        job={{
          companyName: "Progfams",
          duration: "Feb 2024- Jan 2025",
          jobTitle: "UI/UX Designer",
          jobDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
        }}
      />
    </div>
  );
}

export default ExpList;
