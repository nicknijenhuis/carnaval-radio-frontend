import React from "react";
export function SocialPosts({}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 p-10">
      <div className="w-full p-10 lg:col-span-3">
        <figure data-behold-id="VhMnukPNNK2LVEcM1Afc"></figure>
        <script src="https://w.behold.so/widget.js" type="module"></script>
      </div>
      <div className="w-full p-10 lg:grid-cols-2">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcarnaval-radio&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=332391657140456"
          width="400"
          height="800"
          style={{
            border: "none",
            overflow: "hidden",
          }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}
