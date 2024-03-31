import prisma from '@/lib/prisma'
import { authAction } from '@/lib/safe-action'
import { z } from 'zod'

const createCourseSchema = z.object({
  name: z.string(),
  grade: z.number().int(),
  subject: z.string(),
  userId: z.string(),
})

export const createCourse = authAction(createCourseSchema, async (course) => {
  await prisma.course.create({
    data: course,
  })
})
