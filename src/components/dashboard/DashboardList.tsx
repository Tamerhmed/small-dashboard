import {
  ChartColumn,
  ChartNoAxesCombined,
  Folder,
  LucideIcon,
  Newspaper,
  NotebookPen,
  Users,
} from 'lucide-react';
import DashboardCard from './DashboardCard';

export default function DashboardList() {
  return (
    <>
<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <DashboardCard
          title='Data'
          count={200}
          icon={<ChartColumn className='text-slate-500' size={60} />}
          />
        <DashboardCard
          title='Teachers'
          count={200}
          icon={<Users className='text-slate-500' size={60} />}
          />
        <DashboardCard
          title='Categories'
          count={200}
          icon={<Folder className='text-slate-500' size={60} />}
          />
        <DashboardCard
          title='Training'
          count={200}
          icon={<NotebookPen className='text-slate-500' size={60} />}
          />
      </div>
    </>
  )
}
