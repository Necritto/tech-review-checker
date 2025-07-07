<script lang="ts">
    import type { IconProps } from "@lucide/svelte";
    import type { Component } from "svelte";

    type HeaderCards = {
        title: string;
        Icon: Component<IconProps>;
    } & (
        | {
              count: string | number;
          }
        | {
              status: "passing" | "failed";
          }
    );

    export interface HeaderProps {
        title: string;
        subtitle: string;
        Icon: Component<IconProps>;
        cards: HeaderCards[];
    }

    const { title, subtitle, Icon, cards }: HeaderProps = $props();
</script>

<header class="header">
    <h1 class="title">
        <span class="icon"><Icon /></span>
        {title}
    </h1>
    <p class="subtitle paragraph-secondary">{subtitle}</p>
    <section class="slots">
        {#each cards as card}
            <div class="slot">
                <span class="slot-icon"><card.Icon /></span>
                <div>
                    <p>{card.title}</p>
                    {#if "count" in card}
                        <strong class="count">{card.count}</strong>
                    {:else}
                        <strong
                            class={[
                                "status",
                                { [`status--${card.status}`]: card.status },
                            ]}>{card.status}</strong
                        >
                    {/if}
                </div>
            </div>
        {/each}
    </section>
</header>

<style lang="scss">
    @forward "./styles";
</style>
