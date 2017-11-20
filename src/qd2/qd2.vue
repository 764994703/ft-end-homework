
<template>
  <div class="qd2">
    <h1 class = "text-primary">{{'Share Your Tips!'}}</h1>
			<h2>{{'这是一个用于与他人分享tips的app！'}}</h2>
			<footer>你位于——<cite title="Source Title" style="font-size: 30px">大学物理2</cite></footer>

			<!-- <input type="text" v-model="info">-->
			<input type="text" v-model="mytip">
			<button class = "btnshare btn-primary btn-lg"  @click="share">我要分享我的tips</button>
			<h3 :style="styles3">————注意！如果like<-5将会被取消展示</h3>
			<div class = "container col-md-12">
				<div class = "tip">
					<h1><cite title="Title">Shared tips</cite></h1>
					<blockquote class = "tipp" v-for="item in tips">
						<div v-if="item.allshow">
							<div class = "tipinfo">
								<h2 class="text">{{item.text}}</h2>
								<h2 class="text">——likes:{{item.like}}</h2>
								<div v-if="item.btnshow">
									<button class = "btn1 btn-success btn-lg"  @click="like(item.id)">喜欢，有用，好感++</button>
									<button class = "btn2 btn-danger btn-lg" @click="notlike(item.id)">不喜欢，没用，好感--</button>
								</div>
							</div>
						</div>
	 				</blockquote>
				</div>
			</div>
			
  </div>
</template>

<script>
	
export default {
  name: 'HelloWorld',
  data () {
    return {
        info : '',
					mytip : '',
					styles1:{ color : 'black', backgroundColor: 'green'},
					styles2:{ color : 'black', backgroundColor: 'red' },
					styles3:{ color : 'red', backgroundColor: 'black' },
					tips:[
						{
							id : 0,
							text : '· 光是一种电磁波',
							like : 10,
							btnshow : true,
							allshow : true
						},
						{
							id : 1,
							text : '· vue真好用',
							like : 9,
							btnshow : true,
							allshow : true
						},
						{
							id : 2,
							text : '· hhhhhhhh',
							like : -5,
							btnshow : true,
							allshow : true
						},
						{
							id : 3,
							text : '· 怕怕怕怕怕怕怕',
							like : 0,
							btnshow : true,
							allshow : true
						}
					]
    }
  },
  methods:{
    like:function(id){
						this.tips[id].like++,
						this.tips[id].btnshow = false
					},
					notlike:function(id){
						this.tips[id].like--,
						this.tips[id].btnshow = false
						if(this.tips[id].like<-5){
							this.tips[id].allshow = false
						}
					},
					share:function(){
						if(this.mytip!=''){
							this.tips.push({
								id : this.tips.length,
								text : this.mytip,
								like : 0,
								btnshow : true,
								allshow : true,
	 						}),
	 						this.mytip = '',
	 						alert('分享成功')
 						}
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
