function TestimonialItem({item}) {
  return (
    <li className="absolute text-center px-32" >   
      <blockquote className="text-center">{item.message}</blockquote>
      <img src={item.image} className="h-20 rounded-full mx-auto" />
      <p>{item.name}</p>
      <p>{item.status}</p>
    </li>
  );
}




export default TestimonialItem;