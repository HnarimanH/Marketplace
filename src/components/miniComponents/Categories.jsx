export default function Content({ allCntnt, setCntnt, title }) {
  return (
    <div className="flex flex-col w-full">
      <h1>{title}</h1>
      <ul className="w-full z-10 pl-2">
        <li  onClick={() => setCntnt('All')} className="p-2 hover:bg-orng-xsm cursor-pointer transform duration-300 text-xl">
          All
        </li>
        {allCntnt.map((cat) => (
          <li
            key={cat}
            onClick={() => setCntnt(cat)}
            className="p-2 hover:bg-orng-xsm cursor-pointer transform duration-300 text-xl"
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}