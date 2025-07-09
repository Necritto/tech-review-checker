interface ImportMetaEnv {
    readonly FIREBASE_API_KEY: string;
    readonly FIREBASE_AUTH_DOMAIN: string;
    readonly FIREBASE_PROJECT_ID: string;
    readonly FIREBASE_STORAGE_BUCKET: string;
    readonly FIREBASE_MESSAGING_SENDER_ID: string
    readonly FIREBASE_APP_ID: string;
    readonly FIREBASE_DB_URL: string;
    readonly FIREBASE_DB_TABLE: string;
    readonly FIREBASE_CACHE_TTL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
