import {Request, Response} from 'express';


import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';


interface ScheduleItem{
    week_day: number;
    from: string;
    to: string;
}


export default class ClassesController {

    async index(request: Request, response: Response){
        const filters = request.query;

        const week_day = filters.week_day as string;
        const subject = filters.subject as string;
        const time = filters.time as string;

        if(!filters.week_day || !filters.subject || !filters.time){
            return response.status(400).json({
                error: 'Missing filters to search classes ' 
            })
        }

        const timeInMinutes = convertHourToMinutes(time);

        console.log(timeInMinutes);
// Inner join para pegar todos os dados que tiver em comum da materia semana e a hora que começa a aula
        const classes = await db('classes')
            .whereExists(function() {
                this.select('class_schedule.*')
                 .from('class_schedule')
                //  Pesquisa o id do professor dependendo da aula 
                 .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                //  pesquisa dependendo do dia que o professor da aula
                 .whereRaw('`class_schedule`.`week_day` = ??',[Number(week_day)])
                //  pesquisa dependendo do horario que começa a aula do professor
                 .whereRaw('`class_schedule`.`from`<= ??',[timeInMinutes])
                //  pesquisa o horario ate terminar a aula do professor
                 .whereRaw('`class_schedule`.`to` > ??',[timeInMinutes])

            })
            .where('classes.subject', '=', subject)
            .join('users','classes.user_id','=', 'users.id')
            .select(['classes.*','users.*']);


        return response.json(classes);

    }

    async create(request: Request, response: Response){
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;
    
        // essa variavel trx captura todas as acoes que tem com o bd para fazer de uma vez
        const trx = await db.transaction();
    
        try {
    
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });
        
            const user_id = insertedUsersIds[0];
        
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            });
        
            const class_id = insertedClassesIds[0];
        
             const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                 return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                 };
        
             })
        
             await trx('class_schedule').insert(classSchedule);
        
             await trx.commit();
        
            return response.status(201).send();
    
        }catch (err) {
    
            await trx.rollback();
            console.log(err);
            return response.status(400).json({
                error : 'Unespected error while creating new class'
            })
        }
      
        
        
    }
}