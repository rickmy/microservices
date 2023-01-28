"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const dist_1 = require("@nestjs/swagger/dist");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['error', 'warn', 'debug', 'log'],
    });
    app.setGlobalPrefix('api');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Api Gateway Bienestar Estudiantil')
        .setDescription('The API description')
        .setVersion('1.0')
        .addTag('Bienestar Estudiantil Yavirac')
        .build();
    const document = dist_1.SwaggerModule.createDocument(app, config);
    dist_1.SwaggerModule.setup('doc', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map