import { app } from "@app/infra/http/server";
import { myDataSource } from "./infra/database/dataSource";

async function bootstrap() {
  await myDataSource.initialize();

  const PORT = process.env.PORT ?? 3000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

bootstrap();