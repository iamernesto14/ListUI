import jsonData from "../data.json";

function Card() {
  return (
    <div className="w-[100%] grid grid-cols md:grid-cols-4 gap-x-12 gap-y-5">
      {jsonData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center gap-6 rounded-lg text-gray-300 py-[3.6rem] bg-slate-900"
        >
          <img
            className="rounded-[50%] w-[75px] h-[75px]"
            src={item.image}
            alt={item.name}
          />
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold text-xl">{item.name}</h2>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
