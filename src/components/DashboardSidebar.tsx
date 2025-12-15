'use client';

import { useState, MouseEvent } from 'react';
import {
  Home,
  Users,
  Settings,
  ChevronDown,
  ChevronRight,
  BarChart,
  FileText,
  Package,
  ShoppingCart,
} from 'lucide-react';

interface SubItem {
  name: string;
  path: string;
}

interface MenuItem {
  name: string;
  icon: JSX.Element;
  path?: string;
  dropdown?: boolean;
  subItems?: SubItem[];
}

interface DropdownPosition {
  top: number;
  left: number;
}

export default function DashboardSidebar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [dropdownPosition, setDropdownPosition] = useState<DropdownPosition>({
    top: 0,
    left: 0,
  });

  const toggleDropdown = (
    name: string,
    event: MouseEvent<HTMLButtonElement>
  ) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      const rect = event.currentTarget.getBoundingClientRect();
      setDropdownPosition({
        top: rect.top,
        left: rect.right,
      });
      setOpenDropdown(name);
    }
  };

  const menuItems: MenuItem[] = [
    {
      name: 'Home',
      icon: <Home size={20} />,
      path: '/',
    },
    {
      name: 'How to use ObesiD',
      icon: <Package size={20} />,
      dropdown: true,
      subItems: [
        { name: 'All Drugs', path: '/products' },
        { name: 'Drug 1', path: '/products/add' },
        { name: 'Categories', path: '/products/categories' },
      ],
    },
    {
      name: 'Dosing in obesity',
      icon: <ShoppingCart size={20} />,
      dropdown: true,
      subItems: [
        { name: 'Understanding the monographs', path: '/orders' },
        { name: 'monographs 1', path: '/orders/pending' },
        { name: 'monographs 2', path: '/orders/completed' },
      ],
    },
    {
      name: 'Analytics',
      icon: <BarChart size={20} />,
      path: '/analytics',
    },
    {
      name: 'Reports',
      icon: <FileText size={20} />,
      dropdown: true,
      subItems: [
        { name: 'Sales Report', path: '/reports/sales' },
        { name: 'User Report', path: '/reports/users' },
        { name: 'Export Data', path: '/reports/export' },
      ],
    },
    {
      name: 'Users',
      icon: <Users size={20} />,
      path: '/users',
    },
    {
      name: 'Settings',
      icon: <Settings size={20} />,
      path: '/settings',
    },
  ];

  const handleLinkClick = (): void => {
    setOpenDropdown(null);
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Backdrop */}
      {openDropdown && (
        <div
          className='fixed inset-0 z-10'
          onClick={() => setOpenDropdown(null)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-gray-900 text-white transition-all duration-300 flex flex-col relative z-20`}
      >
        {/* Logo/Header */}
        <div className='p-4 flex items-center justify-between border-b border-gray-700'>
          {isSidebarOpen && <h1 className='text-xl font-bold'>Dashboard</h1>}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className='p-2 hover:bg-gray-800 rounded'
          >
            {isSidebarOpen ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className='flex-1 overflow-y-auto py-4'>
          {menuItems.map((item: MenuItem, index: number) => (
            <div key={index} className='relative'>
              {/* Menu Item */}
              <button
                onClick={(e) =>
                  item.dropdown ? toggleDropdown(item.name, e) : null
                }
                className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-800 transition-colors ${
                  openDropdown === item.name ? 'bg-gray-800' : ''
                }`}
              >
                <div className='flex items-center gap-3'>
                  {item.icon}
                  {isSidebarOpen && <span>{item.name}</span>}
                </div>
                {item.dropdown && isSidebarOpen && <ChevronRight size={16} />}
              </button>
            </div>
          ))}
        </nav>

        {/* User Profile Section */}
        {isSidebarOpen && (
          <div className='p-4 border-t border-gray-700'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                <span className='font-semibold'>JD</span>
              </div>
              <div>
                <p className='font-medium'>John Doe</p>
                <p className='text-xs text-gray-400'>Admin</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Popup Dropdown Menu */}
      {openDropdown && (
        <div
          className='fixed z-30 bg-white rounded-lg shadow-2xl py-2 min-w-[200px] border border-gray-200'
          style={{
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left + 8}px`,
          }}
        >
          <div className='px-3 py-2 border-b border-gray-200'>
            <p className='font-semibold text-gray-900'>{openDropdown}</p>
          </div>
          {menuItems
            .find((item: MenuItem) => item.name === openDropdown)
            ?.subItems?.map((subItem: SubItem, subIndex: number) => (
              <a
                key={subIndex}
                href={subItem.path}
                onClick={handleLinkClick}
                className='block px-4 py-2 hover:bg-gray-100 transition-colors text-gray-700 hover:text-gray-900'
              >
                {subItem.name}
              </a>
            ))}
        </div>
      )}

      {/* Main Content Area */}
      <div className='flex-1 overflow-auto'>
        <div className='p-8'>
          <h2 className='text-3xl font-bold mb-4'>Welcome to Dashboard</h2>
          <p className='text-gray-600 mb-6'>
            Select a menu item from the sidebar to navigate.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='text-lg font-semibold mb-2'>Total Sales</h3>
              <p className='text-3xl font-bold text-blue-600'>$12,345</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='text-lg font-semibold mb-2'>Orders</h3>
              <p className='text-3xl font-bold text-green-600'>156</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='text-lg font-semibold mb-2'>Users</h3>
              <p className='text-3xl font-bold text-purple-600'>1,234</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
