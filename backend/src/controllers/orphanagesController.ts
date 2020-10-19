import { Request, Response } from 'express';
import { FindOperator, getRepository } from 'typeorm';
import Orphanages from '../models/Orphanages';

export default {
    async show(request: Request, response: Response){
        const { id } = request.params;

        const orphanagesRepository = getRepository(Orphanages);

        const orphanage = await orphanagesRepository.findOneOrFail(id);

        return response.json(orphanage);
    },

    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanages);

        const orphanages = await orphanagesRepository.find();

        return response.json(orphanages);
    },


    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;

        const orphanagesRepository = getRepository(Orphanages);

        const orpahanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        });

        await orphanagesRepository.save(orpahanage);

        return response.status(201).json(orpahanage);
    }
};