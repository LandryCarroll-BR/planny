import { Heading } from '@/components/typography'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Heading as="h1">Starter</Heading>
      <Button asChild>
        <Link href={'/dashboard'}>Dashboard</Link>
      </Button>
    </main>
  )
}
