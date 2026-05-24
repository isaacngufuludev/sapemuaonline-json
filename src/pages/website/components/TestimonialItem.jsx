function TestimonialItem({ item }) {
  return (
    <li className="absolute text-center px-10 lg:px-32 2xl:px-48">
      <div className="">
        <blockquote className="text-center md:text-sm text-xs leading-5 mb-5 lg:mb-10">
          {item.message}
        </blockquote>
        <img src={item.image} className="h-20 rounded-full mx-auto" />
      </div>
      <div className="mb-10 md:text-sm text-xs">
        <p className="font-semibold md:text-sm text-xs">{item.name}</p>
        <p>{item.status}</p>
      </div>
    </li>
  );
}

export default TestimonialItem;
