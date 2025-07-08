<script lang="ts">
    import type { Component } from "svelte";
    import { type IconProps, Funnel } from "@lucide/svelte";

    import { Plate } from "@shared/ui/Plate";

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

    interface HeaderFilterOptions {
        id: string;
        label: string;
        value: string;
    }

    interface HeaderFilters {
        id: string;
        title: string;
        options: HeaderFilterOptions[];
    }

    export interface HeaderProps {
        title: string;
        subtitle: string;
        Icon: Component<IconProps>;
        cards: HeaderCards[];
        filters?: HeaderFilters[];
        onChangeFilter?: (id: string, event: Event) => void;
    }

    const {
        title,
        subtitle,
        Icon,
        cards,
        filters,
        onChangeFilter,
    }: HeaderProps = $props();
</script>

<header class="header">
    <h1 class="title">
        <span class="icon icon--primary"><Icon /></span>
        {title}
    </h1>
    <p class="subtitle paragraph-secondary">{subtitle}</p>
    <section class="slots">
        {#each cards as card}
            <Plate className="slot">
                <span class="slot-icon"><card.Icon /></span>
                <div>
                    <p class="slot-title paragraph-secondary">{card.title}</p>
                    {#if "count" in card}
                        <strong class="slot-count">{card.count}</strong>
                    {:else}
                        <strong
                            class={[
                                "status",
                                { [`status--${card.status}`]: card.status },
                            ]}>{card.status}</strong
                        >
                    {/if}
                </div>
            </Plate>
        {/each}
    </section>
    {#if filters?.length}
        <section class="filters">
            <Plate className="filter-wrapper">
                {#snippet title()}
                    <h2 class="title">
                        <span class="icon icon--secondary"><Funnel /></span> Фильтры
                    </h2>
                {/snippet}
                <div class="selects">
                    {#each filters as { id, title, options } (id)}
                        <label class="select-wrapper" for={id}>
                            <span class="paragraph-secondary">{title}</span>
                            <select
                                class="select"
                                {id}
                                onselect={(event) =>
                                    onChangeFilter?.(id, event)}
                            >
                                {#each options as option (option.id)}
                                    <option class="option" value={option.value}
                                        >{option.label}</option
                                    >
                                {/each}
                            </select>
                        </label>
                    {/each}
                </div>
            </Plate>
        </section>
    {/if}
    <div class="separator"></div>
</header>

<style lang="scss">
    @forward "./styles";
</style>
