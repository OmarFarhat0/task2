import "./googleMap.css";

export default function GoogleMap({ src, width, height }) {
  return (
    <div className="iframeContainer">
      <iframe
        src={src}
        width="100%"
        height={height}
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
