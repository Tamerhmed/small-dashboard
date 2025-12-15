import BarChartMixed from '@/components/dashboard/BarChartMixed';
import DashboardCard from '@/components/dashboard/DashboardCard';
import DashboardList from '@/components/dashboard/DashboardList';
import DashboardScreen from '@/components/dashboard/DashboardScreen';
import PieChartInteractive from '@/components/dashboard/PieChartInteractive';
import DashboardSidebar from '@/components/DashboardSidebar';
// import PostsTable from '@/components/posts/PostsTable';
import {
  ChartColumn,
  ChartNoAxesCombined,
  Folder,
  LucideIcon,
  Newspaper,
  NotebookPen,
  Users,
} from 'lucide-react';

export default function Home() {
  return (
    <div className='flex flex-col gap-6'>
      {/* <div className='flex flex-col gap-4 md:flex-row  md:flex-wrap justify-between mb-4'> */}
      {/* <DashboardList /> */}
      {/* <AnalyticsChart /> */}
      {/* <PieChartInteractive />  */}
      {/* <BarChartMixed />  */}
      {/* <DashboardScreen /> */}
      <DashboardSidebar />
    </div>
  );
}
