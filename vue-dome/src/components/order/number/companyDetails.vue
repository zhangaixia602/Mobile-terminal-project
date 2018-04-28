<template>
<div class="tab-demo">
  <button
    v-for="tab in tabs"
    v-bind:key="tab"
    v-bind:class="['tab-button', { active: currentTab === tab }]"
    v-on:click="currentTab = tab"
  >{{ tab }}</button>

  <keep-alive>
    <component
      v-bind:is="currentTabComponent"
      class="tab"
    ></component>
  </keep-alive>
</div>
</template>
<script>
var TabSong={
  name:'TabSong',
  data: function () {
  	return {
      posts: [
        {
        	id: 1,
          title: 'little star',
          content: '<p>Twinkle, twinkle, little star, How I wonder what you are! Up above the world so high, Like a diamond in the sky. Twinkle, twinkle, little star, How I wonder what you are! When the blazing sun is gone, When he nothing shines upon, Then you show your little light, Twinkle, twinkle, all the night. Twinkle, twinkle, little star, How I wonder what you are! Then the traveler in the dark Thanks you for your tiny spark; He could not see which way to go, If you did not twinkle so. Twinkle, twinkle, little star, How I wonder what you are! In the dark blue sky you keep, And often through my curtains peep, For you never shut your eye Till the sun is in the sky. Twinkle, twinkle, little star, How I wonder what you are! As your bright and tiny spark Lights the traveler in the dark, Through I know not what you are, Twinkle, twinkle, little star. Twinkle, twinkle, little star, How I wonder what you are!</p>'
        },
        {
        	id: 2,
          title: '彩虹的约定',
          content: '<p>小宝贝我用彩虹和你约定 风雨过后阳光会微笑 平安的长大 迎接希望的未来 就像红橙黄绿蓝靛紫 小宝贝我用彩虹和你约定 一起走过童年的记忆 快乐的长大 迎接灿烂的未来 就像红橙黄绿蓝靛紫 彩虹是希望的约定 也是最真的爱 亲亲宝贝 我们爱你到永远</p>'
        },
        {
        	id: 3,
          title: '爱我你就抱抱我',
          content: '<p>爸爸妈妈 如果你们爱我 就多多陪陪我 如果你们爱我 就多多的亲亲我 如果你们爱我 就多多的夸夸我 如果你们爱我 就多多抱抱我 陪陪我 亲亲我 夸夸我 抱抱我 陪陪我 亲亲我 夸夸我 抱抱我 妈妈总是对我说 爸爸妈妈最爱我 我却总是不明白 爱是什么 爸爸总是对我说 爸爸妈妈最爱我 我却总是搞不懂 爱是什么 爱我你就陪陪我 爱我你就亲亲我 爱我你就夸夸我 爱我你就抱抱我 爱我你就陪陪我 爱我你就亲亲我</p>'
        },
        {
          id: 4,
          title:'虫儿飞',
          content:'<p>黑黑的天空低垂 亮亮的繁星相随 虫儿飞虫儿飞 你在思念谁 天上的星星流泪 地上的玫瑰枯萎 冷风吹冷风吹  只要有你陪 虫儿飞花儿睡  一双又一对才美 不怕天黑只怕心碎 不管累不累 也不管东南西北</p>'
        },
        {
          id:5,
          title:'我爱洗澡',
          content:'<p>噜啦啦噜啦啦噜啦噜啦咧 噜啦噜啦噜啦噜啦噜啦咧 噜啦啦噜啦啦噜啦噜啦咧 噜啦噜啦噜啦咧 我爱洗澡乌龟跌到 幺幺幺幺 小心跳蚤好多泡泡 幺幺幺幺 潜水艇在祷告 我爱洗澡皮肤好好 幺幺幺幺 带上浴帽蹦蹦跳跳 幺幺幺幺 美人鱼想逃跑上冲冲下洗洗 左搓搓右揉揉 有空再来握握手 上冲冲下洗洗 左搓搓右揉揉 我家的浴缸好好坐</p>'
        },
        {
          id:6,
          title:'小二郎上学',
          content:'<p>背着那书包上学堂 不怕太阳晒 也不怕那风雨狂 只怕先生骂我懒啊 没有学问 无颜见爹娘 没有学问 无颜见爹娘 小嘛小二郎 背着那书包上学堂 不是为做官 也不是为面子广 只为穷人要翻身啊 不受人欺负 不做牛和羊 不受人欺负 不做牛和羊</p>'
        },
        {
          id:7,
          title:'找朋友',
          content:'<p>找找 找朋友 找到一个好朋友 敬个礼 握握手 你是我的好朋友 找找 找朋友 找到一个好朋友 敬个礼 握握手 你是我的好朋友 找呀找呀 找朋友 找到一个好朋友 笑嘻嘻点点头 大家都是好朋友 找找 找朋友 找到一个好朋友</p>'
        },
        {
          id:8,
          title:'小跳蛙',
          content:'<p>快乐池塘栽种了梦想就变成海洋  鼓的眼睛大嘴巴同样唱的响亮 借我一双小翅膀就能飞向太阳 我相信奇迹就在身上 啦啦啦啦啦 啦啦啦啦啦 啦啦啦啦 有你相伴 leap frog 啦啦啦啦啦 啦啦啦啦啦 自信成长 有你相伴 leap frog 快乐的一只小青蛙 哩哩哩哩哩 leap frog 快乐的一只小青蛙 快乐的池塘里面有只小青蛙yeah 它跳起舞来就像被王子附体了呱呱呱 酷酷的眼神 没有哪只青蛙能比美 总有一天它会被公主唤醒了 啦啦啦啦啦 啦啦啦啦啦 啦啦啦啦啦啦啦啦 leap frog 啦啦啦啦啦 啦啦啦啦啦 啦啦啦啦啦啦啦啦 leap frog 它是一只小跳蛙 越过蓝色大西洋 跳到遥远的东方 跳到我们身旁 春夏秋冬 我们是最好的伙伴 亲吻它就会变得不一样</p>'
        },
        {
          id:9,
          title:'兔子舞',
          content:"<p>left left right right go turn around go go go left right left left right right left left right right go go go left left right right go turn around go go go Jumping grooving dancing everybody Rooling moving singing night&day Let's fun fun together Let's play the penguing's games Smacking beating clapping all together Rocking bumping screaming all night long Let's go everybody And play again this song left left right right go turn around go go go left left right right go turn around go go go Jumping grooving dancing everybody</p>"
        },
        {
          id:10,
          title:'左手右手',
          content:'<p>当困难来临的时候 请你举起你的左手 左手代表着方向 他不会向困难低头 当遇到挫折的时候 请你举起你的右手 右手代表着希望 他不会为挫折发愁 当左手拍向右手 我们的步伐就有节奏 当右手拍向左手 我们的力量就有源头 当你的手拉着我的手 团结的力量彼此感受</p>'
        }
      ],
      selectedPost: null
    }
  },
	template: `
  	<div class="posts-tab">
      <ul class="posts-sidebar">
        <li
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:class="{ selected: post === selectedPost }"
					v-on:click="selectedPost = post"
        >
          {{ post.title }}
        </li>
      </ul>
      <div class="selected-post-container">
      	<div
        	v-if="selectedPost"
          class="selected-post"
        >
          <h3>{{ selectedPost.title }}</h3>
          <div v-html="selectedPost.content"></div>
        </div>
        <strong v-else>
          Click on a song title to the left to view it.
        </strong>
      </div>
    </div>
  `
}

