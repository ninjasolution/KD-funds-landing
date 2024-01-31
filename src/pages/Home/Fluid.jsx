import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HomeIcon from "../../assets/icons/home.png";
import TownIcon from "../../assets/icons/town.png";
import BuidingIcon from "../../assets/icons/BuidingIcon.png";
import W1 from '../../assets/images/kd_symbol1@2x.png';

const Fluid = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "",
      align: "left",
    },
    tooltip: {
      headerFormat: "",
      pointFormat: "{point.subname}",

    },
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '14px', // Adjust the font size here
            // fontFamily: "HelveticaNeue-Medium"
          },
        },
      },
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: [
          {
            enabled: true,
            distance: 55,
          },
          {
            enabled: true,
            distance: -48,
            format: "{point.subname}",
            x: 0,
            y: 0,
            style: {
              fontSize: "14px",
              textOutline: "none",
              opacity: 1,
              textOverflow: 'none', // Enable word wrapping
              width: '100px', // Adjust the width as needed
            },
            filter: {
              operator: ">",
              property: "percentage",
              value: 10,
            },
          },
        ],
      },
    },
    series: [
      {
        minPointSize: 10,
        innerSize: "0%",
        zMin: 0,
        name: "Multi-disciplined",
        borderRadius: 5,
        data: [
          {
            name: ` Financing development and construction costs of DA approved development projects.`,
            subname: `Construction Loans`,
            y: 33,
            z: 0,
          },
          {
            name: `Secured against real estate assets that are income generating or have the potential to generate income on a going concern basis.`,
            subname: "Investment Loans",
            y: 34,
            z: 1,
          },
          {
            name: `Secured against planning approved land and readiness for development.`,
            subname: `Land Loans`,
            y: 33,
            z: 2,
          },
        ],
        colors: ["#70B6D2", "#CAEAF4", "#D6DF22"],
      },
    ],
  };

  const disciplan_list = [
    {
      id: 1,
      percentage: "25%",
      name: `New House & Land,
      Land Subdivision`,
      icon: HomeIcon,
    },
    {
      id: 2,
      percentage: "35%",
      name: `Semi-detached,
      Terraces, Townhouses`,
      icon: TownIcon,
    },
    {
      id: 3,
      percentage: "40%",
      name: `Multi-Unit Apartments`,
      icon: BuidingIcon,
    },
  ];

  return (
    <>
    <div className="relative z-50">
    {/* <img src={W1} alt="w1" className="absolute top-[-20%] right-0 w-[250px]" /> */}
      <img src={W1} alt="w1" className="absolute right-0 bottom-[-20%] w-[200px]" />
      <div id="fluid">
        <div className="container mx-auto xl:px-10 px-4 w-full lg:py-36 py-24">
          <div className="flex">
            <h1 className="century lg:text-[46px] text-4xl leading-[70px] mt-4 text-[#3d4043]">
              Fluid and Multi-disciplined
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="flex gap-4 xl:flex-nowrap flex-wrap my-10"
          >
            <div className="pie_chart_wrapper xl:mr-12 overflow-auto">
              <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
            <div className="content ">
              <h3 className="text-[#F1870F] text-4xl">
                Diversified Across <br /> Multiple Housing Stock
              </h3>

              <ul className="my-5">
                {disciplan_list.map((value) => {
                  return (
                    <li key={value.id} className="flex items-center mb-3">
                      <img src={value.icon} alt="" />
                      <span className="text-[#F1870F] font-bold px-4 text-[40px]">
                        {value.percentage}
                      </span>
                      <p className="text-black max-w-[250px]">{value.name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Fluid;
