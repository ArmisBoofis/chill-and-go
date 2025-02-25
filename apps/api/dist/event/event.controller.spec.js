"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const event_controller_1 = require("./event.controller");
describe('EventController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [event_controller_1.EventController],
        }).compile();
        controller = module.get(event_controller_1.EventController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=event.controller.spec.js.map