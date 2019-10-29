<template>
    <ParentPage :sidebarItems="sidebarItems">
    </ParentPage>
</template>
<script>
//只继承了默认模板，什么也没有做
import ParentPage from '@parent-theme/components/Page.vue'
export default {
    components:{
        ParentPage
    },
    props: ['sidebarItems']
}
</script>