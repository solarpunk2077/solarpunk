'use client'

import { useQuery } from '@tanstack/react-query'
import { File, ListFilter, MoreHorizontal, PlusCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AdminHeader from './Header'
import DashboardTab from './DashboardTab'

export function AdminDashboard() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => {
      const response = await fetch('/api/admin/get_users')
      return await response.json()
    },
  })

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    )
  }

  if (error) return 'An error has occurred: ' + error.message

  console.log(data)

  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <AdminHeader breadcrumbs={[{ href: '/admin', label: 'Dashboard' }]} />
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList className="hidden md:flex">
              <TabsTrigger value="all" className="hidden md:flex">
                All
              </TabsTrigger>
              <TabsTrigger value="details" className="hidden md:flex">
                Details
              </TabsTrigger>
              <TabsTrigger value="review" className="hidden md:flex">
                In Review
              </TabsTrigger>
              <TabsTrigger value="planning" className="hidden md:flex">
                Planning
              </TabsTrigger>
              <TabsTrigger value="deployment" className="hidden md:flex">
                Deployment
              </TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Sort
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Date Onboarded
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Total Revenue
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
              </Button>
              <Button
                size="sm"
                className="h-8 gap-1"
                onClick={() => (window.location.href = '/onboarding')}
              >
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Submission
                </span>
              </Button>
            </div>
          </div>
          <DashboardTab data={data} status={'All'} name="all" />
          <DashboardTab data={data} status={'Details'} name="details" />
          <DashboardTab data={data} status={'In Review'} name="review" />
          <DashboardTab data={data} status={'Planning'} name="planning" />
          <DashboardTab data={data} status={'Deployment'} name="deployment" />
        </Tabs>
      </main>
    </div>
  )
}
