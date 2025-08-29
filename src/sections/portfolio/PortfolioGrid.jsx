import PortfolioItem from "./PortfolioItem";

function PortfolioGrid() {
  return (
    <div className="grid w-full gap-6 md:grid-cols-2 md:space-y-0">
      <PortfolioItem
        text="Flyer Design"
        bgStyle={
          "bg-[linear-gradient(207deg,rgba(0,0,0,0)_47.41%,rgba(0,0,0,0.36)_76.39%,rgba(0,0,0,0.5)_89.23%),url('assets/portfolio1.png')]"
        }
      />
      <PortfolioItem
        text="Web Design"
        bgStyle={
          "bg-[linear-gradient(207deg,rgba(0,0,0,0)_47.41%,rgba(0,0,0,0.36)_76.39%,rgba(0,0,0,0.5)_89.23%),url('assets/portfolio2.png')]"
        }
      />
      <PortfolioItem
        text={"SendNow Design"}
        bgStyle={
          "bg-[linear-gradient(207deg,rgba(0,0,0,0)_47.41%,rgba(0,0,0,0.36)_76.39%,rgba(0,0,0,0.5)_89.23%),url('assets/portfolio3.png')]"
        }
      />
      <PortfolioItem
        text={"Landing Page"}
        bgStyle={
          "bg-[linear-gradient(207deg,rgba(0,0,0,0)_47.41%,rgba(0,0,0,0.36)_76.39%,rgba(0,0,0,0.5)_89.23%),url('assets/portfolio4.png')]"
        }
      />
    </div>
  );
}

export default PortfolioGrid;
