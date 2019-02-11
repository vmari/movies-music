import {
    JsonController,
    Param, Body, Post, NotFoundError, Authorized,
} from 'routing-controllers';
import { getCustomRepository, getManager } from 'typeorm';
import { LicensingProcess } from '../entity/LicensingProcess';
import { LicensingProcessStatus } from '../entity/LicensingProcessStatus';
import { LicensingProcessRepository } from '../repository/LicensingProcessRepository';

@Authorized()
@JsonController("/licensing")
export class LicensingController {

    @Post("/:id/updateStatus")
    async updateState(@Param("id") id: string, @Body() body: any) {

        const statusRepository = getManager().getRepository(LicensingProcessStatus);
        const licensingRepository = getCustomRepository(LicensingProcessRepository);
        const licensingProcess: LicensingProcess = await licensingRepository.findOne(id);

        if (!licensingProcess) {
            throw new NotFoundError();
        }

        const from = await statusRepository.findOne(body.from);
        const to = await statusRepository.findOne(body.to);

        if (!from || !to || licensingProcess.status.id !== body.from) {
            throw new Error('Invalid transition');
        }

        //TODO:  Check if the transition is valid for the current workflow & store it in a history collection

        licensingProcess.status = to;
        const song = await getManager().save(licensingProcess);

        return {
            status: true,
            song
        };
    }

}
