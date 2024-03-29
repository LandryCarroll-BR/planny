'use client'

import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { Home, Menu, Search } from 'lucide-react'

import { Button } from '@/ui/button'
import { Box, Flex, Grid } from '@/components/layout'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Logo, LogoIcon } from '@/components/logo'
import { DashboardNav } from '@/components/dashboard-nav'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Grid className="min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Box className="hidden border-r bg-muted/40 md:block">
        <Flex className="h-full max-h-screen flex-col gap-2">
          <Flex className="h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Logo className="w-28" />
            </Link>
          </Flex>
          <Box className="flex-1">
            <DashboardNav />
          </Box>
        </Flex>
      </Box>
      <Flex className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                  <LogoIcon className="h-6 w-6 text-primary" />
                  <span className="sr-only">Planny</span>
                </Link>
                <Link
                  href="/dashboard"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
              </nav>
              <Box className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>Unlock all features and get unlimited access to our support team.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </SheetContent>
          </Sheet>
          <Box className="w-full flex-1">
            <form>
              <Box className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search notes..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </Box>
            </form>
          </Box>
          <UserButton afterSignOutUrl="/sign-in" />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">{children}</main>
      </Flex>
    </Grid>
  )
}
