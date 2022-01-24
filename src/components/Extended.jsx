import React from "react";
import ReactECharts from "echarts-for-react";

const Extended = () => {
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
        data: [820, 1330, 932, 1290, 1420, 934],
        type: "line",
        smooth: true
      },
      {
        data: [120, 30, 932, 790, 1520, 764],
        type: "line",
        smooth: true
      },
      {
        data: [620, 430, 932, 1290, 720, 634],
        type: "line",
        smooth: true
      },
      {
        data: [200, 330, 492, 770, 620, 334],
        type: "line",
        smooth: true
      },
      {
        data: [20, 110, 393, 79, 52, 534],
        type: "line",
        smooth: true
      }
    ],
    tooltip: {
      trigger: "axis"
    }
  };
  return <ReactECharts option={options} className="mt-5" />;
};

export default Extended;
