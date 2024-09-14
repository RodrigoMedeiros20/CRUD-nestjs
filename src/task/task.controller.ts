import { Body, Controller, Get, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    @Post()
    create(@Body() task: TaskDto) {
        this.taskService.create(task);
    }

    @Get('/:id')
    findById(@Param('id') id: string): TaskDto {
        return this.taskService.findById(id);
    }

    @Get()
    findAll(@Query() params: FindAllParameters): TaskDto[] {
        return this.taskService.findAll(params)
    }

    @Put()
    update(@Body() task: TaskDto) {
        this.taskService.update(task);
    }

    @Delete('/:id')
    remove(@Param('id') id: string) {
        return this.taskService.remove(id);
    }
}
