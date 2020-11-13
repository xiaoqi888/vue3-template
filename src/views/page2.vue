<template>
    <div :ref="dom">
        <p>{{text}}</p>
        <p>点击加1：{{addNum}}</p>
        <button @click="btnClick">click</button>
    </div>
</template>

<script>
import { ref, nextTick } from 'vue'
export default {
    setup () {
        let text = ref('123')
        let refs = ''
        const dom = el => {
            refs= el
        }
        // 获取dom
        nextTick(() => {
            console.log(refs)
        })
        let addNum = ref(1)
        function btnClick () {
            text.value = '2222'
            addNum.value = addNum.value + 1
        }

        return {
            text,
            dom,
            addNum,
            btnClick
        }
    }
}
</script>