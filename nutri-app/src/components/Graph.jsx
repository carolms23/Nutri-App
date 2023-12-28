import { LineChart } from "@mui/x-charts";

export default function Graph() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [76.5, 75.5, 74.85],
        },
        {
          data: [82, 85.5, 82],
        },
      ]}
      width={500}
      height={300}
    />
  );
}
