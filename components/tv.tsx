import dynamic from "next/dynamic";
import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";

const ReactTwitchEmbedVideo = dynamic(
  () => import("react-twitch-embed-video"),
  { ssr: false } // This will prevent the component from being rendered on the server.
);

export default function TvScreen() {
  const currentHour = new Date().getHours();

  return (
    <div id="container">
      <div id="monitor">
        <div
          id="monitorscreen"
          style={{ backgroundImage: `url(${VideoThumb})` }}
        >
          {currentHour >= 8 && currentHour < 20 ? (
            <ReactTwitchEmbedVideo channel="gmecoinsol" width={"100%"} />
          ) : (
            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={1200}
              thumbHeight={600}
              thumbAlt="Keith Gill on CNBC"
              video="/videos/video.mp4"
              videoWidth={1920}
              videoHeight={1080}
            />
          )}
        </div>
      </div>
    </div>
  );
}
