function TestimonialItem({ item }) {
  return (
    <li className="absolute text-center px-10 xl:px-32">
      <div className="">
        <blockquote className="text-center xl:text-sm text-xs leading-5  mb-10">
          {item.message}
        </blockquote>
        <img src={item.image} className="h-20 rounded-full mx-auto" />
      </div>
      <div className="mb-10">
        <p className="font-semibold">{item.name}</p>
        <p>{item.status}</p>
      </div>
    </li>
  );
}

export default TestimonialItem;
