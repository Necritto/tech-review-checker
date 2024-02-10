<script setup lang="ts">

</script>

<template>
    <svg
        class="main-background"
        height="100%"
        width="100%"
    >
        <filter id="mainBgFilter">
            <feTurbulence
                type="fractalNoise"
                baseFrequency="0.80"
                numOctaves="4"
                stitchTiles="stitch"
            />
        </filter>
        <rect
            width="100%"
            height="100%"
            filter="url(#mainBgFilter)"
        />
    </svg>
</template>

<style lang="scss" scoped>
@import './styles';
</style>
