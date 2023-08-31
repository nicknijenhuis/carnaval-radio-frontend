import React from "react";
export function SocialPosts({}) {
  return (
    <div className="grid grid-cols-1 p-10">
      <div
        className="tagembed-container"
        style={{ width: "100%", height: "100%", overflow: "auto" }}
      >
        <div
          className="tagembed-socialwall"
          data-wall-id="115665"
          view-url="https://widget.tagembed.com/115665"
        ></div>
        <script
          src="//widget.tagembed.com/embed.min.js"
          type="text/javascript"
        ></script>
      </div>
    </div>
  );
}
