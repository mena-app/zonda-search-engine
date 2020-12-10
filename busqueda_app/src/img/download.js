import React from "react";

const download = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="23"
      viewBox="0 0 22 23"
    >
      <g fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke={color}>
          <g>
            <g>
              <path
                stroke-width=".927"
                d="M0 16.299L0 20.551 19.843 20.551 19.843 16.299"
                transform="translate(-1277 -420) translate(1270 414) translate(8 7)"
              />
              <path
                d="M9.921 15.273L9.921 0M14.173 11.338l-3.851 3.851c-.22.221-.582.221-.801 0l-3.852-3.85"
                transform="translate(-1277 -420) translate(1270 414) translate(8 7)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default download;
