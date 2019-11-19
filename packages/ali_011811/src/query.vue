<template>
    <div >
    </div>
</template>
<script>


const cityData = [
  {
    "name": "★Hot City",
    "items": [
      {
        "name": "BEIJING",
        "value": 1
      },
      {
        "name": "SHANGHAI",
        "value": 2
      }
    ]
  },
  {
    "name": "A",
    "items": [
      {
        "name": "ANSHAN",
        "value": 3
      },
      {
        "name": "ANQING",
        "value": 4
      }
    ]
  }
]
export default {
    name: "aps-ali-011811",
    props:{
        data:{
            type:  Object,
            default: function () {
                return { }
            }
        },
    },
    data () {
        return {
            cityData
        }
    },
    components:{
    }
}
</script>