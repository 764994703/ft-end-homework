<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 class = "text-primary">{{'Share Your Tips!'}}</h1>
    <h2>{{'这是一个用于与他人分享tips的app！'}}</h2>
    <h4>{{'在这个app里，你可以与他人分享某一科目的学习心得与考试易错点，互相学习进步'}}</h4>
    <h3>{{'选择你的科目'}}</h3>
    <!-- <input type="text" v-model="info">-->
    <p>
    <select v-model="selected">  
    <option v-for="item in items" v-bind:value="item.value">{{item.text}}</option>  
    </select>  

    </p>
    <button class = "btn btn-primary btn-lg"@click="toggle">进入</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        info : '',
        items:[{text:'大学物理2',value:'\qd2'},{text:'ics',value:'\qd3'}],  
        selected:'',
        styles:{ color : 'white', backgroundColor: 'blue'}
    }
  },
  methods:{
    toggle:function(){
      this.$router.push(this.selected);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
