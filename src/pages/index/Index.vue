<template>
	<view class="content">
		<view>
			<text class="title" @click="test">{{title}}</text>
      <VantButton type="danger">大号按钮</VantButton>
      <Rate :value="3" size="25" />
		</view>
	</view>
</template>

<script>
import VantButton from "@/wxcomponents/vant/button/index"
import Rate from "@/wxcomponents/vant/rate/index"

// import request from "@/api/request"
export default {
  components: {VantButton, Rate},
  data() {
    return {
      title: "Hello UniApp "
    }
  },
  onLoad() {
    this.test()
  },
  methods: {
    async test() {
    }
  }
}
</script>

<style lang="scss">
.content {
  width: 100vw;
  height: 100vh;
}
	.title {
		font-size: 36px;
    color: $uni-color-primary;
	}
</style>
