import React from 'react';
// import AnalyticsChart from './AnalyticsChart';
import BarChartMixed from './BarChartMixed';
import PieChartInteractive from './PieChartInteractive';
import { LineChartv } from './LineChartv';
import PostsTable from '../posts/PostsTable';

export default function DashboardScreen() {
  return (
    <>
      <BarChartMixed />
      <PieChartInteractive />
      <LineChartv />
      <PostsTable />
      {/* <AnalyticsChart /> */}
    </>
  );
}
