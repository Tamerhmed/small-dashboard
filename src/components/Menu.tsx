import Link from "next/link";
import {
  BookMarked,
  ChartColumn,
  Group,
  LayoutDashboard,
  NotepadText,
  UsersRound,
} from 'lucide-react';


export default function Menu() {
  return (
    <div>
      <ul>
        
        <li>
        <LayoutDashboard className='mr-1 h-4 w-4' />
        <Link href='/'>Dashboard</Link>
        </li>
        <li>
        <UsersRound className='mr-1 h-4 w-4' />
        <Link href='/teachers'>Teachers</Link>
        </li>
        <li>
        <ChartColumn className='mr-1 h-4 w-4' />
        <Link href='/data'>Data</Link>
        </li>
        <li>
        <Group className='mr-1 h-4 w-4' />
        <Link href='/training'>Training</Link>
        </li>
        <li>
        <NotepadText className='mr-1 h-4 w-4' />
        <Link href='/guidelines'>Guidelines</Link>
        </li>
      </ul>
    </div>
  )
}
