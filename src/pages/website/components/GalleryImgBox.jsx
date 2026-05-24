function GalleryImgBox({ image }) {
  return (
    <div className="max-w-4xl rounded-lg">
      <img
        src={image.src}
        alt="Gallery"
        className="h-full w-full object-cover mb-2"
      />
      <p className="text-sm">
        <span className="font-semibold">Descrição:</span> {image.description}
      </p>
    </div>
  );
}

export default GalleryImgBox;
