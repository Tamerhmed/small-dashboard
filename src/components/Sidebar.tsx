import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import {
  BookMarked,
  ChartColumn,
  Group,
  LayoutDashboard,
  NotepadText,
  UsersRound,
} from 'lucide-react';
import Link from 'next/link';
import Menu from './Menu';

export default function Sidebar() {
  return (
    // <Menu />
    <Command className='bg-secondary rounded-none'>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>
            <LayoutDashboard className='mr-1 h-4 w-4' />
            <Link href='/'>Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <UsersRound className='mr-1 h-4 w-4' />
            <Link href='/teachers'>Teachers</Link>
          </CommandItem>
          <CommandItem>
            <ChartColumn className='mr-1 h-4 w-4' />
            <Link href='/data'>Data</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Categories'>
          <CommandItem>
            <Group className='mr-1 h-4 w-4' />
            <Link href='/training'>Training</Link>
          </CommandItem>
          <CommandItem>
            <NotepadText className='mr-1 h-4 w-4' />
            <Link href='/guidelines'>Guidelines</Link>
          </CommandItem>
          <CommandItem>
            <BookMarked className='mr-1 h-4 w-4' />
            <Link href='/resources'>Resources</Link>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
