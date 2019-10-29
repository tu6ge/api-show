<template>
    <ParentPage :sidebarItems="sidebarItems">
        <template #bottom>
            <Vssue title="Apishow Comments" />
        </template>
    </ParentPage>
</template>
<script>
import ParentPage from '@parent-theme/components/Page.vue'
export default {
    components:{
        ParentPage
    },
    props: ['sidebarItems']
}
</script>