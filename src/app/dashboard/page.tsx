import { Box, Flex } from '@/components/layout'
import { Heading } from '@/components/typography'
import { Button } from '@/components/ui/button'

export default async function DashboardPage() {
  return (
    <Flex>
      <Heading as="h1">Dashboard</Heading>
      <Box className="ml-auto">
        <Button>Add Course</Button>
      </Box>
    </Flex>
  )
}
