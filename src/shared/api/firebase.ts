import { initializeApp, type FirebaseApp, type FirebaseOptions } from "firebase/app";
import { type Database, getDatabase, ref, child, get, type DatabaseReference } from "firebase/database";

import {readFile, writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';

import type { Nullable } from "@shared/model/types";
import { FirebaseConnectToDbException } from "@shared/model/exceptions";

class FirebaseRepository {
    private CONFIG: FirebaseOptions = {
        apiKey: import.meta.env.FIREBASE_API_KEY,
        authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.FIREBASE_APP_ID,
        databaseURL: import.meta.env.FIREBASE_DB_URL,
    };
    private TABLE = import.meta.env.FIREBASE_DB_TABLE;
    private LOCAL_TABLE = 'local-interview-object.json';
    private LOCAL_DB_PATH = resolve('public',  this.LOCAL_TABLE);

    private app: Nullable<FirebaseApp> = null;
    private db: Nullable<Database> = null;
    private dbRef: Nullable<DatabaseReference> = null;
    private cache: Map<string, unknown> = new Map();
    private ttl: number = Date.now() + (parseFloat(import.meta.env.FIREBASE_CACHE_TTL) || 0);

    constructor() {
        this.app = initializeApp(this.CONFIG);
        this.db = getDatabase(this.app);
        this.dbRef = ref(this.db);
    }

    public async getAll() {
        try {
            const content = await this.readLocal();

            if (Object.keys(content).length > 0) {
                return content;
            }

            await this.saveLocal();

            return this.cache.get(this.TABLE);
        } catch (error) {
            console.error(error);

            return null;
        }
    }

    private async readLocal() {
        try {
            const cachedValue = this.cache.get(this.TABLE);

            if (cachedValue) {
                return cachedValue;
            }

            const localValue = JSON.parse(await readFile(this.LOCAL_DB_PATH, 'utf-8'));
            this.cache.set(this.TABLE, localValue);

            return localValue;
        } catch(error) {
            console.error(error);

            return null;
        }
    }

    private async saveLocal() {
        try {
            if (!this.dbRef) {
                throw new FirebaseConnectToDbException();
            }

            if (this.ttl > Date.now()) {
                return;
            }

            const snapshot = await get(child(this.dbRef, this.TABLE));

            if (!snapshot.exists()) {
                return;
            }

            const snapshotValue = snapshot.val();

            this.cache.set(this.TABLE, snapshotValue);

            writeFile(this.LOCAL_DB_PATH, JSON.stringify(snapshotValue), 'utf-8');
        } catch (error) {
            console.error(error)
        }
    }
}

export const firebaseRepository = new FirebaseRepository();
