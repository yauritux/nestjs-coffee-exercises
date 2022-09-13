import { Coffee } from "src/coffees/entities/coffee.entity";
import { Flavor } from "src/coffees/entities/flavor.entity";
import { SchemaSync1663076073209 } from "src/migrations/1663076073209-SchemaSync";
import { DataSource } from "typeorm";
import { CoffeeRefactor1663075171598 } from "./src/migrations/1663075171598-CoffeeRefactor";

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Default123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1663075171598, SchemaSync1663076073209],
});
