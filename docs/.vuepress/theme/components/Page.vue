<template>
    <ParentPage :sidebarItems="sidebarItems">
        <template #bottom>
            <!-- aslfkldsfls
            <Vssue title="Vssue Demo" /> -->
        </template>
    </ParentPage>
</template>
<script>
import ParentPage from '@parent-theme/components/Page.vue'
import Vssue from 'vssue';
export default {
    components:{
        ParentPage,
        Vssue
    },
    props: ['sidebarItems']
}
</script>