import Subtitle from "../../../components/ui/Subtitle";
import { FiUser } from "react-icons/fi";
import ProfessoresItem from "./ProfessoresItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const data = [
  // ... mantém o teu array igual ...
];

function Professores() {
  return (
    <div className="mt-10 mx-auto my-0 max-w-[1800px] px-6">
      <div className="mb-7">
        <Subtitle type="gray">Outras Entidades</Subtitle>
      </div>

      <Swiper
        direction="vertical"
        // slidesPerView={3}
        spaceBetween={32}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="h-[600px]"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <ProfessoresItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Professores;
