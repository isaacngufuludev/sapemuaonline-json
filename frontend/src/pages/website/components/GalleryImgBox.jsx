function GalleryImgBox({ image }) {
  return (
    <div className="max-w-4xl max-h-[90vh] rounded-lg">
      <img src={image} alt="Gallery" className="" />
    </div>
  );
}

export default GalleryImgBox;
