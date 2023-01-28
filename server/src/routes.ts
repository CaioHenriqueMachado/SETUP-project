import { prisma } from "./lib/prisma"
import dayjs from "dayjs"
import {FastifyInstance } from "fastify"
import { z } from "zod"


export async function appRoutes(app: FastifyInstance){
  app.post('/habits', async (request) => {
    const createHabitBody = z.object({
      title: z.string(),
      weekDays: z.array(
        z.number().min(0).max(6)
        )
    })

    const { title, weekDays } = createHabitBody.parse(request.body)

    const today = dayjs().startOf('day').toDate()

    await prisma.habit.create({
      data:{
        title,
        created_at: today,
        weekDays: {
          create: weekDays.map(weekDay => {
            return {
              week_day: weekDay,
            }
          })
        }
      }
    })
  })


  // Rota para buscar informações de um dia especifico
  app.get('/day', async(request) => {
    const getDayParams = z.object({
      date: z.coerce.date()
    })

    const { date } = getDayParams.parse(request.query)
    const parseDate = dayjs(date).startOf('day')
    const weekDay = parseDate.get('day')

    // Todos hábitos possiveis
    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date, // lte = "onde é menor oi igual a data atual"
        },
        weekDays: {
          some: {
            week_day: weekDay
          }
        }
      }
    })

    // Todos os habitos completados
    const day = await prisma.day.findUnique({
      where: {
        date: parseDate.toDate(),
      },
      include: {
        dayHabits: true
      }
    })

    const completedHabits = day?.dayHabits.map(dayHabit => {
      return dayHabit.habit_id
    })

    return {
      possibleHabits,
      completedHabits
    }

  })

}