var TabPoetry={
  name: 'TabPoetry',
	template: '<div><h3>Insufficiency 自愧弗如</h3><p>There is no one beside thee and no one above thee,</p><p>Thou standest alone as the nightingale sings!</p> <p>And my words that would praise thee are impotent things,</p><p>For none can express thee though all should approve thee.</p><p>I love thee so, dear, that I only can love thee.</p><p>Say, what can I do for thee? weary thee, grieve thee?</p><p>Lean on thy shoulder, new burdens to add?</p><p>Weep my tears over thee, making thee sad?</p><p>Oh, hold me not--love me not! let me retrieve thee.</p><p>I love thee so, dear, that I only can leave thee.</p></div>'
}

   export default {
     name: 'CompanyDetails',
     data:function(){
              return {
                    currentTab: 'Song',
                    tabs: ['Song', 'Poetry']
              }
     },
     computed: {
        currentTabComponent: function () {
           return 'Tab' + this.currentTab
        }
     },
     components: { TabPoetry,TabSong}
   }
</script>
<style>
.tab-demo{
    padding: 1rem;
}
.tab-button {
    padding: 0.4rem 1rem;
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
    border: none;
    cursor: pointer;
    background: #f0f0f0;
}
.tab-button:hover {
  background: #e8adad;
}
.tab-button.active {
  background: #e8adad;
}
.tab {
  border: 1px solid #ccc;
  padding:0.trem;
}
.posts-tab {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.posts-sidebar {
  max-width: 40vw;
  margin: 0;
  padding: 0 0.5rem 0 0;
  list-style-type: none;
  border-right: 1px solid #ccc;
}
.posts-sidebar li {
  padding: 0.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
.posts-sidebar li:hover {
  background: #eee;
}
.posts-sidebar li.selected {
  background: lightblue;
}
.selected-post-container {
  padding-left: 10px;
}
p{
  text-indent: 1.6rem;
  line-height: 1.6rem;
}
.selected-post > :first-child {
  margin-top: 0;
  padding-top: 0;
}
.tab>h3,.tab>p{
   text-align:center;
}
.tab>p{

}
</style>
