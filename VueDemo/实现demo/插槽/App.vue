<template>
  <div>
    <!-- 2.在使用组件时，在组件标签内填入内容 -->
    <!-- 插槽内可以写单个或多个   标签内容：div p 等 -->
    <!-- <MyDialog></MyDialog>
    <MyDialog>
      <div class="">当传输数据时，后备内容隐藏</div>
    </MyDialog> -->
<!--  具名插槽-->
    <MyDialog>
      <!--具名插槽，使用template来包裹，分发的结构，成为一个整体
         v-slot:插槽名  简化  #插槽名 -->
      <template #head>我是标题</template>
      <template #content>我是内容</template>
      <template #footer>
        <button>取消</button>
        <button>确认</button>
      </template>
    </MyDialog>
    <!-- 插槽分类： 默认插槽(组件内定制一处结构)  具名插槽(组件内定制多处结构)
      作用域插槽：是插槽的一个传参的语法
      定义slot插槽的同时，可以传值，绑定数据，将来使用组件时可以用
     -->
     <MyTable :data="list">
      <!-- 通过template  #插槽名="变量名" 来进行接受-->
      <template #default="obj">
      <button @click="del(obj.row.id)">删除</button>
      </template>
      </MyTable>
     <MyTable :data="list2">
      <!-- 直接解构出 数据内容 row -->
      <template #default="{row}">
      <button @click="show(row)">查看</button>
      </template>
     </MyTable>

  </div>
</template>

<script>
import MyDialog from "../src/components/MyDialog.vue"
import MyTable from '../src/components/MyTable.vue'
export default {
  data() {
    return {
      list: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 },
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 },
      ]
    }
  },
  methods: {
      del(id){
        this.list=this.list.filter(item=>item.id!==id)
      },
      show(row){
       alert(`姓名：${row.name}，年纪：${row.age}`)
      }
  },
  components: {
    MyDialog,
    MyTable,
  },
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>