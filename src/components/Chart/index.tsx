import { createChart, ColorType } from "lightweight-charts";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from "react";
import { useGetDetailsGraphicQuery } from "../../redux/apiCoins";
import { useAppSelector } from "../../hooks/hooks";

type InitialData = {
  value: number;
  time: string;
};

export const Chart = () => {
  const currentId = useAppSelector((state) => state.getDetailsCoin);
  const { data } = useGetDetailsGraphicQuery(currentId);

  const initialData: InitialData[] = [];

  data?.map((item) => {
    const date = new Date();
    date.setTime(item.time);

    return initialData.push({
      value: Number(Number(item.priceUsd).toFixed(2)),
      time:
        date.getFullYear() +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2),
    });
  });

  const chartContainerRef:
    | React.MutableRefObject<undefined>
    | DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> =
    useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef?.current?.clientWidth });
    };

    const chart = createChart(chartContainerRef?.current, {
      layout: {
        background: { type: ColorType.Solid, color: "#ffffff" },
      },
      width: 840,
      height: 300,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      lineColor: "#2962FF",
      topColor: "#2962FF",
      bottomColor: "rgba(41, 98, 255, 0.28)",
    });
    newSeries.setData(initialData);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [initialData]);

  return <div ref={chartContainerRef}></div>;
};
