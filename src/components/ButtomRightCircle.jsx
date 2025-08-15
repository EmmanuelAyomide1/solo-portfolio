function ButtomRightCircles({ amount = 6 }) {
  return (
    <ul className="absolute bottom-0 left-0 hidden h-60 w-60 -translate-x-[50%] translate-y-[50%] items-center justify-center md:flex">
      {Array.from({ length: amount }, (_, i) => (
        <ButtomCircle key={i} amount={amount} index={i} />
      ))}
    </ul>
  );
}

function ButtomCircle({ index, amount }) {
  const percentage = `${index + 1}/${amount}`;
  const styles = {
    "1/6": "h-1/6 w-1/6 border-6",
    "2/6": "h-2/6 w-2/6 border-5",
    "3/6": "h-3/6 w-3/6 border-4",
    "4/6": "h-4/6 w-4/6 border-3",
    "5/6": "h-5/6 w-5/6 border-2",
    "6/6": "h-6/6 w-6/6 border-1",
  };
  return (
    <li
      className={`absolute border-[#1572D399] ${styles[percentage]} rounded-full`}
    ></li>
  );
}

export default ButtomRightCircles;
