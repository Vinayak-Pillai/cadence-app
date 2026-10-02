import { openDatabaseSync } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import * as schema from './schema';

export const expoDatabase = openDatabaseSync('cadence.db');
export const db = drizzle(expoDatabase, { schema });
