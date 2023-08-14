<template>
    <div>
        <Linkage />
    </div>
</template>

<script>
export default {
    name: 'Search',
    props: ['keyword', 'k'],
    data() {
        return {
            show: false
        }
    },
}
</script>