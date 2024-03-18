import React from "react";
import { useTranslation } from "react-i18next";

const MediaLink = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-full relative">
        <a href={`https://www.youtube.com/watch?v=${props.yt}`} target="_blank">
          <div
            style={{
              backgroundImage: `url(${
                props.ima
                  ? `${`/src/assets/channels/${props.ima}.jpg`}`
                  : `https://img.youtube.com/vi/${props.yt}/maxresdefault.jpg`
              })`,
            }}
            className={`w-full h-full relative bg-no-repeat bg-cover bg-center w-full h-full ${
              props.sidebar || props.mobile ? "rounded-[0]" : "rounded-3xl"
            } pointer-events-none max-phone:rounded-none`}
          >
            <div className="absolute z-[99] top-5 left-5 flex items-center gap-4 overflow-hidden max-w-full">
              <img
                src={`/src/assets/channels/${props.channel}.jpg`}
                className="bg-white min-w-[40px] w-[40px] h-[40px] rounded-full"
                alt={props.channel}
              />
              <p className="ey text-white text-[19px]">
                {t(`media.${props.yt}.title`)}
              </p>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/64680f89ffc502a63b8e9d79/64822d3451ca189529b688bd_pb.png"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px]"
              alt="YouTube_logo"
            />
            <div
              className={`ytp-gradient-top ${
                props.sidebar || props.mobile ? "!rounded-t-none" : null
              }`}
            ></div>
            <div
              className={`ytp-gradient-bottom ${
                props.sidebar || props.mobile ? "!rounded-b-none" : null
              }`}
            ></div>
            <div
              className={`ytp-gradient-top ${
                props.sidebar || props.mobile ? "!rounded-t-none" : null
              }`}
            ></div>
            <div
              className={`ytp-gradient-bottom ${
                props.sidebar || props.mobile ? "!rounded-b-none" : null
              }`}
            ></div>
          </div>
        </a>
      </div>
    </>
  );
};

export default MediaLink;
