export default function Photo({ image, className = "", eager = false }) {
  if (!image) return null;
  return (
    <img
      src={image.src}
      alt={image.alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={className}
    />
  );
}
