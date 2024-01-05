export const Spotify = () => {

  return (
    <iframe
      style={{ 
        "borderRadius":"15px",
        "backgroundColor":"black",
        "boxShadow":"10px 10px 40px black"
     }}
      src="https://open.spotify.com/embed/playlist/1bc6UPIWoynhBFD4qos7vn?utm_source=generator&theme=0"
      width="100%"
      height="500"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};
