interface CacheValue {
    expiresAt: number;
    value: unknown;
}

export class Cache {
    private cache = new Map<string, CacheValue>();

    constructor(private defaultTTL = 0) {}

    public set(key: string, value: CacheValue['value'], ttl = this.defaultTTL): void {
        const expiresAt = Date.now() + ttl;

        this.cache.set(key, {
            value,
            expiresAt,
        });
    }

    public get<Value = unknown>(key: string): Value | null {
        const cache = this.cache.get(key);

        if (!cache) {
            return null;
        }

        if (Date.now() > cache.expiresAt) {
            this.delete(key);

            return null;
        }

        return cache.value as Value;
    }

    public delete(key: string): boolean {
        return this.cache.delete(key);
    }
}
