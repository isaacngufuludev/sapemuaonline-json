function TestimonialItem({ item }) {
  return (
    <li className="absolute text-center px-32">
      <blockquote className="text-center mb-10 ">{item.message}</blockquote>
      <img src={item.image} className="h-20 rounded-full mx-auto" />
      <p className="font-semibold">{item.name}</p>
      <p>{item.status}</p>
    </li>
  );
}

export default TestimonialItem;
