<template>
	<view class="content">
    <VantNavBar title="测试" custom-style="background-color: transparent;color:red" title-class="title-class">
      <view slot="left">123213</view>
    </VantNavBar>
		<view>
			<text class="title" @click="test">{{title}}</text>
      <VantButton type="danger">大号按钮</VantButton>
      <Rate :value="3" size="25" />
      {{v}}
      <VantSwitch :checked="v" @change="v = !v"/>
		</view>
	</view>
</template>

<script>
import VantButton from "@/wxcomponents/vant/button/index"
import Rate from "wxcomponents/vant/rate"
import VantNavBar from "wxcomponents/vant/nav-bar"
import VantSwitch from "wxcomponents/vant/switch"

// import request from "@/api/request"
export default {
  components: {VantButton, Rate, VantNavBar, VantSwitch},
  onLoad() {
    this.test()
  },
  data() {
    return {
      title: "Hello UniApp ",
      v: true
    }
  },
  methods: {
    async test() {
    }
  }
}
</script>

<style lang="scss">
.content {
  background: wheat;
  width: 100vw;
  height: 100vh;
}
	.title {
		font-size: 36px;
    color: $uni-color-primary;
	}

.van-nav-bar__arrow{
    color: red!important;
  }

.custom-class {
  background: #4cd964!important;
}
</style>
