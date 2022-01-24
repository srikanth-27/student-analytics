import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import { OverlayTrigger, Tooltip, Image } from "react-bootstrap";
import picture from "../picture.png";
const Graph = () => {
  const data = [
    ["Intro Data Science", "Intro Machine Learning"],
    [
      "Intro Data Science",
      "Intro Machine Learning",
      "Intro Artificial Intelligence"
    ],
    ["Intro Data Science", "Intro Machine Learning"],
    ["Intro Data Science", "Intro Machine Learning"],
    [
      "Intro Data Science",
      "Intro Machine Learning",
      "Intro Artificial Intelligence"
    ],
    ["Intro Data Science", "Intro Machine Learning"],
    ["Intro Data Science", "Intro Machine Learning"],
    ["Intro Data Science", "Intro Machine Learning"],
    ["Intro Data Science", "Intro Machine Learning"],
    [
      "Intro Data Science",
      "Intro Machine Learning",
      "Intro Artificial Intelligence"
    ],
    ["Intro Data Science", "Intro Machine Learning"],
    ["Intro Data Science", "Intro Machine Learning"],
    ["Intro Data Science", "Intro Machine Learning"],
    [
      "Intro Data Science",
      "Intro Machine Learning",
      "Intro Artificial Intelligence"
    ],
    ["Intro Data Science", "Intro Machine Learning"],
    ["Intro Data Science", "Intro Machine Learning"],
    ["Intro Data Science", "Intro Machine Learning"],
    ["Intro Data Science", "Intro Machine Learning"],
    [
      "Intro Data Science",
      "Intro Machine Learning",
      "Intro Artificial Intelligence"
    ],
    ["Intro Data Science", "Intro Machine Learning"],
    ["Intro Data Science", "Intro Machine Learning"],
    ["Intro Data Science", "Intro Machine Learning"],
    [
      "Intro Data Science",
      "Intro Machine Learning",
      "Intro Artificial Intelligence"
    ],
    ["Intro Data Science", "Intro Machine Learning"],
    ["Intro Data Science", "Intro Machine Learning"]
  ];
  const options = {
    //animationDuration: 5000,
    //title: { text: "Analytics" },
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      show: false,
      name: "X-Axis",
      type: "category",
      data: [
        "3 Dec 2021",
        "7 Dec 2021",
        "12  Dec 2021",
        "17 Dec 2021",
        "22 Dec 2021",
        "27 Dec 2021"
      ],
      nameStyle: {
        rich: {
          label: {
            // Styles defined in 'rich' can be applied to some fragments
            // of text by adding some markers to those fragment, like
            // `{styleName|text content text content}`.
            // `'\n'` is the newline character.
            formatter: [
              '{a|Style "a" is applied to this snippet}',
              '{b|Style "b" is applied to this snippet}This snippet use default style{x|use style "x"}'
            ].join("\n"),

            rich: {
              a: {
                color: "red",
                lineHeight: 10
              },
              b: {
                backgroundColor: {
                  image: "xxx/xxx.jpg"
                },
                height: 40
              },
              x: {
                fontSize: 18,
                fontFamily: "Microsoft YaHei",
                borderColor: "#449933",
                borderRadius: 4
              }
            }
          }
        }
      }
    },
    yAxis: {
      type: "value",
      position: "right",
      axisLabel: {
        inside: true,
        formatter: "{value}"
      },
      z: 10
    },
    series: [
      {
        data: [820, 1330, 932, 1290, 1520, 934],
        type: "line",
        smooth: true,
        areaStyle: {}
      }
    ],
    tooltip: {
      trigger: "axis"
    }
  };
  const renderTooltip = (day, idx) => (
    <Tooltip id="button-tooltip" className="text-left">
      {day.length} Video's Watched
      <br />
      {day.map(vid => (
        <div className="d-flex">
          <Image src={picture} width="50rem" height="50rem" />
          <div
            className="d-flex flex-column"
            style={{ marginLeft: "1rem", textAlign: "left", width: "50rem" }}
          >
            <a
              href="https://cdk.udemy.com/course/node-with-react-fullstack-web-development/learn/lecture/7607658?start=0#overview"
              target="_blank"
              className="mb-0 text-nowrap"
            >
              {vid}
            </a>
            <p className="mb-0">{`${idx + 3} Dec 2022`}</p>
          </div>
        </div>
      ))}
    </Tooltip>
  );
  return (
    <div>
      <ReactECharts option={options} className="mt-5" />
      <div className="d-flex" style={{ marginLeft: "9rem" }}>
        {data.map((day, idx) => (
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip(day, idx)}
          >
            <div
              className="mx-2 p-2 text-center bg-dark text-white"
              style={{ minWidth: "33px" }}
            >
              {day.length}
            </div>
          </OverlayTrigger>
        ))}
      </div>
      <div className="d-flex mt-3">
        {options.xAxis.data.map(d => (
          <span style={{ marginLeft: "9rem" }}>{d}</span>
        ))}
      </div>
    </div>
  );
};

export default Graph;
